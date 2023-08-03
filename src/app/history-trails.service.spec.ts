import { TestBed } from '@angular/core/testing';

import { HistoryTrailsService } from './history-trails.service';

describe('HistoryTrailsService', () => {
  let service: HistoryTrailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryTrailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
