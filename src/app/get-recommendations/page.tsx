import { RequirementCalculator } from '@/components/requirement-calculator';
import { Card, CardContent } from '@/components/ui/card';

export default function GetRecommendationsPage() {
  return (
    <div className="container mx-auto">
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
