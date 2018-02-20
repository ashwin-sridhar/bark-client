import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppUserlocComponent } from './app-userloc/app-userloc.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppUserlocComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDlhH3RnxkXPZ1a0jV1KxwBc6uwb_cvpaM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
