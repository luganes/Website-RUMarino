import Image from 'next/image';
import {
  getAvatarStyle,
  hashStringToInt,
  isMissingPhoto,
} from '@/lib/avatar-color';

type MemberAvatarProps = {
  name: string;
  photoUrl: string;
  hint?: string;
  rotation?: number;
};

/**
 * Member photo that falls back to a unique generated SVG avatar when the
 * member has no real photo (photoUrl points to Tarzan_ImageMissing.webp).
 *
 * The fallback color + pattern come from hashing the member's name, so:
 * - every "no photo" member looks different,
 * - the same member always looks the same (no flicker between reloads).
 */
export default function MemberAvatar({ name, photoUrl, hint, rotation = 0 }: MemberAvatarProps) {
  if (!isMissingPhoto(photoUrl)) {
    return (
      <Image
        src={photoUrl}
        alt={`Photo of ${name}`}
        width={400}
        height={400}
        className="h-full w-full object-cover"
        style={{ transform: `rotate(${rotation}deg)` }}
        data-ai-hint={hint}
      />
    );
  }

  const { hue, hue2, pattern, initials } = getAvatarStyle(name);
  // Unique gradient id per name so several avatars on one page never clash.
  const gradientId = `avatar-${hashStringToInt(name.trim().toLowerCase()).toString(36)}`;

  return (
    <svg
      viewBox="0 0 200 200"
      width="400"
      height="400"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={`Placeholder avatar for ${name}`}
      className="block h-full w-full"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={`hsl(${hue} 65% 38%)`} />
          <stop offset="100%" stopColor={`hsl(${hue2} 70% 26%)`} />
        </linearGradient>
      </defs>

      <rect width="200" height="200" fill={`url(#${gradientId})`} />

      {/* Decorative pattern picked by the hash: rings, waves or bubbles. */}
      {pattern === 0 && (
        <g fill="none" stroke="white" strokeOpacity="0.18" strokeWidth="6">
          <circle cx="160" cy="40" r="48" />
          <circle cx="160" cy="40" r="28" />
          <circle cx="30" cy="175" r="36" />
        </g>
      )}
      {pattern === 1 && (
        <g fill="none" stroke="white" strokeOpacity="0.18" strokeWidth="6">
          <path d="M-10 150 Q 40 120 90 150 T 210 150" />
          <path d="M-10 170 Q 40 140 90 170 T 210 170" />
          <circle cx="165" cy="45" r="18" fill="white" fillOpacity="0.15" stroke="none" />
        </g>
      )}
      {pattern === 2 && (
        <g fill="white" fillOpacity="0.14">
          <circle cx="35" cy="45" r="16" />
          <circle cx="65" cy="70" r="9" />
          <circle cx="165" cy="160" r="22" />
          <circle cx="140" cy="130" r="8" />
        </g>
      )}

      {/* Simple diver silhouette so it reads as "team member" at a glance. */}
      <g fill="white" fillOpacity="0.85">
        <circle cx="100" cy="72" r="20" />
        <path d="M100 96 c-22 0 -34 16 -36 40 l-4 24 h24 l4 -18 12 18 h24 l4 -18 12 18 h24 l-4 -24 c-2 -24 -14 -40 -36 -40 z" />
      </g>

      <text
        x="100"
        y="188"
        textAnchor="middle"
        fill="white"
        fontSize="26"
        fontWeight="bold"
        fontFamily="inherit"
      >
        {initials}
      </text>
    </svg>
  );
}
