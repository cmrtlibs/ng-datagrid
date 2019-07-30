import {FormGroup} from '@angular/forms';
import {NgDatagridComponent} from './ng-datagrid.component';

export type NgDgToolbarPosition = 'top' | 'bottom' | 'both';

export interface NgDgEditOptions {
  rowIndex: number;
  formGroup: FormGroup;
  isNew: boolean;
}

export interface NgDgEmitDatas {
  sender: NgDatagridComponent;
  formGroup?: FormGroup;
  isNew?: boolean;
  dataItem?: any;
  rowIndex?: number;
}
