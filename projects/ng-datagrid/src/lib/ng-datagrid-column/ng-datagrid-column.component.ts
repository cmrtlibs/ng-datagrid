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

  @ContentChild(NgDatagridHeaderTemplateDirective, {static: false}) headerTemplate: NgDatagridHeaderTemplateDirective;
  @ContentChild(NgDatagridCellTemplateDirective, {static: false}) cellTemplate: NgDatagridCellTemplateDirective;
  @ContentChild(NgDatagridFooterTemplateDirective, {static: false}) footerTemplate: NgDatagridFooterTemplateDirective;
  @ContentChild(NgDatagridEditTemplateDirective, {static: false}) editTemplate: NgDatagridEditTemplateDirective;

  @Input() title: string;
  @Input() field: string;
  @Input() width: number;
  @Input() sortable: boolean;

}
