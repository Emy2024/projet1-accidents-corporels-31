// Point d'entrée de l'application
import * as readData from "./fetch/readData.js"
import * as modale from "./modale/modale.js"
import * as introduction from "./ui/introduction.js"
import * as map from "./map/index.js"
import * as treemapDonnesAccidents from "./chart/treemapMotifDeplacement.js"
import * as barChartGraviteAccidents from "./chart/barchartGraviteAccidents.js"
import * as pieChartEclairage from "./chart/piechartEclairage.js"
import * as pieChartConditionsAtmos from "./chart/piechartConditionsAtmosph.js"
import * as dataAndCharts from "./ui/index.js"

// Variables globales : tableaux vides
export let RADARS = []
export let USAGERS = []
export let VEHICULES = []
export let COMMUNES = []
export let LIEUX_ACCIDENTS = []
export let LIEUX_VEHICULES_ACCIDENTS = []

// Récupère les données du backend
async function getAllData() {
  RADARS = await readData.loadDataRadars()
  USAGERS = await readData.loadDataUsagers()
  VEHICULES = await readData.loadDataVehicules()
  COMMUNES = await readData.loadDataCommunes()
  LIEUX_ACCIDENTS = await readData.loadDataLieuxAccidents()
  LIEUX_VEHICULES_ACCIDENTS = await readData.loadDataLieuxVehiculesAccidents()
  
  console.log("Données radars", RADARS)
  console.log("Données usagers", USAGERS)
  console.log("Données véhicules", VEHICULES)
  console.log("Données communes", COMMUNES)
  console.log("Données lieux accidents", LIEUX_ACCIDENTS)
  console.log("Données lieux / véhicules accidents", LIEUX_VEHICULES_ACCIDENTS)
}

// Point d'entrée
async function main(){
  try {
    await getAllData()
    modale.displayModale()
    introduction.blocIntroduction()
    dataAndCharts.displayMainData()
    map.initMap()
    treemapDonnesAccidents.displayDataAccidentsTreemap()    
    barChartGraviteAccidents.graviteAccidents()
    pieChartEclairage.conditionsEclairage()
    pieChartConditionsAtmos.conditionsAtmospheriques()
  } catch(e) {
    console.log(e)
  }
} 
await main()

