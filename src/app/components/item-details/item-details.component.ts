import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  @Output()
  deleteItemEvent: EventEmitter<string> = new EventEmitter<string>();
  item;

  constructor(public dialog: MatDialog, private router: Router, private route: ActivatedRoute) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: { name: this.item.color }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.deleteItemEvent.emit(result);
      this.router.navigate(['items']);
    });
  }

  shouldShowDetails() {
    return this.router.url.includes('/items/');
  }

  ngOnInit() {
    this.item = this.route.snapshot.data['item'];
  }
}
