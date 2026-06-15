import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('تیم تحریریه آزموده کاران'),
    category: z.string().default('عمومی'),
    cover: z.string().optional(),
    readingTime: z.string().optional(),
  }),
});

export const collections = { blog };
