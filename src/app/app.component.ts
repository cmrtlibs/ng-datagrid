import {Component, ViewChild} from '@angular/core';
import {sampleProducts} from './products';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {NgDatagridComponent} from 'ng-datagrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data = sampleProducts;
  @ViewChild(NgDatagridComponent, {static: true}) gridComponent: NgDatagridComponent;

  createFormGroup(data: any) {
    return new UntypedFormGroup({
      ProductID: new UntypedFormControl(data.ProductID),
      ProductName: new UntypedFormControl(data.ProductName),
      UnitPrice: new UntypedFormControl(data.UnitPrice),
      UnitsInStock: new UntypedFormControl(data.UnitsInStock),
    });
  }

  save(formGroup: UntypedFormGroup, isNew: boolean, rowIndex: number) {
    const item = formGroup.value;
    if (isNew) {
      this.data.push({...item, ProductID: this.data.length + 1});
    } else {
      this.data = this.data.map(d => d.ProductID === item.ProductID ? item : d);
    }
    this.gridComponent.closeRow(rowIndex);
  }

  remove(index: number) {
    this.data.splice(index, 1);
  }

}
