import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[ngDatagridFooterTemplate]'
})
export class NgDatagridFooterTemplateDirective {

  constructor(public templateRef: TemplateRef<any>) { }

}
