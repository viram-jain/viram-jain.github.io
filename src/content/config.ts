import { defineCollection, z } from 'astro:content';

const jobs = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    company: z.string(),
    range: z.string(),
    url: z.string().url(),
    highlights: z.array(z.string()),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      title: z.string(),
      problem: z.string(),
      approach: z.string(),
      result: z.string(),
      cover: image(),
      github: z.string().url().optional(),
      external: z.string().url().optional(),
      tech: z.array(z.string()),
      showInProjects: z.boolean().default(true),
    }),
});

const site = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    name: z.string().optional(),
    subtitle: z.string().optional(),
    buttonText: z.string().optional(),
    skills: z.array(z.string()).optional(),
    bio: z.string().optional(),
    quote: z.string().optional(),
    idleTruths: z.array(z.string()).optional(),
  }),
});

export const collections = { jobs, projects, site };
