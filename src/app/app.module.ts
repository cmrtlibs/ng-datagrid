import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgDatagridModule} from '../../projects/ng-datagrid/src/lib/ng-datagrid.module';

@NgModule({
  imports: [
    BrowserModule,
    NgDatagridModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
