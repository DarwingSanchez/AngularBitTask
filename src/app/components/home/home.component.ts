import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';
import { User } from 'src/app/models/user.model';
import { ProductService } from 'src/app/services/productService/product.service';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private userService: UserService,
    private productService: ProductService
    ) {}

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(
      {
        next: data => {
          console.log(data)
          this.products = data
        }
      }
      )
  }

  onShowProductDetail(id: number){
    this.productService.getOne(id)
    .subscribe(
      {
        next: data => { console.log(data) }
      }
    )
  }

}
