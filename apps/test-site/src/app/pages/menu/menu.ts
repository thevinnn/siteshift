import { ChangeDetectionStrategy, Component } from '@angular/core';
import { itemsInCategory, menuCategories } from '../../data/menu';
import { MenuItemCard } from '../../shared/menu-item-card/menu-item-card';

@Component({
  selector: 'app-menu',
  imports: [MenuItemCard],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Menu {
  protected readonly categories = menuCategories.map((category) => ({
    ...category,
    items: itemsInCategory(category.id),
  }));
}
