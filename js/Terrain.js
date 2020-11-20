class Terrain{
    constructor($element){ // $ = élément de la bibliothèque (Jquery)
        this.$element;
        this.largeur=$element.width(); // pour la largeur du terrain, se référer à "width" de "#terrain" (css)
        this.hauteur=$element.height(); // pour la hauteur du terrain, se référer à "height" de "#terrain" (css)
    }
}