import {Observable} from "rxjs";
import {Subject} from "rxjs";
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/combineLatest';

let subject1 = new Subject();
let subject2 = new Subject();

Observable.combineLatest(subject1, subject2).subscribe((a) => console.log('a: ' + a));

subject1.next(1);
subject1.next(2);

subject2.next(5);
subject2.next(6);

subject1.next(3);

subject2.next(7);
subject2.next(8);
subject2.next(9);

subject1.next(4);
