// *** Point d'entrée ***//
export function displayModale(){
  initEvents()
}

function initEvents(){
    let modale__openButton = document.getElementById("modale__openButton")
        modale__openButton.classList.add("modale__openButton")
        modale__openButton.innerHTML="Projet #1"
        modale__openButton.addEventListener("click", function(){
            modale__overlay.classList.remove("hidden")
            modale__overlay.classList.add("modale__overlay")   
             createModaleContent()
            document.body.appendChild(modale__overlay)
        })
}

function createModaleContent(){
    let modale = document.createElement("div")
        modale.classList.add("modale")
    let modale__overlay = document.getElementById("modale__overlay")
    let modale__container = document.createElement("div")
        modale__container.classList.add("modale__container")
    let modale__title= document.createElement("h2")
        modale__title.innerHTML="Utilisation des données"
    let modale__paragraph= document.createElement("p")
        modale__paragraph.classList.add("modale__paragraph")
        modale__paragraph.innerHTML="Les données présentées sur cette page sont issues des Bulletins d’Analyse des Accidents Corporels de la Circulation (BAAC)relevés par les forces de l’ordre. Il s’agit d’une base brute non corrigée des erreurs de saisies qui font l’objet d’un processus de corrections ultérieurement. Seule l\'année 2022 a été prise en compte dans la présente analyse. Les jeux de données exploités sont les suivants : "
    let modale__ul = document.createElement("ul")
        modale__ul.classList.add("modale__ul")
    const li__items = ['caracteristiques-2022.csv', 'vehicules-2022.csv', 'lieux-2022.csv','usagers-2022.csv'];
    for (let i=0; i<li__items.length; i++){
        let modale__li = document.createElement("li")
            modale__li.innerText= li__items[i]
            modale__li.classList.add("modale__li")
            modale__ul.appendChild(modale__li)
    }
    let modale__source= document.createElement("a")
        modale__source.innerHTML="(source)"
        modale__source.href="https://www.data.gouv.fr/fr/datasets/bases-de-donnees-annuelles-des-accidents-corporels-de-la-circulation-routiere-annees-de-2005-a-2023/"
    let modale__fermer = document.createElement("a")
        modale__fermer.classList.add("modale__fermer")
        modale__fermer.innerHTML="X"
        modale__fermer.id="modale__fermer"
    
    closedModale(modale__fermer, modale__overlay)
                      
    modale__overlay.appendChild(modale)
    modale.appendChild(modale__container)
    modale__container.appendChild(modale__title)
    modale__container.appendChild(modale__paragraph)
    modale__container.appendChild(modale__ul)
    modale__paragraph.appendChild(modale__source)
    modale__container.appendChild(modale__fermer)
}

function closedModale(button, overlay){
    button.addEventListener("click", function(){
        overlay.classList.remove("modale__overlay")
        overlay.classList.add("hidden")
    })
}

