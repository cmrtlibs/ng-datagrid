import {FormGroup} from '@angular/forms';
import {NgDatagridComponent} from './ng-datagrid.component';

export type NgDatagridToolbarPosition = 'top' | 'bottom' | 'both';

export interface NgDatagridEditOptions {
  rowIndex: number;
  formGroup: FormGroup;
  isNew: boolean;
}

export interface NgDatagridDataEmit {
  sender: NgDatagridComponent;
  formGroup?: FormGroup;
  isNew?: boolean;
  dataItem?: any;
  rowIndex?: number;
}
