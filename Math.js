// Factorielle
function factorielle(n) {
    let Nombre = 1;
    for (let i = 1; i <= n; ++i) {
        Nombre *= i;
    }
    return Nombre;
}

const nombre = 4; 
console.log(`La factorielle de ${nombre} est : ${factorielle(nombre)}`);

// Vérification des nombres premiers
function Nombrepremier(P) {
    if (P<=1) {
        return false;
    }
    for (let i =2 ; i <= Math.sqrt(P); i++) {
        if (P % i === 0){
            return false;
        }
    }
    return true;
}
console.log(Nombrepremier(18));
console.log(Nombrepremier(2));

//Suite de Fibonacci
function fibonacciList(n) {
    const fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}
const n = 10;
const sequence = fibonacciList(n);
console.log(sequence);

