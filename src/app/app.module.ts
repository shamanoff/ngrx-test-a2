import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import { MainThreadComponent } from './main-thread/main-thread.component';

@NgModule({
  declarations: [
    AppComponent,
    MainThreadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
