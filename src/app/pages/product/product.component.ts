import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    displayedColumns: string[] = ['id', 'name', 'price', 'category', 'actions'];

    dataSource!: MatTableDataSource<any>;

    constructor(
        private productService: ProductService,
        private categoryService: CategoryService,
        private _liveAnnouncer: LiveAnnouncer
    ) { }

    ngOnInit(): void {
        this.getAllProducts();
    }

    getAllProducts() {
        this.productService.getProducts().subscribe((dataProduct: any) => {
            this.categoryService.getCategories().subscribe((dataCategory: any) => {
                const productsWithCategoryName = dataProduct.products.map((product: any) => {
                    const category = dataCategory.categories.find((category: any) => category.id === product.category_id);
                    return { ...product, category: category ? category.name : 'Unknown' };
                });

                this.dataSource = new MatTableDataSource(productsWithCategoryName);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            });
        });
    }

    announceSortChange(sortState: Sort) {
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }
}
