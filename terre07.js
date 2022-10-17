// Créez un programme qui affiche l’inverse de la chaîne de caractères donnée en argument.

// récupérer valeur argument
let args = process.argv.slice(2);

function func1(){
    // console.log(args);
    let str = args.toString();
    // console.log(str);
    function reverseString(str) {
        let newString = "";
        for(let i=str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        console.log(newString);
        return newString;
    }
    
    reverseString(str);
}

func1(args);