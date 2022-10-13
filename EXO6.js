//déclarations
divs=document.querySelectorAll('div');
var game=false;



// changements de début du jeux
function startG(){ 

var x="The Game is Started";
game=true;


 document.getElementById("status").innerHTML=x;
 // la couleur des boundary est initialisée

 var allbound = document.querySelectorAll(".boundary");
    for(i=0;i< allbound.length;i++){
        allbound[i].style.background="#eeeeee";
    }
}



// changements de fin du jeux
function endG(){ 

    if(game==true){
        game=false;
        // la couleur des boundary au cas de la victoire est vert
        var x='You Won !!';
        document.getElementById("status").innerHTML=x;
        // la couleur des boundary au cas de la défaite est rouge

        var allbound = document.querySelectorAll(".boundary");
        for(i=0;i< allbound.length-1;i++){
             allbound[i].style.background="lightgreen";
         }
    } 
}

// changements des bordure au moment du  jeux 
function log(){ 

    if(game==true ){

        var y="You Lose !!";

        document.getElementById("status").innerHTML=y;

        game=false; // fin du jeux (défaite)

        // la couleur des boundary au cas de la défaite est rouge

        var allbound = document.querySelectorAll(".boundary");
        for(i=0;i< allbound.length-1;i++){
            allbound[i].style.background="#B22222";
        }
    }

}


// event de début du jeux 

divs['1'].addEventListener('mouseenter',e=>
    startG(),
);

// event de la fin du jeux

divs['7'].addEventListener('mouseenter',e=>

    endG(), );


// event des bordure 

for(var i=2; i<=6 ; i++){
    divs[i].addEventListener('mouseenter',e=>
    log(),
    );
}
