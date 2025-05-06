/////////////////////////////CONTENU DES POPUP AVEC LA FONCTION ONEACHFEATURE ///////////////////////////////

export function onEachFeatureAccidents(feature, layer) {
    let popupUpConditionCol = feature.properties.col;
    if(feature.properties.col=="-1"){
        popupUpConditionCol = "non renseigné."
    } 
    else if (feature.properties.col=="1") {
        popupUpConditionCol = "deux véhicules - frontale"
    }
    else if (feature.properties.col=="2") {
        popupUpConditionCol = "deux véhicules – par l’arrière"
    }
    else if (feature.properties.col=="3") {
        popupUpConditionCol = "deux véhicules – par le coté"
    }
    else if (feature.properties.col=="4") {
        popupUpConditionCol = "trois véhicules et plus – en chaîne"
    }
    else if (feature.properties.col=="5") {
        popupUpConditionCol = "trois véhicules et plus - collisions multiples"
    }
    else if (feature.properties.col=="6") {
        popupUpConditionCol = "Autre collision"
    }
    else if (feature.properties.col=="7") {
        popupUpConditionCol = "Sans collision"
    }



    let popupUpConditionAtm = feature.properties.atm;
    if(feature.properties.atm=="-1"){
        popupUpConditionAtm = "non renseignées"
    } 
    else if (feature.properties.atm=="1") {
        popupUpConditionAtm = "normales"
    }
    else if (feature.properties.atm=="2") {
        popupUpConditionAtm = "pluie légère"
    }
    else if (feature.properties.atm=="3") {
        popupUpConditionAtm = "pluie forte"
    }
    else if (feature.properties.atm=="4") {
        popupUpConditionAtm = "neige / grêle"
    }
    else if (feature.properties.atm=="5") {
        popupUpConditionAtm = "brouillard / fumée"
    }
    else if (feature.properties.atm=="6") {
        popupUpConditionAtm = "vent fort / tempête"
    }
    else if (feature.properties.atm=="7") {
        popupUpConditionAtm = "temps éblouissant"
    }
    else if (feature.properties.atm=="8") {
        popupUpConditionAtm = "temps couvert"
    }
    else if (feature.properties.atm=="9") {
        popupUpConditionAtm = "Autre"
    }


    let popupUpConditionInt = feature.properties.int;
    if(feature.properties.int=="1"){
        popupUpConditionInt = "Hors intersection"
    } 
    else if (feature.properties.int=="2") {
        popupUpConditionInt = "Intersection en X"
    }
    else if (feature.properties.int=="3") {
        popupUpConditionInt = "Intersection en T"
    }
    else if (feature.properties.int=="4") {
        popupUpConditionInt = "Intersection en Y"
    }
    else if (feature.properties.int=="5") {
        popupUpConditionInt = "Intersection à plus de 4 branches"
    }
    else if (feature.properties.int=="6") {
        popupUpConditionInt = "Giratoire"
    }
    else if (feature.properties.int=="7") {
        popupUpConditionInt = "Place"
    }
    else if (feature.properties.int=="8") {
        popupUpConditionInt = "Passage à niveau"
    }
    else if (feature.properties.int=="9") {
        popupUpConditionInt = "Autre intersection"
    }


    let popupUpLumiere = feature.properties.lum;
    if(feature.properties.lum=="1"){
        popupUpLumiere = "Plein jour"
    } 
    else if (feature.properties.lum=="2") {
        popupUpLumiere = "Crépuscule ou aube"
    }
    else if (feature.properties.lum=="3") {
        popupUpLumiere = "Nuit sans éclairage public"
    }
    else if (feature.properties.lum=="4") {
        popupUpLumiere = "Nuit avec éclairage public non allumé"
    }
    else if (feature.properties.lum=="5") {
        popupUpLumiere = "Nuit avec éclairage public allumé"
    }


    let popupUpObstacleHeurte = feature.properties.obsm;
    if(feature.properties.obsm=="-1"){
        popupUpObstacleHeurte = "Non renseigné"
    } 
    else if (feature.properties.obsm=="0") {
        popupUpObstacleHeurte = "Aucun"
    }
    else if (feature.properties.obsm=="1") {
        popupUpObstacleHeurte = "Piéton"
    }
    else if (feature.properties.obsm=="2") {
        popupUpObstacleHeurte = "Véhicule"      
    }
    else if (feature.properties.obsm=="4") {
        popupUpObstacleHeurte = "Véhicule sur rail"
    }
    else if (feature.properties.obsm=="5") {
        popupUpObstacleHeurte = "Animal domestique"
    }
    else if (feature.properties.obsm=="6") {
        popupUpObstacleHeurte = "Animal sauvage"
    }
    else if (feature.properties.obsm=="9") {
        popupUpObstacleHeurte = "Autre"
    }
    

    var popupText = `
    <table>
    <tr>
    <h3 class="titreDansPopup"> Détail concernant l'accident </h3>
    </tr>
    <tr>
    <div><strong> Type de collision : </strong> ${popupUpConditionCol}</div></br> 
    </tr>
    <tr>
    <div><strong> Obstacle mobile heurté : </strong> ${popupUpObstacleHeurte} </div></br>
    </tr>
    <tr>
    <div><strong> Conditions atmosphériques : </strong> ${popupUpConditionAtm}</div></br>
    </tr>
    <tr>
    <div><strong> Intersection : </strong> ${popupUpConditionInt} </div></br>
    </tr>
    <tr>
    <div><strong> Conditions d'éclairage : </strong> ${popupUpLumiere} </div></br>
    </tr>
    </table>
`;

    layer.bindPopup(popupText, {
        closeButton: true,
        offset: L.point(0, 0),
        keepInView: true
    });
    
}
