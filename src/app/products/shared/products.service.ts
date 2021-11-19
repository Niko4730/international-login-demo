import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Product} from "./product.model";
import {ProductList} from "./product-list.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private _http : HttpClient) {

  }

  getProducts(): Observable<ProductList> {
    return this._http
      .get<ProductList>(environment.api + '/products');
  }

  getProduct(id: number): Observable<Product> {
    return this._http
      .get<Product>(environment.api + '/products/' + id);
    //return of( { id: id, name: 'Bilbo'} );
  }

  updateProduct(product: Product): Observable<Product> {
    return this._http.put<Product>(environment.api + '/products/' + product.id, product);
    //return this.getProduct(product.id);
  }

  createProduct(product: Product) {
    return this._http.post<Product>(environment.api + '/products',product);
  }

  deleteProduct(product: Product) {
    return this._http.delete<Product>(environment.api + '/products/' + product.id);
  }
}
