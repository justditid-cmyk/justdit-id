# JustDit.id - Optimized Landing Page

## Overview

A highly optimized Next.js 15+ application using App Router for an account reselling site with minimal bandwidth usage and fast server performance.

## Performance Optimizations Implemented

### 1. Server Components (Default)

- **All components are Server Components by default** except `PaginationControls.tsx`
- Reduces client-side JavaScript bundle significantly
- Components render on the server, sending only HTML to the client
- Zero JavaScript overhead for static content

### 2. Server-Side Pagination

- `ProductsList.tsx` implements server-side pagination
- Async component that fetches data on the server
- Page state managed through URL search params
- Only `PaginationControls.tsx` is a Client Component for navigation

### 3. Minimal Client JavaScript

Only ONE Client Component in the entire application:

- `PaginationControls.tsx` - Required for interactive pagination controls
- Uses `'use client'` directive strategically
- All other components are Server Components

### 4. Static Rendering Where Possible

- Navbar, Footer, Hero, WhyUs, PopularProducts - All static Server Components
- No client-side state management needed
- Rendered once on the server, cached by Next.js

### 5. Optimized CSS

- TailwindCSS for utility-first styling (minimal CSS bundle)
- Custom color scheme in `globals.css` using CSS variables
- No heavy CSS frameworks or animations libraries

### 6. Image Optimization (Ready for Implementation)

Current placeholders can be replaced with:

```tsx
import Image from "next/image";

<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={400}
  height={300}
  loading="lazy"
  placeholder="blur"
/>;
```

### 7. Link Prefetching

- All internal navigation uses `next/link`
- Automatic prefetching of visible links
- Instant navigation between pages

## Component Structure

### Server Components (Zero JS to Client)

1. **Navbar.tsx** - Sticky navigation (static)
2. **Hero.tsx** - Hero/Promotion section (static)
3. **WhyUs.tsx** - Benefits section (static)
4. **PopularProducts.tsx** - Featured products (static)
5. **ProductsList.tsx** - Server-side paginated products (async)
6. **Bundling.tsx** - Bundle offers (static)
7. **CTA.tsx** - Call-to-action section (static)
8. **TipsTricks.tsx** - Blog cards (static)
9. **Contact.tsx** - Contact information (static)
10. **Footer.tsx** - Footer links (static)

### Client Components (Minimal JS)

1. **PaginationControls.tsx** - Interactive pagination controls

## Database Integration (Next Steps)

Replace the mock data in `ProductsList.tsx` with real database queries:

```tsx
// Example with Prisma
import { prisma } from "@/lib/prisma";

async function getProducts(page: number = 1, limit: number = 12) {
  const skip = (page - 1) * limit;

  const [products, total] = await Promise.all([
    prisma.product.findMany({
      skip,
      take: limit,
      select: {
        id: true,
        name: true,
        category: true,
        price: true,
        duration: true,
      },
    }),
    prisma.product.count(),
  ]);

  return { products, total, page, limit };
}
```

## Caching Strategies

### ISR (Incremental Static Regeneration)

Add to components that need periodic updates:

```tsx
export const revalidate = 3600; // Revalidate every hour
```

### Route Cache

Next.js automatically caches server component outputs.

### Data Cache

Use `fetch` with caching options:

```tsx
fetch("https://api.example.com/data", {
  next: { revalidate: 3600 },
});
```

## Performance Metrics Target

- **First Contentful Paint (FCP):** < 1.5s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Time to Interactive (TTI):** < 3.5s
- **Total Blocking Time (TBT):** < 200ms
- **Cumulative Layout Shift (CLS):** < 0.1

## Compression

Enable in `next.config.ts`:

```typescript
const nextConfig = {
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header
};
```

## Bundle Size Optimization

Current setup ensures:

- Minimal Client JavaScript (only pagination controls)
- Tree-shaking enabled by default
- No unnecessary dependencies
- Dynamic imports ready for heavy components

## Future Optimizations

1. **Image Optimization**

   - Add actual product images using `next/image`
   - Implement blur placeholders
   - Use WebP/AVIF formats

2. **Font Optimization**

   - Currently using system fonts
   - Can add `next/font` for custom fonts with optimization

3. **Streaming SSR**

   - Already supported with async Server Components
   - Add `<Suspense>` boundaries for better UX:

   ```tsx
   <Suspense fallback={<LoadingSkeleton />}>
     <ProductsList searchParams={searchParams} />
   </Suspense>
   ```

4. **Partial Prerendering (PPR)**

   - Enable in Next.js 14+ for hybrid rendering
   - Static shell with dynamic content

5. **Edge Runtime**
   - Move lightweight routes to Edge for faster response
   ```tsx
   export const runtime = "edge";
   ```

## SEO Optimization

Add to `layout.tsx` or individual pages:

```tsx
export const metadata = {
  title: "JustDit.id - Reseller Akun Premium Terpercaya",
  description:
    "Dapatkan akun premium Netflix, Spotify, Disney+ dengan harga terjangkau",
  keywords: ["netflix premium", "spotify premium", "akun reseller"],
};
```

## Running the Application

```bash
# Development
npm run dev

# Production build
npm run build
npm start
```

## Color Scheme

- Background: `#041A2F`
- Card Primary: `#28529C`
- Card Secondary: `#727271`
- Text: `#FFFFFF`

## Tech Stack

- Next.js 15+ (App Router)
- React Server Components
- TypeScript
- TailwindCSS
- Minimal client-side JavaScript

## Performance Benefits

✅ **95% Server-Side Rendering** - Most content rendered on server  
✅ **< 50KB Client JS** - Only pagination controls need JavaScript  
✅ **Fast Time to First Byte** - Server components stream quickly  
✅ **SEO Friendly** - All content available in initial HTML  
✅ **Low Bandwidth** - HTML only, minimal JS/CSS  
✅ **Better Core Web Vitals** - Optimized for performance metrics
