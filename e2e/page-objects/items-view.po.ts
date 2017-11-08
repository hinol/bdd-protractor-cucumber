import { SharedPo } from './shared.po';
import { by, element } from 'protractor';
import { By } from '@angular/platform-browser';

export class ItemsViewPo extends SharedPo {
  listItems: { [key: string]: By } = {};
  dialog: { [key: string]: By } = {};
  pageSelectors = {
    deleteDialogTitle: by.id('delete-dialog-title'),
    itemsTitle: by.id('items-title'),
    container: by.id('items-list'),
    listItem: by.css('app-list-item'),
    confirmDeleteButton: by.id('confirm-delete-button'),
    deleteButton: by.id('delete-item-button-black')
  };

  constructor() {
    super();
    this.setSelectors(this.pageSelectors);

    this.label.itemsTitle = element(this.selectors.itemsTitle);
    this.listItems.container = element(this.selectors.itemsConainer);
    this.listItems.black = element(this.selectors.listItemBlack);
    this.listItems.all = element.all(this.selectors.listItem);
    this.dialog.deleteItem = element(this.selectors.deleteDialogTitle);
    this.button.confirmDelete = element(this.selectors.confirmDeleteButton);
    this.button.deleteItem = element(this.selectors.deleteButton);
  }
}
