import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnDestroy {
  public user$: Observable<User> = this.authService.afa.user;

  constructor(
    private authService: AuthService
  ) { }

  onSendEmail(): void {
    this.authService.sendVerificationEmail();
  }

  ngOnDestroy(): void {
    this.authService.logout();
  }

}
