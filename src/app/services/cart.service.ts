import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OrderDetails, OrderProduct } from '../models/order';
import { environment as env } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    constructor(private httpClient: HttpClient) {}

    addProductToCart(
        productId: number,
        quantity: number,
        userId: string
    ): Observable<OrderProduct> {
        const body = {
            productId: productId,
            quantity: quantity,
            userId: userId,
        };

        return this.httpClient.post<OrderProduct>(
            `${env.dev.serverUrl}/api/orders/addProduct`,
            body
        );
    }

    showCart(userId: string): Observable<OrderDetails> {
        return this.httpClient.get<OrderDetails>(
            `${env.dev.serverUrl}/api/dashboard/cart`,
            { params: { userID: userId } }
        );
    }
}
