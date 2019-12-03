import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
 templateUrl: './app.component.html',
})


export class AppComponent { 
  name = 'Angular'; 
  public employeelist:emp[] =[];

    public constructor() {

      for(var i = 0; i < 2000;i++){
      this.employeelist.push({
            name:"abc" +i,
            male:false
          })
      }
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

export class emp{
  name:String;
  male:boolean;
}