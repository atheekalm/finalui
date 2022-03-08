import { ServiceEditComponent } from './Member-Directory/service-edit/service-edit.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ServiceDetailsComponent } from './Member-Directory/service-details/service-details.component';
import { ServiceCardComponent } from './Member-Directory/service-card/service-card.component';
import { CreateprofileComponent } from './Member-Directory/createprofile/createprofile.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MessagesComponent } from './messages/messages.component';
import { ServiceListComponent } from './Member-Directory/service-list/service-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'login', component: AuthenticationComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'service/:id', component: ServiceDetailsComponent },
      { path: 'profile/edit', component: ServiceEditComponent },
      { path: 'service', component: ServiceDetailsComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'card', component: ServiceCardComponent },
      { path: 'createprofile', component: CreateprofileComponent },
      { path: 'services', component: ServiceListComponent },
    ]
  },
  { path: 'not-found', component: NotfoundComponent },
  { path: '**', component: AuthenticationComponent, pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
