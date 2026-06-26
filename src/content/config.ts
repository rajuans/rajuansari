import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
    external: z.boolean().optional().default(false),
    externalHref: z.string().url().optional(),
    source: z.string().optional(), // 'AWS', 'HackerNoon', 'DZone', etc.
  }),
});

export const collections = { blog };
