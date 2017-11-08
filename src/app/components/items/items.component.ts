import { Component, HostBinding, OnInit } from '@angular/core';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  colors;

  @HostBinding('id') id = 'items-list';

  constructor(private colorService: ColorService) {}

  handleDeleteItem(itemColor) {
    this.colorService.deleteColor(itemColor);
  }

  ngOnInit() {
    this.colors = this.colorService.getColors();
  }
}
