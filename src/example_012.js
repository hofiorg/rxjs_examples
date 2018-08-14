import {Observable} from "rxjs";
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/filter';

let candidates = [
  {name: 'Brendan Eich', experience : 'JavaScript Inventor'},
  {name: 'Emmet Brown', experience: 'Historian'},
  {name: 'George Lucas', experience: 'Sci-fi writer'},
  {name: 'Alberto Perez', experience: 'Zumba Instructor'},
  {name: 'Bjarne Stroustrup', experience: 'C++ Developer'}
];

const hasJsExperience = bg => bg.toLowerCase().includes('javascript');

const candidates$ = Observable.from(candidates);
candidates$
  .filter(candidate => hasJsExperience(candidate.experience))
  .subscribe(console.log); //-> prints "Brendan Eich"