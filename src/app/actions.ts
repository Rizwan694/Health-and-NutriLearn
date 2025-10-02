'use server';

import { getPersonalizedDietaryRecommendations, type DietaryRecommendationInput } from '@/ai/flows/personalized-dietary-recommendations';
import { z } from 'zod';

const formSchema = z.object({
  age: z.coerce.number().min(1).max(120),
  gender: z.enum(['male', 'female']),
  activityLevel: z.enum(['sedentary', 'light', 'moderate', 'heavy']),
});

type State = {
  success: boolean;
  recommendations?: string;
  error?: string | null;
};

export async function getPersonalizedRecommendationsAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = formSchema.safeParse({
    age: formData.get('age'),
    gender: formData.get('gender'),
    activityLevel: formData.get('activityLevel'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      error: 'Invalid input. Please check your form entries.',
    };
  }

  try {
    const result = await getPersonalizedDietaryRecommendations(validatedFields.data as DietaryRecommendationInput);
    if (result.recommendations) {
        return {
            success: true,
            recommendations: result.recommendations,
        };
    } else {
        return {
            success: false,
            error: 'Could not generate recommendations. Please try again.',
        }
    }
  } catch (e) {
    console.error(e);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again later.',
    };
  }
}
