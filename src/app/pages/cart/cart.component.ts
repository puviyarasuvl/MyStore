import { Component, OnInit } from '@angular/core';
import { OrderDetails } from 'src/app/models/order';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from '@auth0/auth0-angular';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
    cartJson: string = '';
    email: string = '';

    constructor(
        private cartSerivce: CartService,
        public authService: AuthService,
        private spinnerService: NgxSpinnerService
    ) {}

    ngOnInit(): void {
        this.authService.user$.subscribe((profile) => {
            this.email = profile?.email as string;

            this.cartSerivce.showCart(this.email).subscribe((res) => {
                this.cartJson = JSON.stringify(res, null, 2);
            });
        });
    }
}
