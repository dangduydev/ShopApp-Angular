import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { HomeComponent } from './app/home/home.component';
import { OrderComponent } from './app/order/order.component';
import { OrderConfirmComponent } from './app/order-confirm/order-confirm.component';
import { LoginComponent } from './app/login/login.component';
import { RegisterComponent } from './app/register/register.component';
import { DetailProductComponent } from './app/detail-product/detail-product.component';

bootstrapApplication(RegisterComponent, appConfig)
  .catch((err) => console.error(err));


  /**

 yarn add bootstrap @ng-bootstrap/ng-bootstrap
 yarn add font-awesome @fortawesome/fontawesome-free
 yarn add class-transformer class-validator
 yarn add @popperjs/core  
 yarn add @auth0/angular-jwt
 */