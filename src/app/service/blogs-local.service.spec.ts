import { TestBed } from '@angular/core/testing';

import { BlogsLocalService } from './blogs-local.service';

describe('BlogsLocalService', () => {
  let service: BlogsLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogsLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
