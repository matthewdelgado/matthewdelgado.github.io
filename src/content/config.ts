import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techStack: z.array(z.string()),
    date: z.date(),
    featured: z.boolean().default(false),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
