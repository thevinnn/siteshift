import { RenderMode, ServerRoute } from '@angular/ssr';

// Every route is rendered per request (no prerendering), because published content
// will later be read at request time. Unknown URLs must return a real 404.
export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Server },
  { path: 'menu', renderMode: RenderMode.Server },
  { path: 'contact', renderMode: RenderMode.Server },
  { path: '**', renderMode: RenderMode.Server, status: 404 },
];
