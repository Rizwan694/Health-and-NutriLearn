'use server';
/**
 * @fileOverview This file defines a Genkit flow for providing personalized dietary recommendations based on user input.
 *
 * It includes:
 * - `getPersonalizedDietaryRecommendations` - An async function to generate dietary recommendations.
 * - `DietaryRecommendationInput` - The input type for the function.
 * - `DietaryRecommendationOutput` - The output type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DietaryRecommendationInputSchema = z.object({
  age: z.number().describe('The age of the user in years.'),
  gender: z.enum(['male', 'female']).describe('The gender of the user.'),
  activityLevel: z
    .enum(['sedentary', 'light', 'moderate', 'heavy'])
    .describe('The activity level of the user.'),
});
export type DietaryRecommendationInput = z.infer<
  typeof DietaryRecommendationInputSchema
>;

const DailyDietSchema = z.object({
  category: z
    .string()
    .describe('Food category, e.g., Fruits, Vegetables, Grains.'),
  recommendation: z
    .string()
    .describe(
      'Recommended daily intake for this category, e.g., "2-3 pieces", "200g", "1 glass (250ml)".'
    ),
});

const DietaryRecommendationOutputSchema = z.object({
  summary: z
    .string()
    .describe('A summary of the personalized dietary recommendations.'),
  dailyChart: z
    .array(DailyDietSchema)
    .describe(
      'A daily dietary chart with recommendations for various food categories.'
    ),
});

export type DietaryRecommendationOutput = z.infer<
  typeof DietaryRecommendationOutputSchema
>;

export async function getPersonalizedDietaryRecommendations(
  input: DietaryRecommendationInput
): Promise<DietaryRecommendationOutput> {
  return personalizedDietaryRecommendationsFlow(input);
}

const dietaryRecommendationsPrompt = ai.definePrompt({
  name: 'dietaryRecommendationsPrompt',
  input: {schema: DietaryRecommendationInputSchema},
  output: {schema: DietaryRecommendationOutputSchema},
  prompt: `You are a registered dietitian providing personalized dietary recommendations.

  Based on the user's age, gender, and activity level, provide detailed dietary suggestions for a balanced intake.

  First, provide a summary of the overall dietary plan.

  Then, create a daily dietary chart. IMPORTANT: Instead of using the term "servings", specify the quantity in concrete terms like grams, numbers, or volume (e.g., "200g", "2-3 pieces", "1 glass (250ml)").

  The chart should be in the following order and include specific recommendations for:
  - Fruits
  - Vegetables
  - Grains (e.g., bread, rice)
  - Protein (e.g., meat, pulses, eggs)
  - Dairy (e.g., milk)
  - Beverages (e.g., juice, water)

  Consider the following factors when making your recommendations:
  - Caloric needs
  - Macronutrient ratios (carbohydrates, fats, protein)
  - Micronutrient needs (vitamins and minerals)
  - Hydration

  Here is the user's information:
  Age: {{{age}}}
  Gender: {{{gender}}}
  Activity Level: {{{activityLevel}}}
  `,
});

const personalizedDietaryRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedDietaryRecommendationsFlow',
    inputSchema: DietaryRecommendationInputSchema,
    outputSchema: DietaryRecommendationOutputSchema,
  },
  async input => {
    const {output} = await dietaryRecommendationsPrompt(input);
    return output!;
  }
);
