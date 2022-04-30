import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PollbuilderComponent} from "./pollbuilder/pollbuilder.component";

const routes: Routes = [
  {path: 'polls/create', component: PollbuilderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

