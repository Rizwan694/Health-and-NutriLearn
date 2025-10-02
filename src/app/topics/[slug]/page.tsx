import { TOPICS } from '@/app/topics/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return Object.keys(TOPICS).map((slug) => ({
    slug,
  }));
}

export default function TopicPage({ params }: { params: { slug: string } }) {
  const topic = TOPICS[params.slug as keyof typeof TOPICS];

  if (!topic) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-4xl">{topic.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            {topic.content}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
