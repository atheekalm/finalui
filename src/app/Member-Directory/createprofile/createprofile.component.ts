import { Component, OnInit } from '@angular/core';
import { District, City } from 'src/app/Models/location';
import { LocationService } from 'src/app/Service/location.service';

@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.component.html',
  styleUrls: ['./createprofile.component.css']
})
export class CreateprofileComponent implements OnInit {

  Districts: District[];
  Cities: City[];
  SelecteCity: City[];

  constructor(private location: LocationService) { }
  selectedDistrict:string='';
  ngOnInit() {
    this.getcities();
    this.getdistricts();
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

  GetSelectedCities(id: number) {
    console.log(id);
    if (this.Cities != null) {
      this.SelecteCity = this.Cities.filter(x => x.districtId == id);
      console.log(this.SelecteCity);
      return this.SelecteCity
    }
    return null
  }

}