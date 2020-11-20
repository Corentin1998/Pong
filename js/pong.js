let raquetteGauche = new Raquette($("#gauche"));
let raquetteDroite = new Raquette($("#droite"));
let balle=new Balle($("#balle"));
let terrain=new Terrain($("#terrain"));

/*modifier la position de la balle toutes les 10 millisecondes*/
setInterval(function(){
    raquetteGauche.bouge();
    raquetteDroite.bouge();
    balle.bouge();
}, 10);

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return;
    }
    if(event.key === "a"){
        raquetteGauche.monte();
    }
    if(event.key === "q"){
        raquetteGauche.descend();
    }
    if(event.key === "p"){
        raquetteDroite.monte();
    }
    if(event.key === "m"){
        raquetteDroite.descend();
    }
    event.preventDefault();
}, true);


window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return;
    }
    if(event.key === "a") {
        raquetteGauche.arret();
    }
    if(event.key === "q"){
        raquetteGauche.arret();
    }
    if(event.key === "p") {
        raquetteDroite.arret();
    }
    if(event.key === "m"){
        raquetteDroite.arret();
    }
    event.preventDefault();
}, true);