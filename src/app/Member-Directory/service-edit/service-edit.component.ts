import { Profile } from './../../Models/profile';
import { take } from 'rxjs/operators';
import { AppuserService } from './../../Service/appuser.service';
import { AuthService } from './../../Service/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.component.html',
  styleUrls: ['./service-edit.component.css']
})
export class ServiceEditComponent implements OnInit {
  user: User;
  profile: Profile;
  constructor(private auth: AuthService, private appuser: AppuserService) {
    this.auth.currentUser$.pipe(take(1)).subscribe(user => this.user = user)
  }

  ngOnInit(): void {
    this.loadUser()
  }

  loadUser() {
    this.appuser.getprofilebyid(this.user.id).subscribe(pro => {
      this.profile = pro;
    })
  }

}
