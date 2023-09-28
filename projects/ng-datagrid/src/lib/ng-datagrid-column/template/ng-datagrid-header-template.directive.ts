import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[ngDatagridHeaderTemplate]'
})
export class NgDatagridHeaderTemplateDirective {

  constructor(public templateRef: TemplateRef<any>) {
  }

}
