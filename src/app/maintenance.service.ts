import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  private apiUrl = 'http://localhost:3000/api/getMaintenance'; // Update with your actual API endpoint
  
  constructor(private http: HttpClient) { }

  getMaintenanceData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  private updateMaintenanceurl = 'http://localhost:3000/api/payMaintenance';
  updateMaintenance(payload: any){
    return this.http.post<any>(this.updateMaintenanceurl, payload).pipe(
      catchError(error => {
        console.error('Error updating maintenance:', error);
        // Optionally, you can throw the error to propagate it further
        return throwError(error);
      })
    );
  }
  
}
