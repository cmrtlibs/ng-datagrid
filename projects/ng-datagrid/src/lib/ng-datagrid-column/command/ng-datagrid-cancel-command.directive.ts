import {Directive, Host, HostListener, ViewContainerRef} from '@angular/core';
import {NgDatagridComponent} from '../../ng-datagrid.component';
import {NgDatagridColumnComponent} from '../ng-datagrid-column.component';

@Directive({
  selector: '[ngDatagridCancelCommand]'
})
export class NgDatagridCancelCommandDirective {

  private context: {
    $implicit: any,
    rowIndex: number,
    column: NgDatagridColumnComponent,
    isNew: boolean,
  };

  constructor(@Host() private grid: NgDatagridComponent, private vcr: ViewContainerRef) {
    this.context = (this.vcr as any)._view.context;
  }

  @HostListener('click')
  onClick() {
    this.grid.cancel.emit({
      dataItem: this.context.$implicit,
      formGroup: this.grid.editOptions ? this.grid.editOptions[this.context.rowIndex].formGroup : undefined,
      isNew: this.grid.editOptions ? this.grid.editOptions[this.context.rowIndex].isNew : undefined,
      rowIndex: this.context.rowIndex,
      sender: this.grid,
    });
  }

}
