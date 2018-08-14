import {Observable} from "rxjs";
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/map';

import { ajax } from 'rxjs/ajax';
import { XMLHttpRequest } from 'xmlhttprequest';

Observable
  .fromPromise(ajax({
    url: 'http://localhost:3000/example_005',
    crossDomain: true,
    createXHR: function () {
      return new XMLHttpRequest();
    }}))
  .map(data => data.response)
  .subscribe(data => console.log(data.id));
