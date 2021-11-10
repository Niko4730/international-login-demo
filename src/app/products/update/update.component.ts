import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../shared/products.service";
import {Product} from "../shared/product.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  productForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ])
  })
  productToUpdate: Product | undefined;

  constructor(
    private _activated: ActivatedRoute,
    private _productService: ProductsService,
    private _router: Router) {}

  ngOnInit(): void {
    let id = this._activated.snapshot.paramMap.get('id');
    if(id) {
      this._productService.getProduct(+id)
      .subscribe(product => {
        this.productToUpdate = product;
        this.productForm.patchValue(product);
      });
      }
    }

  update() {
    if (this.productToUpdate) {
      let product = this.productForm.value as Product;
      product.id = this.productToUpdate.id;
      this._productService.update(product)
        .subscribe(product => {
          this._router.navigateByUrl('products');
        });
    }
  }
}
