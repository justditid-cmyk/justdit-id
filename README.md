# JustDit.id - Optimized Account Reselling Platform

![Next.js](https://img.shields.io/badge/Next.js-16.0.8-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8)

A highly optimized Next.js application for an account reselling site with minimal bandwidth usage, fast server performance, and reduced client-side JavaScript.

## 🚀 Features

- **Ultra-Fast Performance**: Server Components by default, minimal client-side JS
- **Server-Side Pagination**: Database-driven pagination with URL state management
- **Modern UI**: Clean, professional design with custom color scheme
- **Mobile Responsive**: Fully responsive across all devices
- **SEO Optimized**: Server-rendered content for better search engine visibility
- **Type-Safe**: Built with TypeScript

## 🎨 Design Specifications

- **Background**: `#041A2F` (Deep Navy Blue)
- **Primary Card**: `#28529C` (Royal Blue)
- **Secondary Card**: `#727271` (Neutral Gray)
- **Text**: `#FFFFFF` (White)

## 📦 Tech Stack

- Next.js 16+ with App Router
- TypeScript
- TailwindCSS 4
- React Server Components (95% server-side)

## 🏗️ Project Structure

```
app/
├── components/
│   ├── Navbar.tsx              # Static navigation (Server)
│   ├── Hero.tsx                # Hero/Promotion section (Server)
│   ├── WhyUs.tsx               # Benefits section (Server)
│   ├── PopularProducts.tsx     # Featured products (Server)
│   ├── ProductsList.tsx        # Paginated products (Server)
│   ├── PaginationControls.tsx  # Pagination UI (Client - ONLY Client Component)
│   ├── Bundling.tsx            # Bundle offers (Server)
│   ├── CTA.tsx                 # Call-to-action (Server)
│   ├── TipsTricks.tsx          # Blog cards (Server)
│   ├── Contact.tsx             # Contact info (Server)
│   └── Footer.tsx              # Footer links (Server)
├── globals.css
├── layout.tsx
└── page.tsx
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📄 Available Scripts

```bash
npm run dev    # Development server with Turbopack
npm run build  # Build for production
npm start      # Start production server
npm run lint   # Run linting
```

## 🎯 Landing Page Sections

1. **Navbar** - Sticky navigation with logo and menu
2. **Hero Section** - Promotional banner with statistics
3. **Why Us** - 6 key benefits with icons
4. **Popular Products** - 4 featured products with ratings
5. **All Products** - Server-side paginated product list
6. **Paket Bundling** - 3 bundle offers with discounts
7. **CTA Section** - "Daftar Sekarang" call-to-action
8. **Tips & Tricks** - Blog-style article cards
9. **Contact Us** - Multiple contact methods + FAQ
10. **Footer** - Links, social media, and information

## ⚡ Performance Optimizations

### Server Components

- **95% Server-Side**: Only pagination controls use client JavaScript
- **Zero JS for Static Content**: Navbar, footer, hero, etc. are pure HTML
- **<50KB Client Bundle**: Minimal JavaScript shipped to browser

### Server-Side Pagination

- Database queries run on server
- Page state in URL parameters
- No client-side data fetching

### Optimized Styling

- TailwindCSS utility-first approach
- Minimal CSS bundle with tree-shaking
- Custom color variables

## 🗄️ Database Integration

Replace placeholder data in `ProductsList.tsx`:

```typescript
// Example with Prisma
import { prisma } from "@/lib/prisma";

async function getProducts(page: number = 1, limit: number = 12) {
  const skip = (page - 1) * limit;
  const [products, total] = await Promise.all([
    prisma.product.findMany({ skip, take: limit }),
    prisma.product.count(),
  ]);
  return { products, total, page, limit };
}
```

## 📊 Performance Targets

- **FCP**: < 1.5s
- **LCP**: < 2.5s
- **TTI**: < 3.5s
- **TBT**: < 200ms
- **CLS**: < 0.1

## 📚 Documentation

See [OPTIMIZATION-GUIDE.md](./OPTIMIZATION-GUIDE.md) for detailed optimization strategies.

## 📞 Contact

- Email: hello@justdit.id
- WhatsApp: +62 812-3456-7890
- Telegram: @justditid

---

Built with ❤️ using Next.js and React Server Components
