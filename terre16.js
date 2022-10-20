// Créez un programme qui célèbre votre victoire.

let args = process.argv.slice(2);

function func1(){
    //args vide
    function arrayvide(args) {
        if(args.length == 0){
            return true;
        } else {
            return false;
        }
    }
    arrayvide(args);
    if(arrayvide(args) == true){
        args = 'cool';
        let reponse = ('J’ai terminé l’Épreuve de la Terre et c’était '+ args+'! 😎😎');
        console.log(reponse);
    } else {    
        let reponse = ('J’ai terminé l’Épreuve de la Terre et c’était '+ args.toString()+'! 😎😎');
        console.log(reponse);
    }
}
func1(args);