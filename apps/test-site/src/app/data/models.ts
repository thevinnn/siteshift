export interface Img {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
}

export interface NavLink {
  readonly id: string;
  readonly label: string;
  readonly path: string;
}

export interface Feature {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

export interface Testimonial {
  readonly id: string;
  readonly quote: string;
  readonly author: string;
}

export interface MenuCategory {
  readonly id: string;
  readonly name: string;
}

export interface MenuItem {
  readonly id: string;
  readonly categoryId: string;
  readonly name: string;
  readonly description: string;
  readonly price: string;
  readonly image: Img;
}
