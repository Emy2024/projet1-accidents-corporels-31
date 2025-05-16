import * as cities from "./cities.js"
import * as velo from "./velo.js"
import * as enginsDepPersos from "./enginsDepPersonnels.js"
import * as scootersMotos from "./scootersMotos.js"
import * as voitures from "./voitures.js"
import * as vehiculesUtilitaires from "./vehiculesUtilitaires.js"

export function createMap(){
    displayMap()
}

function displayMap(){
/*     let mapAccidents = L.map('mapAccidents').setView([43.28, 1.49], 8.5);
    L.tileLayer('  http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        maxZoom: 15,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &#65372; Contenu développé par Emmanuelle Rey &#65372; Données extraites du fichier BAAC 2022'
    }).addTo(mapAccidents); */

    const key = 'roJE9k7qoZdUESq25Rro';
      const mapAccidents = L.map('mapAccidents').setView([43.28, 1.49], 8.5);
      const mtLayer = L.maptiler.maptilerLayer({
        apiKey: key,
        style: L.maptiler.MapStyle.STREETS, 
      }).addTo(mapAccidents);

    let osmGeocoder = new L.Control.OSMGeocoder({
        placeholder: 'Tapez le nom d\'une commune',
        collapsed: false,
        position: 'bottomright',
        text: 'Localiser'
    });
    mapAccidents.scrollWheelZoom.disable();
    mapAccidents.addControl(osmGeocoder);


    cities.displayCities(mapAccidents)
    velo.displayVelos(mapAccidents)
    enginsDepPersos.displayEnginsDepPersonnels(mapAccidents)
    scootersMotos.displayScootersMotos(mapAccidents)
    voitures.displayVoitures(mapAccidents)
    vehiculesUtilitaires.displayVehiculesUtilitaires(mapAccidents)
}