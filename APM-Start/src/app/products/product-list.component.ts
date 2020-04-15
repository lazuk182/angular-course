import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    errorMessage: any;
    ngOnInit():void{
        this.productService.getProducts().subscribe({
            next: products =>  { 
                this.products = products;
                this.filteredProducts = this.products;
                this.listFilter = '';
            },
            error: err => this.errorMessage = err
        });
    }
    constructor(private productService : ProductService) {
        
    }
    pageTitle: string = "Lista de productos";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    _listFilter: string;
    get listFilter(){
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    performFilter(listFilter: string): IProduct[] {
        return this.products
            .filter(item => item.productName.toLocaleLowerCase()
                                    .includes(listFilter.toLocaleLowerCase()));
    }
    filteredProducts : IProduct[] = [];
    products: IProduct[] = [];
    toogleImage():void{
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string):void{
        this.pageTitle = 'Lista de productos: ' + message;
    }
}