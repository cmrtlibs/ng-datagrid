import {Component, ContentChild, Input, OnChanges, SimpleChanges} from '@angular/core';
import {NgDatagridCellTemplateDirective} from './template/ng-datagrid-cell-template.directive';
import {NgDatagridEditTemplateDirective} from './template/ng-datagrid-edit-template.directive';
import {NgDatagridFooterTemplateDirective} from './template/ng-datagrid-footer-template.directive';
import {NgDatagridHeaderTemplateDirective} from './template/ng-datagrid-header-template.directive';
import {getValue} from '../utils.fn';
import {NgDatagridColumnFieldFn} from '../ng-datagrid.type';

@Component({
  selector: 'ng-datagrid-column',
  template: '',
})
export class NgDatagridColumnComponent implements OnChanges {

  @ContentChild(NgDatagridHeaderTemplateDirective) headerTemplate: NgDatagridHeaderTemplateDirective;
  @ContentChild(NgDatagridCellTemplateDirective) cellTemplate: NgDatagridCellTemplateDirective;
  @ContentChild(NgDatagridFooterTemplateDirective) footerTemplate: NgDatagridFooterTemplateDirective;
  @ContentChild(NgDatagridEditTemplateDirective) editTemplate: NgDatagridEditTemplateDirective;

  @Input() title: string;
  @Input() width: number;
  @Input() editable: boolean;
  @Input() field: string | NgDatagridColumnFieldFn;

  public fieldFn: NgDatagridColumnFieldFn = () => '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.field) {
      if (typeof changes.field.currentValue === 'function') {
        this.fieldFn = changes.field.currentValue;
      } else {
        this.fieldFn = changes.field.currentValue ? getValue(changes.field.currentValue) : () => '';
      }
    }
  }

}
