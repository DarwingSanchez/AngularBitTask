import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/productService/product.service';
import { Product } from 'src/app/models/product.model';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {

  products: Product[] = [];

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct(){
    this.productService.getProducts()
    .subscribe({
      next: data =>{
        this.productService.productList = data
        this.products = data
        console.log(this.products)
      }
    })
  }

  createProduct(form: NgForm) {
    try {
      if (
        !form.value.name ||
        !form.value.price ||
        !form.value.availableElemnts ||
        !form.value.image ||
        !form.value.description
      ) {
        throw new Error('Uno o mas campos están vacíos');
      }

      console.log(form.value)
      this.productService.create(form.value)
      .subscribe({
        next: data => {
          this.products.push(data)
          this.getAllProduct();
        },
        error: err => {
          throw new Error(err);
        }
      })
    } catch (error) {
      alert(error);
    }
  }
}
