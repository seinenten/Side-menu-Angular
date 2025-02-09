import { TestBed } from '@angular/core/testing';

import { JflSideMenuService } from './jfl-side-menu.service';

describe('JflSideMenuService', () => {
  let service: JflSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JflSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
