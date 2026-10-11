/** Navigation archives remain available without competing with the small editorial collection. */
export const excludedIndexPaths = ['/guides/', '/resources/', '/recent/', '/tags/', '/contact/'];
export function excludeFromIndex(pathname: string): boolean {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return excludedIndexPaths.includes(normalized) || normalized.startsWith('/tags/');
}
