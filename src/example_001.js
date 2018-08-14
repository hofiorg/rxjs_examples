import {Observable} from "rxjs";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

Observable.of(1,2,3).map(x => x + '!!!').subscribe(console.log);