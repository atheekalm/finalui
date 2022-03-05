import { Component, OnInit } from '@angular/core';
import { District } from '../Models/location';
import { LocationService } from '../Service/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  Districts: any;
  Cities: any;
  SelecteCity: any;
  constructor(private location: LocationService) { }

  ngOnInit() {
    this.getdistricts();
    this.getcities();
  }
  
  GetSelectedCity(id: number) {
    if (this.Cities){
      this.Cities.filter(x=>x)
    }
  }
  
  getcities() {
    this.location.cities().subscribe(res => {
      this.Cities = res
    })
  }

  getdistricts() {
    this.location.districts().subscribe(res => {
      this.Districts = res;
    })
  }

}