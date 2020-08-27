import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent  {
  userEmail = new FormControl('');

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

    async onReset() {
      try {
        const email = this.userEmail.value;
        await this.authService.resetPassword(email);
        window.alert('Email sent, check your inbox!');
        this.router.navigate(['/auth/login']);
      } catch (error) {
        console.log(error);
      }
    }

}
