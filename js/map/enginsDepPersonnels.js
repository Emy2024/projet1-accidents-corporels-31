import {LIEUX_VEHICULES_ACCIDENTS} from "../index.js"
import * as contentOfMyPopup from "./contentPopup.js"

export function displayEnginsDepPersonnels(nomCarte){
    var iconEnginsDeplacementsPersonnels = L.icon({
        iconUrl: 'css/images/enginsDeplacementsPersonnels.png',
        iconSize: [12, 14],
    })
   var enginsDeplacementsPersonnels = L.geoJSON(LIEUX_VEHICULES_ACCIDENTS, {
        pointToLayer: function(feature, latlng) {
            enginsDeplacementsPersonnels = feature.properties.catv;
            if(feature.properties.catv=="50"){
                return L.marker(latlng, {icon: iconEnginsDeplacementsPersonnels});
            }
            if(feature.properties.catv=="60"){
                return L.marker(latlng, {icon: iconEnginsDeplacementsPersonnels});
            }
        },
        onEachFeature: contentOfMyPopup.onEachFeatureAccidents
        })


        var elementIdEnginsDeplacementsPersonnels = document.getElementById("EDPCheckbox");
        elementIdEnginsDeplacementsPersonnels.addEventListener('change',clickCheckbox1)
    
        function clickCheckbox1() {
            if (elementIdEnginsDeplacementsPersonnels.checked == true){
                nomCarte.addLayer(enginsDeplacementsPersonnels)
            } else {
                nomCarte.removeLayer(enginsDeplacementsPersonnels)
            }
        } 

}

