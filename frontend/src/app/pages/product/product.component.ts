import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { latestProducts } from '../../data/products';

type TabId = 'description' | 'additional-info' | 'size-shape' | 'reviews';

@Component({
    selector: 'app-product',
    imports: [RouterLink, ProductCardComponent],
    templateUrl: './product.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './product.component.css'
})
export class ProductComponent {
  latestProducts = latestProducts;

  galleryImages = [
    'assets/images/single-product/1.jpg',
    'assets/images/single-product/2.jpg',
    'assets/images/single-product/3.jpg',
    'assets/images/single-product/4.jpg',
    'assets/images/single-product/5.jpg',
  ];

  mainImage = 'assets/images/products/1.jpg';

  quantity = 1;

  activeTab: TabId = 'description';

  selectImage(image: string): void {
    this.mainImage = image;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
  }

  increaseQuantity(): void {
    this.quantity += 1;
  }

  selectTab(tab: TabId): void {
    this.activeTab = tab;
  }
}
