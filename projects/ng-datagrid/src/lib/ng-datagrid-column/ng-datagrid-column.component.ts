import {Component, ContentChild, Input} from '@angular/core';
import {NgDatagridCellTemplateDirective} from './template/ng-datagrid-cell-template.directive';
import {NgDatagridEditTemplateDirective} from './template/ng-datagrid-edit-template.directive';
import {NgDatagridFooterTemplateDirective} from './template/ng-datagrid-footer-template.directive';
import {NgDatagridHeaderTemplateDirective} from './template/ng-datagrid-header-template.directive';

@Component({
  selector: 'ng-datagrid-column',
  template: '',
})
export class NgDatagridColumnComponent {

  @ContentChild(NgDatagridHeaderTemplateDirective) headerTemplate: NgDatagridHeaderTemplateDirective;
  @ContentChild(NgDatagridCellTemplateDirective) cellTemplate: NgDatagridCellTemplateDirective;
  @ContentChild(NgDatagridFooterTemplateDirective) footerTemplate: NgDatagridFooterTemplateDirective;
  @ContentChild(NgDatagridEditTemplateDirective) editTemplate: NgDatagridEditTemplateDirective;

  @Input() title: string;
  @Input() field: string;
  @Input() width: number;
  @Input() editable: boolean;
ö
}
