import { Component, ViewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { LoginDTO } from '../dtos/user/login.dto';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [FooterComponent, CommonModule, HeaderComponent, FormsModule],
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm!: NgForm;

  phoneNumber: string = '0111111111';
  password: string = '123456';

  constructor(private router: Router, private userService: UserService) {}
  onPhoneNumberChange() {
    console.log(`phone type:  ${this.phoneNumber}`);
  }
  login() {
    const message = `phone: ${this.phoneNumber}` + `password: ${this.password}`;
    // alert(message);
    debugger;

    const loginDTO: LoginDTO = {
      phone_number: this.phoneNumber,
      password: this.password,
      role_id: 1,
    };
    this.userService.login(loginDTO).subscribe({
      next: (response: any) => {
        debugger;
        // this.router.navigate(['/login']);
      },
      complete: () => {
        debugger;
      },
      error: (error: any) => {
        debugger
        alert(`Cannot login, error: ${error.error}`);
      },
    });
  }
}
