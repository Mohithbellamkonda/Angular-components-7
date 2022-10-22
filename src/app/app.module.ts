import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComComponent } from './com/com.component';
import { RomComponent } from './rom/rom.component';
import { BomComponent } from './bom/bom.component';
import { FourComponent } from './four/four.component';

@NgModule({
  declarations: [
    AppComponent,
    ComComponent,
    RomComponent,
    BomComponent,
    FourComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
