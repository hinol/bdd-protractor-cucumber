import { SharedPo } from './shared.po';
import { by, element } from 'protractor';
import { By } from '@angular/platform-browser';

export class DetailsViewPo extends SharedPo {
  listItems: { [key: string]: By } = {};
  detailsListItems: { [key: string]: By } = {};
  pageSelectors = {
    itemDetailsTitle: by.id('detail-title'),
    listItemBlack: by.id('list-item-black'),
    listItemRed: by.id('list-item-red'),
    listItem: by.css('app-list-item'),
    detailsListItem: by.css('app-item-details'),
    detailsListItemBlack: by.id('item-details-black'),
    detailsListItemRed: by.id('item-details-red'),
    itemsTitle: by.id('items-title'),
    blackItemDetailsButton: by.id('details-button-black'),
    redItemDetailsButton: by.id('details-button-red')
  };

  constructor() {
    super();
    this.setSelectors(this.pageSelectors);

    this.label.itemDetailsTitle = element(this.selectors.itemDetailsTitle);
    this.label.itemsTitle = element(this.selectors.itemsTitle);
    this.listItems.black = element(this.selectors.listItemBlack);
    this.listItems.red = element(this.selectors.listItemRed);
    this.listItems.all = element.all(this.selectors.listItem);
    this.detailsListItems.black = element(this.selectors.detailsListItemBlack);
    this.detailsListItems.red = element(this.selectors.detailsListItemRed);
    this.detailsListItems.all = element.all(this.selectors.detailsListItem);
    this.button.detailsBlack = element(this.selectors.blackItemDetailsButton);
    this.button.detailsRed = element(this.selectors.redItemDetailsButton);
  }
}
