import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  api_url = "http://localhost:3000/";
  constructor(private httpClient: HttpClient) { }


  getData(api:any): Observable<any> {
    return this.httpClient.get(this.api_url + api);
  }

  saveData(api: any, postData: any): Observable<any> {
    return this.httpClient.post(`${this.api_url + api}`, postData);
  }

  deleteData(id: string) {
    return this.httpClient.delete(`${this.api_url}project/${id}`);
  }

}
