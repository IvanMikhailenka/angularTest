import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';

export let InjectorInstance: Injector;

import {ROUTES} from './app.routes';

import {RepresentationService} from './services/representation/representation.service';
import {MockHttpRepresentationService} from './services/representation/mock-http-representation.service';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {RepresentationModule} from './components/representation/representation.module';

const APP_PROVIDERS = [
  {provide: RepresentationService, useClass: MockHttpRepresentationService}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    }),
    RepresentationModule,
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {
  /*  constructor(private injector: Injector) {
      InjectorInstance = this.injector;
    }*/
}
