class Balle{ // class Balle
    constructor($element){
        this.$element=$element;
        this.largeur=$element.width();
        this.hauteur=$element.height();
        this.positionX=parseInt($element.css("top"));
        this.positionY=parseInt($element.css("left"));
        this.vitesseX=2;
        this.vitesseY=0.5;
    }

    get bas() {
        return this.positionY + this.hauteur;
    }

    set bas(value) {
        this.positionY = value - this.hauteur;
    }

    get droite() {
        return this.positionX + this.largeur;
    }

    set droite(value) {
        this.positionX = value - this.largeur;
    }

    bouge() {
        this.positionY += this.vitesse * this.direction;
        this.limite();
        this.majHTML();
    }

    monter() {
        this.direction = -1;
    }

    descendre() {
        this.direction = 1;
    }

    arret() {
        this.direction = 0;
    }

    majHTML() {
        this.$element.css("top", this.positionY);
    }

    limite() {
        //droite
        if ((this.droite) > terrain.largeur) {
            terrain.tiltDroite();
            this.droite = terrain.largeur;
            this.vitesseX *= -1;
            this.recentrer();
        }
        //gauche
        if (this.positionX < 0) {
            terrain.tiltGauche();
            this.positionX = 0;
            this.vitesseX *= -1;
            this.recentrer();
        }
        //bas
        if (this.bas > terrain.hauteur) {
            terrain.tiltBas();
            this.bas = terrain.hauteur;
            this.vitesseY *= -1;
        }
        //haut
        if (this.positionY < 0) {
            terrain.tiltHaut();
            this.positionY = 0;
            this.vitesseY *= -1;
        }

        //Gauche
        if(this.positionX < raquetteGauche.droite){
            if(this.bas > raquetteGauche.positionY){
                if(this.positionY < raquetteGauche.bas){
                    this.vitesseX *= -1;
                }
            }
        }
        //Droite
        if(this.droite > raquetteDroite.positionX){
            if(this.bas > raquetteDroite.positionY){
                if(this.positionY < raquetteDroite.bas){
                    this.vitesseX *= -1;
                }
            }
        }
    }

    recentrer() {
        this.positionX = terrain.largeur / 2 - this.largeur / 2;
        this.positionY = terrain.hauteur / 2 - this.hauteur / 2;
    }

    majHTML() {
        this.$element.css("left", balle.positionX);
        this.$element.css("top", balle.positionY);
    }
}
