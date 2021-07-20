import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/services/Utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggleCollapse: Function;

  constructor(private utils: Utils) {
  }

  ngOnInit() {
    this.toggleCollapse = this.utils.toggleCollapse;

    // Get navbar element to change its colour when scroll down
    let navbar = <HTMLElement>document.querySelector('nav.navbar');

    // When the user scrolls down or up
    window.onscroll = () => {
      // If current scroll bar's position is greater than or equal to the navbar's height
      if (document.body.scrollTop >= navbar.clientHeight || document.documentElement.scrollTop >= navbar.clientHeight) {
        // Make the background dark
        navbar.classList.add("bg-dark");
        navbar.classList.remove("bg-transparent");
      }
      else {
        // Otherwise, make the background transparent
        navbar.classList.add("bg-transparent");
        navbar.classList.remove("bg-dark");
      }
    };
  }
}
