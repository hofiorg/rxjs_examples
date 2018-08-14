import {Observable} from "rxjs";

const my_observable = Observable.create(observer => {
  observer.next('4111111111111111');
  observer.next('5105105105105100');
  observer.next('4342561111111118');
  observer.next('6500000000000002');
  observer.complete();
});

my_observable.subscribe(console.log);