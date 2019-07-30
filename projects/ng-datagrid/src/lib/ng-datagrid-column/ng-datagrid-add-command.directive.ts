import {Directive, Host, HostListener} from '@angular/core';
import {NgDatagridComponent} from '../ng-datagrid.component';

@Directive({
  selector: '[ngDatagridAddCommand]'
})
export class NgDatagridAddCommandDirective {

  constructor(@Host() private grid: NgDatagridComponent) { }

  @HostListener('click')
  onClick() {
    this.grid.add.emit({
      sender: this.grid,
    });
  }

}
