

const UNSPLASH_URL = "https://api.unsplash.com/search/photos";

export async function getArt(query = "architecture", perPage = 30) {
  try {
    const response = await fetch(
      `${UNSPLASH_URL}?query=${query}&per_page=${perPage}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data.results; // ✅ les images sont ici
  } catch (error) {
    console.error("Erreur API Unsplash:", error);
    throw error;
  }
}
