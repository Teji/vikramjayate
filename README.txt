Vikram Jayate - Finalization Patch

This patch contains the pre-payment production fixes and SEO work.

1. Copy the files into the project root, preserving paths.
2. Review DELETE_THESE.txt before deleting files locally.
3. Do NOT copy .env from this patch; keep your existing local .env.
4. Run:
   npm run lint
   npm run build
5. Then commit and push:
   git add -A
   git commit -m "Finalize website fixes and SEO"
   git push origin master

The current project should use Supabase recommendations on the homepage,
subscription-aware premium UI, improved auth profile loading, React Router
internal links, route SEO, robots.txt, sitemap.xml, JSON-LD, and Vercel SPA
routing.
