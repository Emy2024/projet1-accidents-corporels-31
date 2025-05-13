// *** Récupération des travaux présents dans le JSON ***/ 

export async function loadDataUsagers() {
  return await getData("https://raw.githubusercontent.com/Emy2024/projet1-accidents-corporels-31/refs/heads/main/js/fetch/readData.js");
} 

export async function loadDataVehicules() {
  return await getData("../../geojson/vehiculesGPS31.geojson");
} 

export async function loadDataCommunes() {
  return await getData("../../geojson/communes-haute-garonne-586-communes.geojson");
} 

export async function loadDataLieuxAccidents() {
  return await getData("../../geojson/caracteristiquesLieuxGPS31.geojson");
} 

export async function loadDataLieuxVehiculesAccidents() {
  return await getData("../../geojson/caracteristiques-lieux-vehiculesVF.geojson");
} 



// *** Le seul et unique Fetch ***//
async function getData(path) {
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

