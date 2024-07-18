 // inverser une chaîne
let s = 'A B C D E F G';
let inverse = s.split('').reverse().join('');
console.log(inverse);
 //Compter les caractères
 let str = "Fallou , Yacine";
let charCount = str.length;
console.log(charCount); 
 //Mettre les mots en majuscule 
 function Word(sentence) {
    return sentence.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}
let phrase = "Yacine";
let resultat = Word(phrase);
console.log(resultat);  



