export function blocFooter(){
    let container = document.getElementById("footerContainer")
        container.classList.add("footerContainer") 
    let subContainer = document.createElement("div")
        subContainer.classList.add("foorterDiv")
    let text = document.createElement("p")
        text.innerHTML="© Emmanuelle Rey | Tous droits réservés | 2025"
        text.classList.add("foorterParagraph")
    let textLink = document.createElement("a")
        textLink.innerHTML="Consultez mon portfolio de développeur web front-end"
        textLink.href="https://emy2024.github.io/emmanuelle-rey"

    container.appendChild(subContainer)
    subContainer.appendChild(text)
     subContainer.appendChild(textLink)
}