
'use server';
/**
 * @fileOverview A GenAI tool that recommends suitable project plans from a collection of +100 options
 * based on user-defined parameters such as land size, desired crops/livestock, and geographical biome.
 *
 * - recommendProject - A function that handles the project recommendation process.
 * - ProjectRecommendationInput - The input type for the recommendProject function.
 * - ProjectRecommendationOutput - The return type for the recommendProject function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectRecommendationInputSchema = z.object({
  landSize: z.string().describe('The size of the land, e.g., "0.5ha", "1ha", "2ha", "3ha", "5ha".'),
  desiredOutput: z.string().describe('Desired crops or livestock, e.g., "Café", "hortifruti", "piscicultura", "pecuária leiteira", "agrofloresta", "avicultura", "suínos", "apicultura".'),
  biome: z.string().describe('Geographical biome, e.g., "Cerrado", "Mata Atlântica/Sul", "Semiárido/Nordeste", "Amazônia/Norte".'),
});
export type ProjectRecommendationInput = z.infer<typeof ProjectRecommendationInputSchema>;

const ProjectRecommendationOutputSchema = z.object({
  recommendedProjects: z.array(z.object({
    name: z.string().describe('The name or brief description of the recommended project plan.'),
    category: z.string().optional().describe('The category of the project, e.g., "Por Tamanho de Terreno", "Por Vocação Produtiva", "Por Bioma Brasileiro", "Projetos Especiais".'),
    relevanceScore: z.number().min(0).max(100).optional().describe('A score indicating how relevant this project is to the user input (0-100).'),
    reasoning: z.string().optional().describe('A brief explanation of why this project is recommended.'),
  })).describe('A list of recommended project plans based on the user\'s criteria.'),
});
export type ProjectRecommendationOutput = z.infer<typeof ProjectRecommendationOutputSchema>;

export async function recommendProject(input: ProjectRecommendationInput): Promise<ProjectRecommendationOutput> {
  return projectRecommendationFlow(input);
}

const projectRecommendationPrompt = ai.definePrompt({
  name: 'projectRecommendationPrompt',
  input: {schema: ProjectRecommendationInputSchema},
  output: {schema: ProjectRecommendationOutputSchema},
  prompt: `You are an expert in rural property planning and sustainable agriculture.\nBased on the following criteria provided by the user, recommend 3 to 5 most suitable project plans from the "+100 Projetos de Sítios Produtivos" collection.\nConsider the details of the collection as described:\n- +100 projects organized into categories:\n    - 50 projects by land size (0.5ha, 1ha, 2ha, 3ha, 5ha) - 10 for each size.\n    - 35 projects by productive vocation (Café, hortifruti, piscicultura, pecuária leiteira, agrofloresta, avicultura, suínos, apicultura).\n    - 20 projects by Brazilian biome (Cerrado, Mata Atlântica/Sul, Semiárido/Nordeste, Amazônia/Norte).\n    - 10 special projects (Orgânico certificado, permacultura, agroturismo, agroindústria caseira, energia renovável).\n\nPrioritize projects that directly match the user's criteria. For each recommendation, provide a brief name, its category (if applicable), and a short reasoning for the recommendation.\n\nUser Input:\nLand Size: {{{landSize}}}\nDesired Crops/Livestock: {{{desiredOutput}}}\nGeographical Biome: {{{biome}}}\n\nRecommended projects should be highly relevant and actionable within the context of the "+100 Projetos de Sítios Produtivos" collection.`,
});

const projectRecommendationFlow = ai.defineFlow(
  {
    name: 'projectRecommendationFlow',
    inputSchema: ProjectRecommendationInputSchema,
    outputSchema: ProjectRecommendationOutputSchema,
  },
  async (input) => {
    const {output} = await projectRecommendationPrompt(input);
    return output!;
  }
);
