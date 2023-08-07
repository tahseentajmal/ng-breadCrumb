import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-breadcrumb';
  shortCode : any;
  
  receiveMessage($event : any){
    this.shortCode= '('+$event+')';
  }
  

}
