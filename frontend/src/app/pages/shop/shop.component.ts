import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { shopProducts } from '../../data/products';

@Component({
    selector: 'app-shop',
    imports: [ProductCardComponent],
    templateUrl: './shop.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './shop.component.css'
})
export class ShopComponent {
  shopProducts = shopProducts;
  filtersOpen = false;
  sortDropdownOpen = false;

  toggleFilters(): void {
    this.filtersOpen = !this.filtersOpen;
  }

  toggleSortDropdown(): void {
    this.sortDropdownOpen = !this.sortDropdownOpen;
  }
}
