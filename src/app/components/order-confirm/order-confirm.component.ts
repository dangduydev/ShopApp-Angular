import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-order-confirm',
    standalone: true,
    templateUrl: './order-confirm.component.html',
    styleUrl: './order-confirm.component.scss',
    imports: [FooterComponent, HeaderComponent]
})
export class OrderConfirmComponent {

}
