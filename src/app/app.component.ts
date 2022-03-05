import { AuthService } from './Service/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from './Models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'finalProject';

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.setcurrentuser()
  }


  setcurrentuser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.auth.setcurrentuser(user);
  }
}
