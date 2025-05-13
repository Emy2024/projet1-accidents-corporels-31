import * as totaux from "../total/index.js"
import * as allCharts from "./displayAllCharts.js"
import * as treemapVehiculesImpliques from "../chart/treemapVehiculesLesPlusImpliques.js"
import * as treemapMotifDeplacement from "../chart/treemapMotifDeplacement.js"
import * as barChartGraviteAccidents from "../chart/barchartGraviteAccidents.js"
import * as pieChartEclairage from "../chart/piechartEclairage.js"
import * as pieChartAsmospherique from "../chart/piechartConditionsAtmosph.js"

export function displayCharts(){
    allCharts.displayMainData()
    totaux.calculTotalNombreAccidents()
    totaux.calculTotalNombreVehiculesImpliques()
    totaux.calculPersonnesDecedees()
    totaux.calculTotalNombrePersonnesImpliquees()
    
    allCharts.displayTreemapTypeOfVehicle()
    treemapVehiculesImpliques.displayCategoryVehicules()
   
    allCharts.displayBarChart()
    barChartGraviteAccidents.graviteAccidents()
    
    allCharts.displayPieCharts()
    pieChartEclairage.conditionsEclairage()
    pieChartAsmospherique.conditionsAtmospheriques()

    allCharts.displayTreeMapMotifDeplacement()
    treemapMotifDeplacement.displayDataAccidentsTreemap()
}