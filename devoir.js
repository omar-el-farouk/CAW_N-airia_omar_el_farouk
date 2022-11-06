//exemple de traitement par le terminal
// node devoir "bonjour"  ./files/f2.txt  ./files/f1.txt  ./files/x/d/f/f.txt

const fs = require("fs"); // pour lire des fichier
const procces = require("process"); // pour insérer aux terminal par l'utilisateur


var existe = true;
var i = 3;

exp= process.argv[2].toLocaleLowerCase();

// les testes
while (existe) {
  const fdir = procces.argv[i]; // l'emplaçement du fichier

  if (fdir != undefined) {
    fs.readdir(fdir, (err, files) => {
      if (err) {
        // l'utilisateur entrée juste un ou des fichier
        grep(fdir);
      } else {
        files.forEach((fichier) => {
          // si il entre un répertoire
          grep(fdir + "\\" + fichier);
        });
      }
    });
    i += 1;
  } else {
    existe = false; // l'emplaçement n'existe pas 
  }
}


function grep(fichier) {
  try {
    const EXPRE = fs.readFileSync(fichier, "utf-8");
    if (EXPRE) {
      // la recherche de l'expression dans le fichier
      var exst = EXPRE.match(exp);
      if (exst) {
        console.log(`L'expression existe dans le fichier :  ${fichier}`);//afficher la fichier ou l'expression existe
      } else {
        console.log("NONE"); // l'expression n'existe pas dans ce fichier
      }
    } else {
      console.log(`Ce fichier est vide :  ${fichier}`);
    }
  } catch (e) {
    console.log(`Ce fichier n'existe pas  :  ${fichier} `);
  }
}

