import { ChangeDetectionStrategy, Component } from '@angular/core';
import { features } from '../../data/home';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.html',
  styleUrl: './feature-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureList {
  protected readonly features = features;
}
