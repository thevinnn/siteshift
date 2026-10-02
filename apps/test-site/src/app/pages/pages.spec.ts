import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { Menu } from './menu/menu';
import { NotFound } from './not-found/not-found';

async function render(component: Type<unknown>): Promise<HTMLElement> {
  TestBed.configureTestingModule({ imports: [component], providers: [provideRouter([])] });
  const fixture = TestBed.createComponent(component);
  await fixture.whenStable();
  return fixture.nativeElement as HTMLElement;
}

describe('pages', () => {
  it('home renders a single h1 and its sections', async () => {
    const el = await render(Home);
    expect(el.querySelectorAll('h1').length).toBe(1);
    expect(el.querySelectorAll('app-feature-list .feature').length).toBe(3);
    expect(el.querySelectorAll('app-featured-items app-menu-item-card').length).toBe(3);
    expect(el.querySelectorAll('app-testimonials figure').length).toBe(3);
  });

  it('menu renders every item', async () => {
    const el = await render(Menu);
    expect(el.querySelectorAll('app-menu-item-card').length).toBe(8);
  });

  it('contact has tel and mailto links', async () => {
    const el = await render(Contact);
    expect(el.querySelector('a[href^="tel:"]')).toBeTruthy();
    expect(el.querySelector('a[href^="mailto:"]')).toBeTruthy();
  });

  it('not-found renders a heading', async () => {
    const el = await render(NotFound);
    expect(el.querySelector('h1')?.textContent).toContain('not found');
  });
});
