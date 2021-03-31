import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  getAllOperations(): Observable<any> {
    const url = '/operations';

    return this._http.get(url);
  }
}
