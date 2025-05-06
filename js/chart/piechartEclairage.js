import {LIEUX_VEHICULES_ACCIDENTS} from "../index.js"

export function conditionsEclairage(){
    let sommeLum1PleinJour = 0
    let sommeLum2CrepusculeAube = 0
    let sommeLum3NuitSansEclairagePub = 0
    let sommeLum4NuitAvecEclairagePubNonAllume = 0
    let sommeLum5NuitAvecEclairagePubAllum = 0

    for (let i=0 ; i<LIEUX_VEHICULES_ACCIDENTS.features.length;i++){
       
        if(LIEUX_VEHICULES_ACCIDENTS.features[i].properties.lum =="1"){
            sommeLum1PleinJour++
        }
        if(LIEUX_VEHICULES_ACCIDENTS.features[i].properties.lum =="2"){
            sommeLum2CrepusculeAube++
        }  
        if(LIEUX_VEHICULES_ACCIDENTS.features[i].properties.lum =="3"){
            sommeLum3NuitSansEclairagePub++
        }
        if(LIEUX_VEHICULES_ACCIDENTS.features[i].properties.lum =="4"){
            sommeLum4NuitAvecEclairagePubNonAllume++
        }
        if(LIEUX_VEHICULES_ACCIDENTS.features[i].properties.lum =="5"){
            sommeLum5NuitAvecEclairagePubAllum++
        }
    }
   
    var sommeLumTOTAL = sommeLum1PleinJour + sommeLum2CrepusculeAube + sommeLum3NuitSansEclairagePub + sommeLum4NuitAvecEclairagePubNonAllume + sommeLum5NuitAvecEclairagePubAllum

    // Calculs en pourcentages 
    sommeLum1PleinJour = ((sommeLum1PleinJour/sommeLumTOTAL)*100).toFixed(1)
    sommeLum2CrepusculeAube = ((sommeLum2CrepusculeAube/sommeLumTOTAL)*100).toFixed(1)
    sommeLum3NuitSansEclairagePub = ((sommeLum3NuitSansEclairagePub/sommeLumTOTAL)*100).toFixed(1)
    sommeLum4NuitAvecEclairagePubNonAllume = ((sommeLum4NuitAvecEclairagePubNonAllume/sommeLumTOTAL)*100).toFixed(1)
    sommeLum5NuitAvecEclairagePubAllum = ((sommeLum5NuitAvecEclairagePubAllum/sommeLumTOTAL)*100).toFixed(1)

/*     console.log(sommeLum1PleinJour)
    console.log(sommeLum2CrepusculeAube)
    console.log(sommeLum3NuitSansEclairagePub)
    console.log(sommeLum4NuitAvecEclairagePubNonAllume)
    console.log(sommeLum5NuitAvecEclairagePubAllum) */

    const labelLumChart = ["Plein jour", "Crépuscule / aube", "Nuit sans éclairage public", "Nuit avec éclairage public non allumé", "Nuit avec éclairage public allumé"]

    const dataLumChart = [sommeLum1PleinJour,sommeLum2CrepusculeAube, sommeLum3NuitSansEclairagePub,sommeLum4NuitAvecEclairagePubNonAllume,sommeLum5NuitAvecEclairagePubAllum]

   
     const data = {
        labels: labelLumChart,
        datasets: [
          {
            data: dataLumChart,
            
          }
        ],
        labels: labelLumChart
    };


    const config = {
        type: 'pie',
        data: data,
        options: {
          responsive: true,

          plugins: {
            legend: {
              position: 'bottom',
            },
            title: {
              display: false,
              text: 'Chart.js Pie Chart'
            }
          }
        },
      };


      const DATA_COUNT = 5;
      const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
      
       // render init block
       const myChart = new Chart(
        document.getElementById('chartConditionsLum'),
        config
    );

}


         