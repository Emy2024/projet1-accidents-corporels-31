import {USAGERS} from "../index.js"
import {VEHICULES} from "../index.js"
import {LIEUX_ACCIDENTS} from "../index.js"

export function calculTotalNombrePersonnesImpliquees(){
    const tableau1 = USAGERS.features
    let elementIdPersonnesImpliquees = 0
        elementIdPersonnesImpliquees = document.getElementById('elementIdPersonnesImpliquees').innerText=Object.keys(tableau1).length
}

export function calculTotalNombreVehiculesImpliques(){
    const tableau2 = VEHICULES.features
    let elementIdVehiculesImpliques = 0
        elementIdVehiculesImpliques = document.getElementById('elementIdVehiculesImpliques').innerText=Object.keys(tableau2).length
}

export function calculTotalNombreAccidents(){
    const tableau0 = LIEUX_ACCIDENTS.features
    let elementIdTotalAccident = 0
        elementIdTotalAccident = document.getElementById('elementIdTotalAccident').innerText=Object.keys(tableau0).length    
}

export function calculPersonnesDecedees(){
 let sommeDeces =0;
    for (let i=0; i<USAGERS.features.length;i++){
        if(USAGERS.features[i].properties.grav === "2"){
            sommeDeces++
        }
    }
    let elementIdDeces = 0    
        elementIdDeces = document.getElementById("elementIdDeces").innerText=sommeDeces
}
