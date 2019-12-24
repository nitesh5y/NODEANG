import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-top-bar></app-top-bar>  
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NGUI';
}
