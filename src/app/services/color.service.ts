import { Injectable } from '@angular/core';
import { data } from '../data/colors';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import 'rxjs/add/observable/from';
// import 'rxjs/add/observable/from';

@Injectable()
export class ColorService {
  behaviourSubject: BehaviorSubject<any[]>;

  constructor() {
    this.behaviourSubject = new BehaviorSubject(data.colors);
  }

  getColors() {
    return this.behaviourSubject;
  }

  getColor(name) {
    return this.behaviourSubject.getValue().find(color => color.color === name);
  }

  deleteColor(name) {
    const currentColors = this.behaviourSubject.getValue();
    const newColors = currentColors.filter(color => color.color !== name);

    return this.behaviourSubject.next(newColors);
  }
}
