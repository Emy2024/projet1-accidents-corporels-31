export function blocIntroduction() {
    const idIntroduction = document.getElementById("introduction");
    idIntroduction.classList.add("introduction");

    const h1 = document.createElement("h1");
    h1.classList.add("introductionH1");
    h1.textContent = "Panorama des accidents corporels en Haute-Garonne en 2022";

    const btn__returnPortfolio = document.getElementById("btn__returnPortfolio")
    btn__returnPortfolio.href="https://shorturl.at/oZN0L"
    btn__returnPortfolio.innerHTML = "Consulter mon portfolio"
    btn__returnPortfolio.classList.add("btn__returnPortfolio")

    const paragraph = document.createElement("p");
    paragraph.classList.add("sourceINSEE");
    paragraph.textContent = "Source : Bulletins d’Analyse des Accidents Corporels de la Circulation (BAAC) ";

    const link = document.createElement("a");
    link.href = "https://www.data.gouv.fr/fr/datasets/bases-de-donnees-annuelles-des-accidents-corporels-de-la-circulation-routiere-annees-de-2005-a-2022/";
    link.textContent = "(source)";
    paragraph.appendChild(link);

    const blockquote = document.createElement("blockquote");
    blockquote.classList.add("introductionBlockquote");

    const quoteText = document.createElement("span");
    quoteText.textContent = "« Pour chaque accident corporel (soit un accident survenu sur une voie ouverte à la circulation publique, impliquant au moins un véhicule et ayant fait au moins une victime ayant nécessité des soins), des saisies d’information décrivant l’accident sont effectuées par l’unité des forces de l’ordre (police, gendarmerie, etc.) qui est intervenue sur le lieu de l’accident » - Extrait de la description issue de la documentation du fichier BACC »";

    blockquote.appendChild(quoteText);

    idIntroduction.appendChild(h1);
    idIntroduction.appendChild(paragraph);
    idIntroduction.appendChild(blockquote);
}
