//Créez un programme qui affiche son nom de fichier.
var path = __filename.split(__dirname+"/").pop().match(/[^/]+$/);

// const reg = /^([a-zA-Z ]+)$/;
let filename = path[0].replace(/^.*[\\\/]/, '');
console.log(filename);
// console.log(reg);