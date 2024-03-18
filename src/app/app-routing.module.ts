import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/auth.guard';
import { HomeComponent } from 'src/home/home.component';
import { LoginComponent } from 'src/login/login.component';
import { MaintenanceComponent } from 'src/maintenance/maintenance.component';
import { PaymaintenanceComponent } from 'src/paymaintenance/paymaintenance.component';

const routes: Routes = [
  {path: '', component: LoginComponent , pathMatch: 'full'},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'maintenance', component: MaintenanceComponent , canActivate: [AuthGuard]},
  { path:'paymaintenance',component:PaymaintenanceComponent, canActivate: [AuthGuard]}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
