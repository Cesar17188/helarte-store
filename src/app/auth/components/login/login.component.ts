import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
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
        this.router.navigate(['/admin']);
        this.dialogRef.close();
      })
      .catch(() => {
        alert('usuario no valido');
      });
    }
  }

  loginGoogle() {
    this.authService.loginWithGoogle()
    .then(() => {
      this.router.navigate(['/admin']);
    })
    .catch(() => {
      alert('usuario no valido');
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
}
