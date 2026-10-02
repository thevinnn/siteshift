import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { featuredItemIds } from '../../data/home';
import { findMenuItem } from '../../data/menu';
import { MenuItem } from '../../data/models';
import { MenuItemCard } from '../../shared/menu-item-card/menu-item-card';

@Component({
  selector: 'app-featured-items',
  imports: [RouterLink, MenuItemCard],
  templateUrl: './featured-items.html',
  styleUrl: './featured-items.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedItems {
  protected readonly items = featuredItemIds
    .map((id) => findMenuItem(id))
    .filter((item): item is MenuItem => item !== undefined);
}
