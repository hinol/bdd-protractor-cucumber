import { before, binding } from 'cucumber-tsflow';
import { HomeViewPo } from '../../page-objects/home-view.po';
import { SharedSteps } from '../shared.steps';

@binding([SharedSteps])
export class HomeViewSteps {
  constructor(private sharedSteps: SharedSteps) {}

  @before('homeView')
  setupForm() {
    this.sharedSteps.page = new HomeViewPo();
  }
}
