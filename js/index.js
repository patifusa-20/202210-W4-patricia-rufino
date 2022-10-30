import strictEquals from './strictEquals.js';

strictEquals(1, 1); // True
strictEquals(NaN, NaN); // False *
strictEquals(0, -0); // True *
strictEquals(-0, 0); // True *
strictEquals(1, '1'); // False
strictEquals(true, false); // False
strictEquals(false, false); // True
strictEquals('water', 'oil'); // False
