import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollsComponent } from './polls/polls.component';
import { PollbuilderComponent } from './pollbuilder/pollbuilder.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import { MatIconModule} from "@angular/material/icon";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    PollsComponent,
    PollbuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'everybodyvote'),
    AngularFireAuthModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
