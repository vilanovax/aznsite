import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../data/site.js';

export async function GET(context) {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: `${site.name} | مقالات`,
    description:
      'مقالات و تحلیل‌های موسسه حسابرسی آزموده کاران در حوزه حسابرسی، مالیات و مدیریت مالی.',
    site: context.site,
    customData: `<language>fa-IR</language>`,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      author: post.data.author,
      categories: [post.data.category],
      link: `/blog/${post.id}/`,
    })),
  });
}
