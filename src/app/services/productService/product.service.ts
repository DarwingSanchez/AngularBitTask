import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/models/product.model';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  selectedProduct : Product = {
    name: " ",
    price: 0,
    availableElemnts : 0,
    image: '',
    description : "",
    tags: []
  }

  checkProducts = new BehaviorSubject<Product[]>([])
  myProducts$ = this.checkProducts.asObservable();

  productList: Product[] = []

  constructor(
    private http: HttpClient

  ) {

  }

  API = `${environment.API_URL}/products`

  getProducts(){
    return this.http.get<Product[]>(`${this.API}/get-products`)
  }

  getOne(id: number){
    return this.http.get<Product>(`${this.API}/${id}`)
  }

  create(body : Product){
    return this.http.post<Product>(`${this.API}/create-product`, body)
  }
}
