import { Component, signal } from '@angular/core';
import { JflSideMenuComponent, TitleColor } from 'jfl-side-menu';

@Component({
  selector: 'app-root',
  imports: [JflSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jfl-testbed-app';

  isAuthenticated = signal(true);

  TitleColor = TitleColor;


}
