import {UntypedFormGroup} from '@angular/forms';
import {NgDatagridComponent} from './ng-datagrid.component';

export type NgDatagridToolbarPosition = 'top' | 'bottom' | 'both';

export interface NgDatagridEditOptions {
  rowIndex: number;
  formGroup: UntypedFormGroup;
  isNew: boolean;
}

export interface NgDatagridDataEmit {
  sender: NgDatagridComponent;
  formGroup?: UntypedFormGroup;
  isNew?: boolean;
  dataItem?: any;
  rowIndex?: number;
}

export interface NgDatagridColumnFieldFn {
  (dataItem: object): any;
}
