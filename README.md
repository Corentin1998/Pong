# pong
https://corentin1998.github.io/Pong/index.html

class Terrain{
    constructor($html){
        this.$html=$html;
        this.largeur=$("#terrain").width();
        this.hauteur=$("#terrain").height();
    }
}

//variable terrain
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
    majHTML(){
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

let raquette1 = new Raquette1($("raquette1"));
let raquette2 = new Raquette2($("raquette2"));

/*modifier la position de la balle toutes les 10 millisecondes*/
setInterval(function(){
    balle.gauche=balle.gauche+balle.vitesseX;
    balle.haut=balle.haut+balle.vitesseY;
    if(balle.gauche>terrain.largeur-balle.largeur){
        balle.gauche=terrain.largeur-balle.largeur;
        balle.vitesseX=balle.vitesseX*-1;
    }
    
    if(balle.gauche<0){
        balle.gauche=0;
        balle.vitesseX=balle.vitesseX*-1;
    }
    
    if(balle.haut>terrain.hauteur-balle.hauteur){
        balle.haut=terrain.hauteur-balle.hauteur;
        balle.vitesseY=balle.vitesseY*-1;
    }

    if(balle.haut<0){
        balle.haut=0;
        balle.vitesseY=balle.vitesseY*-1;
    }

    raquette1.haut=raquette1.haut+raquette1.vitesse;
    raquette2.haut=raquette2.haut+raquette2.vitesse;

    if(raquette1.haut>terrain.hauteur-raquette1.hauteur){
        raquette1.haut=terrain.hauteur-raquette1.hauteur;
        raquette1.vitesse=raquette1.vitesse*-1;
    }
    
    if(raquette1.haut<0){
        raquette1.haut=0;
        raquette1.vitesse=raquette1.vitesse*-1;
    }

    if(raquette2.haut>terrain.hauteur-2*raquette2.hauteur){
        raquette2.haut=terrain.hauteur-2*raquette2.hauteur;
        raquette2.vitesse=raquette2.vitesse*-1;
    }
    
    if(raquette2.haut<0-raquette2.hauteur){
        raquette2.haut=0-raquette2.hauteur;
        raquette2.vitesse=raquette2.vitesse*-1;
    }

    balle.majHTML();
    raquette1.majHTML();
    raquette2.majHTML();
}, 10);