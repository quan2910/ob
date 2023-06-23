import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistricComponent } from './component/distric/distric.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { DrivenFormComponent } from './component/driven-form/driven-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { ObservableComponent } from './component/observable/observable.component';
@NgModule({
  declarations: [
    AppComponent,
    DistricComponent,
    PageNotFoundComponent,
    DrivenFormComponent,
    ReactiveFormComponent,
    ObservableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
