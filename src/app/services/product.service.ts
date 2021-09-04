import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { environment as env } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private httpClient: HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(
            `${env.dev.serverUrl}/api/products/getProduct`
        );
    }

    addProduct(newProduct: Product): Observable<Product> {
        console.log('[Product service] : inside addProduct');

        const body = {
            productName: newProduct.name,
            price: newProduct.price,
            category: newProduct.category,
            descrption: newProduct.description,
            url: newProduct.url,
        };

        return this.httpClient.post<Product>(
            `${env.dev.serverUrl}/api/products/addProduct`,
            body
        );
    }
}
