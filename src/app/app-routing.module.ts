import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {CategoryComponent} from "./category/category.component";
import {ProductAddForms1Component} from "./product/product-add-forms1/product-add-forms1.component";
import {ProductAddForms2Component} from "./product/product-add-forms2/product-add-forms2.component";
import {LoginComponent} from "./login/login.component";
import {LoginGuard} from "./login/login.guard";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {SortProductComponent} from "./sort-product/sort-product.component";
import {CartSummaryComponent} from "./cart-summary/cart-summary.component";

const routes: Routes = [
  {path:'products',component:ProductComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products/category/:categoryId',component:ProductComponent},
  //{path:'product-add-1',component:ProductComponent,canActivate:[LoginGuard]},
  {path:'product-add-1',component:ProductAddForms1Component,canActivate:[LoginGuard]},
  {path:'product-add-2',component:ProductAddForms2Component},
  {path:'login',component:LoginComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'sort-product', component: SortProductComponent},
  {path: 'cart-summary',component:CartSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
