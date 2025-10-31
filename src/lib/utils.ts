/**
 * Get the correct asset path based on environment
 * In production, assets are prefixed with /my-portfolio
 * In development, assets are served from root
 */
export function getAssetPath(path: string): string {
  // Always return relative path for assets
  return path.startsWith('./') ? path.slice(2) : path;
}