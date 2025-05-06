import {LIEUX_ACCIDENTS} from "../index.js"

export function conditionsAtmospheriques(){
    var conditionsAtmNonRenseigne = 0;
    var conditionsAtmNormales = 0;
    var conditionsAtmPluiesLegeres = 0;
    var conditionsAtmPluiesFortes = 0;
    var conditionsAtmNeigeGrele = 0;
    var conditionsAtmBrouillard = 0;
    var conditionsAtmVentFortTempete = 0;
    var conditionsAtmTempsEblouissant = 0;
    var conditionsAtmTempsCouvert = 0;
    var conditionsAtmAutre = 0;


    for (var i = 0; i < LIEUX_ACCIDENTS.features.length;i++){
        if (LIEUX_ACCIDENTS.features[i].properties.atm=="1") {
            conditionsAtmNormales++
        }
        else if (LIEUX_ACCIDENTS.features[i].properties.atm=="2") {
            conditionsAtmPluiesLegeres++
        }
        else if (LIEUX_ACCIDENTS.features[i].properties.atm=="3") {
            conditionsAtmPluiesFortes++
        }
        else if (LIEUX_ACCIDENTS.features[i].properties.atm=="4") {
            conditionsAtmNeigeGrele++
        }
        else if (LIEUX_ACCIDENTS.features[i].properties.atm=="5") {
            conditionsAtmBrouillard++
        }
        else if (LIEUX_ACCIDENTS.features[i].properties.atm=="6") {
            conditionsAtmVentFortTempete++
        }
        else if (LIEUX_ACCIDENTS.features[i].properties.atm=="7") {
            conditionsAtmTempsEblouissant++
        }
        else if (LIEUX_ACCIDENTS.features[i].properties.atm=="8") {
            conditionsAtmTempsCouvert++
        }
        else if (LIEUX_ACCIDENTS.features[i].properties.atm=="9") {
            conditionsAtmAutre++
        }
    

    }

    var conditionsAtmTotal = conditionsAtmNormales + conditionsAtmPluiesLegeres + conditionsAtmPluiesFortes + conditionsAtmNeigeGrele + conditionsAtmBrouillard + conditionsAtmVentFortTempete + conditionsAtmTempsEblouissant + conditionsAtmTempsCouvert + conditionsAtmAutre
    //console.log(`Conditions atmosphériques totales : ${conditionsAtmTotal}`)

    var conditionsAtmNormalesPourcentage = ( ( conditionsAtmNormales / conditionsAtmTotal ) *100 ).toFixed(1)
    var conditionsAtmPluiesLegeresPourcentage = (  ( conditionsAtmPluiesLegeres / conditionsAtmTotal ) *100 ).toFixed(1)
    var conditionsAtmPluiesFortesPourcentage = ( ( conditionsAtmPluiesFortes / conditionsAtmTotal ) *100 ).toFixed(1)
    var conditionsAtmNeigeGrelePourcentage = (  ( conditionsAtmNeigeGrele / conditionsAtmTotal ) *100 ).toFixed(1)
    var conditionsAtmBrouillardPourcentage = (  ( conditionsAtmBrouillard / conditionsAtmTotal ) *100 ).toFixed(1)
    var conditionsAtmVentFortTempetePourcentage = (  ( conditionsAtmVentFortTempete / conditionsAtmTotal ) *100 ).toFixed(1)
    var conditionsAtmTempsEblouissantPourcentage = (  ( conditionsAtmTempsEblouissant / conditionsAtmTotal ) *100 ).toFixed(1)
    var conditionsAtmTempsCouvertPourcentage = (  ( conditionsAtmTempsCouvert / conditionsAtmTotal ) *100 ).toFixed(1)
    var conditionsAtmAutrePourcentage = (  ( conditionsAtmAutre / conditionsAtmTotal ) *100 ).toFixed(1)
    

    /*console.log(`Conditions atmosphériques normales : ${conditionsAtmNormalesPourcentage} %`)
     console.log(`Conditions atmosphériques : ${conditionsAtmNormales}`)
    console.log(`Conditions atmosphériques : ${conditionsAtmPluiesLegeres}`)
    console.log(`Conditions atmosphériques : ${conditionsAtmPluiesFortes}`)
    console.log(`Conditions atmosphériques : ${conditionsAtmNeigeGrele}`)
    console.log(`Conditions atmosphériques : ${conditionsAtmBrouillard}`)
    console.log(`Conditions atmosphériques : ${conditionsAtmVentFortTempete}`)
    console.log(`Conditions atmosphériques : ${conditionsAtmTempsEblouissant}`)
    console.log(`Conditions atmosphériques : ${conditionsAtmTempsCouvert}`)
    console.log(`Conditions atmosphériques : ${conditionsAtmAutre}`) */


    const labelsAccidentsConditionsAtmosphPourChart = ["Normales", "Pluie légère", "Pluie forte", "Neige / grêle","Brouillard / fumée","Vent fort / tempête","Temps éblouissant", "Temps couvert", "Conditions autres"]
    
    const dataAccidentsConditionsAtmosphPourChart = [conditionsAtmNormalesPourcentage,conditionsAtmPluiesLegeresPourcentage,conditionsAtmPluiesFortesPourcentage, conditionsAtmNeigeGrelePourcentage,conditionsAtmBrouillardPourcentage, conditionsAtmVentFortTempetePourcentage, conditionsAtmTempsEblouissantPourcentage, conditionsAtmTempsCouvertPourcentage,  conditionsAtmAutrePourcentage  ]

     const data = {
        labels: labelsAccidentsConditionsAtmosphPourChart,
        datasets: [
          {
            /* label: 'Dataset 1', */
            data: dataAccidentsConditionsAtmosphPourChart,
            
          }
        ],
        labels: labelsAccidentsConditionsAtmosphPourChart
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
        document.getElementById('chartConditionsAtmospheriques'),
        config
    );

}


         