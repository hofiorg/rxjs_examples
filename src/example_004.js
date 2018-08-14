import {Observable} from "rxjs";
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';

const fortyTwo = new Promise((resolve) => {
  setTimeout(() => {
    resolve(42);
  }, 5000);
});

const increment = i => i + 1;

Observable.fromPromise(fortyTwo)
  .map(increment)
  .subscribe(console.log); //-> 43
console.log('Program terminated');

// The promised value is being computed asynchronously, but Promises
// differ from Observables in that they’re executed eagerly, as soon as they’re
// declared.
// Running this program as is produces the following output:
// 'Program terminated'
// 43 //-> after 5 seconds elapse