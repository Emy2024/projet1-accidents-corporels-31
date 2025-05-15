import {LIEUX_VEHICULES_ACCIDENTS} from "../index.js"
import * as contentOfMyPopup from "./contentPopup.js"

export function displayVoitures(nomCarte){
  let iconVoitures = L.icon({
        iconUrl: 'css/images/voiture.png',
        iconSize: [12, 14],
    })

    const voitures = L.geoJSON(LIEUX_VEHICULES_ACCIDENTS, {
        pointToLayer: function(feature, latlng) {
            feature.properties.catv;
            if(feature.properties.catv=="7"){
                return L.marker(latlng, {icon: iconVoitures});
            }
    },
    onEachFeature: contentOfMyPopup.onEachFeatureAccidents
    })/* .addTo(nomCarte); */

    var elementIdVoitures = document.getElementById("voituresCheckbox");
    elementIdVoitures.addEventListener('change',clickCheckbox1)

    function clickCheckbox1() {
        if (elementIdVoitures.checked == true){
            nomCarte.addLayer(voitures)
        } else {
            nomCarte.removeLayer(voitures)
        }
    } 
}

