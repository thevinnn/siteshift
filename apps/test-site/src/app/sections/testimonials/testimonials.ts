import { ChangeDetectionStrategy, Component } from '@angular/core';
import { testimonials } from '../../data/home';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Testimonials {
  protected readonly testimonials = testimonials;
}
