'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const data = [
  { category: 'Adult Male (Sedentary)', calories: 2000 },
  { category: 'Adult Male (Light Work)', calories: 2500 },
  { category: 'Adult Male (Manual Work)', calories: 3000 },
  { category: 'Adult Female (Sedentary)', calories: 1600 },
  { category: 'Adult Female (Light Work)', calories: 2000 },
  { category: 'Adult Female (Manual Work)', calories: 2500 },
];

export function AdultRequirementsChart() {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="font-headline">Adult Calorie Needs</CardTitle>
        <CardDescription>Estimated daily average requirements (kcal).</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={data}
                layout="vertical"
                margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="category" type="category" width={150} interval={0} />
                <Tooltip
                    contentStyle={{ 
                        background: 'hsl(var(--background))', 
                        borderColor: 'hsl(var(--border))' 
                    }}
                />
                <Legend />
                <Bar dataKey="calories" fill="hsl(var(--primary))" name="Calories (kcal)" />
            </BarChart>
            </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
