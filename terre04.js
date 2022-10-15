// Créez un programme qui affiche l’alphabet à partir de la lettre donnée en argument en lettres minuscules suivi d’un retour à la ligne.
let string = '';
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let number = alphabet.length;
// récupérer l'argument de la lettre ligne de commande
let args = process.argv.slice(2).toString().slice(0,1);
console.log(args);
 function func1(){
    // console.log(arguments[0]);
    // determiner la position de l'argument dans l'array 
    let position = alphabet.indexOf(arguments[0])
    // console.log('position = '+position)
    for(let i=position; i<number; i++) {
        string += alphabet[i];
    }
    console.log(string);
 }
 func1(args);



