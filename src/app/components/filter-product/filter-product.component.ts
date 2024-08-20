import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrl: './filter-product.component.scss',
})
export class FilterProductComponent {
  @Input() allProducts: number = 0;
  @Input() inStock: number = 0;
  @Input() outOfStock: number = 0;

  @Output() selectedRadioBtnChanged = new EventEmitter<string>();

  selectedFilterRadioBtn: string = 'all';

  onSelectedRadioBtnChanged() {
    // console.log(this.selectedFilterRadioBtn);
    this.selectedRadioBtnChanged.emit(this.selectedFilterRadioBtn);
  }
}
