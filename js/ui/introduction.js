export function blocIntroduction(){
    let idIntroduction = document.getElementById("introduction")
        idIntroduction.classList.add("introduction")
    let h1Introduction = document.createElement("h1")
        h1Introduction.classList.add("introductionH1") //a supp ?
        h1Introduction.innerHTML="Panorama des accidents corporels en Haute-Garonne en 2022"
    let paragraphIntroduction = document.createElement("p")
        paragraphIntroduction.innerHTML ="Source : Bulletins d’Analyse des Accidents Corporels de la Circulation (BAAC) "
        paragraphIntroduction.classList.add("sourceINSEE")
    let linkIntroduction = document.createElement("a")
        linkIntroduction.innerHTML="(source)"
        linkIntroduction.href="https://www.data.gouv.fr/fr/datasets/bases-de-donnees-annuelles-des-accidents-corporels-de-la-circulation-routiere-annees-de-2005-a-2022/"
    let blockquote = document.createElement("blockquote")
        blockquote.classList.add("introductionBlockquote")
        blockquote.innerHTML ="\"Pour chaque accident corporel \(soit un accident survenu sur une voie ouverte à la circulation publique, impliquant au moins un véhicule et ayant fait au moins une victime ayant nécessité des soins), des saisies d’information décrivant l’accident sont effectuées par l’unité des forces de l’ordre (police, gendarmerie, etc.\) qui est intervenue sur le lieu de l’accident\" \- Extrait de la description issue de la documentation du fichier "
    let sourceBlockquote = document.createElement("a")
        sourceBlockquote.innerHTML="BAAC"
        sourceBlockquote.href="https://www.data.gouv.fr/fr/datasets/bases-de-donnees-annuelles-des-accidents-corporels-de-la-circulation-routiere-annees-de-2005-a-2022/"
    

    idIntroduction.appendChild(h1Introduction)
    idIntroduction.appendChild(paragraphIntroduction)
    paragraphIntroduction.appendChild(linkIntroduction)
    idIntroduction.appendChild(blockquote)
    blockquote.appendChild(sourceBlockquote)

}