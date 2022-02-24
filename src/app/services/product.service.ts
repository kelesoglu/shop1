import { Injectable } from '@angular/core';
import {Product} from "../product/product";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    path="http://localhost:3000/products"
    constructor(private http:HttpClient) { }
    // @ts-ignore
  getProducts(categoryId):Observable<Product[]>{
      let newPath=this.path;
      if(categoryId){
        newPath=newPath+"?categoryId="+categoryId
      }

      return  this.http.get<Product[]>(newPath).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError));
    }
    addProduct(product:Product):Observable<Product>{
      const httpOptions={
       headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.post<Product>(this.path,product,httpOptions).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
    handleError(err:HttpErrorResponse){
      let errorMessage=''
      if(err.error instanceof ErrorEvent){
          errorMessage='Bir hata oluştu'+err.error.message
      }
      else {
        errorMessage='Sistemsel bir hata'
      }
      return throwError(errorMessage);
    }
    getProductById(id:number):Observable<Product>{
      return this.http.get<Product>(this.path + "/"+id);
    }
    cartToBuy(name:string):Observable<Product>{
      return this.http.get<Product>(this.path +"/"+name);
    }
}


