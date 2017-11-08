import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { after, binding, given, then, when } from 'cucumber-tsflow';
import { browser } from 'protractor/built';
import { SharedPo } from '../page-objects/shared.po';
import { WaitFor } from '../helpers/wait-for.helper';

const expect = chai.use(chaiAsPromised).expect;

@binding()
export class SharedSteps {
  public page: SharedPo;

  @after()
  async takeScreenshotOnError(scenario) {
    if (scenario.result.status === 'failed') {
      const stream = await browser.takeScreenshot();
      const decodedData = new Buffer(stream.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
      (<any>this)._worldObj.attach(decodedData, 'image/png');
    }
  }

  @given(/^I go to "([^"]*)" page$/)
  async goToPage(site) {
    await browser.get(site);
  }

  @then(/^I should see "([^"]*)" text in "([^"]*)" (label|button|dialog)$/)
  async shouldSeeTextInElement(expectedText, nodeId, elementType) {
    const titleElement = this.page[elementType][nodeId];

    await WaitFor.elementIsVisible(titleElement);

    const elementText = await titleElement.getText();

    expect(elementText).to.equal(expectedText);
  }

  @when(/^I click "([^"]*)" (button)$/)
  async clickElement(elementId, elementType) {
    const buttonElement = this.page[elementType][elementId];

    await buttonElement.click();
  }

  @then(/^I should see "([^"]*)" list items?$/)
  async shouldSeeSpecificElementsCount(expectedElementsCount) {
    const elements = (<any>this).page.listItems.all;
    const elementsCount = await elements.count();

    expect(elementsCount.toString()).to.equal(expectedElementsCount);
  }
}










// import { After, Given, Then, When } from 'cucumber';

// After(async (scenario) => {
//   if (scenario.result.status === 'failed') {
//     const stream = await browser.takeScreenshot();
//     const decodedData = new Buffer(stream.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
//     (<any>this)._worldObj.attach(decodedData, 'image/png');
//   }
// });
//
// Given(/^I go to "([^"]*)" page$/, async (site) => {
//   await browser.get(site);
// });
//
// Then(/^I should see "([^"]*)" text in "([^"]*)" (label|button|dialog)$/, async (expectedText, nodeId, elementType) => {
//   const titleElement = this.page[elementType][nodeId];
//
//   await WaitFor.elementIsVisible(titleElement);
//
//   // const elementText = await this.getElementText(titleElement, elementType);
//   const elementText = await titleElement.getText();
//
//   expect(elementText).to.equal(expectedText);
// });
//
// When(/^I click "([^"]*)" (button)$/, async (elementId, elementType) => {
//   const buttonElement = this.page[elementType][elementId];
//
//   await buttonElement.click();
// });
//
// Then(/^I should see "([^"]*)" list items?$/, async (expectedElementsCount) => {
//   const elements = (<any>this).page.listItems.all;
//   const elementsCount = await elements.count();
//
//   expect(elementsCount.toString()).to.equal(expectedElementsCount);
// });
