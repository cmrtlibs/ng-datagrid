import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[ngDatagridColumnTemplate]'
})
export class NgDatagridColumnTemplateDirective {

  constructor(public templateRef: TemplateRef<any>) {
  }

}
