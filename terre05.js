// Créez un programme qui permet de déterminer si l’argument donné est un entier pair ou impair..
// Attention : gérez aussi les entiers négatifs.


// récupérer valeur argument
let args = process.argv.slice(2);


function func1() {
    // 2
    //console.dir(args)
    let numberObject = new Number(args);
    let value = numberObject.valueOf();

    if(isNaN( value)){
        console.log(answer = 'Tu ne me la mettras pas à l’envers.');
    } 

    if(value == 0) {
        console.log(answer = 'Tu ne me la mettras pas à l’envers.');
        return;
    }
    
    if(value%2 == 0  ){
        
        console.log(ansNum ='pair');
    } 
    
    if(value%2 == 1 || value%2 == -1 ){
        console.log(ansNum ='impair');
    }

     
}
    

func1(args);