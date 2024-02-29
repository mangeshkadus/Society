import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MaintenanceService } from 'src/app/maintenance.service';
import { ModalService } from 'src/modal.service';
import { PopupService } from 'src/popup.service';

@Component({
  selector: 'app-paymaintenance',
  templateUrl: './paymaintenance.component.html',
  styleUrls: ['./paymaintenance.component.scss']
})
export class PaymaintenanceComponent implements OnInit {
  maintenanceForm: FormGroup;

  constructor(private fb: FormBuilder, private maintenanceService: MaintenanceService,private modalService: ModalService,private popupService: PopupService) {
    this.maintenanceForm = new FormGroup({ // Initialize maintenanceForm in the constructor
      flatNo: new FormControl(''),
      amount: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.maintenanceForm = this.fb.group({
      flatName: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.maintenanceForm.valid) {
      const payload = {
        flatname: 'Flat ' + this.maintenanceForm.value.flatName,
        maintenance: this.maintenanceForm.value.amount
      };

      // Call maintenance service to update maintenance
      this.maintenanceService.updateMaintenance(payload).subscribe(res => {
        console.log(res);
      });
    }
  }
}
