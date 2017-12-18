import { Component, OnInit, Input } from '@angular/core';
import { Seat } from './seat.interface';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {
  @Input() seat: Seat;

  private _selected = false;

  @Input() public set selected(val) {
    this.styles['selected'] = val;
    this._selected = val;
  }

  public get selected() {
    return this._selected;
  }

  public tooltip = '';

  styles = {};

  constructor() { }

  ngOnInit() {
    // set styles based on seat values
    this.styles = {
      'premium': this.seat.premium,
      'occupied': this.seat.occupied,
      'overWing': this.seat.overWing,
      'selected': this._selected
    };

    this.tooltip = 'Seat ' + this.seat.row + this.seat.seat + ': ' + this.seat.class + ' class';
    if (this.seat.premium) {
      this.tooltip += ' (premium)';
    }
  }

}
