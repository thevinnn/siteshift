import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MenuItem } from '../../data/models';

@Component({
  selector: 'app-menu-item-card',
  templateUrl: './menu-item-card.html',
  styleUrl: './menu-item-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemCard {
  readonly item = input.required<MenuItem>();
}
