import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { RedButtonComponent } from './components/red-button/red-button.component';
import { DisplayComponent } from './components/display/display.component';
import { GreenButtonComponent } from './components/green-button/green-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    RedButtonComponent,
    DisplayComponent,
    GreenButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
