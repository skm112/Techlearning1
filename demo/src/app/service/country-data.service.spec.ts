import { TestBed, inject } from '@angular/core/testing';

import { CountryDataService } from './country-data.service';

describe('CountryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryDataService]
    });
  });

  it('should be created', inject([CountryDataService], (service: CountryDataService) => {
    expect(service).toBeTruthy();
  }));
});
