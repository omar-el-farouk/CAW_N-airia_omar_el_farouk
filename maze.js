var game=false;

// début du jeux 
function startG(){ // début du jeux 

    var x="The Game is Started";

    game=true;

     document.getElementById("status").innerHTML=x;
     // la couleur des boundary est initialisée

     var allbound = document.querySelectorAll(".boundary");
        for(i=0;i< allbound.length;i++){
            allbound[i].style.background="#eeeeee";
        }

}
    

function log(){ // entrée dans les boundary

    if(game==true){

        var y="You lost !!";

        document.getElementById("status").innerHTML=y;

        game=false; // fin du jeux (défaite)

        // la couleur des boundary au cas de la défaite est rouge

        var allbound = document.querySelectorAll(".boundary");
        for(i=0;i< allbound.length;i++){
            allbound[i].style.background="#B22222";
        }
    }

}

function endG(){ // fin du jeux (victoire)

    if(game==true){

        game=false;

        var e="You won !!";

        document.getElementById("status").innerHTML=e;

        // la couleur des boundary au cas de la victoire est vert
        
        var allbound = document.querySelectorAll(".boundary");
        for(i=0;i< allbound.length;i++){
            allbound[i].style.background="lightgreen";
        }
    }
}
    
