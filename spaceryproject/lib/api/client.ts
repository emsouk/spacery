const LOCAL_API_BASE_URL = 'http://127.0.0.1:8000';
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  (process.env.NODE_ENV === 'development' ? LOCAL_API_BASE_URL : '');

// Petit client HTTP pour centraliser les appels à ton API (fetch, headers, erreurs, params).
// Exemple concret (ton carrousel) :
// - `lieuxService.getAll()` appelle `apiClient.get<Lieu[]>('/api/lieux')`
// - `apiClient.get(...)` délègue à `request(...)`
// - `request(...)` construit l’URL finale `${NEXT_PUBLIC_API_URL}/api/lieux` et renvoie le JSON

// Définit le type TypeScript pour les options de requête
interface RequestOptions extends RequestInit {
  params?: Record<string, string>;
}

function hasHeader(headers: Headers, name: string): boolean {
  return headers.has(name);
}


// Classe qui encapsule toute la logique HTTP
class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    // Base URL de l’API (ex: https://api.derianstudio.com). Les services lui ajoutent ensuite le endpoint (ex: /api/lieux).
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    // `T` est le type du JSON attendu (ex: `Lieu[]`). Ça aide TypeScript à typer la réponse.
    if (!this.baseURL) {
      throw new Error(
        "API non configurée. En prod, définis NEXT_PUBLIC_API_URL (URL publique de ton back). En local, démarre l'API sur http://127.0.0.1:8000 ou définis NEXT_PUBLIC_API_URL."
      );
    }
    const { params, ...fetchOptions } = options;

    // Construction de l'URL avec les paramètres
    let url = `${this.baseURL}${endpoint}`;
    if (params) {
      // Ajoute les query params : { page: "2" } => ?page=2
      const queryString = new URLSearchParams(params).toString();
      url += `?${queryString}`;
    }

    // Configuration par défaut
    const headers = new Headers(fetchOptions.headers);
    const method = (fetchOptions.method || 'GET').toUpperCase();
    const hasBody = fetchOptions.body !== undefined && fetchOptions.body !== null;

    // Évite d'ajouter "Content-Type: application/json" sur les GET/HEAD :
    // ça déclenche un preflight CORS inutile et peut finir en "Failed to fetch".
    if (hasBody && method !== 'GET' && method !== 'HEAD' && !hasHeader(headers, 'Content-Type')) {
      // On envoie du JSON (POST/PUT), donc on précise le content-type.
      headers.set('Content-Type', 'application/json');
    }
    if (!hasHeader(headers, 'Accept')) {
      // On annonce qu’on veut du JSON en réponse.
      headers.set('Accept', 'application/json');
    }

    const config: RequestInit = {
      ...fetchOptions,
      headers,
    };

    try {
      // Exécute la requête HTTP.
      const response = await fetch(url, config);

      if (!response.ok) {
        // Si le back renvoie une erreur JSON (ex: { error: "..." }), on la remonte proprement.
        const error = await response.json().catch(() => ({}));
        throw new Error(error.error || `HTTP error! status: ${response.status}`);
      }

      // Succès : on parse et renvoie le JSON.
      return await response.json();
    } catch (error) {
      // Log pour debug (réseau, CORS, JSON invalide, etc.), puis on relance l’erreur pour que l’UI gère (toast, message, etc.)
      console.error('API Error:', error);
      throw error;
    }
  }

  async get<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
   
    return this.request<T>(endpoint, { method: 'GET', params });
  }

  async post<T>(endpoint: string, data: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put<T>(endpoint: string, data: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}

export const apiClient = new ApiClient(API_BASE_URL);
