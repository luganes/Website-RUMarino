/**
 * Helpers for the placeholder avatar shown when a member has no photo.
 *
 * Idea: hash the member's name -> number -> HSL color + pattern.
 * Same name always gives the same avatar (deterministic), different names
 * (almost always) give different colors, so the team page stops looking
 * like a wall of identical Tarzan pictures.
 */

/** Filename used in team-data.ts for members without a real photo. */
export const MISSING_PHOTO_MARKER = 'Tarzan_ImageMissing';

export function isMissingPhoto(photoUrl?: string): boolean {
  return !photoUrl || photoUrl.includes(MISSING_PHOTO_MARKER);
}

/** djb2 hash: turns any string into a stable positive integer. */
export function hashStringToInt(value: string): number {
  let hash = 5381;
  for (let i = 0; i < value.length; i++) {
    hash = ((hash << 5) + hash + value.charCodeAt(i)) >>> 0;
  }
  return hash;
}

/** First letters of the first two words, e.g. "Celimar Negrón" -> "CN". */
export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const letters = parts.slice(0, 2).map((part) => part.charAt(0).toUpperCase());
  return letters.join('') || '?';
}

export type AvatarStyle = {
  /** Base color derived from the name hash. */
  hue: number;
  /** Second color for the gradient (hue shifted so it always harmonizes). */
  hue2: number;
  /** Which decorative pattern to draw (0, 1 or 2). */
  pattern: number;
  initials: string;
};

/** Full deterministic style for one name. Lowercase the name so " Ana" and "ana" match. */
export function getAvatarStyle(name: string): AvatarStyle {
  const hash = hashStringToInt(name.trim().toLowerCase());
  const hue = hash % 360;
  const hue2 = (hue + 50) % 360;
  const pattern = Math.floor(hash / 360) % 3;
  return { hue, hue2, pattern, initials: getInitials(name) };
}
