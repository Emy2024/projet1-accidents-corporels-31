// Données principales dans des rectangles
export function displayMainData(){
    let mainDataContainer = document.getElementById("mainDataContainer")
        mainDataContainer.classList.add("mainDataContainer")
    
    let mainDataSubcontainer = document.createElement("div")
        mainDataSubcontainer.classList.add("mainDataSubcontainer")
    let mainDataTitle = document.createElement("h2")
        mainDataTitle.innerHTML="Principales données sur les accidents corporels en 2022"
    
    let dataContainer0 = document.createElement("div") 
        dataContainer0.classList.add("dataContainer0")
    let dataContainer1 = document.createElement("div") 
        dataContainer1.classList.add("donneesTitreetChiffre")
    let dataAndTitleContainer1 = document.createElement("div") 
        dataAndTitleContainer1.classList.add("dataAndTitle")
    let dataTitle1 = document.createElement("div") 
        dataTitle1.classList.add("donneesTitre")
        dataTitle1.innerHTML="Nombre total d'accidents"
    let dataNumber1 = document.createElement("div") 
        dataNumber1.classList.add("donneesChiffre")
        dataNumber1.id="elementIdTotalAccident"

    let dataContainer2 = document.createElement("div") 
        dataContainer2.classList.add("donneesTitreetChiffre")
    let dataAndTitleContainer2 = document.createElement("div") 
        dataAndTitleContainer2.classList.add("dataAndTitle")
    let dataTitle2 = document.createElement("div") 
        dataTitle2.classList.add("donneesTitre")
        dataTitle2.innerHTML="Nombre total de véhicules impliqués"
    let dataNumber2 = document.createElement("div") 
        dataNumber2.classList.add("donneesChiffre")
        dataNumber2.id="elementIdVehiculesImpliques"
    
    let dataContainer3 = document.createElement("div") 
        dataContainer3.classList.add("donneesTitreetChiffre")
    let dataAndTitleContainer3 = document.createElement("div") 
        dataAndTitleContainer3.classList.add("dataAndTitle")
    let dataTitle3 = document.createElement("div") 
        dataTitle3.classList.add("donneesTitre")
        dataTitle3.innerHTML="Nombre de personnes impliquées"
    let dataNumber3 = document.createElement("div") 
        dataNumber3.classList.add("donneesChiffre")
        dataNumber3.id="elementIdPersonnesImpliquees"

    let dataContainer4 = document.createElement("div") 
        dataContainer4.classList.add("donneesTitreetChiffre")
    let dataAndTitleContainer4 = document.createElement("div") 
        dataAndTitleContainer4.classList.add("dataAndTitle")
    let dataTitle4 = document.createElement("div") 
        dataTitle4.classList.add("donneesTitre")
        dataTitle4.innerHTML="Nombre de personnes décédées"
    let dataNumber4 = document.createElement("div") 
        dataNumber4.classList.add("donneesChiffre")
        dataNumber4.id="elementIdDeces"

    mainDataContainer.appendChild(mainDataSubcontainer)
    mainDataSubcontainer.appendChild(mainDataTitle)
    mainDataSubcontainer.appendChild(dataContainer0)
    dataContainer0.appendChild(dataContainer1)
    dataContainer1.appendChild(dataAndTitleContainer1)
    dataAndTitleContainer1.appendChild(dataTitle1)
    dataAndTitleContainer1.appendChild(dataNumber1)

    mainDataSubcontainer.appendChild(dataContainer0)
    dataContainer0.appendChild(dataContainer2)
    dataContainer2.appendChild(dataAndTitleContainer2)
    dataAndTitleContainer2.appendChild(dataTitle2)
    dataAndTitleContainer2.appendChild(dataNumber2)

    mainDataSubcontainer.appendChild(dataContainer0)
    dataContainer0.appendChild(dataContainer3)
    dataContainer3.appendChild(dataAndTitleContainer3)
    dataAndTitleContainer3.appendChild(dataTitle3)
    dataAndTitleContainer3.appendChild(dataNumber3)
    
    mainDataSubcontainer.appendChild(dataContainer0)
    dataContainer0.appendChild(dataContainer4)
    dataContainer4.appendChild(dataAndTitleContainer4)
    dataAndTitleContainer4.appendChild(dataTitle4)
    dataAndTitleContainer4.appendChild(dataNumber4)
    
}

// Affichage du treemap "types de véhicules les plus impliqués"
export function displayTreemapTypeOfVehicle(){
    let mainDataContainer = document.getElementById("mainDataContainer")
    let mainDataSubcontainer = document.createElement("div")
        mainDataSubcontainer.classList.add("mainDataSubcontainer")
    let mainDataTitle = document.createElement("h2")
        mainDataTitle.innerHTML="Types de véhicules les plus impliqués dans un accident corporel"
    let lectureGraphique = document.createElement("p")
        lectureGraphique.innerHTML = "Lecture du graphique : en 2022 en Haute-Garonne, parmi les 1028 véhicules impliqués dans des accidents corporels, 63% concernaient des voitures."
    let chart = document.createElement("div")
        chart.id="chartParCategorieDeVehicule"
        
    mainDataContainer.appendChild(mainDataSubcontainer)
    mainDataSubcontainer.appendChild(mainDataTitle)
    mainDataSubcontainer.appendChild(lectureGraphique)
    mainDataSubcontainer.appendChild(chart)
}


