import {NgModule} from '@angular/core';
import {RepresentationComponent} from './representation.component';
import {BrowserModule} from '@angular/platform-browser';
import {DxChartModule} from 'devextreme-angular';

@NgModule({
  imports: [
    BrowserModule,
    DxChartModule
  ],
  declarations: [
    RepresentationComponent
  ],
  entryComponents: [],
  exports: [
  ],
  providers: [
  ],
  bootstrap: [
  ]
})
export class RepresentationModule {

}
