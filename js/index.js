// Point d'entrée de l'application
import * as readData from "./fetch/readData.js"
import * as modale from "./modale/modale.js"
import * as introduction from "./ui/introduction.js"
import * as map from "./map/index.js"
import * as dataAndCharts from "./ui/index.js"

// Variables globales : tableaux vides
export let USAGERS = []
export let VEHICULES = []
export let COMMUNES = []
export let LIEUX_ACCIDENTS = []
export let LIEUX_VEHICULES_ACCIDENTS = []

// Récupère les données du backend
async function getAllData() {
  USAGERS = await readData.loadDataUsagers()
  VEHICULES = await readData.loadDataVehicules()
  COMMUNES = await readData.loadDataCommunes()
  LIEUX_ACCIDENTS = await readData.loadDataLieuxAccidents()
  LIEUX_VEHICULES_ACCIDENTS = await readData.loadDataLieuxVehiculesAccidents()
  
  //console.log("Données usagers", USAGERS)
  //console.log("Données véhicules", VEHICULES)
  //console.log("Données communes", COMMUNES)
  //console.log("Données lieux accidents", LIEUX_ACCIDENTS)
  //console.log("Données lieux / véhicules accidents", LIEUX_VEHICULES_ACCIDENTS)
}

// Point d'entrée
async function main(){
  try {
    await getAllData()
    modale.displayModale()
    introduction.blocIntroduction()
    map.initMap()
    dataAndCharts.displayCharts()
  } catch(e) {
    console.log(e)
  }
} 
await main()

