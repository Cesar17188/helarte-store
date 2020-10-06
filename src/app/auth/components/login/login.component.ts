import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { User } from '@core/models/user';
import { RegisterComponent } from '@auth/components/register/register.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    public dialogRef: MatDialogRef<LoginComponent>
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  login(event: Event){
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.login(value.email, value.password)
      .then(() => {
        this.onLoginRedirect();
        this.dialogRef.close();
      })
      .catch(() => {
        alert('usuario no valido');
      });
    }
  }

  async loginGoogle() {
    try {
      const user = await this.authService.loginWithGoogle();
      console.log(user);
      if (user) {
        this.checkUserIsVerified(user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async loginInFB() {
    try {
      const user = await this.authService.loginWithFB();
      console.log(user);
      if (user) {
        this.checkUserIsVerified(user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onLoginRedirect(): void {
    this.router.navigate(['admin/panel']);
  }

  openRegister() {
    this.dialogRef.close();
    const dialogRef2 = this.dialog.open(RegisterComponent, {
      width: '80%',
    });
    dialogRef2.afterClosed().subscribe(result => {
      console.log('register cerrado');
    });
  }

  private checkUserIsVerified( user: User) {
    if (user) {
      this.router.navigate(['/home']);
      this.dialogRef.close();
    } else if (user) {
      this.router.navigate(['/verification-email']);
    } else {
      this.router.navigate(['/register']);
    }
  }
}
