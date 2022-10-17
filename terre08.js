// Créez un programme qui affiche le nombre de caractères d’une chaîne de caractères passée en argument.
    
let args =  process.argv.slice(2);

function func1(){

    let numberObject = new Number(args);
    
    let value = numberObject.valueOf();

    let items = args.length;

    let number = args.toString().length;

    if(number == 0 || items > 1 || !isNaN(value)){
        console.log ('erreur.');
        return;
    }
    console.log(number);

}

func1(args);