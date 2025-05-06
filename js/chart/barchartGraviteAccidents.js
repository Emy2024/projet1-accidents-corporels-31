import {USAGERS} from "../index.js"

export function graviteAccidents(){
    let sommeGraviteIndemne=0;
    let sommeGraviteTue = 0;
    let sommeGraviteBlesseHospitalise = 0;
    let sommeGraviteBlesseLeger =0;


    for (var i =0; i<USAGERS.features.length;i++){
        //console.log(dataAccidentsVelo31[i])  
        if (USAGERS.features[i].properties.grav === "1")
        sommeGraviteIndemne++
        if (USAGERS.features[i].properties.grav === "2")
        sommeGraviteTue++
        if (USAGERS.features[i].properties.grav === "3")
        sommeGraviteBlesseHospitalise++
        if (USAGERS.features[i].properties.grav === "4")
        sommeGraviteBlesseLeger++
    }


        const labelsGraviteAccidents = ["Décés", "Indemnes", "Blessés hospitalisés", "Blessés légers"]

        const dataGraviteAccidents = [sommeGraviteTue, sommeGraviteIndemne, sommeGraviteBlesseHospitalise, sommeGraviteBlesseLeger]

        // setup 
        const data = {
            labels: labelsGraviteAccidents,
            datasets: [{
            //label: 'Weekly Sales',
            data: dataGraviteAccidents,
            backgroundColor: [
                'rgba(255,103,76,1)'
            ],
            borderColor: [
                'white'
            ],
            borderWidth: 1
            }]
        };

        // config 
        const config = {
            type: 'bar',
            data,
            options: {
                indexAxis: 'x',
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            drawOnChartArea: false
                        }
                    },
                    x: {
                        grid: {
                            drawOnChartArea: false
                        }
                    }
                },
                plugins : {
                    legend : {
                        display: false
                    }
                }
            }
        };

        // render init block
        const myChart = new Chart(
            document.getElementById('chartParGravite'),
            config
        ); 
}


