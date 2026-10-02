import { Img, MenuCategory, MenuItem } from './models';

export const menuCategories: readonly MenuCategory[] = [
  { id: 'bread', name: 'Bread' },
  { id: 'pastries', name: 'Pastries' },
  { id: 'drinks', name: 'Drinks' },
];

function image(file: string, alt: string): Img {
  return { src: `/images/menu/${file}.svg`, alt, width: 600, height: 450 };
}

export const menuItems: readonly MenuItem[] = [
  {
    id: 'sourdough',
    categoryId: 'bread',
    name: 'Country Sourdough',
    description: 'Our signature loaf with a blistered crust and a tangy, open crumb.',
    price: '$9.00',
    image: image('sourdough', 'A round sourdough loaf with scored top'),
  },
  {
    id: 'baguette',
    categoryId: 'bread',
    name: 'Classic Baguette',
    description: 'Crisp outside, soft inside. Best eaten the day it is baked.',
    price: '$5.50',
    image: image('baguette', 'A golden baguette'),
  },
  {
    id: 'rye-loaf',
    categoryId: 'bread',
    name: 'Seeded Rye',
    description: 'Dense, dark and packed with sunflower and pumpkin seeds.',
    price: '$10.00',
    image: image('rye-loaf', 'A dark seeded rye loaf'),
  },
  {
    id: 'croissant',
    categoryId: 'pastries',
    name: 'Butter Croissant',
    description: 'Laminated by hand over three days with real cultured butter.',
    price: '$5.00',
    image: image('croissant', 'A flaky butter croissant'),
  },
  {
    id: 'cinnamon-scroll',
    categoryId: 'pastries',
    name: 'Cinnamon Scroll',
    description: 'Soft brioche, cinnamon sugar and a light cream cheese glaze.',
    price: '$6.00',
    image: image('cinnamon-scroll', 'A glazed cinnamon scroll'),
  },
  {
    id: 'custard-tart',
    categoryId: 'pastries',
    name: 'Vanilla Custard Tart',
    description: 'Shortcrust shell filled with a silky vanilla bean custard.',
    price: '$5.50',
    image: image('custard-tart', 'A vanilla custard tart'),
  },
  {
    id: 'flat-white',
    categoryId: 'drinks',
    name: 'Flat White',
    description: 'Double-shot espresso with velvety steamed milk.',
    price: '$4.50',
    image: image('flat-white', 'A flat white coffee in a white cup'),
  },
  {
    id: 'hot-chocolate',
    categoryId: 'drinks',
    name: 'Hot Chocolate',
    description: 'Thick, dark chocolate melted into steamed milk and topped with cream.',
    price: '$5.00',
    image: image('hot-chocolate', 'A hot chocolate topped with cream'),
  },
];

export function itemsInCategory(categoryId: string): readonly MenuItem[] {
  return menuItems.filter((item) => item.categoryId === categoryId);
}

export function findMenuItem(id: string): MenuItem | undefined {
  return menuItems.find((item) => item.id === id);
}
