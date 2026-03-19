"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

export default function Map() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  // On récupère la clé depuis .env
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY as string;

  useEffect(() => {
    if (map.current) return; // évite re-init

    map.current = new mapboxgl.Map({
      container: mapContainer.current as HTMLElement,
      style: "mapbox://styles/mapbox/dark-v11", // 🎨 style moderne
      center: [2.3522, 48.8566], // 📍 Paris par défaut
      zoom: 11,
    });

    // Ajout d’un marker
    new mapboxgl.Marker({ color: "red" })
      .setLngLat([2.3522, 48.8566])
      .setPopup(new mapboxgl.Popup().setHTML("<h3>Paris</h3><p>Ville lumière</p>"))
      .addTo(map.current);
  }, []);

  return (

    <>
        <div
        ref={mapContainer}
        className="w-auto h-[500px] rounded-lg shadow-lg"
        />
        <div> 
        <button type="button" 
        className=" bg-white absolute my-3 left-1/2 transform -translate-x-1/2 px-4 py-2 text-black rounded-full shadow-md hover:scale-105 transition z-20">
             Rechercher une ville 🔍
        </button>  
        </div> 
    </>
    );

}