// Affichage du barChart "gravité des accidents"
export function displayBarChart(){
    let mainDataContainer = document.getElementById("mainDataContainer")
    let mainDataSubcontainer = document.createElement("div")
        mainDataSubcontainer.classList.add("mainDataContainer__graviteAccidents")
    let mainDataTitle = document.createElement("h2")
        mainDataTitle.innerHTML="Gravité des accidents"
    let lectureGraphique = document.createElement("p")
        lectureGraphique.innerHTML = "Lecture du graphique : en 2022 en Haute-Garonne, parmi 1364 personnes concernées par des accidents corporels, 48 sont décédées." 
    let chart = document.createElement("canvas")
        chart.id="chartParGravite"
    mainDataContainer.appendChild(mainDataSubcontainer)
    mainDataSubcontainer.appendChild(mainDataTitle)
    mainDataSubcontainer.appendChild(lectureGraphique)
    mainDataSubcontainer.appendChild(chart)
}


// Affichage du pieChart "Conditions d'éclairage"
/* export function displayPieChartConditionsEclairage(){
    let mainDataContainer = document.getElementById("mainDataContainer")
    let mainDataSubcontainer = document.createElement("div")
        mainDataSubcontainer.classList.add("mainDataContainer__conditionsEclairage")
    let mainDataTitle = document.createElement("h2")
        mainDataTitle.innerHTML="Conditions d'éclairage"
    let lectureGraphique = document.createElement("p")
        lectureGraphique.innerHTML = "Lecture du graphique : en 2022 en Haute-Garonne, près de 64% des accidents corporels ont eu lieu en plein jour." 
    let chart = document.createElement("canvas")
        chart.id="chartConditionsLum"
    mainDataContainer.appendChild(mainDataSubcontainer)
    mainDataSubcontainer.appendChild(mainDataTitle)
    mainDataSubcontainer.appendChild(lectureGraphique)
    mainDataSubcontainer.appendChild(chart)
}  */

// Affichage du pieChart "Conditions atmosphériques"
/* export function displayPieChartConditionsAtmospheriques(){
    let mainDataContainer = document.getElementById("mainDataContainer")
    let mainDataSubcontainer = document.createElement("div")
        mainDataSubcontainer.classList.add("mainDataContainer__conditionsAtmospheriques")
    let mainDataTitle = document.createElement("h2")
        mainDataTitle.innerHTML="Conditions atmosphériques"
    let lectureGraphique = document.createElement("p")
        lectureGraphique.innerHTML = "Lecture du graphique : en 2022 en Haute-Garonne, 83% des accidents corporels ont eu lieu dans des conditions dites normales." 
    let chart = document.createElement("canvas")
        chart.id="chartConditionsAtmospheriques"
    mainDataContainer.appendChild(mainDataSubcontainer)
    mainDataSubcontainer.appendChild(mainDataTitle)
    mainDataSubcontainer.appendChild(lectureGraphique)
    mainDataSubcontainer.appendChild(chart)
} */


export function displayPieCharts(){
    let mainDataContainer = document.getElementById("mainDataContainer")
    let containerPieCharts = document.createElement("div") // gros container
        containerPieCharts.classList.add("containerPieCharts")
    let mainDataSubcontainer = document.createElement("div")
        mainDataSubcontainer.classList.add("mainDataContainer__conditionsEclairage")
    let mainDataTitle = document.createElement("h2")
        mainDataTitle.innerHTML="Conditions d'éclairage"
    let lectureGraphique = document.createElement("p")
        lectureGraphique.innerHTML = "Lecture du graphique : en 2022 en Haute-Garonne, près de 64% des accidents corporels ont eu lieu en plein jour." 
    let chart = document.createElement("canvas")
        chart.id="chartConditionsLum"

    let mainDataSubcontainer2 = document.createElement("div")
        mainDataSubcontainer2.classList.add("mainDataContainer__conditionsAtmospheriques")
    let mainDataTitle2 = document.createElement("h2")
        mainDataTitle2.innerHTML="Conditions atmosphériques"
    let lectureGraphique2 = document.createElement("p")
        lectureGraphique2.innerHTML = "Lecture du graphique : en 2022 en Haute-Garonne, 83% des accidents corporels ont eu lieu dans des conditions dites normales." 
    let chart2 = document.createElement("canvas")
        chart2.id="chartConditionsAtmospheriques"

    mainDataContainer.appendChild(containerPieCharts)
    containerPieCharts.appendChild(mainDataSubcontainer)
    mainDataSubcontainer.appendChild(mainDataTitle)
    mainDataSubcontainer.appendChild(lectureGraphique)
    mainDataSubcontainer.appendChild(chart)
    containerPieCharts.appendChild(mainDataSubcontainer2)
    mainDataSubcontainer2.appendChild(mainDataTitle2)
    mainDataSubcontainer2.appendChild(lectureGraphique2)
    mainDataSubcontainer2.appendChild(chart2)
} 



// Affichage du pieChart "Motif de déplacement"
export function displayTreeMapMotifDeplacement(){
    let mainDataContainer = document.getElementById("mainDataContainer")
    let mainDataSubcontainer = document.createElement("div")
        mainDataSubcontainer.classList.add("mainDataContainer__motifDeplacement")
    let mainDataTitle = document.createElement("h2")
        mainDataTitle.innerHTML="Motifs de déplacement au moment de l'accident"
    let lectureGraphique = document.createElement("p")
        lectureGraphique.innerHTML = "Lecture du graphique : en 2022 en Haute-Garonne, 529 personnes ont été victimes d'accidents corporels lors de déplacements liés à des loisirs (ballades)." 
    let chart = document.createElement("div")
        chart.id="chartParTrajet"
    mainDataContainer.appendChild(mainDataSubcontainer)
    mainDataSubcontainer.appendChild(mainDataTitle)
    mainDataSubcontainer.appendChild(lectureGraphique)
    mainDataSubcontainer.appendChild(chart)
}
