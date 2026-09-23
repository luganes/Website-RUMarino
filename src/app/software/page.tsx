import DivisionOverview from '@/components/division-overview';
import { getDivisionDocsBySlug } from '@/lib/division-docs';

/**
 * Old URL, kept working so existing links (homepage, Sphinx docs back-button)
 * don't break. It simply renders the shared layout with software content.
 */
export default function SoftwareDocumentationPage() {
  const docs = getDivisionDocsBySlug('software');

  // This should never happen since 'software' is hardcoded in division-docs.ts
  if (!docs) {
    throw new Error('Missing docs entry for slug "software"');
  }

  return <DivisionOverview docs={docs} />;
}
