import * as mapElements from "./createMap.js"

export function initMap(){
    displayMapContainer()
    mapElements.createMap()
}

function displayMapContainer(){
    let mapContainer = document.getElementById("map__container")
        mapContainer.classList.add("mapContainer")
    let mapContainer__h2 = document.createElement("h2")
        mapContainer__h2.innerHTML="Localisation des véhicules impliqués dans des accidents corporels en 2022"
    let mapContainer__fieldset = document.createElement("fieldset")
        mapContainer__fieldset.classList.add("legendeMapAccidents")
    let mapContainer__h3 = document.createElement("h3")
        mapContainer__h3.innerHTML="Catégories de véhicules les plus  <br> impliqués dans des accidents : "
    
    let mapContainer__div1 = document.createElement("div")
        mapContainer__div1.classList.add("mapContainer__divs")
    let mapContainer__input1 = document.createElement("input")
        mapContainer__input1.type="checkbox"
        mapContainer__input1.id="voituresCheckbox"
        mapContainer__input1.name="voituresCheckbox"
        mapContainer__input1.checked = true
    let mapContainer__label1 = document.createElement("label")
        mapContainer__label1.for="voituresCheckbox"
        mapContainer__label1.innerHTML="Voitures"

    let mapContainer__div2 = document.createElement("div")
        mapContainer__div2.classList.add("mapContainer__divs")
    let mapContainer__input2 = document.createElement("input")
        mapContainer__input2.type="checkbox"
        mapContainer__input2.id="cyclomoteursScooterCheckbox"
        mapContainer__input2.name="cyclomoteursScooterCheckbox"
    let mapContainer__label2 = document.createElement("label")
        mapContainer__label2.for="cyclomoteursScooterCheckbox"
        mapContainer__label2.innerHTML="Motos et scooters"

    let mapContainer__div3 = document.createElement("div")
        mapContainer__div3.classList.add("mapContainer__divs")
    let mapContainer__input3 = document.createElement("input")
        mapContainer__input3.type="checkbox"
        mapContainer__input3.id="vehiculesUtilitairesCheckbox"
        mapContainer__input3.name="vehiculesUtilitairesCheckbox"
    let mapContainer__label3 = document.createElement("label")
        mapContainer__label3.for="vehiculesUtilitairesCheckbox"
        mapContainer__label3.innerHTML="Véhicules utilitaires"

    let mapContainer__div4 = document.createElement("div")
        mapContainer__div4.classList.add("mapContainer__divs")
    let mapContainer__input4 = document.createElement("input")
        mapContainer__input4.type="checkbox"
        mapContainer__input4.id="veloCheckbox"
        mapContainer__input4.name="veloCheckbox"
    let mapContainer__label4 = document.createElement("label")
        mapContainer__label4.for="veloCheckbox"
        mapContainer__label4.innerHTML="Vélos"

    let mapContainer__div5 = document.createElement("div")
        mapContainer__div5.classList.add("mapContainer__divs")
    let mapContainer__input5 = document.createElement("input")
        mapContainer__input5.type="checkbox"
        mapContainer__input5.id="EDPCheckbox"
        mapContainer__input5.name="EDPCheckbox"
    let mapContainer__label5 = document.createElement("label")
        mapContainer__label5.for="EDPCheckbox"
        mapContainer__label5.innerHTML="Engins de déplacement personnels"
        mapContainer__label5.setAttribute ="aria-label", "Engins de déplacement personnels : engins motorisés (skateboard, patins à roulettes, trottinette) et non motorisés électriquement (patrouilleur, trottinette électrique, gyropode, gyroskate, gyroroue)"

    let map = document.createElement("div")
        map.id = "mapAccidents"

    mapContainer.appendChild(mapContainer__h2)
    mapContainer.appendChild(mapContainer__fieldset)
    mapContainer__fieldset.appendChild(mapContainer__h3)
    mapContainer__fieldset.appendChild(mapContainer__div1)
    mapContainer__div1.appendChild(mapContainer__input1)
    mapContainer__div1.appendChild(mapContainer__label1)

    mapContainer__fieldset.appendChild(mapContainer__div2)
    mapContainer__div2.appendChild(mapContainer__input2)
    mapContainer__div2.appendChild(mapContainer__label2)

    mapContainer__fieldset.appendChild(mapContainer__div3)
    mapContainer__div3.appendChild(mapContainer__input3)
    mapContainer__div3.appendChild(mapContainer__label3)

    mapContainer__fieldset.appendChild(mapContainer__div4)
    mapContainer__div4.appendChild(mapContainer__input4)
    mapContainer__div4.appendChild(mapContainer__label4)

    mapContainer__fieldset.appendChild(mapContainer__div5)
    mapContainer__div5.appendChild(mapContainer__input5)
    mapContainer__div5.appendChild(mapContainer__label5)

    mapContainer.appendChild(map)

}