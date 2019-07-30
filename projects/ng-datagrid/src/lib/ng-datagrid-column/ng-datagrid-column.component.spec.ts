import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDatagridColumnComponent } from './ng-datagrid-column.component';

describe('NgDatagridColumnComponent', () => {
  let component: NgDatagridColumnComponent;
  let fixture: ComponentFixture<NgDatagridColumnComponent>;

  beforeEach(async(() => {
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
