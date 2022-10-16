// Créez un programme qui affiche le résultat et le reste d’une division entre deux nombres.

// récupérer valeur argument
let args = process.argv.slice(2);


function func1() {
    // console.log(args);
    resultat = Math.floor(args[0]/args[1])

    if(resultat == '0' || resultat == Infinity){
        console.log('erreur.');
        return;

    }
    console.log('résultat: '+resultat);
    console.log('reste: '+args[0]%args[1]);
}

func1(args);