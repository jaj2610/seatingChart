import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {
  @Input() seat = {};
  @Input() selected = false;

  constructor() { }

  ngOnInit() {
  }

}
