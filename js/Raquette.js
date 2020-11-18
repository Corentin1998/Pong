class Raquette{
    constructor($html){
        this.$html=$html;
        this.haut=parseInt($("#raquette1").css("top"));
        this.hauteur=parseInt($("#raquette1").css("height"));
        this.haut=parseInt($("#raquette2").css("top"));
        this.hauteur=parseInt($("#raquette2").css("height"));
        this.vitesse=1;
        this.direction=1;
    }
    majHTML(){
        this.$html.css("top",raquette1.haut);
        this.$html.css("top",raquette2.haut);

    }
}

let raquette1 = new Raquette($("#raquette1"));
let raquette2 = new Raquette($("#raquette2"));