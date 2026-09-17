import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../data/products';

@Component({
    selector: 'app-product-card',
    imports: [],
    templateUrl: './product-card.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
}
