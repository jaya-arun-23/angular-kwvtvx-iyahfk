import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from '../app.component';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule,CheckBoxModule, FormsModule  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/