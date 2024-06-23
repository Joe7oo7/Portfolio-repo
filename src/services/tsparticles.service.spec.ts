import { TestBed } from '@angular/core/testing';

import { TsparticlesService } from './tsparticles.service';

describe('TsparticlesService', () => {
  let service: TsparticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TsparticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
