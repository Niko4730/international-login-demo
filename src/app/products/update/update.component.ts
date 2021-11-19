import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import {ProductsService} from "../shared/products.service";
import {Product} from "../shared/product.model";
import {Observable} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  private selectedId: number | undefined;
  public selectedProduct: Product | undefined;

  updateForm = new FormGroup( {
    id: new FormControl({ disabled: true }),
    name: new FormControl('', Validators.required)
  });

  constructor(private _route : ActivatedRoute, private _router : Router, private _productService : ProductsService) { }

  get name() { return this.updateForm.get('username'); }

  ngOnInit(): void {
    this.selectedId = Number(this._route.snapshot.paramMap.get('id'));

    this._productService.getProduct(this.selectedId).subscribe(product => {
      this.selectedProduct = product;
      this.updateForm.patchValue(product);
    });
  }

  doUpdate() {
    if(this.selectedProduct) {
      let product = this.updateForm.value as Product;
      product.id = this.selectedProduct.id;

      this._productService.updateProduct(product).subscribe(product => {
        this._router.navigateByUrl('/').then(r => {});
      });
    }
  }
}
