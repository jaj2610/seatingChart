import { Injectable } from '@angular/core';

@Injectable()
export class SelectedService {

  public selectedSeat = {};

  constructor() { }

  public selectSeat(seat) {
    if (!seat.occupied) {
       this.selectedSeat = seat;
       console.log('Seat selected:', seat.seat, seat.row);
    } else {
      console.log('Seat occupied:', seat.seat, seat.row);
    }
  }
}
