import { routes } from './app.routes';
import { serverRoutes } from './app.routes.server';

describe('routes', () => {
  it('has a wildcard route for 404s', () => {
    expect(routes.at(-1)?.path).toBe('**');
  });

  it('every route has a title', () => {
    for (const route of routes) {
      expect(route.title).toBeTruthy();
    }
  });

  it('server routes return 404 for unknown URLs', () => {
    expect(serverRoutes.find((r) => r.path === '**')).toEqual(
      expect.objectContaining({ status: 404 }),
    );
  });
});
