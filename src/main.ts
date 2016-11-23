// Polyfills
import 'core-js/client/shim';
import 'zone.js/dist/zone';

import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
