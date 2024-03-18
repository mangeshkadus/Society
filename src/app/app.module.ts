import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { MaintenanceComponent } from '../maintenance/maintenance.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { PaymaintenanceComponent } from 'src/paymaintenance/paymaintenance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from 'src/popup/popup.component';
import { LoginComponent } from 'src/login/login.component';
import { HeaderComponent } from 'src/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MaintenanceComponent,
    PaymaintenanceComponent,
    PopupComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [PopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
