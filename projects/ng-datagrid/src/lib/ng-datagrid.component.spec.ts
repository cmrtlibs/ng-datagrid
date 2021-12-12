import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgDatagridComponent } from './ng-datagrid.component';

describe('NgDatagridComponent', () => {
  let component: NgDatagridComponent;
  let fixture: ComponentFixture<NgDatagridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDatagridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDatagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
