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
      description: z.string(),
      cover: image(),
      github: z.string().url().optional(),
      external: z.string().url().optional(),
      tech: z.array(z.string()),
      showInProjects: z.boolean().default(true),
    }),
});

const site = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      name: z.string().optional(),
      subtitle: z.string().optional(),
      buttonText: z.string().optional(),
      avatar: image().optional(),
      skills: z.array(z.string()).optional(),
      bio: z.string().optional(),
    }),
});

export const collections = { jobs, projects, site };
