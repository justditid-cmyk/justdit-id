# Sanity CMS Setup Guide for JustDit.id

## 🎉 Sanity CMS Successfully Integrated!

Your promo carousel is now powered by Sanity CMS. Your client can update promo images and content through a beautiful visual interface.

---

## 📋 Setup Steps

### 1. Create a Sanity Account

1. Go to [sanity.io](https://www.sanity.io)
2. Click "Get Started" and sign up (free)
3. Create a new project:
   - **Project Name**: `justdit-id`
   - **Dataset**: `production` (public)

### 2. Get Your Project Credentials

After creating the project, you'll get:

- **Project ID**: (looks like `abc123xy`)
- Copy this ID!

### 3. Update Environment Variables

Open `.env.local` and replace the placeholder:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xy  # Replace with your actual project ID
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-12-09
```

### 4. Deploy Schema to Sanity

Run this command to upload the promo schema:

```bash
npx sanity deploy
```

Or manually:

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Go to "API" tab
4. The schema is already configured in `sanity/schemas/promo.ts`

### 5. Access Sanity Studio (CMS Admin Panel)

**Locally:**

```bash
npm run dev
```

Then visit: `http://localhost:3000/studio`

**On Vercel (after deployment):**
`https://your-domain.vercel.app/studio`

---

## 🖼️ How to Add Promo Images

1. Open Sanity Studio at `/studio`
2. Click "Promo Carousel" in the sidebar
3. Click "+ Create" button
4. Fill in the fields:
   - **Title**: Main headline (e.g., "Flash Sale Netflix")
   - **Subtitle**: Subheading (e.g., "Diskon 50%")
   - **Promo Title**: Bottom bar title
   - **Valid Until**: Expiration date
   - **Image**: Upload promo image (recommended: 1920x1080px)
   - **Background Gradient**: Tailwind classes (e.g., `from-red-600 to-red-800`)
   - **Button Link**: Optional URL when "Dapatkan" is clicked
   - **Display Order**: Number (0, 1, 2...) to control sequence
   - **Active**: Toggle to show/hide promo
5. Click "Publish"

The changes will appear on your website immediately!

---

## 🚀 Deploy to Vercel

### Add Environment Variables to Vercel:

1. Go to your Vercel project dashboard
2. Click "Settings" → "Environment Variables"
3. Add:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = `your_project_id`
   - `NEXT_PUBLIC_SANITY_DATASET` = `production`
   - `NEXT_PUBLIC_SANITY_API_VERSION` = `2025-12-09`
4. Click "Save"
5. Redeploy your site

---

## 👥 Give Client Access

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Go to "Members" tab
4. Click "Invite members"
5. Enter your client's email
6. Select role: **Editor** (can edit content)
7. Send invitation

Your client will receive an email and can:

- Login at `your-domain.vercel.app/studio`
- Add/edit/delete promos
- Upload images
- Toggle promos on/off

---

## 📁 Project Structure

```
justdit-id/
├── sanity/
│   ├── env.ts                    # Sanity environment config
│   ├── lib/
│   │   ├── client.ts             # Sanity client
│   │   └── image.ts              # Image URL builder
│   ├── queries.ts                # Fetch promos query
│   └── schemas/
│       ├── index.ts              # Schema export
│       └── promo.ts              # Promo schema definition
├── app/
│   ├── studio/[[...tool]]/
│   │   └── page.tsx              # Sanity Studio route
│   └── components/
│       └── PromoCarousel.tsx     # Updated to fetch from Sanity
├── sanity.config.ts              # Sanity configuration
└── .env.local                    # Environment variables (local)
```

---

## ✅ What's Changed

### Before (Hardcoded):

```tsx
const promos = [{ id: 1, title: "...", image: "/promo-1.jpg" }];
```

### After (CMS-Powered):

```tsx
const promos = await getPromos(); // Fetches from Sanity
```

Now your client can:

- ✅ Upload/change images without touching code
- ✅ Edit text and dates
- ✅ Control promo order
- ✅ Toggle promos on/off
- ✅ All through a visual interface

---

## 🆓 Free Tier Limits

- ✅ **3 users** (perfect for you + client)
- ✅ **10GB storage** (more than enough for promo images)
- ✅ **500GB bandwidth/month**
- ✅ **Unlimited API requests**

For your use case: **100% FREE** ✨

---

## 🔧 Troubleshooting

**Studio not loading?**

- Make sure you ran `npm install`
- Check `.env.local` has correct `NEXT_PUBLIC_SANITY_PROJECT_ID`
- Restart dev server

**Images not showing?**

- Verify images are uploaded in Sanity Studio
- Check console for errors
- Ensure promo is marked as "Active"

**Need help?**

- Sanity Docs: [sanity.io/docs](https://www.sanity.io/docs)
- Sanity Slack: [slack.sanity.io](https://slack.sanity.io)

---

## 🎯 Next Steps

1. ✅ Run `npm run dev`
2. ✅ Visit `http://localhost:3000/studio`
3. ✅ Add your first promo
4. ✅ Test the carousel
5. ✅ Deploy to Vercel
6. ✅ Invite your client

**Your client can now manage promos independently!** 🎊
