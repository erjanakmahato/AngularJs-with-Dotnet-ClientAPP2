import { Component } from '@angular/core';
import { Repository } from "../Models/repository";
import { Product } from "../Models/product.model";
import { Router } from '@angular/router';

@Component({
  selector: "product-table",
  templateUrl: "./productTable.component.html"
})
export class ProductTableComponent {
  constructor(private repo: Repository,
    private router: Router) { }


  get products(): Product[] {
    return this.repo.products;
  }
  selectProduct(id: number) {
    this.repo.getProduct(id);
    this.router.navigateByUrl("/detail");
  }
}
