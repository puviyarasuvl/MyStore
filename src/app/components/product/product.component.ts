import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
    @Input() product: Product;

    constructor() {
        this.product = {
            name: '',
            price: 0,
            category: '',
            description: '',
            url: '',
        };
    }

    ngOnInit(): void {}
}
