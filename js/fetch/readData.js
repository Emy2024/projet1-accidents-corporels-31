// *** Récupération des travaux présents dans le JSON ***/ 

export async function loadDataUsagers() {
  return await getData("https://raw.githubusercontent.com/Emy2024/projet1-accidents-corporels-31/refs/heads/main/geojson/usagersGPS31.geojson");
} 

export async function loadDataVehicules() {
  return await getData("https://raw.githubusercontent.com/Emy2024/projet1-accidents-corporels-31/refs/heads/main/geojson/vehiculesGPS31.geojson");
} 

/* export async function loadDataCommunes() {
  return await getData("../../geojson/communes-haute-garonne-586-communes.geojson");
}  */

export async function loadDataLieuxAccidents() {
  return await getData("https://raw.githubusercontent.com/Emy2024/projet1-accidents-corporels-31/refs/heads/main/geojson/caracteristiquesLieuxGPS31.geojson");
} 

export async function loadDataLieuxVehiculesAccidents() {
  return await getData("https://raw.githubusercontent.com/Emy2024/projet1-accidents-corporels-31/d5e3d1a09266dd467b893242f4784129996d524b/geojson/caracteristiques-lieux-vehiculesVF.geojson");
} 



// *** Le seul et unique Fetch ***//
async function getData(path) {
   console.log("Status fetch :", response.status);
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error("Impossible de charger les données");
    }
    console.log("Module readData.js chargé !");
    return await response.json();
  } 
  catch (error) {
    console.error("Erreur lors du fetch :", error.message);
    return []; 
  }
}

