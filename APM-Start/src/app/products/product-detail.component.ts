import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private productService: ProductService) { 

  }
  
  private _pageTitle : string;
  public get pageTitle() : string {
    return this._pageTitle;
  }
  public set pageTitle(v : string) {
    this._pageTitle = v;
  }
  product: IProduct;
  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProducts().subscribe({
      next: products => 
      { 
        this.product = products.filter(item => item.productId == id)[0];
        this.pageTitle = 'Product detail';
      },
      error: err => {}
    });
  }
  onBack(): void{
    this.router.navigate(['/products']);
  }
}
