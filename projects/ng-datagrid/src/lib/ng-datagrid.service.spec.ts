import { TestBed } from '@angular/core/testing';

import { NgDatagridService } from './ng-datagrid.service';

describe('NgDatagridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgDatagridService = TestBed.get(NgDatagridService);
    expect(service).toBeTruthy();
  });
});
