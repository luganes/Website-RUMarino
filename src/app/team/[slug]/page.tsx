import { notFound } from 'next/navigation';
import { getDivisionBySlug } from '@/lib/team-data';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import MemberAvatar from '@/components/member-avatar';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ChevronLeft, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

type DivisionDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DivisionDetailPage({ params }: DivisionDetailPageProps) {
  const { slug } = await params;
  const division = getDivisionBySlug(slug);

  if (!division) {
    notFound();
  }

  const { name, description, divisionImage, divisionImageHint, members } = division;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Button asChild size="lg" className="group">
              <Link href="/team" className="gap-3 font-roboto font-bold bg-gradient-to-r from-[#00A68C] to-[#51DFC9] hover:from-[#00A68C] hover:to-[#1FB355] text-white px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center"
  >
    <ChevronLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
    <span>All Divisions</span>
            </Link>
          </Button>
        </div>

        <header className="mb-12 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">{name}</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground whitespace-pre-line">{description}</p>
        </header>

        <section className="mb-16">
            <Card className="overflow-hidden bg-gradient-to-br from-gray-900 to-[#00A68C]/10 border border-[#00A68C]/30 text-white">
                <Image
                    src={divisionImage}
                    alt={`${name} division photo`}
                    width={1200}
                    height={600}
                    className="w-full h-auto max-h-[750px] object-cover"
                    data-ai-hint={divisionImageHint}
                />
            </Card>
        </section>

        <section>
          <h2 className="font-headline text-3xl font-bold text-center mb-10">Division Members</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {members.map((member) => (
              <Card key={member.name} className="text-center overflow-hidden transition-all duration-300 flex flex-col bg-black border border-[#00A68C] text-white shadow-lg shadow-black/50 hover:shadow-xl hover:shadow-[#00A68C]/20">
                <div className="aspect-square bg-muted bg-gray-800">
                    <MemberAvatar
                        name={member.name}
                        photoUrl={member.photoUrl}
                        hint={member.hint}
                        rotation={member.rotation}
                    />
                </div>
                <CardContent className="p-4 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="font-bold text-sm text-muted-foreground">{member.position}</p>
                  <p className="text-sm text-muted-foreground">{member.major}</p>
                  <Badge className="mt-2 mx-auto flex items-center justify-center bg-[#51DFC9] text-black border-none">
                    {/^\d/.test(member.year) ? `${member.year} year` : member.year}
                  </Badge>
                  <div className="mt-auto pt-4 flex justify-center gap-4">
                    {member.linkedinUrl && (
                      <Link href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn Profile`}>
                        <Linkedin className="h-6 w-6 text-muted-foreground hover:text-accent transition-colors" />
                      </Link>
                    )}
                     {member.email && (
                      <Link href={member.email} aria-label={`Email ${member.name}`}>
                        <Mail className="h-6 w-6 text-muted-foreground hover:text-accent transition-colors" />
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const { divisions } = await import('@/lib/team-data');
  return divisions.map((division) => ({
    slug: division.slug,
  }));
}
