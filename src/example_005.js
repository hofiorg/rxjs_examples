import {Observable} from "rxjs";
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/map';
import {ajax} from "./utils";

Observable
  .fromPromise(ajax('example_005'))
  .subscribe(data => console.log(data.id));
