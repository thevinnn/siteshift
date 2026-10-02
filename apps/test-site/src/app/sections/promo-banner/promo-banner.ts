import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-promo-banner',
  imports: [RouterLink],
  templateUrl: './promo-banner.html',
  styleUrl: './promo-banner.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromoBanner {}
