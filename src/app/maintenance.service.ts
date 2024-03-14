import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  private apiUrl = 'http://localhost:3000/api/getMaintenance';
  private baseUrl = 'http://localhost:8082'; 
  private updateMaintenanceurl = 'http://localhost:3000/api/payMaintenance';
  constructor(private http: HttpClient) { }
  
//spring boot calls
  payMaintenance(payload:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/maintenance/pay`, payload);
  }
  

  getAllMaintenance(): Observable<any> {
    return this.http.get(`${this.baseUrl}/maintenance`);
  }

  searchMaintenance(flatname: string, flatownername: string, maintenance: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/maintenance/search`, { params: { flatname, flatownername, maintenance: maintenance.toString() } });
  }

  //nodejs calls
  getMaintenanceData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
  updateMaintenance(payload: any){
    return this.http.post<any>(this.updateMaintenanceurl, payload).pipe(
      catchError(error => {
        console.error('Error updating maintenance:', error);
        return throwError(error);
      })
    );
  }
  
}
