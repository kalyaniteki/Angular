import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular2wayBinding';
  name:string="raj";
  onclick():void
  {
    console.log(this.name);

  }
}
