// Créez un programme qui affiche le nombre de caractères d’une chaîne de caractères passée en argument.
    
let args =  process.argv.slice(2);


function func1(){

    let number = args.toString().length;
    console.log(number);
}

func1(args);