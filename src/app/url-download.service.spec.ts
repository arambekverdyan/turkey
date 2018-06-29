import { TestBed, inject } from '@angular/core/testing';

import { UrlDownloadService } from './url-download.service';
describe('UrlDownloadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlDownloadService]
    });
  });

  it('should be created', inject([UrlDownloadService], (service: UrlDownloadService) => {
    expect(service).toBeTruthy();
  }));
});
