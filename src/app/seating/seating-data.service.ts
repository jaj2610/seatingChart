import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class SeatingDataService {

  private path = 'assets/seats.json'; // TODO allow configuration

  constructor(private http: HttpClient) {
  }

  public getSeatingData(path?: string): Observable<any> {
    if (!path) {
      path = this.path;
    }

    return this.http.get(path)
      .catch((error: any) => Observable.throw(error.json().error || 'Error'));
  }

}
