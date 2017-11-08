import { SharedPo } from './shared.po';
import { by, element } from 'protractor';

export class HomeViewPo extends SharedPo {
  pageSelectors = {
    welcomeMessage: by.id('welcome-message')
  };

  constructor() {
    super();
    this.setSelectors(this.pageSelectors);

    this.label.welcomeMessage = element(this.selectors.welcomeMessage);
  }
}
