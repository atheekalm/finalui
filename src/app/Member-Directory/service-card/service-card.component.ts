import { Profile } from './../../Models/profile';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit {
  @Input() serviceprovider: Profile;
  constructor() { }

  ngOnInit(): void {
  }

}
