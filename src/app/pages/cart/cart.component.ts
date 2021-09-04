import { Component, OnInit } from '@angular/core';
import { OrderDetails } from 'src/app/models/order';
import { CartService } from 'src/app/services/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
    cartJson: string = '';

    constructor(private cartSerivce: CartService) {}

    ngOnInit(): void {
        this.cartSerivce
            .showCart('puviyarasuvelu@gmail.com')
            .subscribe((res) => {
                this.cartJson = JSON.stringify(res, null, 2);
            });
    }
}
