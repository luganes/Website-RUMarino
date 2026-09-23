import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, FileCode2 } from 'lucide-react';
import type { DivisionDocs } from '@/lib/division-docs';

/**
 * Shared layout for every branch overview page.
 * It renders the exact same design as the old /software page,
 * but driven by the `docs` prop so each division can pass its own content.
 */
export default function DivisionOverview({ docs }: { docs: DivisionDocs }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden bg-[#171919]">
        <div className="absolute inset-0">
          <Image
            src={docs.heroImage}
            alt={docs.heroAlt}
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#171919]/85 to-black" />
        </div>

        <div className="container relative mx-auto px-4 py-20 md:py-28">
          <div className="max-w-5xl">
            <p className="mb-4 font-roboto text-sm font-bold uppercase tracking-wider text-[#51DFC9]">
              {docs.eyebrow}
            </p>

            <h1 className="font-headline text-5xl font-bold tracking-wide md:text-7xl lg:text-8xl">
              <span className="bg-gradient-to-r from-[#00A68C] via-[#51DFC9] to-white bg-clip-text text-transparent">
                {docs.title}
              </span>
            </h1>

            <p className="mt-6 max-w-3xl font-roboto text-lg leading-relaxed text-gray-300 md:text-xl">
              {docs.description}
            </p>

            {docs.docsHref && (
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={docs.docsHref}
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#00A68C] to-[#51DFC9] px-6 py-4 font-roboto font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:from-[#00A68C] hover:to-[#1FB355]"
                >
                  {docs.docsButtonLabel ?? 'Open Docs'}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="modules" className="bg-[#171919] py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-3xl">
            <div className="mb-5 flex items-center gap-3 text-[#51DFC9]">
              <FileCode2 className="h-6 w-6" />
              <span className="font-roboto text-sm font-bold uppercase tracking-wider">
                Modules and Solutions
              </span>
            </div>
            <h2 className="font-headline text-4xl tracking-wide md:text-5xl">Documentation</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {docs.modules.map((module) => (
              <Link key={module.name} href={module.href} className="group">
                <article className="overflow-hidden rounded-2xl border border-[#00A68C]/20 bg-gradient-to-br from-[#1a1d1d] to-black shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#00A68C]/60 hover:shadow-2xl hover:shadow-[#00A68C]/20">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={module.image}
                      alt={module.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="mt-2 font-headline text-2xl text-white">{module.name}</h3>
                    <p className="mt-3 font-roboto text-sm leading-relaxed text-gray-400">
                      {module.summary}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-[#51DFC9] opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="text-xs font-bold">Read Documentation</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
