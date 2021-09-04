import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
    products: Product[] = [];
    getError: string = '';

    constructor(
        private productService: ProductService,
        private spinnerService: NgxSpinnerService
    ) {}

    ngOnInit(): void {
        this.spinnerService.show();
        this.productService.getProducts().subscribe({
            next: (res) => {
                this.products = res;
                this.spinnerService.hide();
            },
            error: (error) => {
                this.getError = error.message;
                this.spinnerService.hide();
            },
        });
    }

    resetGetError(): void {
        this.getError = '';
    }
}
