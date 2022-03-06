import { Component, OnInit } from '@angular/core';
import { City, District } from '../Models/location';
import { LocationService } from '../Service/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  Districts: District[];
  Cities: City[];
  SelecteCity: City[];
  constructor(private location: LocationService) { }

  ngOnInit() {
    this.getdistricts();
    this.getcities();
  }

  GetSelectedCities(id: number) {
    if (this.Cities.length) {
      this.SelecteCity = this.Cities.filter(x => x.districtId === id);
      console.log(this.SelecteCity);
      return this.SelecteCity
    }
    return null

  }

  getcities() {
    this.location.getcities().subscribe(cities => {
      this.Cities = cities
    })
  }

  getdistricts() {
    this.location.getdistricts().subscribe(districts => {
      this.Districts = districts;
    })
  }

}