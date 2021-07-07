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
  }

}
