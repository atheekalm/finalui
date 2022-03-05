import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { CreateprofileComponent } from './Member-Directory/createprofile/createprofile.component';
import { PhotoEditorComponent } from './Member-Directory/photo-editor/photo-editor.component';
import { ServiceListComponent } from './Member-Directory/service-list/service-list.component';
import { ServiceDetailsComponent } from './Member-Directory/service-details/service-details.component';
import { ServiceCardComponent } from './Member-Directory/service-card/service-card.component';
import { NavComponent } from './nav/nav.component';
import { LocationComponent } from './location/location.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({

  declarations: [
    AppComponent,
    AuthenticationComponent,
    MessagesComponent,
    HomeComponent,
    CreateprofileComponent,
    PhotoEditorComponent,
    ServiceListComponent,
    ServiceDetailsComponent,
    ServiceCardComponent,
    NavComponent,
    LocationComponent,
    DashboardComponent,
    NotfoundComponent
  ],

  imports: [
    BrowserModule,
    ToastrModule.forRoot({ positionClass: "toast-top-right" }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
