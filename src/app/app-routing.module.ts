import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./component/page-not-found/page-not-found.component";
import {DistricComponent} from "./component/distric/distric.component";
import {DrivenFormComponent} from "./component/driven-form/driven-form.component";
import {ReactiveFormComponent} from "./component/reactive-form/reactive-form.component";
import {ObservableComponent} from "./component/observable/observable.component";

const routes: Routes = [
  { path: 'district', component: DistricComponent },
  { path: 'driven-form', component: DrivenFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'observable', component: ObservableComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
