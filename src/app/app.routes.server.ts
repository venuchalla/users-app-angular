import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Client,
  },
  {
    path: 'home',
    renderMode: RenderMode.Prerender,
  },
  { path: 'app', 
    renderMode: RenderMode.Client 
  },
  { path: '**', 
    renderMode: RenderMode.Client
  }
];
