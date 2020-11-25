# pong
https://corentin1998.github.io/Pong/index.html

body{ /**éléments de bases (couleur, typographie, etc)**/
    background-color: #000;
    color: #fff;
    font-family: monospace;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

#terrain{ /**caractéristiques du terrain : position, bordure (ligne "imaginaire" qui ne fait pas encore rebondir la balle) et dimensions **/
    position: relative;
    border: 1px solid #000; /**rendre tous les contours noirs, sauf celui du haut et du bas qui sont blancs**/
    border-top-color: #fff;
    border-bottom-color: #fff;
    width:800px;
    height:400px
}

.tiltHaut {
    border-top-color: rgb(0, 250, 0) !important;
}

.tiltBas {
    border-bottom-color: rgb(0, 250, 0) !important;
}
.tiltGauche {
    border-left-color: rgb(250, 0, 0) !important;
}

.tiltDroite {
    border-right-color: rgb(250, 0, 0) !important;
}

#balle{ /**caractéristique de la balle : position, dimensions, couleur, etc**/
    position: absolute;
    top:50%;
    left:50%;
    width: 20px;
    height: 20px;
    background-color:#fff;
    border-radius: 10px;
}

.raquette{ /**caractéristiques de la raquette : position, hauteur, etc**/
    position: absolute;
    --hauteur: 25%;
    top: calc(50% - var(--hauteur) / 2);
    width: 10px;
    height: 100px;
    background-color:#fff;
}

#gauche{
    left:10%;
}

#droite{
    right: 10%;