import { browser, ElementFinder, ExpectedConditions } from 'protractor';

export class WaitFor {
  static async elementIsVisible(element: ElementFinder, timeOut: number = 3000): Promise<ElementFinder> {
    await browser.wait(ExpectedConditions.visibilityOf(element), timeOut);

    return Promise.resolve<ElementFinder>(element);
  }
}
