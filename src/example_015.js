// spread operator

function myFunction(v, w, x, y, z) {
  console.log(v, w, x, y, z);
}
let args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);


let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes']; // ["head", "shoulders", "knees", "and", "toes"]
console.log(lyrics);