import { before, binding, then } from 'cucumber-tsflow';
import { SharedSteps } from '../shared.steps';
import { DetailsViewPo } from '../../page-objects/details-view.po';

import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

const expect = chai.use(chaiAsPromised).expect;

@binding([SharedSteps])
export class DetailsViewSteps {
  constructor(private sharedSteps: SharedSteps) {}

  @before('detailsView')
  setupForm() {
    this.sharedSteps.page = new DetailsViewPo();
  }

  @then(/^I should see "([^"]*)" details list items?$/)
  async shouldSeeSpecificElementsCount(expectedElementsCount) {
    const elements = (<any>this).sharedSteps.page.detailsListItems.all;
    const elementsCount = await elements.count();

    expect(elementsCount.toString()).to.equal(expectedElementsCount);
  }
}
