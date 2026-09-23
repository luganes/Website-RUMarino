import Link from 'next/link';
import Script from 'next/script';
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { TiktokIcon } from '@/components/ui/TiktokIcon';
import {
  facebookPageUrl,
  featuredSocials,
  xTimelineHandle,
  xTimelineProfileUrl,
  type FeaturedSocial,
} from '@/lib/socials';

const iconById: Record<FeaturedSocial['id'], typeof Instagram> = {
  instagram: Instagram,
  tiktok: TiktokIcon as unknown as typeof Instagram,
  youtube: Youtube,
  linkedin: Linkedin,
};

function FeaturedCard({ social }: { social: FeaturedSocial }) {
  const Icon = iconById[social.id];

  return (
    <article
      className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/60 to-black shadow-xl"
      style={{ borderTop: `3px solid ${social.accent}` }}
    >
      <div className="flex items-center gap-3 p-5">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${social.accent}22` }}
        >
          <Icon className="h-6 w-6" style={{ color: social.accent }} />
        </span>
        <div>
          <h3 className="font-headline text-xl text-white">{social.name}</h3>
          <p className="font-roboto text-sm text-gray-400">{social.handle}</p>
        </div>
      </div>

      {social.embedSrc ? (
        <div className="mx-5 mb-2 overflow-hidden rounded-xl bg-black">
          <iframe
            src={social.embedSrc}
            title={`Latest ${social.name} post from RUMarino`}
            className="block h-[500px] w-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="mx-5 mb-2 flex h-[220px] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-white/15 bg-black/40 p-6 text-center">
          <Icon className="h-8 w-8 text-gray-500" />
          <p className="font-roboto text-sm text-gray-400">{social.blurb}</p>
          <p className="font-roboto text-xs text-gray-500">
            To feature the latest post here, paste its embed URL into{' '}
            <code className="rounded bg-white/10 px-1 text-gray-300">src/lib/socials.ts</code>.
          </p>
        </div>
      )}

      <div className="mt-auto p-5 pt-3">
        <Link
          href={social.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 font-roboto text-sm font-bold text-[#51DFC9] transition-colors hover:text-white"
        >
          View profile
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

export default function SocialsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero */}
        <div className="mb-14 text-center">
          <div className="mb-8 inline-block">
            <div className="flex items-center justify-center gap-3">
              <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-[#1FB355] to-[#51DFC9]"></div>
              <div className="h-3 w-3 rotate-45 transform bg-gradient-to-r from-[#1FB355] to-[#51DFC9]"></div>
              <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-[#51DFC9] to-[#1FB355]"></div>
            </div>
          </div>
          <h1 className="mb-6 font-headline text-4xl font-bold tracking-wide md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-[#1FB355] via-[#51DFC9] to-white bg-clip-text text-transparent">
              FOLLOW THE MISSION
            </span>
          </h1>
          <p className="mx-auto max-w-3xl font-roboto text-xl leading-relaxed text-gray-400">
            Pool tests, build days, competitions and team life — as it happens on our socials.
          </p>
        </div>

        {/* Live feeds: these load automatically, no manual updates needed. */}
        <h2 className="mb-6 font-headline text-2xl tracking-wide text-white md:text-3xl">
          Live feeds
        </h2>
        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          {/* X: official timeline widget, shows latest posts by itself. */}
          <article className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/60 to-black shadow-xl" style={{ borderTop: '3px solid #ffffff' }}>
            <div className="flex items-center gap-3 p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <Twitter className="h-6 w-6 text-white" />
              </span>
              <div>
                <h3 className="font-headline text-xl text-white">X (Twitter)</h3>
                <p className="font-roboto text-sm text-gray-400">{xTimelineHandle}</p>
              </div>
            </div>
            <div className="mx-5 mb-5 overflow-hidden rounded-xl bg-black">
              <a
                className="twitter-timeline"
                data-height="600"
                data-theme="dark"
                href={xTimelineProfileUrl}
              >
                Posts by {xTimelineHandle}
              </a>
            </div>
            <Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload" />
          </article>

          {/* Facebook: official Page plugin, shows latest posts by itself. */}
          <article className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/60 to-black shadow-xl" style={{ borderTop: '3px solid #1877F2' }}>
            <div className="flex items-center gap-3 p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1877F2]/15">
                <Facebook className="h-6 w-6 text-[#1877F2]" />
              </span>
              <div>
                <h3 className="font-headline text-xl text-white">Facebook</h3>
                <p className="font-roboto text-sm text-gray-400">UPRM RUMarino</p>
              </div>
            </div>
            <div className="mx-5 mb-5 overflow-hidden rounded-xl bg-black">
              <iframe
                src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(facebookPageUrl)}&tabs=timeline&width=500&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`}
                title="Latest Facebook posts from RUMarino"
                className="block h-[600px] w-full"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </article>
        </div>

        {/* Featured posts: paste one embed URL per network in src/lib/socials.ts */}
        <h2 className="mb-6 font-headline text-2xl tracking-wide text-white md:text-3xl">
          Featured posts
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {featuredSocials.map((social) => (
            <FeaturedCard key={social.id} social={social} />
          ))}
        </div>
      </div>
    </div>
  );
}
