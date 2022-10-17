// Créez un programme qui affiche la racine carrée d’un entier positif.

let args = process.argv.slice(2);
let number = new Number(args);
let valueN = number.valueOf();
let string = args.toString();   
let valueS = string.valueOf();
function func1() {
    
    if(valueN > 0) {
        // console.log('entier positif');
        // racine carré
        function racine(n){
            let sqrt = n/2;
            let temp = 0;
            while(sqrt!=temp){
                temp = sqrt;
                sqrt = (n/temp + temp)/2
            }
            return sqrt;
        }
        console.log(racine(valueN));
    } else {
        console.log('entier négatif');
    }

}

func1(args);