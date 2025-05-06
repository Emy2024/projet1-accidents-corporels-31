import {LIEUX_VEHICULES_ACCIDENTS} from "../index.js"
import * as contentOfMyPopup from "./contentPopup.js"

export function displayVehiculesUtilitaires(nomCarte){
    var iconVehiculesUtilitaires = L.icon({
        iconUrl: 'css/images/vehiculeUtilitaire.png',
        iconSize: [12, 14],
    })

    var vehiculesUtilitaires = L.geoJSON(LIEUX_VEHICULES_ACCIDENTS, {
        pointToLayer: function(feature, latlng) {
            vehiculesUtilitaires = feature.properties.catv;
            if(feature.properties.catv=="10"){
                    return L.marker(latlng, {icon: iconVehiculesUtilitaires});
                }
        },
        onEachFeature: contentOfMyPopup.onEachFeatureAccidents
        })

    var elementIdVehiculesUtilitaires = document.getElementById("vehiculesUtilitairesCheckbox");
        elementIdVehiculesUtilitaires.addEventListener('change',clickCheckbox1)

    function clickCheckbox1() {
        if (elementIdVehiculesUtilitaires.checked == true){
            nomCarte.addLayer(vehiculesUtilitaires)
        } else {
            nomCarte.removeLayer(vehiculesUtilitaires)
        }
    } 
}

