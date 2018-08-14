import {Observable} from "rxjs";
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/reduce';

const add = (x, y) => x + y;

Observable.from([
    {
      date: '2016-07-01',
      amount: -320.00,
    },
    {
      date: '2016-07-13',
      amount: 1000.00,
    },
    {
      date: '2016-07-22',
      amount: 45.0,
    },
  ])
  .pluck('amount')
  .reduce(add, 0)
  .subscribe(console.log);