import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderService } from 'src/app/services/order.service';

@Component({
    selector: 'app-order-detail',
    templateUrl: './order-detail.component.html',
    styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

    products: any[] = [];

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private orderService: OrderService
    ) { }

    ngOnInit(): void {
        this.loadProducts();
    }

    loadProducts(): void {
        this.orderService.getOrderById(this.data.id).subscribe({
            next: (data: any) => {
                console.log(data.order.products);
                this.products = data.order.products;
            }
        })
    }
}
