import { UserService } from 'src/app/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/services/Utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Variables that determines the navigation bar's background colour
  isMenuVisible: boolean;
  isScrollDowned: boolean;

  // user's first name
  loginName: string;
  isUserLoggedIn: boolean;


  constructor(private utils: Utils, private userService: UserService, private router: Router) {
    // Subscribe to the BehaviorSubject to check if the user is currently logged in
    this.userService.isUserLoggedIn.subscribe(value => {
      this.isUserLoggedIn = value.loggedIn;
      this.loginName = value.user;
    });
  }

  ngOnInit() {
    // Get navbar element to change its colour when scroll down
    let navbar = <HTMLElement>document.querySelector('nav.navbar');

    // When the user scrolls down or up
    window.onscroll = () => {
      // If current scroll bar's position is greater than or equal to the navbar's height
      if (document.body.scrollTop * 3 >= navbar.clientHeight || document.documentElement.scrollTop * 3 >= navbar.clientHeight) {
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

  logout() {
    this.userService.tryLogout();
  }
}
