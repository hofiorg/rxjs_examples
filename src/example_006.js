function* fibonacci() {
  let first = 1, second = 1;
  for(;;) {
    let sum = second + first;
    yield sum;
    first = second;
    second = sum;
  }
}
const iter = fibonacci();

console.log(iter.next()); //-> {value: 2, done: false}
console.log(iter.next()); //-> {value: 3, done: false}
console.log(iter.next()); //-> {value: 5, done: false}