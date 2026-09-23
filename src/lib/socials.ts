/**
 * Single source of truth for the /socials page.
 *
 * HOW TO SHOW YOUR LATEST POST (no API keys needed):
 * 1. Open the post/video, click Share/⋯ -> Embed, copy the code they give you.
 * 2. From that code, copy ONLY the https://... src URL and paste it into
  *    `embedSrc` below. The page renders it as an iframe no extra scripts.
 * 3. Leave `embedSrc` empty ('') and the card shows a nice placeholder
  *    with a button to the profile instead, the page never breaks.
 *
 * Where the src lives in each network's code:
 * - YouTube:   <iframe ... src="https://www.youtube.com/embed/VIDEO_ID...">
 * - Instagram: <blockquote ... data-instgrm-permalink="https://www.instagram.com/reel/REEL_ID/...">
 *              -> use https://www.instagram.com/reel/REEL_ID/embed
 * - TikTok:    <blockquote ... cite="https://www.tiktok.com/@user/video/VIDEO_ID" ...>
  *              -> use https://www.tiktok.com/embed/v2/VIDEO_ID
 */

export type FeaturedSocial = {
  id: 'instagram' | 'tiktok' | 'youtube' | 'linkedin';
  name: string;
  handle: string;
  profileUrl: string;
  /** Accent color for the card top border / icon. */
  accent: string;
  blurb: string;
  /** Paste an iframe src here (see instructions above). '' = placeholder. */
  embedSrc: string;
};

export const xTimelineProfileUrl = 'https://x.com/RUMarino_pr';
export const xTimelineHandle = '@RUMarino_pr';

export const facebookPageUrl = 'https://www.facebook.com/UPRMRUMarino/';

export const featuredSocials: FeaturedSocial[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@rumarino_hydrus',
    profileUrl: 'https://www.instagram.com/rumarino_hydrus',
    accent: '#E1306C',
    blurb: 'Latest Reel / post. Tap “View profile”.',
    embedSrc: 'https://www.instagram.com/reel/DWCo53ziTdB/embed',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@rumarino',
    profileUrl: 'https://www.tiktok.com/@rumarino',
    accent: '#51DFC9',
    blurb: 'Latest TikTok video.',
    embedSrc: 'https://www.tiktok.com/embed/v2/7539301815876209975',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@rumarinohydrus6665',
    profileUrl: 'https://www.youtube.com/@rumarinohydrus6665',
    accent: '#FF0000',
    blurb: 'Featured / latest video.',
    embedSrc: 'https://www.youtube.com/embed/ZnLuskI1WZ4?si=hHHKK9cizOUKRY5Q',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'RUMarino',
    profileUrl: 'https://www.linkedin.com/company/rumarino',
    accent: '#0A66C2',
    blurb: 'Team updates, sponsors and competition news.',
    embedSrc: '',
  },
];
