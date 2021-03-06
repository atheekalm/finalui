import { CategoryComponent } from './../category/category.component';
import { LocationComponent } from './../location/location.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogLocaton() {
    this.dialog.open(LocationComponent);
  }
  openDialogCategory() {
    this.dialog.open(CategoryComponent);
  }

}
