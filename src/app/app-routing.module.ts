import { ServiceCardComponent } from './Member-Directory/service-card/service-card.component';
import { CreateprofileComponent } from './Member-Directory/createprofile/createprofile.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MessagesComponent } from './messages/messages.component';
import { ServiceListComponent } from './Member-Directory/service-list/service-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:AuthenticationComponent},
  {path:'services',component:ServiceListComponent},
  {path:'messages',component:MessagesComponent},
  {path:'card',component:ServiceCardComponent},
  {path:'createprofile',component:CreateprofileComponent},
  {path:'services',component:ServiceListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
