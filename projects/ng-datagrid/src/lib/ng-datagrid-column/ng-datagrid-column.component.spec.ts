import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgDatagridColumnComponent } from './ng-datagrid-column.component';

describe('NgDatagridColumnComponent', () => {
  let component: NgDatagridColumnComponent;
  let fixture: ComponentFixture<NgDatagridColumnComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDatagridColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDatagridColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
