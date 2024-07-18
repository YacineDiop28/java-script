//Rechercher le maximum 
function findMax(arr) {
    if (arr.length === 0) {
        throw new Error("Le tableau est vide.");
    }
    let maxVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}
// Recherche le minimum
function findMin(arr) {
    if (arr.length === 0) {
        throw new Error("Le tableau est vide.");
    }
    let minVal =arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]<minVal) {
            minVal=arr[i];
        }
    }
    return minVal;
}
let numbers = [3, 5, 7, 16, -8, -1, 4, 10, 20];
let maxVal = findMax(numbers);
let minVal = findMin(numbers);

console.log("Valeur maximale : " + maxVal); 
console.log("Valeur manimale : " + minVal);
// somme du tableau
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let totalSum = sumArray(numbers);
console.log("La somme de tous les éléments du tableau : " + totalSum); 
const moyenne = totalSum / 9
console.log("la moyenne dun tableau est :"  + moyenne);

// Filtrer les nombres supérieurs à 7
const resultat = numbers.filter(function(nombre) {
    return nombre > 7;
});

console.log(" les éléments filtrés sont :", resultat);

// inverser le tableau
numbers.reverse();
console.log( 'le nouveau tableau : ' + numbers); 
