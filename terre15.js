// Créez un programme qui détermine si une liste d’entiers est triée ou pas.
let args = process.argv.slice(2);

function func1(){
    // Function to check letters ou numbers    
    function check(args){
        let result = args.map(argument => {
            let Number = /^[0-9]+$/;
            let letters = /^[a-zA-Z]+$/;
            if (argument.match(Number)) {
                return true;
            }
            if(argument.match(letters)) {   
                return false;
            }
        });
        return result;
    }
    check(args);
    // verif si c'est trié
    function is_sorted(args) {
        let reponse='';
        for (let i = 0; i <=args.length - 1; ++i) {
            let checkInt = Number.isInteger(args[i]).valueOf();
            // console.log(checkInt);
            if(args[i] - args[i-1] < 0) {
                console.log('Pas triée !');
                return false;
            } 
        }
        console.log('Triée !');
    }
    // verif liste entier
    if (check(args).includes(false)) {
        console.log('erreur.');
    } else {
        is_sorted(args);
    }
}
func1(args);