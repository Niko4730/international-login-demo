import { Component, OnInit } from '@angular/core';
import {Product} from "../shared/product.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../shared/products.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private selectedId: number | undefined;
  public selectedProduct: Product | undefined;

  detailsForm = new FormGroup( {
    id: new FormControl({ disabled: true }),
    name: new FormControl('', Validators.required)
  });

  constructor(private _route : ActivatedRoute, private _router : Router, private _productService : ProductsService) { }

  ngOnInit(): void {
    this.selectedId = Number(this._route.snapshot.paramMap.get('id'));

    this._productService.getProduct(this.selectedId).subscribe(product => {
      this.selectedProduct = product;
      this.detailsForm.patchValue(product);
    });
  }

}
