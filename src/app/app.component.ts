import {Component, ViewChild} from '@angular/core';
import {sampleProducts} from './products';
import {FormControl, FormGroup} from '@angular/forms';
import {NgDatagridComponent} from '../../projects/ng-datagrid/src/lib/ng-datagrid.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data = sampleProducts;
  @ViewChild(NgDatagridComponent, {static: true}) gridComponent: NgDatagridComponent;

  createFormGroup(data: any) {
    return new FormGroup({
      ProductID: new FormControl(data.ProductID),
      ProductName: new FormControl(data.ProductName),
      UnitPrice: new FormControl(data.UnitPrice),
      UnitsInStock: new FormControl(data.UnitsInStock),
    });
  }

  save(formGroup: FormGroup, isNew: boolean, rowIndex: number) {
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
