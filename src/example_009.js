import {Observable} from "rxjs";

const source = Observable.create(observer => {
  let i = 0;
  setInterval(() => {
    observer.next(i++);
  }, 500);
});

source.subscribe(console.log);