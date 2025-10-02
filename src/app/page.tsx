import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

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
            Start by calculating your personal dietary needs.
          </p>
        </div>
      </section>

      <section>
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardContent className="p-6 md:p-8 flex flex-col items-center text-center">
            <h2 className="font-headline text-3xl font-bold mb-2">
              Personalized Requirement Calculator
            </h2>
            <p className="text-center text-muted-foreground mb-6 max-w-2xl">
              Fill in your details to receive AI-powered dietary recommendations tailored to your unique needs.
            </p>
            <Button asChild>
              <Link href="/get-recommendations">
                <Sparkles className="mr-2 h-4 w-4" />
                Get Recommendations
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
