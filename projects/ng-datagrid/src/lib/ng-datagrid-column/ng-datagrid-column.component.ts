import {Component, ContentChild, Input} from '@angular/core';
import {NgDatagridCellTemplateDirective} from './ng-datagrid-cell-template.directive';
import {NgDatagridEditTemplateDirective} from './ng-datagrid-edit-template.directive';
import {NgDatagridFooterTemplateDirective} from './ng-datagrid-footer-template.directive';
import {NgDatagridHeaderTemplateDirective} from './ng-datagrid-header-template.directive';

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

}
