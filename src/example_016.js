import {Observable} from "rxjs";
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/zip';

let observable1 = Observable.from([1,2,3,4,5]);
let observable2 = Observable.from([6,7,8,9,0]);

Observable.zip(observable1, observable2).subscribe((a) => console.log('a: ' + a));