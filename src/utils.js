import {ajax as rxjs_ajax} from "rxjs/ajax";
import {XMLHttpRequest} from "xmlhttprequest";
import 'rxjs/add/operator/pluck';

// ajax call without CORS check
const ajax = url =>
  rxjs_ajax({
    url: 'http://localhost:3000/' + url,
    crossDomain: true,
    createXHR: () => new XMLHttpRequest()
  }).pluck('response');

export { ajax };
