import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/productService/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  @Input() product: Product ={
    name: '',
    image: '',
    price: 0,
    description: '',
    availableElemnts: 0,
    tags: []
  }

  @Output() showProduct = new EventEmitter<number>();


  showDetail(){
    console.log(this.product)
    /* this.showProduct.emit(this.product.id) */
  }


}
