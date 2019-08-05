import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[ngDatagridCellTemplate]'
})
export class NgDatagridCellTemplateDirective {

  constructor(public templateRef: TemplateRef<any>) {
  }

}
