import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/interfaces/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  @Input() product!: IProduct;
}
