import { TestBed, inject } from '@angular/core/testing';

import { InMemoryRepository } from './inmemory-repository.service';

describe('InmemoryRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryRepository]
    });
  });

  it('should be created', inject([InMemoryRepository], (service: InMemoryRepository) => {
    expect(service).toBeTruthy();
  }));
});
