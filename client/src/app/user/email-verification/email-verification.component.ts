import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent implements OnInit {
  email: string;
  message: string;
  isConfirmed: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;   // Get params
    const email = routeParams.get('email');             // Plan ID to get the chosen plan data

    // Find the use using the email
    this.userService.getUserByEmail(email).subscribe(data => {
      // If the user already verified the email, set the message
      if(data.confirmed) {
        this.message = "Your email is already verified."
        this.email = data.email;
        this.isConfirmed = true;
      }
      else {
        this.message = "Please verify your email."
        this.email = data.email;
        this.isConfirmed = false;
      }
    });

  }

}
