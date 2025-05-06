import {COMMUNES} from "../index.js"

export function displayCities(nomCarte){

    // Active le hover sur les communes
    let geojsonCommunes; 

    // J'ajoute l'objet geoJSON (https://leafletjs.com/reference.html#geojson)
    geojsonCommunes = L.geoJSON(COMMUNES, {
        style: function (feature) {
            return {
                "fillColor": "black",
                "color": "white",
                "weight": 2,
                "opacity": 0.6,
                "fillOpacity": 0.2,
                "dashArray": 2.8
            };
        }

    }).addTo(nomCarte);
 }