const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

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
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const { params, ...fetchOptions } = options;

    // Construction de l'URL avec les paramètres
    let url = `${this.baseURL}${endpoint}`;
    if (params) {
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
      headers.set('Content-Type', 'application/json');
    }
    if (!hasHeader(headers, 'Accept')) {
      headers.set('Accept', 'application/json');
    }

    const config: RequestInit = {
      ...fetchOptions,
      headers,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.error || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
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
