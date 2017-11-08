import { before, binding } from 'cucumber-tsflow';
import { SharedSteps } from '../shared.steps';
import { ItemsViewPo } from '../../page-objects/items-view.po';

@binding([SharedSteps])
export class ItemsViewSteps {
  constructor(private sharedSteps: SharedSteps) {}

  @before('itemsView')
  setupForm() {
    this.sharedSteps.page = new ItemsViewPo();
  }
}
