// Créez un programme qui affiche le résultat d’une puissance.
//L’exposant ne pourra pas être négatif.

let args =  process.argv.slice(2);

function func1(){
    // console.log(args);
    let number = args[0];
    let exposant = args[1];
    if(exposant > 0){
        let resultat = number ** exposant;
        console.log(resultat);
    } else {
        console.log('L’exposant ne pourra pas être négatif.');
    }
}

func1(args);