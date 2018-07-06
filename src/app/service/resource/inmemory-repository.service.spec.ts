import { TestBed, inject } from '@angular/core/testing';

import { InmemoryRepositoryService } from './inmemory-repository.service';

describe('InmemoryRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InmemoryRepositoryService]
    });
  });

  it('should be created', inject([InmemoryRepositoryService], (service: InmemoryRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
