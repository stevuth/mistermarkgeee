'use server';
/**
 * @fileOverview AI Creative Consultant flow for MisterMarkGee.
 * 
 * - creativeConsultant - A function that handles brainstorming with visitors.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const CreativeConsultantInputSchema = z.object({
  message: z.string().describe('The message from the visitor.'),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.array(z.object({ text: z.string() }))
  })).optional().describe('The conversation history.'),
});
export type CreativeConsultantInput = z.infer<typeof CreativeConsultantInputSchema>;

const CreativeConsultantOutputSchema = z.object({
  reply: z.string().describe('The AI response.'),
});
export type CreativeConsultantOutput = z.infer<typeof CreativeConsultantOutputSchema>;

export async function creativeConsultant(input: CreativeConsultantInput): Promise<CreativeConsultantOutput> {
  return creativeConsultantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'creativeConsultantPrompt',
  input: { schema: CreativeConsultantInputSchema },
  output: { schema: CreativeConsultantOutputSchema },
  config: {
    safetySettings: [
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_ONLY_HIGH' },
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_ONLY_HIGH' },
      { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_ONLY_HIGH' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_ONLY_HIGH' },
    ],
  },
  prompt: `You are MisterMarkGee's Creative AI Assistant. 

MisterMarkGee (Mark Macharia Gaturuku) is a Kenya-born, Birmingham-based Content Creator, Artist Manager, Videographer, Podcaster, and Writer.

His core framework is "The 5 C's Effect":
1. Content: High-quality media creation.
2. Commentary: Thoughtful analysis and civil discourse.
3. Contending: Standing firm in conviction in the marketplace of ideas.
4. Christ: The center, source, and goal of all work.
5. Culture: The mission field where creativity meets community.

Your goal is to help visitors understand how Mark's framework can benefit their specific projects or vision. Whether they need a cinematic video, a short-term artist campaign, or a podcast guest with a Christ-centered perspective, you guide them on how Mark can help.

Be professional, mature, encouraging, and Christ-centered. 

If they ask how to hire or work with Mark, direct them to the contact form at the bottom of the page or to email hello@mistermarkgee.com.

{{#if history}}
Previous conversation for context:
{{#each history}}
- {{role}}: {{#each content}}{{{text}}}{{/each}}
{{/each}}
{{/if}}

Visitor's current message: {{{message}}}`,
});

const creativeConsultantFlow = ai.defineFlow(
  {
    name: 'creativeConsultantFlow',
    inputSchema: CreativeConsultantInputSchema,
    outputSchema: CreativeConsultantOutputSchema,
  },
  async (input) => {
    try {
      const { output } = await prompt(input);
      if (!output) {
        throw new Error('AI failed to generate a reply.');
      }
      return output;
    } catch (error) {
      console.error('Genkit flow error:', error);
      throw error;
    }
  }
);
