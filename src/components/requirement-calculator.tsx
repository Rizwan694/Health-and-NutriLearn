'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getPersonalizedRecommendationsAction } from '@/app/actions';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useRef } from 'react';

const formSchema = z.object({
  age: z.coerce.number().min(1, 'Age is required').max(120),
  gender: z.enum(['male', 'female'], { required_error: 'Gender is required' }),
  activityLevel: z.enum(['sedentary', 'light', 'moderate', 'heavy'], {
    required_error: 'Activity level is required',
  }),
});

type FormValues = z.infer<typeof formSchema>;

const initialState = {
  success: false,
  recommendations: '',
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Get Recommendations
        </>
      )}
    </Button>
  );
}

export function RequirementCalculator() {
  const { toast } = useToast();
  const [state, formAction] = useFormState(getPersonalizedRecommendationsAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: undefined,
      gender: undefined,
      activityLevel: undefined,
    },
  });

  useEffect(() => {
    if (!state.success && state.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.error,
      });
    }
  }, [state, toast]);

  const onFormSubmit = (data: FormValues) => {
    const formData = new FormData();
    formData.append('age', String(data.age));
    formData.append('gender', data.gender);
    formData.append('activityLevel', data.activityLevel);
    formAction(formData);
  };

  return (
    <div>
      <h2 className="font-headline text-3xl font-bold text-center mb-2">
        Personalized Requirement Calculator
      </h2>
      <p className="text-center text-muted-foreground mb-6">
        Fill in your details to receive AI-powered dietary recommendations.
      </p>

      <Form {...form}>
        <form
          ref={formRef}
          onSubmit={form.handleSubmit(onFormSubmit)}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 25" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="activityLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Activity Level</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your activity level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="sedentary">Sedentary (little to no exercise)</SelectItem>
                      <SelectItem value="light">Light (light exercise/sports 1-3 days/week)</SelectItem>
                      <SelectItem value="moderate">Moderate (moderate exercise/sports 3-5 days/week)</SelectItem>
                      <SelectItem value="heavy">Heavy (hard exercise/sports 6-7 days a week)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <SubmitButton />
        </form>
      </Form>

      {state.success && state.recommendations && (
        <Card className="mt-8 bg-primary/5">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
              <Sparkles className="text-accent" />
              Your Personalized Recommendations
            </CardTitle>
            <CardDescription>
              Here are the dietary suggestions generated by our AI based on your profile.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap">
              {state.recommendations}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
