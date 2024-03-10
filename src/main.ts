import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { HomeComponent } from './app/components/home/home.component';
import { OrderComponent } from './app/components/order/order.component';
import { OrderConfirmComponent } from './app/components/order-confirm/order-confirm.component';
import { LoginComponent } from './app/components/login/login.component';
import { RegisterComponent } from './app/components/register/register.component';
import { DetailProductComponent } from './app/components/detail-product/detail-product.component';

bootstrapApplication(HomeComponent, appConfig);


  /**

 yarn add bootstrap @ng-bootstrap/ng-bootstrap
 yarn add font-awesome @fortawesome/fontawesome-free
 yarn add class-transformer class-validator
 yarn add @popperjs/core  
 yarn add @auth0/angular-jwt
 */