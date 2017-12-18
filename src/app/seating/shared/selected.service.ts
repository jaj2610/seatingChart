import { Injectable } from '@angular/core';

@Injectable()
export class SelectedService {

  public selectedSeat = {};

  constructor() { }

  public selectSeat(seat) {
    if (!seat.occupied) {
      if (seat === this.selectedSeat) {
        this.selectedSeat = {};
        console.log('Seat unselected:', seat.seat, seat.row);
      } else {
         this.selectedSeat = seat;
         console.log('Seat selected:', seat.seat, seat.row);
      }
    } else {
      console.log('Seat occupied:', seat.seat, seat.row);
    }
  }
}
