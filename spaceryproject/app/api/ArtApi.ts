

const UNSPLASH_URL = "https://api.unsplash.com/photos";

export async function getArt(query = "architecture", perPage = 30) {
  console.log("Fetching art from Unsplash with query:", query, "and perPage:", perPage); // ✅ log des paramètres
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos?client_id=vAid0P15zoeNGSSPLz-FsPm-_HHebxSLZCdcpi0KANw&query=${query}&per_page=${perPage}`
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data; // ✅ les images sont ici
  } catch (error) {
    console.error("Erreur API Unsplash:", error);
    throw error;
  }
}
