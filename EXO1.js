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





// changements des bordure au moment du  jeux
function log(x){ 

    if(game==true ){

        var y="You Lose !!";

        document.getElementById("status").innerHTML=y;

        game=false; // fin du jeux (défaite)

        // la couleur du boundary touché
            divs[x].style.background="#B22222";
      
    }

}


// event de début du jeux 

divs['1'].addEventListener('mouseenter',e=>
    startG(),
);


// event des bordure  
// en traite chaque bordure seul

divs[2].addEventListener('mouseenter',e=>
log(2),
);

divs[3].addEventListener('mouseenter',e=>
log(3),
);

divs[4].addEventListener('mouseenter',e=>
log(4),
);

divs[5].addEventListener('mouseenter',e=>
log(5),
);

divs[6].addEventListener('mouseenter',e=>
log(6),
);




