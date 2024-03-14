import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MaintenanceService } from 'src/app/maintenance.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {

  flats: any[] = [];
  maintenanceData: any[] = [];
  filteredFlats: any = [];
  flatFilterForm = new FormGroup({
    flatNo: new FormControl(''),
    flatOwner: new FormControl(''),
    amount: new FormControl(''),
  });
  amount: number = 0;
  

  constructor(private maintenanceService: MaintenanceService) {}

  ngOnInit(): void {
    this.getMaintenanceData();
    this.maintenancefromsts();
  }
  //data from sts
  maintenancefromsts(): void {
    this.maintenanceService.getAllMaintenance()
      .subscribe(data => {
        this.maintenanceData = data;
        console.log(data)
      });
  }
  //data from nodejs
  getMaintenanceData(): void {
    this.maintenanceService.getMaintenanceData()
      .subscribe(data => {
        this.maintenanceData = data;
      });
  }

  filterFlatsByMaintenanceDue() {
    const flatNo = this.flatFilterForm.value.flatNo;
    this.filteredFlats = this.maintenanceData.filter(flat => flat.flatname === 'Flat ' + flatNo);
  }

  filterFlatOwnerByMaintenanceDue() {
    const flatOwner = this.flatFilterForm.value.flatOwner;
    this.filteredFlats = this.maintenanceData.filter(flat => flat.flatownername === flatOwner);
  }

  filterFlatByMaintenanceDueAmt() {
    const amt = this.flatFilterForm?.value?.amount;
    if (amt !== undefined && amt !== null) {
      this.amount = parseInt(amt, 10); 
      this.filteredFlats = this.maintenanceData.filter(flat => flat && typeof flat.maintenance === 'number' && flat.maintenance > this.amount);
    }
  }
}
