import { notFound } from 'next/navigation';
import DivisionOverview from '@/components/division-overview';
import { divisionDocs, getDivisionDocsBySlug } from '@/lib/division-docs';

type DivisionDocsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/**
 * New URL pattern: /documentation/software, /documentation/electrical,
 * /documentation/mechanical, /documentation/management
 *
 * Every branch reuses the SAME <DivisionOverview/> layout
 * only the data (title, description, cards) changes per slug.
 */
export default async function DivisionDocsPage({ params }: DivisionDocsPageProps) {
  const { slug } = await params;
  const docs = getDivisionDocsBySlug(slug);

  if (!docs) {
    notFound();
  }

  return <DivisionOverview docs={docs} />;
}

export async function generateStaticParams() {
  return divisionDocs.map((docs) => ({
    slug: docs.slug,
  }));
}
