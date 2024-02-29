import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   {
  title = 'ngapp';
  res:any;
  dataItems: any[] = [];
  private apiUrl = 'http://localhost:3000/api/data';

  constructor(private http: HttpClient) {
    this.getDataFromApi();
  }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  getDataFromApi(): void {
    this.getData().subscribe(
      (data) => {
        this.dataItems = data; // Assuming the API returns an array of items with a 'name' property
        console.log(this.dataItems,'hh')
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
}
}
