import {USAGERS} from "../index.js"

export function displayDataAccidentsTreemap(){
    let sommeNonRenseigne1=0;
    let sommeNonRenseigne0=0;
    let sommeDomicileTravail=0;
    let sommeDomicileEcole = 0;
    let sommeCoursesAchats = 0;
    let sommeUtilisationPro =0;
    let sommePromenadeLoisirs=0;
    let sommeAutre =0;

    for (let i =0; i<USAGERS.features.length;i++){
        //console.log(dataAccidents31.features[i])  
        if (USAGERS.features[i].properties.trajet === "-1")
        sommeNonRenseigne1++
        if (USAGERS.features[i].properties.trajet === "0")
        sommeNonRenseigne0++
        if (USAGERS.features[i].properties.trajet === "1")
        sommeDomicileTravail++
        if (USAGERS.features[i].properties.trajet === "2")
        sommeDomicileEcole++
        if (USAGERS.features[i].properties.trajet === "3")
        sommeCoursesAchats++
        if (USAGERS.features[i].properties.trajet === "4")
        sommeUtilisationPro++
        if (USAGERS.features[i].properties.trajet === "5")
        sommePromenadeLoisirs++
        if (USAGERS.features[i].properties.trajet === "9")
        sommeAutre++
    }
    
    // Calcul Autre (car regroupe 2 catégories : -1 et 0)
    let sommeNonRenseigneTotal = sommeNonRenseigne1 + sommeNonRenseigne0

    // Calculs en pourcentages 
         let options = {
            series: [
            {
              data: [
                {
                  x: 'Loisirs',
                  y: sommePromenadeLoisirs
                },
                {
                  x: 'Domicile/Travail',
                  y: sommeDomicileTravail
                },
                {
                  x: 'Usage professionnel',
                  y: sommeUtilisationPro
                },
                {
                    x: 'Autres trajets',
                    y: sommeAutre
                },
                {
                    x: 'Domicile/Ecole',
                    y: sommeDomicileEcole
                },
                {
                    x: 'Courses',
                    y: sommeCoursesAchats
                }/* ,
                {
                    x: 'Non renseigné',
                    y: sommeNonRenseigneTotal
                } */
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
  
          let chart = new ApexCharts(document.querySelector("#chartParTrajet"), options);
          //console.log("Module treemap.js chargé !");
          chart.render();   
}


   

