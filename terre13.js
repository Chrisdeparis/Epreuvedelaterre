// Créez un programme qui transforme une heure affichée en format 12h en une heure affichée au format 24h.

let args = process.argv.slice(2).toString();

function func1() {

    let hour = args.slice(0, 2);
    let number = new Number(hour);
    let valueN = number.valueOf();     
    let hour24 = new Number(hour);
    let hourPM = hour24 + 12;
    let min = args.slice(3, 5);
    let PM = args.slice(5, 7);

    if(PM == 'PM' && number >=1){
        // console.log('bon format heure');
        if(hour24 < 12){
            // format heure
            let hour12 = hourPM.toString()+':'+min;
            console.log(hour12);
        }
        if (hour24==12){
           let hour='00';
            let resultat = hour+':'+min;
            console.log(resultat);
        }

    } else {
        console.log('veuillez indiquez une heure au format PM');
    }
}

func1(args);