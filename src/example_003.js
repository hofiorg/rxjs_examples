import {Observable} from "rxjs";
import 'rxjs/add/observable/from';

const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
Observable.from(map).forEach(console.log);

//-> ["key1", "value1"] ["key2", "value2"]