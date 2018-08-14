import {Observable} from "rxjs";
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/map';
import {ajax} from "./utils";

Observable
  .fromPromise(ajax('http://localhost:3000/example_005'))
  .map(data => data.response)
  .subscribe(data => console.log(data.id));
