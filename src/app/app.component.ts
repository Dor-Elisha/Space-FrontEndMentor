import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Space-FrontEndMentor';

  navBarVisibility: boolean = false;

  toggleNavBar():void {
    this.navBarVisibility = !this.navBarVisibility;
  }
}
