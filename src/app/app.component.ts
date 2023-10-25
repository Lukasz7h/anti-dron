import { Component, ViewEncapsulation } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../../node_modules/bootstrap/scss/bootstrap.scss']
})

export class AppComponent {

  title: string = 'anti-drone';
  private socketSubject;

  constructor(){
    this.socketSubject = webSocket("ws://localhost:3000/");
    this.socketSubject.subscribe((data) => {
      console.log(data)
    });

    this.socketSubject.next({message: "ta"})
  }

}