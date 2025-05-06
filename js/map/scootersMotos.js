import {LIEUX_VEHICULES_ACCIDENTS} from "../index.js"
import * as contentOfMyPopup from "./contentPopup.js"

export function displayScootersMotos(nomCarte){
    var iconScootersMotos = L.icon({
        iconUrl: 'css/images/scootersMotos.png',
        iconSize: [12, 14],
    })

    var scootersMotos = L.geoJSON(LIEUX_VEHICULES_ACCIDENTS, {
    pointToLayer: function(feature, latlng) {
        scootersMotos = feature.properties.catv;
        if(feature.properties.catv=="30"){
            return L.marker(latlng, {icon: iconScootersMotos});
        }
        if(feature.properties.catv=="32"){
            return L.marker(latlng, {icon: iconScootersMotos});
        }
        if(feature.properties.catv=="34"){
            return L.marker(latlng, {icon: iconScootersMotos});
        }
        if(feature.properties.catv=="2"){
            return L.marker(latlng, {icon: iconScootersMotos});
        }
        if(feature.properties.catv=="31"){
            return L.marker(latlng, {icon: iconScootersMotos});
        }
        if(feature.properties.catv=="33"){
            return L.marker(latlng, {icon: iconScootersMotos});
        }
    },
    onEachFeature: contentOfMyPopup.onEachFeatureAccidents
    })


    var elementIdScooters = document.getElementById("cyclomoteursScooterCheckbox");
          elementIdScooters.addEventListener('change',clickCheckbox1)

    function clickCheckbox1() {
        if (elementIdScooters.checked == true){
            nomCarte.addLayer(scootersMotos)
        } else {
            nomCarte.removeLayer(scootersMotos)
        }
    } 
}