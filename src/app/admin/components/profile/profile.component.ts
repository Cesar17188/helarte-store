import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { User } from 'src/app/core/models/user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private authSetvice: AuthService
  ) { }

  user: User;

  public providerId = 'null';

  ngOnInit(): void {
    this.authSetvice.hasUser().subscribe(user => {
      if (user) {
        this.user.displayName = user.displayName;
        this.user.email = user.email;
        this.user.photoURL = user.photoURL;
        this.providerId = user.providerData[0].providerId;
      }
    });
  }

}
