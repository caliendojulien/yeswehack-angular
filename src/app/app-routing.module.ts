import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {YwhComponent} from "./components/ywh/ywh.component";

const routes: Routes = [
  {path: '**', component: YwhComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
