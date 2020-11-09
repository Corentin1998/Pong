class Terrain{
    constructor($element){
        this.$element=$element;
        this.largeur=$element.width();
        this.hauteur=$element.height();
    }
}

class Balle{
    constructor($html){
        this.$html=$html;
        this.haut=parseInt($("#balle").css("top"));
        this.gauche=parseInt($("#balle").css("left"));
        this.vitesseX=2;
        this.vitesseY=0.5;
    }
    majHTML(){
        this.$html.css("left",balle.gauche);
        this.$html.css("top",balle.haut);
    }
}

/*mise en place des variables*/
let terrain=new Terrain($("#terrain"));
let balle=new Balle($("#balle"));

/*modifier la position de la balle toutes les 10 millisecondes*/
setInterval(function(){
    balle.gauche=balle.gauche+balle.vitesseX;
    balle.haut=balle.haut+balle.vitesseY;
    if(balle.gauche>terrain.largeur){
        balle.gauche=terrain.largeur;
        balle.vitesseX=balle.vitesseX*-1;
    }
    
    if(balle.gauche<0){
        balle.gauche=0;
        balle.vitesseX=balle.vitesseX*-1;
    }
    
    if(balle.haut>terrain.hauteur){
        balle.haut=terrain.hauteur;
        balle.vitesseY=balle.vitesseY*-1;
    }

    if(balle.haut<0){
        balle.haut=0;
        balle.vitesseY=balle.vitesseY*-1;   
    }
    balle.majHTML();
}, 10);