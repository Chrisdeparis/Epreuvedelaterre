// Créez un programme qui affiche les arguments qu’il reçoit ligne par ligne, peu importe le nombre d’arguments.
// node terre03.js je suis solide !
function func1(a, b) {

    let number = arguments.length;
    for(let i=0; i< number; i++) {

        console.log(arguments[i])
    }

    // expected output: 3
  }
  
  func1('je', 'suis', 'solide', 'fort');