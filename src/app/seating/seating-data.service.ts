import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SeatingDataService {

  private path: string = 'assets/seats.json'; // TODO allow configuration
  // public seatingData;

  constructor(private http: Http) {
  }

  public getSeatingData(path?: string): Observable<any> {
    if (!path) {
      path = this.path;
    }

    return this.http.get(path)
      .map((response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Error'));;
  }

}
