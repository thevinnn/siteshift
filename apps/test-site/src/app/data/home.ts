import { Feature, Testimonial } from './models';

export const features: readonly Feature[] = [
  {
    id: 'baked-daily',
    title: 'Baked every morning',
    description: 'Our ovens fire up at 4am so everything on the counter is hours old, not days.',
  },
  {
    id: 'local-flour',
    title: 'Locally milled flour',
    description: 'We buy stoneground flour from a mill less than an hour away and nothing else goes in.',
  },
  {
    id: 'slow-ferment',
    title: 'Slow fermented',
    description: 'Long, cool fermentation gives our sourdough its flavour and its crackling crust.',
  },
];

export const testimonials: readonly Testimonial[] = [
  {
    id: 'maya-t',
    quote: 'The best sourdough in the suburb. I plan my Saturday around getting a loaf.',
    author: 'Maya T.',
  },
  {
    id: 'daniel-r',
    quote: 'Friendly staff, great coffee, and the almond croissants are dangerous.',
    author: 'Daniel R.',
  },
  {
    id: 'priya-s',
    quote: 'They made our wedding loaves and every guest asked where they came from.',
    author: 'Priya S.',
  },
];

/** IDs of menu items shown on the home page. */
export const featuredItemIds: readonly string[] = ['sourdough', 'croissant', 'flat-white'];
