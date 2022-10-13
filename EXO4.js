//déclarations
divs=document.querySelectorAll('div');
divss=document.querySelectorAll('div');
var game=false;

var outmaze=document.getElementById('maze');
var x;

var t='Click "S" square to begin.';
        document.getElementById("status").innerHTML=t;




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

    if(game==true ){
        game=false;
        // la couleur des boundary au cas de la victoire est vert
        var x='Move your mouse over thes "S" to begin.';
        document.getElementById("status").innerHTML=x;
        alert('You Won !!');
    } 
}

// changements des bordure au moment du  jeux 
function log(){ 
    
    if(game==true){

        var y="You Lose !!  Click (S) square to begin";

        document.getElementById("status").innerHTML=y;

         // fin du jeux (défaite)
       

        // la couleur des boundary au cas de la défaite est rouge

        var allbound = document.querySelectorAll(".boundary");
        for(i=0;i< allbound.length-1;i++){
            allbound[i].style.background="#B22222";
        }
    }
  

}


// event de début du jeux 






// event de la fin du jeux

divs['7'].addEventListener('mouseenter',e=>

    endG(), );


// event des bordure  

for(var i=2; i<=6 ; i++){
    divs[i].addEventListener('mouseenter',e=>
    log(),
    );
    
}




    divs['1'].addEventListener('click',e=>
    startG(),
);



