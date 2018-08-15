import flow from 'lodash/flow';
import add from 'lodash/add';

const square = n => n * n;
const addSquare = flow([add, square]);
let result = addSquare(1, 2);

console.log('result', result);
// => 9