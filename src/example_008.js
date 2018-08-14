import {Observable} from "rxjs";
import 'rxjs/add/observable/of';

const progressBar$ = Observable.create(observer => {
  const OFFSET = 3000;
  const SPEED = 50;
  let val = 0;
  function progress() {
    if(++val <= 100) {
      observer.next(val);
      setTimeout(progress, SPEED);
    }
    else {
      observer.complete();
    }
  }
  setTimeout(progress, OFFSET);
});
const label = { textContent: '' }; // document.querySelector('#progress-indicator');
progressBar$
  .subscribe(
    val => { label.textContent = (Number.isInteger(val) ? val + "%" : val);
             console.log(label.textContent); },
    error => console.log(error.message),
    () => { label.textContent = 'Complete!';
            console.log(label.textContent); }
  );