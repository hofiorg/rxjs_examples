import {ajax as rxjs_ajax} from "rxjs/ajax";
import {XMLHttpRequest} from "xmlhttprequest";

// ajax call without CORS check
const ajax = url =>
  rxjs_ajax({
    url: url,
    crossDomain: true,
    createXHR: function () {
      return new XMLHttpRequest();
    }
  });

export { ajax };
