import { CUSTOM_ELEMENTS_SCHEMA, Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { popularProducts, latestProducts } from '../../data/products';

@Component({
    selector: 'app-home',
    imports: [RouterLink, ProductCardComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    changeDetection: ChangeDetectionStrategy.Eager,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {
  popularProducts = popularProducts;
  latestProducts = latestProducts;
}
