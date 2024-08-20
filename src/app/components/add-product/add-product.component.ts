import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../../models/interfaces/iproduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {
  newProduct: IProduct = {
    name: '',
    imageURL:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-73e54c0b-11a6-478b-9f90-bd97fcde872d/renew-run-big-kids-running-shoe-5Bpz93.jpg',
    description: '',
    is_in_inventory: false,
    category: '',
    price: 0,
    brand: '',
    items_left: 0,
  };

  @Output() addNewProduct = new EventEmitter<IProduct>();

  onAddNewProduct() {
    this.addNewProduct.emit({ ...this.newProduct });
  }
}
