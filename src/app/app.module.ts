import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import { MainThreadComponent } from './main-thread/main-thread.component';
import {DbService} from './shared/db.service';
import { MessageComponent } from './message/message.component';
import {reducer} from './reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    MainThreadComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension()

  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
