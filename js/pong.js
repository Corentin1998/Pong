
/*modifier la position de la balle toutes les 10 millisecondes*/
setInterval(function(){
    raquetteGauche.bouge(); //raquette1 peut s'appeler raquetteGauche ça me va aussi hein...
    raquetteDroite.bouge();
    balle.bouge();



    /*balle.gauche=balle.gauche+balle.vitesseX;
    balle.haut=balle.haut+balle.vitesseY;
    
    // si balle sort à droite = pars dans la direction dans la direction inverse
    if(balle.gauche>terrain.largeur-balle.largeur){
        balle.gauche=terrain.largeur-balle.largeur;
        balle.vitesseX=balle.vitesseX*-1;
    }
    
    // si balle sort à gauche = pars dans la direction dans la direction inverse
    if(balle.gauche<0){
        balle.gauche=0;
        balle.vitesseX=balle.vitesseX*-1;
    }
    
    // si balle sort en bas = pars dans la direction dans la direction inverse
    if(balle.haut>terrain.hauteur-balle.hauteur){
        balle.haut=terrain.hauteur-balle.hauteur;
        balle.vitesseY=balle.vitesseY*-1;
    }

    // si balle sort en haut = pars dans la direction dans la direction inverse
    if(balle.haut<0){
        balle.haut=0;
        balle.vitesseY=balle.vitesseY*-1;
    }

    //déplacement en fonction de la vitesse
    raquette.haut=raquette1.haut+raquette1.vitesse;
    raquette.haut=raquette2.haut+raquette2.vitesse;

    // si raquette de gauche arrive en bas, elle remonte
    if(raquette1.haut>terrain.hauteur-raquette1.hauteur){
        raquette1.haut=terrain.hauteur-raquette1.hauteur;
        raquette1.vitesse=raquette1.vitesse*-1;
    }
    
    // si raquette de gauche arrive en haut, elle redescend
    if(raquette1.haut<0){
        raquette1.haut=0;
        raquette1.vitesse=raquette1.vitesse*-1;
    }

    // si raquette de droite arrive en bas, elle remonte
    if(raquette2.haut>terrain.hauteur-2*raquette2.hauteur){
        raquette2.haut=terrain.hauteur-2*raquette2.hauteur;
        raquette2.vitesse=raquette2.vitesse*-1;
    }
    
    // si raquette de droite arrive en haut, elle redescend
    if(raquette2.haut<0-raquette2.hauteur){
        raquette2.haut=0-raquette2.hauteur;
        raquette2.vitesse=raquette2.vitesse*-1;
    }

    balle.majHTML();
    raquette1.majHTML();
    raquette2.majHTML();*/
}, 10);

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return;
    }
    if(event.key === "a"){
        raquettegauche.monte();
    }
    if(event.key === "q"){
        raquettegauche.descend();
    }
    if(event.key === "p"){
        raquettedroite.monte();
    }
    if(event.key === "m"){
        raquettedroite.descend();
    }
    event.preventDefault();
}, true);


window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return;
    }
    if(event.key === "a"){
        raquettegauche.arret();
    }
    if(event.key === "q"){
        raquettegauche.arret();
    }
    if(event.key === "p"){
        raquettedroite.arret();
    }
    if(event.key === "m"){
        raquettedroite.arret();
    }
    event.preventDefault();
}, true);