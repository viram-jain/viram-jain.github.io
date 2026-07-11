import { defineCollection, z } from 'astro:content';

const jobs = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    company: z.string(),
    range: z.string(),
    url: z.string().url(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      title: z.string(),
      cover: image(),
      github: z.string().url().optional(),
      external: z.string().url().optional(),
      tech: z.array(z.string()),
      showInProjects: z.boolean().default(true),
    }),
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    permalink: z.string(),
    tags: z.array(z.string()).default([]),
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
    }),
});

export const collections = { jobs, projects, posts, site };
