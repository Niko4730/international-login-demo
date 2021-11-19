import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./list/products.component";
import {UpdateComponent} from "./update/update.component";
import {CreateComponent} from "./create/create.component";
import {DeleteComponent} from "./delete/delete.component";
import {DetailsComponent} from "./details/details.component";
import {ReadProductsGuard} from "../auth/guards/read-products.guard";
import {WriteProductsGuard} from "../auth/guards/write-products.guard";

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent,
    //canActivate: [WriteProductsGuard]
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    //canActivate: [ReadProductsGuard]
  },
  {
    path: 'create',
    component: CreateComponent,
    //canActivate: [WriteProductsGuard]
  },
  {
    path: 'delete/:id',
    component: DeleteComponent,
    //canActivate: [WriteProductsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
