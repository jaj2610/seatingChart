import { TestBed, inject } from '@angular/core/testing';

import { SeatingDataService } from './seating-data.service';

describe('SeatingDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeatingDataService]
    });
  });

  it('should be created', inject([SeatingDataService], (service: SeatingDataService) => {
    expect(service).toBeTruthy();
  }));
});
