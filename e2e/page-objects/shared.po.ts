import { by, element, ElementFinder } from 'protractor';
import { By } from '@angular/platform-browser';

export class SharedPo {
  label: { [key: string]: ElementFinder } = {};
  button: { [key: string]: ElementFinder } = {};
  selectors: { [key: string]: By } = {
    homeButton: by.id('header-button-home'),
    goToItemsButton: by.id('header-button-go-to-items'),
    backToItemsButton: by.id('header-button-back-to-items'),
    appTitle: by.id('app-title'),
  };

  constructor() {
    this.label.appTitle = element(this.selectors.appTitle);
    this.button.home = element(this.selectors.homeButton);
    this.button.goToItems = element(this.selectors.goToItemsButton);
    this.button.backToItems = element(this.selectors.backToItemsButton);
  }

  setSelectors(selectors) {
    this.selectors = {
      ...this.selectors,
      ...selectors
    };
  }
}
