import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http: HttpClient) { }

  queryById(id): Observable<any>{
     return this.http.get(`${environment.apiUrl}/api/post/`+id);
  }

  httpGet(query): Observable<any>{return this.http.get<any>(`${environment.apiUrl}/api/query?query=` + query);}
}
