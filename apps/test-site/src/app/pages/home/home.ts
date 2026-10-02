import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CtaBand } from '../../sections/cta-band/cta-band';
import { FeatureList } from '../../sections/feature-list/feature-list';
import { FeaturedItems } from '../../sections/featured-items/featured-items';
import { Hero } from '../../sections/hero/hero';
import { PromoBanner } from '../../sections/promo-banner/promo-banner';
import { Testimonials } from '../../sections/testimonials/testimonials';

@Component({
  selector: 'app-home',
  imports: [PromoBanner, Hero, FeatureList, FeaturedItems, Testimonials, CtaBand],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
