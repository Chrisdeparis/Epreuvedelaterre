// Créez un programme qui transforme une heure affichée en format 24h en une heure affichée en format 12h.
let args = process.argv.slice(2).toString();

function func1() {
    // format entre 13h et 24h

let hour = args.slice(0, 2);
let hour24 = new Number(hour);
let hourPM = hour24 - 12;
let min = args.slice(3, 5);

let resultat = '';

    if (hour == 12) {
        let resultat = hour24.toString()+':'+min+'PM';
        console.log(resultat);
    }
    if (hour== 24){
        hourPM=00;
        let resultat = hourPM.toString()+':'+min+'AM';
        console.log(resultat);
    }

    if( hour24 > 12 && hour24 < 24 ){
        // format heure
        let hour12 = hourPM.toString()+':'+min+'PM';
        console.log(hour12);
    } else if(hour ==24) {
        
    }
    if(hour > 24 || hour < 12) {
        console.log('ajouter une heure en format 24h valide');
    }   
}
func1(args);