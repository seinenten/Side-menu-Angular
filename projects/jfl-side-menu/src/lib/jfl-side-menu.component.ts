import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500'
}

@Component({
  selector: 'lib-jfl-side-menu',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './jfl-side-menu.component.html',
  styles: '',
})
export class JflSideMenuComponent {

  isAuthenticated = input(false);

  titleColor = input<TitleColor>(TitleColor.purple);

  signOut = output();
  signIn = output();

}
