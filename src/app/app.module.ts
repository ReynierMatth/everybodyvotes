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
import {MatButtonModule} from "@angular/material/button";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";

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
    AngularFireDatabaseModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
