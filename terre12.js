// Créez un programme qui transforme une heure affichée en format 24h en une heure affichée en format 12h.
let args = process.argv.slice(2).toString();


// let format24 = hour+':'+min;
function func1(){
    // format entre 13h et 24h

let hour = args.slice(0, 2);
let hour24 = new Number(hour);
let hourPM = hour24 - 12;
let min = args.slice(3, 5);

    if( hour24 > 12 && hour24 <= 24 ){
        // format heure
        let hour12 = hourPM.toString()+':'+min+'PM';
        console.log(hour12);
    } else {
        console.log('Heure non valide');
    }

}
func1(args);