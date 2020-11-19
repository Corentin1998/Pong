class Raquette{
    constructor($html){
        this.$html=$html;
        this.hauteur = $html.height();
        this.largeur = $html.width();
        this.positionX = parseInt($html.css("left"));
        this.positionY = parseInt($html.css("top"));
        this.vitesse=1;
        this.direction=1;
    }

    get bas
        return this.positionY + this.hauteur
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
        if (this.bas > terrain.hauteur) {
            this.bas = terrain.hauteur;
            this.arret();
        }
        if (this.positionY < 0) {
            this.positionY = 0;
            this.arret();
        }
    }
}

let raquetteGauche = new Raquette($("#gauche"));
let raquetteDroite = new Raquette($("#droite"));