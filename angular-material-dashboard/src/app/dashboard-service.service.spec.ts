import { TestBed } from '@angular/core/testing';

import { DashboardServiceService } from './dashboard-service.service';

describe('DashboardServiceService', () => {
  let service: DashboardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
