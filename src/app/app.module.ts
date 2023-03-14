import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';

import localeEs from '@angular/common/locales/es-NI';
import localeFr from '@angular/common/locales/fr-RE';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, AppRouterModule, MainModule],
  providers: [
    // { provide: LOCALE_ID, useValue: 'es-NI' },
    // { provide: LOCALE_ID, useValue: 'fr-RE' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
