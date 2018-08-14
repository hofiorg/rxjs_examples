import {Observable} from "rxjs";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

const addSixPercent = x => x + (x * .06);
Observable.of(10.0, 20.0, 30.0, 40.0)
  .map(addSixPercent)
  .subscribe(console.log); //-> 10.6, 21.2, 31.8, 42.4