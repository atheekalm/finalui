import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})

export class ServiceDetailsComponent implements OnInit {
  public list: griddata[] = [];
  constructor() { }

  ngOnInit() {
    this.list = [
      { rows: 2, cols: 2, data: 1 },
      { rows: 1, cols: 1, data: 2 },
      { rows: 2, cols: 1, data: 3 },
      { rows: 1, cols: 1, data: 4 },

      { rows: 1, cols: 1, data: 5 },
      { rows: 2, cols: 2, data: 6 },
      { rows: 1, cols: 1, data: 7 },
      { rows: 1, cols: 1, data: 8 },
      { rows: 1, cols: 1, data: 9 },

      { rows: 1, cols: 1, data: 10 },
      { rows: 1, cols: 1, data: 11 },
      { rows: 2, cols: 2, data: 12 },
      { rows: 1, cols: 1, data: 13 },
      { rows: 1, cols: 1, data: 14 },

    ];
  }

}

interface griddata {
  rows: number,
  cols: number,
  data: number
};