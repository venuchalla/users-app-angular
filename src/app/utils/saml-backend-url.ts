import { environment } from '../../environments/environment';

export function getSamlBackendUrl(path: string): string | null {
  const backendUrl = environment.saml.backendUrl.trim();
  if (!backendUrl) {
    return null;
  }

  return new URL(
    path.replace(/^\/+/, ''),
    `${backendUrl.replace(/\/+$/, '')}/`,
  ).toString();
}
