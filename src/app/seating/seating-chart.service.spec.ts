import { TestBed, inject } from '@angular/core/testing';

import { SeatingChartService } from './seating-chart.service';

describe('SeatingChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeatingChartService]
    });
  });

  it('should be created', inject([SeatingChartService], (service: SeatingChartService) => {
    expect(service).toBeTruthy();
  }));
});
