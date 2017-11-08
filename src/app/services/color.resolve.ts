import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ColorService } from './color.service';

@Injectable()
export class ColorResolve implements Resolve<any> {

  constructor(private colorService: ColorService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.colorService.getColor(route.params['id']);
  }
}
