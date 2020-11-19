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

