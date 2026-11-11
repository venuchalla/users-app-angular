export function getAppUrl(path: string): string {
  return new URL(path, document.baseURI).toString();
}
