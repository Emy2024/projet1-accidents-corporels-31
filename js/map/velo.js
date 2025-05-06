import {LIEUX_VEHICULES_ACCIDENTS} from "../index.js"
import * as contentOfMyPopup from "./contentPopup.js"

export function displayVelos(nomCarte){
    var iconVelo = L.icon({
        iconUrl: 'css/images/velo.png',
        iconSize: [12, 14],
    })

    var velo = L.geoJSON(LIEUX_VEHICULES_ACCIDENTS, {
    pointToLayer: function(feature, latlng) {
        velo = feature.properties.catv;
        if(feature.properties.catv=="1"){
                return L.marker(latlng, {icon: iconVelo});
            }
    },
    onEachFeature: contentOfMyPopup.onEachFeatureAccidents
    })


    var elementIdVelo = document.getElementById("veloCheckbox");
          elementIdVelo.addEventListener('change',clickCheckbox1)

    function clickCheckbox1() {
        if (elementIdVelo.checked == true){
            nomCarte.addLayer(velo)
        } else {
            nomCarte.removeLayer(velo)
        }
    } 

}

