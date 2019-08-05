import {
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import {NgDgEditOptions, NgDgEmitDatas, NgDgToolbarPosition} from './ng-datagrid.type';
import {NgDatagridColumnComponent} from './ng-datagrid-column/ng-datagrid-column.component';
import {NgDatagridToolbarTemplateDirective} from './ng-datagrid-toolbar-template.directive';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'ng-datagrid',
  templateUrl: './ng-datagrid.component.html',
  styleUrls: ['./ng-datagrid.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NgDatagridComponent {

  @HostBinding('class') class = 'ng-datagrid';

  @Input() data: any[] = [];
  @Input() pageable: boolean;
  @Input() height: number;
  @Input() toolbarPosition: NgDgToolbarPosition = 'top';

  @Output() edit = new EventEmitter<NgDgEmitDatas>();
  @Output() save = new EventEmitter<NgDgEmitDatas>();
  @Output() cancel = new EventEmitter<NgDgEmitDatas>();
  @Output() remove = new EventEmitter<NgDgEmitDatas>();
  @Output() add = new EventEmitter<NgDgEmitDatas>();

  @ContentChildren(NgDatagridColumnComponent) columns: QueryList<NgDatagridColumnComponent>;
  @ContentChild(NgDatagridToolbarTemplateDirective, {static: false}) toolbar: NgDatagridToolbarTemplateDirective;

  editOptions: NgDgEditOptions;

  hasFooter = (i: NgDatagridColumnComponent) => !!i.footerTemplate;

  getField(element: any = {}, fieldGroup: string = '') {
    const fields = fieldGroup.split('.');
    let data = element;
    for (const field of fields) {
      data = typeof data === 'object' ? data[field] : undefined;
    }
    return data;
  }

  editRow(rowIndex: number, formGroup: FormGroup): void {
    this.editOptions = {rowIndex, formGroup, isNew: false};
  }

  addRow(formGroup: FormGroup): void {
    this.editOptions = {rowIndex: -1, formGroup, isNew: true};
  }

  closeRow(rowIndex: number) {
    if (this.editOptions.rowIndex === rowIndex) {
      this.editOptions = undefined;
    }
  }

}
