import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AlertifyService} from "./services/alertify.service";
import {HttpClientModule} from "@angular/common/http";
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import { LoginComponent } from './login/login.component';
import {AccountService} from "./services/account.service";
import {LoginGuard} from "./login/login.guard";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {ProductService} from "./services/product.service";
import {NgxImageZoomModule} from "ngx-image-zoom";
import { SortProductComponent } from './sort-product/sort-product.component';
import {CategoryService} from "./services/category.service";
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductAddForms1Component,
    ProductAddForms2Component,
    LoginComponent,
    ProductDetailComponent,
    SortProductComponent,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxImageZoomModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
  ],
  providers: [AlertifyService,AccountService,LoginGuard,ProductService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
