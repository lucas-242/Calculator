import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { RoutesModule } from './routes/routes.module';
import { LayoutModule } from './layout/layout.module';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    LayoutModule,
    RoutesModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
