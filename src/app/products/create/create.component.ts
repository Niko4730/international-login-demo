import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../shared/products.service";
import {Product} from "../shared/product.model";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createForm = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  constructor(private _route : ActivatedRoute, private _router : Router, private _productService : ProductsService) { }

  ngOnInit(): void {
  }

  get name() {
    return this.createForm.get('name');
  }

  doCreate(): void {
    let product = this.createForm.value as Product;

    this._productService.createProduct(product).subscribe(product => {
      this._router.navigateByUrl('/').then(r => {});
    });
  }
}
