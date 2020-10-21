import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';


import { AuthService } from '@core/services/auth/auth.service';
import { User } from '@core/models/user';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '@auth/components/login/login.component';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    public dialogRef2: MatDialogRef<RegisterComponent>
  ) {
    this.buildForm();
   }


  ngOnInit(): void {
  }

  async register() {
    const { email, password } = this.form.value;
    try {
      const user = await this.authService.createUser(email, password);
      if (user) {
        this.checkUserIsVerified(user);
      }
    }catch (error) {
      console.log(error);
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  private checkUserIsVerified(user: User) {
    if (user && user.emailVerified) {
      this.router.navigate(['/home']);
    } else if (user){
      this.router.navigate(['/verification-email']);
    } else {
      this.router.navigate(['/register']);
    }
  }

  onLoginRedirect(): void {
    this.router.navigate(['admin/panel']);
  }

  openLogin() {
    this.dialogRef2.close();
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '80%',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('register cerrado');
    });
  }

  async registerGoogle() {
    try {
      const user = await this.authService.registerWithGoogle();
      console.log(user);
      if (user) {
        this.checkUserIsVerified(user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async registerFacebook() {
    try {
      const user = await this.authService.registerWithFacebook();
      console.log(user);
      if (user) {
        this.checkUserIsVerified(user);
      }
    } catch (error) {
      console.log(error);
    }
  }


}
