// Créez un programme qui affiche si un nombre est premier ou pas.

let args = process.argv.slice(2);
let number = new Number(args);
let value = number.valueOf();

function func1() {
    console.log(!isNaN(value));
    if(!isNaN(value)){
        //formule nombre premier
        function estpremier(n) {
            // si n ≤ 1 retourner FAUX
            // sinon si n ≤ 3 retourner VRAI
            // sinon si (n mod 2 = 0) ou (n mod 3 = 0) retourner FAUX
            // i = 5
            // tant que (i*i ≤ n) {
            //   si (n mod i = 0) ou (n mod (i + 2) = 0) retourner FAUX
            //   i = i + 6
            // }
            if(n >= 0) {
                
            } else {
                console.log('un nombre premier doit être naturel ')
                return;
            }
            // retourner VRAI
            if(n <= 1) {
                console.log('Non, '+value+ ' n\'est pas un nombre premier');
                return false;
            } else if (n <=3) {
                console.log('Oui, '+value+ ' est un nombre premier')
                return true;
            } else if (n%2 == 0 || n%3 == 0) {
                console.log('Non, '+value+ ' n\'est pas un nombre premier');
                return false;
            }
            let i = 5;
            while(i*i <= n){
                if(n%i == 0 || (n%(i+2)==0)){
                    console.log('Non, '+value+ ' n\'est pas un nombre premier');
                    return false;
                }
                i=i+6;
            }
            console.log('Oui, '+value+ ' est un nombre premier')
            return true;
        
        } 
        
        (estpremier(value));
        console.log('Veuillez passez un nombre entier naturel');

    }
}


func1(args);