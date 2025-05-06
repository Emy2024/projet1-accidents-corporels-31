import {VEHICULES} from "../index.js"

export function displayCategoryVehicules(){

    let sommeCategorieVehiculeIndeterminable = 0; 

    let sommeCategorieVehiculeBicyclette = 0;  
    let sommeCategorieVehiculeVoiturette = 0; 
    let sommeCategorieVehiculeVoiture = 0; // Voitures (VL sel) 
    let sommeCategorieVehiculeVUtilitaire = 0; 
    
    let sommeCategorieVehiculeTracteurRoutierSeul = 0;
    let sommeCategorieVehiculeTracteurRoutierEtSemiRemorque = 0;
    let sommeCategorieVehiculeTracteurRoutierToutconfondu = 0;  
    
    let sommeCategorieVehiculePoidLoudSeul3T5PTCA = 0;
    let sommeCategorieVehiculePoidLoudSeulSuperieur7T5 = 0;
    let sommeCategorieVehiculePoidLoudSuperieur3T5EtRemorque = 0;
    let sommeCategorieVehiculePoidLoudToutConfondu = 0; 

    let sommeCategorieVehiculeEnginSpecial = 0;   
    let sommeCategorieVehiculeTracteurAgricole = 0;  
    
    let sommeCategorieVehiculeScooterSous50cm3=0
    let sommeCategorieVehiculeScooterEntre50cm3et125cm3=0
    let sommeCategorieVehiculeScooterPlus125cm3=0
    let sommeCategorieVehiculeCyclomoteur50m3 = 0; 
    let sommeCategorieVehiculeMotocyclette50et125cm3 = 0; 
    let sommeCategorieVehiculeMotocyclettePlus125cm3 = 0     
    let sommeScooterMoto = 0;  // tout confondu  

    let sommeCategorieVehiculeQuadLeger=0;
    let sommeCategorieVehiculeQuadLourd=0;
    let sommeCategorieVehiculeQuadToutConfondu = 0; 
    
    let sommeCategorieVehiculeAutobus = 0; 
    let sommeCategorieVehiculeAutocar = 0; 
    let sommeCategorieVehiculeAutobusEtAutocarToutConfondu = 0;

    let sommeCategorieVehiculeTrain = 0; 
    let sommeCategorieVehiculeTramway = 0; 
    
    let sommeCategorieVehicule3RMMoins50 = 0 
    let sommeCategorieVehicule3RMEntre50et125m3 = 0 
    let sommeCategorieVehicule3RMSup125m3 = 0 
    let sommeCategorieVehicule3RMToutConfondu = 0 // tout confondu  - il s'agit de véhicules légers
    
    let sommeCategorieVehiculeEDPmoteur = 0
    let sommeCategorieVehiculeEDPSansmoteur = 0
    let sommeCategorieVehiculeEDPToutConfondu = 0 // tout confondu - engin de déplacement personnel (trottinettes, skateboards etc) 

    let sommeCategorieVehiculeVAE = 0 // vélo à assistance électrique 


    let sommeCategorieVehiculeAutreCategorie = 0 

for (let i=0; i<VEHICULES.features.length;i++){
    if (VEHICULES.features[i].properties.catv === "0"){
    sommeCategorieVehiculeIndeterminable++
    }

    if (VEHICULES.features[i].properties.catv === "1"){
    sommeCategorieVehiculeBicyclette++
    }

    if (VEHICULES.features[i].properties.catv === "3"){
    sommeCategorieVehiculeVoiturette++
    }

    if (VEHICULES.features[i].properties.catv === "7"){
    sommeCategorieVehiculeVoiture++
    }

    if (VEHICULES.features[i].properties.catv === "10"){
    sommeCategorieVehiculeVUtilitaire++
    }

    if (VEHICULES.features[i].properties.catv === "13"){
        sommeCategorieVehiculePoidLoudSeul3T5PTCA++
    }
        if (VEHICULES.features[i].properties.catv === "14"){
        sommeCategorieVehiculePoidLoudSeulSuperieur7T5++
        }

        if (VEHICULES.features[i].properties.catv === "15"){
        sommeCategorieVehiculePoidLoudSuperieur3T5EtRemorque++
        }
        
        sommeCategorieVehiculePoidLoudToutConfondu=sommeCategorieVehiculePoidLoudSeul3T5PTCA+sommeCategorieVehiculePoidLoudSeulSuperieur7T5+sommeCategorieVehiculePoidLoudSuperieur3T5EtRemorque
    

    if (VEHICULES.features[i].properties.catv === "16"){
        sommeCategorieVehiculeTracteurRoutierSeul++
    }
        if (VEHICULES.features[i].properties.catv === "17"){
        sommeCategorieVehiculeTracteurRoutierEtSemiRemorque++
        }      
    
        sommeCategorieVehiculeTracteurRoutierToutconfondu=sommeCategorieVehiculeTracteurRoutierSeul+sommeCategorieVehiculeTracteurRoutierEtSemiRemorque
    

    if (VEHICULES.features[i].properties.catv === "20"){
    sommeCategorieVehiculeEnginSpecial++
    }

    if (VEHICULES.features[i].properties.catv === "21"){
    sommeCategorieVehiculeTracteurAgricole++
    }

    if (VEHICULES.features[i].properties.catv === "30"){
        sommeCategorieVehiculeScooterSous50cm3++
    }
        if (VEHICULES.features[i].properties.catv === "32"){
        sommeCategorieVehiculeScooterEntre50cm3et125cm3++
        }
        if (VEHICULES.features[i].properties.catv === "34"){
        sommeCategorieVehiculeScooterPlus125cm3++
        }
        if (VEHICULES.features[i].properties.catv === "2"){
        sommeCategorieVehiculeCyclomoteur50m3++
        }
        if (VEHICULES.features[i].properties.catv === "31"){
        sommeCategorieVehiculeMotocyclette50et125cm3++
        }
        if (VEHICULES.features[i].properties.catv === "33"){
        sommeCategorieVehiculeMotocyclettePlus125cm3++
        }
        
        sommeScooterMoto=sommeCategorieVehiculeScooterSous50cm3+sommeCategorieVehiculeScooterEntre50cm3et125cm3+sommeCategorieVehiculeScooterPlus125cm3+sommeCategorieVehiculeCyclomoteur50m3+sommeCategorieVehiculeMotocyclette50et125cm3+sommeCategorieVehiculeMotocyclettePlus125cm3



    if (VEHICULES.features[i].properties.catv === "35"){
        sommeCategorieVehiculeQuadLeger++ 
    }
        if (VEHICULES.features[i].properties.catv === "36"){
        sommeCategorieVehiculeQuadLourd++
        }     

        sommeCategorieVehiculeQuadToutConfondu=sommeCategorieVehiculeQuadLeger+sommeCategorieVehiculeQuadLourd
   

    if (VEHICULES.features[i].properties.catv === "37"){
        sommeCategorieVehiculeAutobus++ 
    }
        if (VEHICULES.features[i].properties.catv === "38"){
        sommeCategorieVehiculeAutocar++
        }

        sommeCategorieVehiculeAutobusEtAutocarToutConfondu=sommeCategorieVehiculeAutobus+sommeCategorieVehiculeAutocar
   

    if (VEHICULES.features[i].properties.catv === "39"){
    sommeCategorieVehiculeTrain++
    }

    if (VEHICULES.features[i].properties.catv === "40"){
        sommeCategorieVehiculeTramway++
    }

    if (VEHICULES.features[i].properties.catv === "41"){
        sommeCategorieVehicule3RMMoins50++ 
    }
        if (VEHICULES.features[i].properties.catv === "42"){
        sommeCategorieVehicule3RMEntre50et125m3++
        }
        if (VEHICULES.features[i].properties.catv === "43"){
        sommeCategorieVehicule3RMSup125m3++
        }
        sommeCategorieVehicule3RMToutConfondu=sommeCategorieVehicule3RMMoins50+sommeCategorieVehicule3RMEntre50et125m3+sommeCategorieVehicule3RMSup125m3
   


    if (VEHICULES.features[i].properties.catv === "50"){
        sommeCategorieVehiculeEDPmoteur++
    }
        if (VEHICULES.features[i].properties.catv === "60"){
        sommeCategorieVehiculeEDPSansmoteur++
        }
        sommeCategorieVehiculeEDPToutConfondu=sommeCategorieVehiculeEDPmoteur+sommeCategorieVehiculeEDPSansmoteur
    
    if (VEHICULES.features[i].properties.catv === "80"){
    sommeCategorieVehiculeVAE++
    } 
    if (VEHICULES.features[i].properties.catv === "99"){
    sommeCategorieVehiculeAutreCategorie++
    }
    
}

    //Calcul top5 des catégories de véhicules qui ont eu le plus d'accidents
    const sommeCategorieVehiculesTop5 = sommeCategorieVehiculeVoiture+sommeCategorieVehiculeVUtilitaire+sommeCategorieVehiculeBicyclette+sommeScooterMoto+sommeCategorieVehiculeEDPToutConfondu
    //console.log(`Somme  : ${sommeCategorieVehiculeEDPToutConfondu}`)

    //Calcul pourcentage top 5 des catégories de véhicules qui ont eu le plus d'accidents
    const voituresPourcentage = ((sommeCategorieVehiculeVoiture /sommeCategorieVehiculesTop5)*100).toFixed(1)
    const vehiculesUtilitairesPourcentage = ((sommeCategorieVehiculeVUtilitaire /sommeCategorieVehiculesTop5)*100).toFixed(1)
    const vehiculesBicylettesPourcentage = ((sommeCategorieVehiculeBicyclette /sommeCategorieVehiculesTop5)*100).toFixed(1)
    const vehiculesScooterMotoPourcentage = ((sommeScooterMoto /sommeCategorieVehiculesTop5)*100).toFixed(1)
    const vehiculesEDPPourcentage = ((sommeCategorieVehiculeEDPToutConfondu /sommeCategorieVehiculesTop5 )*100).toFixed(1)


    let options = {
        series: [
        {
        data: [
            {
                x: 'Voitures',
                y: voituresPourcentage
            },
            {
                x: 'Motos et scooters',
                y: vehiculesScooterMotoPourcentage
            },
            {
                x: 'Véhicules utilitaires',
                y: vehiculesUtilitairesPourcentage
            },
            {
                x: 'Vélos',
                y: vehiculesBicylettesPourcentage
            },
            {
                x: 'Engins de déplacement personnels',
                y: vehiculesEDPPourcentage
            },
        ]
        }
    ],
        legend: {
        show: false
    },
    chart: {
        height: 450, 
        type: 'treemap',
        toolbar: {
            show: true,
            tools: {
            download: false
            }
        }
    }, 
    colors: ["#FF6347"]
    };

    let chart = new ApexCharts(document.querySelector("#chartParCategorieDeVehicule"), options);
    chart.render();

}