import { featuredItemIds, features, testimonials } from './home';
import { menuCategories, menuItems } from './menu';
import { navLinks } from './site';

const kebab = /^[a-z0-9]+(-[a-z0-9]+)*$/;

const lists: Record<string, readonly { id: string }[]> = {
  navLinks,
  features,
  testimonials,
  menuCategories,
  menuItems,
};

describe('content data', () => {
  for (const [name, list] of Object.entries(lists)) {
    it(`${name}: ids are unique kebab-case slugs`, () => {
      const ids = list.map((entry) => entry.id);
      expect(new Set(ids).size).toBe(ids.length);
      for (const id of ids) {
        expect(id).toMatch(kebab);
      }
    });
  }

  it('every menu item belongs to an existing category', () => {
    const categoryIds = new Set(menuCategories.map((c) => c.id));
    for (const item of menuItems) {
      expect(categoryIds.has(item.categoryId)).toBe(true);
    }
  });

  it('every featured id is a menu item', () => {
    const itemIds = new Set(menuItems.map((i) => i.id));
    for (const id of featuredItemIds) {
      expect(itemIds.has(id)).toBe(true);
    }
  });

  it('every image has alt text and dimensions', () => {
    for (const { image } of menuItems) {
      expect(image.alt.length).toBeGreaterThan(0);
      expect(image.width).toBeGreaterThan(0);
      expect(image.height).toBeGreaterThan(0);
    }
  });
});
