import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { APICONSTANTS } from '../constants/api-constants';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private _http: HttpClient) { }

  getSponsers() {
    return this._http.get(`${environment.apiUrl}${APICONSTANTS.SPONSORS}`);
  }

  getGalleries() {
    return this._http.get(`${environment.apiUrl}${APICONSTANTS.GALLERIES}`);
  }
}
