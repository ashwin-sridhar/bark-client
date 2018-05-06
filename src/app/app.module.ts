import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppUserlocComponent } from './app-userloc/app-userloc.component';
import { AgmCoreModule } from '@agm/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TicketsComponent } from './tickets/tickets.component';

const ROUTES:Routes=[
  {path:'',component:AppUserlocComponent},
  {path:'tickets',component:TicketsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppUserlocComponent,
    TicketsComponent,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDlhH3RnxkXPZ1a0jV1KxwBc6uwb_cvpaM'
    }),
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
