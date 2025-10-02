'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const data = [
  { ageGroup: '1-3 years', calories: 1000 },
  { ageGroup: '4-8 years', calories: 1400 },
  { ageGroup: '9-13 (Girls)', calories: 1600 },
  { ageGroup: '9-13 (Boys)', calories: 1800 },
  { ageGroup: '14-18 (Girls)', calories: 1800 },
  { ageGroup: '14-18 (Boys)', calories: 2200 },
];

export function ChildRequirementsChart() {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="font-headline">Children's Calorie Needs</CardTitle>
        <CardDescription>Estimated daily average requirements (kcal).</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="ageGroup" type="category" width={100} interval={0} />
              <Tooltip
                contentStyle={{
                  background: 'hsl(var(--background))',
                  borderColor: 'hsl(var(--border))',
                }}
              />
              <Legend />
              <Bar dataKey="calories" fill="hsl(var(--accent))" name="Calories (kcal)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
