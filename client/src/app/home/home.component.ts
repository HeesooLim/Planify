import { UserService } from '../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  userName: string;

  todayYear: number;
  todayMonth: number;
  todayDate: number;

  constructor(private userService: UserService) {
    this.todayYear = new Date().getFullYear();
    this.todayMonth = new Date().getMonth() + 1;
    this.todayDate = new Date().getDate();
  }

  ngOnInit() {
    // Check if the user is logged in or not in the homePage
    this.userService.isAuthenticated();

    this.userService.getData()
      .subscribe(req => {
        console.log('we got this: ', req.body);
        this.user = req.body;
        this.userName = this.user.firstName;
      });
  }

}
