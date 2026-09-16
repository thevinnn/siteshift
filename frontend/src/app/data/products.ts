export interface Product {
  image: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
}

export const popularProducts: Product[] = [
  { image: 'assets/images/products/1.jpg', name: 'Summer black dress', category: 'Women', price: 19.99, oldPrice: 24.99 },
  { image: 'assets/images/products/2.jpg', name: 'Black suit', category: 'Women', price: 29.99 },
  { image: 'assets/images/products/3.jpg', name: 'Black long dress', category: 'Women, Accessories', price: 15.99, oldPrice: 19.99 },
  { image: 'assets/images/products/4.jpg', name: 'Black leather jacket', category: 'Women', price: 39.99, oldPrice: 49.99 },
];

export const latestProducts: Product[] = [
  { image: 'assets/images/products/5.jpg', name: "Blue women's suit", category: 'Women', price: 19.99, oldPrice: 24.99 },
  { image: 'assets/images/products/6.jpg', name: 'White shirt with long sleeves', category: 'Women', price: 29.99 },
  { image: 'assets/images/products/7.jpg', name: "Yellow men's suit", category: 'Men', price: 15.99, oldPrice: 19.99 },
  { image: 'assets/images/products/8.jpg', name: 'Red dress', category: 'Women', price: 39.99, oldPrice: 49.99 },
];

export const shopProducts: Product[] = [
  { image: 'assets/images/products/5.jpg', name: "Blue women's suit", category: 'Women', price: 19.99, oldPrice: 24.99 },
  { image: 'assets/images/products/6.jpg', name: 'White shirt with long sleeves', category: 'Women', price: 29.99 },
  { image: 'assets/images/products/7.jpg', name: "Yellow men's suit", category: 'Men', price: 15.99, oldPrice: 19.99 },
  { image: 'assets/images/products/8.jpg', name: 'Red dress', category: 'Women', price: 39.99, oldPrice: 49.99 },
  { image: 'assets/images/products/4.jpg', name: 'Black leather jacket', category: 'Women', price: 39.99, oldPrice: 49.99 },
  { image: 'assets/images/products/3.jpg', name: 'Black long dress', category: 'Women, Accessories', price: 15.99, oldPrice: 19.99 },
];
