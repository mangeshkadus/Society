import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/home/home.component';
import { MaintenanceComponent } from 'src/maintenance/maintenance.component';
import { PaymaintenanceComponent } from 'src/paymaintenance/paymaintenance.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, // Default route
  { path: 'maintenance', component: MaintenanceComponent },
  { path:'paymaintenance',component:PaymaintenanceComponent}
  // Add more routes as needed
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
