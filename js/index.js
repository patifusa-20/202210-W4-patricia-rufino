import strictEquals from './strictEquals.js';

// Crearemos un objeto mediante un constructor
function Test(a, b) {
    this.valueA = a;
    this.valueB = b;
    this.resultTest = strictEquals(a, b);
}

const test1 = new Test(1, 1); // True
const test2 = new Test(NaN, NaN); // False *
const test3 = new Test(0, -0); // True *
const test4 = new Test(-0, 0); // True *
const test5 = new Test(1, '1'); // False
const test6 = new Test(true, false); // False
const test7 = new Test(false, false); // True
const test8 = new Test('water', 'oil'); // False

// Creo un array que guarde todas las pruebas
const listTests = [test1, test2, test3, test4, test5, test6, test7, test8];

console.table(listTests);
