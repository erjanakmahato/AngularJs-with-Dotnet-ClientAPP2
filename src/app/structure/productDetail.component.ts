import { Component } from '@angular/core';
import { Repository } from "../Models/repository";
import { Product } from "../Models/product.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "product-detail",
  templateUrl: "productDetail.component.html"
})
export class ProductDetailComponent {
  constructor(private repo: Repository,
    router: Router,
    activateRoute: ActivatedRoute) {
    let id = Number.parseInt(activateRoute.snapshot.params["id"]);
    if (id) {
      this.repo.getProduct(id);
    } else {
      router.navigateByUrl("/");
    }
  }

  get product(): Product {
    return this.repo.product;
  }
}
