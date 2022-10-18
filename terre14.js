// Créez un programme qui prend en paramètre trois entiers et affiche la valeur du milieu.
let args = process.argv.slice(2);

function func1(){
// seulement 3 entiers en param
let size = args.length;
let item1 = new Number(args[0]);
let val1 = item1.valueOf();
let item2 = new Number(args[1]);
let val2 = item2.valueOf();
let item3 = new Number(args[2]);
let val3 = item3.valueOf();

// check valeur numérique
let checkInt1 = Number.isInteger(val1);
let checkInt2 = Number.isInteger(val2);
let checkInt3 = Number.isInteger(val3);

    if(size == 3 && checkInt1 && checkInt2 && checkInt3) {
        // parcourir les 3 entiers et afficher la valeur du milieu
        const numSort = args.sort((function (a, b) {
            return a - b;
        }));
        // console.log(numSort);
        let resultat = numSort[1];
        if(val1 == val2) {
            resultat = ''
            console.log('erreur.');
        } 
        console.log(resultat);
    } else {
        console.log('veuillez tester 3 entiers');
    }
}

func1(args);