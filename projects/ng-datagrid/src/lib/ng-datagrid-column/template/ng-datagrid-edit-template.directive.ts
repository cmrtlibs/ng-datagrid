import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[ngDatagridEditTemplate]'
})
export class NgDatagridEditTemplateDirective {

  constructor(public templateRef: TemplateRef<any>) { }

}
