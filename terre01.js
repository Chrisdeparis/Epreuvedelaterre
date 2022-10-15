// Créez un programme qui affiche l’alphabet en lettres minuscules suivi d’un retour à la ligne.
let string = '';
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
for(let i=0; i<26; i++) {
    string += alphabet[i];
} 
if(i=25){
    string+'\n';
}

console.log(string);

