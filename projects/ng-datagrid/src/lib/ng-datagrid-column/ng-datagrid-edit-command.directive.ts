import {Directive, Host, HostListener, ViewContainerRef} from '@angular/core';
import {NgDatagridColumnComponent} from './ng-datagrid-column.component';
import {NgDatagridComponent} from '../ng-datagrid.component';
import {NgDatagridCellTemplateDirective} from './ng-datagrid-cell-template.directive';

@Directive({
  selector: '[ngDatagridEditCommand]'
})
export class NgDatagridEditCommandDirective {

  private context: {
    $implicit: any,
    rowIndex: number,
    column: NgDatagridColumnComponent,
    isNew: boolean,
  };

  constructor(@Host() private grid: NgDatagridComponent, @Host() cellTemp: NgDatagridCellTemplateDirective, private vcr: ViewContainerRef) {
    // this.context = (this.vcr as any)._view.context;
    // console.log(cellTemp)
  }

  @HostListener('click')
  onClick() {
    this.grid.edit.emit({
      dataItem: this.context.$implicit,
      formGroup: this.grid.editOptions ? this.grid.editOptions[this.context.rowIndex].formGroup : undefined,
      isNew: this.grid.editOptions ? this.grid.editOptions[this.context.rowIndex].isNew : undefined,
      rowIndex: this.context.rowIndex,
      sender: this.grid,
    });
  }

}
