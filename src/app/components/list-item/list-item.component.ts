import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input() item;
  @Output()
  deleteItemEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(public dialog: MatDialog, private router: Router) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: { name: this.item.color }
    });

    dialogRef.beforeClose().subscribe(result => {
      if (result) {
        this.deleteItemEvent.emit(result);
      }
    });
  }

  showDetails() {
    this.router.navigate(['items', this.item.color]);
  }
}
