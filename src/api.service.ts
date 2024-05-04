import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  private urlApi = 'https://webserver.prolinesoftware.cl/academy-api/public/api/v1/';
  private finalUrl = "";
  constructor(private http: HttpClient) { }

  public getData(api: string | undefined): Observable<any>{
    this.finalUrl=this.urlApi + api;
    return this.http.get<any>(this.finalUrl);
  }
}
