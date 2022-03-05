import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  opened = false;
  
  constructor(public auth: AuthService, private router: Router, private toast: ToastrService) { }

  ngOnInit(): void {
  }


  logout() {
    this.auth.logout();
  }
}
