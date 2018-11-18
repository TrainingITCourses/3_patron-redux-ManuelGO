import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule, MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CriteriaComponent } from './criteria/criteria.component';
import { ListResultComponent } from './list-result/list-result.component';
import { HttpClientModule } from '@angular/common/http';
import { ListCriteriaComponent } from './list-criteria/list-criteria.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CriteriaComponent,
    ListResultComponent,
    ListCriteriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
