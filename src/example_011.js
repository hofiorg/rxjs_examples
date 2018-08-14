import {Observable} from "rxjs";
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

Observable.from([
    'The quick brown fox',
    'jumps over the lazy dog'
    ])
  .map(str => str.split(' '))
  .do(arr => console.log(arr.length))
  .subscribe(console.log);