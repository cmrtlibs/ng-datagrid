import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[ngDatagridToolbarTemplate]'
})
export class NgDatagridToolbarTemplateDirective {

  constructor(public templateRef: TemplateRef<any>) { }

}
