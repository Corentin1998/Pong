class Terrain{
    constructor($html){ // $ = élément de la bibliothèque (Jquery)
        this.$html=$html;
        this.largeur=$("#terrain").width(); // pour la largeur du terrain, se référer à "width" de "#terrain" (css)
        this.hauteur=$("#terrain").height(); // pour la hauteur du terrain, se référer à "height" de "#terrain" (css)
    }
}

//définition de la variable terrain
let terrain=new Terrain($("#terrain"));
console.log(terrain);

class Balle{
    constructor($html){
        this.$html=$html;
        this.haut=parseInt($("#balle").css("top"));
        this.gauche=parseInt($("#balle").css("left"));
        this.vitesseX=2;
        this.vitesseY=0.5;
        this.largeur=$("#balle").width();
        this.hauteur=$("#balle").height();
    }
    majHTML(){ // ?
        this.$html.css("left",balle.gauche);
        this.$html.css("top",balle.haut);
    }
}

let balle=new Balle($("#balle"));

class Raquette1{
    constructor($html){
        this.$html=$html;
        this.haut=parseInt($("#raquette1").css("top"));
        this.hauteur=parseInt($("#raquette1").css("height"));
        this.vitesse=1;
    }
    majHTML(){
        this.$html.css("top",raquette1.haut);
    }
}

class Raquette2{
    constructor($html){
        this.$html=$html;
        this.haut=parseInt($("#raquette2").css("top"));
        this.hauteur=parseInt($("#raquette2").css("height"));
        this.vitesse=1;
    }
    majHTML(){
        this.$html.css("top",raquette2.haut);
    }
}

let raquette1 = new Raquette1($("#raquette1"));
let raquette2 = new Raquette2($("#raquette2"));

/*modifier la position de la balle toutes les 10 millisecondes*/
setInterval(function(){
    balle.gauche=balle.gauche+balle.vitesseX;
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
    raquette1.haut=raquette1.haut+raquette1.vitesse;
    raquette2.haut=raquette2.haut+raquette2.vitesse;

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
    raquette2.majHTML();
}, 10);


