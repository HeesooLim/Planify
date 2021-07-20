import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/services/Utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Variables that determines the navigation bar's colour
  isMenuVisible: boolean;
  isScrollDowned: boolean;

  constructor(private utils: Utils) {
  }

  ngOnInit() {
    // Get navbar element to change its colour when scroll down
    let navbar = <HTMLElement>document.querySelector('nav.navbar');

    // When the user scrolls down or up
    window.onscroll = () => {
      // If current scroll bar's position is greater than or equal to the navbar's height
      if (document.body.scrollTop >= navbar.clientHeight || document.documentElement.scrollTop >= navbar.clientHeight) {
        // Set the value to make the background dark
        this.isScrollDowned = true;
      }
      else {
        // Set the value to make the background dark
        this.isScrollDowned = false;
      }
      // Change the navigation bar colour based on the scroll position and the visibility of the nav menu
      this.changeNavbarColorDark(this.isScrollDowned || this.isMenuVisible);
    };
  }

  /**
   * Method executed when the menu button is clicked in a small screen.
   * - Change the background of the navbar.
   * - Open or close the navbar menu.
   *
   * @memberof HeaderComponent
   */
  onClickNavbarMenu() {
    // nav menu to change visibility
    let navMenu = document.querySelector('#navbarSupportedContent');

    // Change the visibility of the menu
    this.utils.toggleCollapse(navMenu);

    // Set the value if the nav menu is visible
    this.isMenuVisible = document.querySelector('#navbarSupportedContent').classList.contains('show');

    // Change the navigation bar colour based on the scroll position and the visibility of the nav menu
    this.changeNavbarColorDark(this.isScrollDowned || this.isMenuVisible);
  }

  /**
   * Change the colour of the navbar to dark or transparent
   *
   * @param {boolean} isDark If this value is true, navbar's colour is changed to dark.
   * @memberof HeaderComponent
   */
  changeNavbarColorDark(isDark: boolean) {
    // Get navbar element to change its colour when scroll down
    let navbar = <HTMLElement>document.querySelector('nav.navbar');

    // If is dark, change its colour to dark
    if (isDark) {
      navbar.classList.add("bg-dark");
      navbar.classList.remove("bg-transparent");
    }
    else {
      navbar.classList.remove("bg-dark");
      navbar.classList.add("bg-transparent");
    }
  }
}
