import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface CartItem {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: CartItem[] = [
    { image: 'assets/images/single-product/1.jpg', name: 'Summer black dress', price: 19.99, quantity: 1 },
    { image: 'assets/images/single-product/2.jpg', name: 'Black suit', price: 19.99, quantity: 1 },
  ];

  increment(item: CartItem): void {
    item.quantity += 1;
  }

  decrement(item: CartItem): void {
    if (item.quantity > 1) {
      item.quantity -= 1;
    }
  }

  lineTotal(item: CartItem): number {
    return item.price * item.quantity;
  }
}
