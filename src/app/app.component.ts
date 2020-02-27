import { Component } from '@angular/core';
import { Repository } from "./Models/repository";
import { Product } from "./Models/product.model";
import { Supplier } from "./Models/supplier.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'ClientApp';
  constructor(private repo: Repository) { }

  get product(): Product {
    return this.repo.product;
  }

  get products(): Product[] {
    return this.repo.products;
  }
  createProduct()
  {
    this.repo.createProduct(new Product(0, "X-Ray Scuba Mask", "Watersports", "See what the fish are hiding", 49.99,
      this.repo.products[0].supplier));
  }
  createProductAndSupplier()
  {
    let s = new Supplier(0, "Rocket Shoe Corp", "Boston", "MA");
    let p = new Product(0, "Rocket-Powered Shoes", "Running", "Set a new record", 100, s);
    this.repo.createProductAndSupplier(p, s);
  }
  replaceProduct()
  {
    let p = this.repo.products[0];
    p.name = "Modified Products";
    p.category = "Modified Category";
    p.descreption = "Modified Descreption";
    this.repo.replaceProduct(p);
  }
  replaceSupplier() {
    let s = new Supplier(3, "Modified Supplier", "New york", "NY");
    this.repo.replaceSupplier(s);
  }
  updateProduct() {
    let changes = new Map<string, any>();
    changes.set("name", "Green kayak");
    changes.set("supplier", null);
    this.repo.updateProduct(1, changes);
  }
  deleteProduct() {
    this.repo.deleteProduct(1);
  }
  deleteSupplier() {
    this.repo.deleteSupplier(2);
  }
}
