import {NgModule} from '@angular/core';
import {NgDatagridComponent} from './ng-datagrid.component';
import {NgDatagridToolbarTemplateDirective} from './ng-datagrid-toolbar-template.directive';
import {NgDatagridAddCommandDirective} from './ng-datagrid-column/ng-datagrid-add-command.directive';
import {NgDatagridCancelCommandDirective} from './ng-datagrid-column/ng-datagrid-cancel-command.directive';
import {NgDatagridColumnComponent} from './ng-datagrid-column/ng-datagrid-column.component';
import {NgDatagridCellTemplateDirective} from './ng-datagrid-column/ng-datagrid-column-template.directive';
import {NgDatagridEditCommandDirective} from './ng-datagrid-column/ng-datagrid-edit-command.directive';
import {NgDatagridEditTemplateDirective} from './ng-datagrid-column/ng-datagrid-edit-template.directive';
import {NgDatagridFooterTemplateDirective} from './ng-datagrid-column/ng-datagrid-footer-template.directive';
import {NgDatagridHeaderTemplateDirective} from './ng-datagrid-column/ng-datagrid-header-template.directive';
import {NgDatagridRemoveCommandDirective} from './ng-datagrid-column/ng-datagrid-remove-command.directive';
import {NgDatagridSaveCommandDirective} from './ng-datagrid-column/ng-datagrid-save-command.directive';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    NgDatagridComponent,
    NgDatagridToolbarTemplateDirective,
    NgDatagridAddCommandDirective,
    NgDatagridCancelCommandDirective,
    NgDatagridColumnComponent,
    NgDatagridCellTemplateDirective,
    NgDatagridEditCommandDirective,
    NgDatagridEditTemplateDirective,
    NgDatagridFooterTemplateDirective,
    NgDatagridHeaderTemplateDirective,
    NgDatagridRemoveCommandDirective,
    NgDatagridSaveCommandDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    NgDatagridComponent,
    NgDatagridToolbarTemplateDirective,
    NgDatagridAddCommandDirective,
    NgDatagridCancelCommandDirective,
    NgDatagridColumnComponent,
    NgDatagridCellTemplateDirective,
    NgDatagridEditCommandDirective,
    NgDatagridEditTemplateDirective,
    NgDatagridFooterTemplateDirective,
    NgDatagridHeaderTemplateDirective,
    NgDatagridRemoveCommandDirective,
    NgDatagridSaveCommandDirective,
  ]
})
export class NgDatagridModule {
}
