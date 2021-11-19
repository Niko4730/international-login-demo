import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../shared/products.service";
import {Product} from "../shared/product.model";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  private selectedId: number | undefined;

  constructor(private _route : ActivatedRoute, private _router : Router, private _productService : ProductsService) { }

  ngOnInit(): void {
    this.selectedId = Number(this._route.snapshot.paramMap.get('id'));
    this._productService.getProduct(this.selectedId).subscribe(product => {
      this._productService.deleteProduct(product).subscribe(product => {
        this._router.navigateByUrl('/').then(r => {});
      });
    });


  }

}
