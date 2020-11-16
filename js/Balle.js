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