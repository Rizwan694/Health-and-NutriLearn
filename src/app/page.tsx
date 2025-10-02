import Image from 'next/image';
import { RequirementCalculator } from '@/components/requirement-calculator';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <div className="container mx-auto">
      <section className="relative mb-12 h-80 w-full overflow-hidden rounded-xl">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white p-4">
          <h1 className="font-headline text-5xl md:text-7xl font-bold drop-shadow-lg">
            Welcome to NutriLearn
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90">
            Your comprehensive guide to robust health, nutrition, and well-being.
            Start by calculating your personal dietary needs below.
          </p>
        </div>
      </section>

      <section>
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardContent className="p-6 md:p-8">
            <RequirementCalculator />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
