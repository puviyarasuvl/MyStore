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
}
