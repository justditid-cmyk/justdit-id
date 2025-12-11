# Vercel Deployment Guide - JustDit.id

Complete guide to deploy your Next.js app to Vercel with Firebase Google Authentication.

## Prerequisites

- GitHub account (to push your code)
- Vercel account (sign up at [vercel.com](https://vercel.com))
- Firebase project with Google Authentication enabled

## Step 1: Prepare Firebase Configuration

### 1.1 Enable Google Authentication in Firebase

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: **justdit-7d1bf**
3. Navigate to **Build** > **Authentication** > **Sign-in method**
4. Enable **Google** provider
5. Select support email
6. Click **Save**

### 1.2 Add Authorized Domains for Production

1. In Firebase Console > **Authentication** > **Settings** > **Authorized domains**
2. You'll need to add your Vercel domain after deployment (e.g., `justdit-id.vercel.app`)
3. Keep this tab open - you'll return here after getting your Vercel URL

### 1.3 Get Firebase Config Values

1. Go to **Project Settings** (gear icon) > **General**
2. Scroll to "Your apps" section
3. Copy all configuration values:
   - API Key
   - Auth Domain
   - Project ID: `justdit-7d1bf`
   - Storage Bucket
   - Messaging Sender ID
   - App ID

## Step 2: Push Code to GitHub

### 2.1 Initialize Git Repository (if not already done)

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - JustDit.id with Firebase Auth"
```

### 2.2 Create GitHub Repository

1. Go to [github.com](https://github.com) and click "New repository"
2. Name it: `justdit-id`
3. Keep it **Private** or **Public** (your choice)
4. Don't initialize with README (you already have files)
5. Click "Create repository"

### 2.3 Push to GitHub

```bash
# Add remote
git remote add origin https://github.com/YOUR_USERNAME/justdit-id.git

# Push code
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

### 3.1 Import Project to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select your `justdit-id` repository
4. Click "Import"

### 3.2 Configure Build Settings

Vercel will auto-detect Next.js settings:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

### 3.3 Add Environment Variables

In the deployment configuration, click "Environment Variables" and add:

#### Sanity CMS Variables (Optional for now)

```
NEXT_PUBLIC_SANITY_PROJECT_ID=placeholder-123
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-12-09
```

#### Firebase Variables (Required)

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=justdit-7d1bf.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=justdit-7d1bf
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=justdit-7d1bf.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

**Important**: Replace placeholder values with your actual Firebase config values from Step 1.3

### 3.4 Deploy

1. Click **Deploy**
2. Wait 2-3 minutes for build and deployment
3. You'll get a URL like: `https://justdit-id.vercel.app`

## Step 4: Configure Firebase for Vercel Domain

### 4.1 Add Vercel Domain to Firebase

1. Copy your Vercel deployment URL (e.g., `justdit-id.vercel.app`)
2. Go back to Firebase Console > **Authentication** > **Settings** > **Authorized domains**
3. Click **Add domain**
4. Paste your Vercel domain (without `https://`)
5. Click **Add**

### 4.2 Update OAuth Redirect URIs (if needed)

1. In Firebase Console, go to **Authentication** > **Sign-in method** > **Google**
2. Ensure redirect URIs include your Vercel domain
3. Firebase usually handles this automatically for Authorized domains

## Step 5: Test Your Deployment

1. Visit your Vercel URL: `https://justdit-id.vercel.app`
2. Click "Login" or "Daftar"
3. Click "Masuk dengan Google" / "Daftar dengan Google"
4. Google sign-in popup should appear
5. After signing in, you should be redirected to the homepage
6. Navbar should show your email and "Logout" button

## Step 6: Set Up Custom Domain (Optional)

### 6.1 Add Custom Domain in Vercel

1. In Vercel project dashboard, go to **Settings** > **Domains**
2. Add your domain (e.g., `justdit.id`)
3. Follow DNS configuration instructions from Vercel

### 6.2 Update Firebase Authorized Domains

1. Add your custom domain to Firebase Authorized domains
2. Example: `justdit.id`, `www.justdit.id`

## Common Issues & Solutions

### Issue: "auth/unauthorized-domain" Error

**Solution**:

1. Check Firebase Console > Authentication > Settings > Authorized domains
2. Ensure your Vercel domain is added
3. Wait 5-10 minutes for changes to propagate

### Issue: Environment Variables Not Working

**Solution**:

1. Go to Vercel project > **Settings** > **Environment Variables**
2. Verify all variables are set correctly
3. **Redeploy** the project (Vercel doesn't auto-redeploy on env var changes)
4. Go to **Deployments** tab and click "Redeploy" on latest deployment

### Issue: Build Fails on Vercel

**Solution**:

1. Check build logs in Vercel dashboard
2. Common causes:
   - Missing environment variables
   - TypeScript errors
   - Missing dependencies
3. Fix locally first:
   ```bash
   npm run build
   ```
4. Push fixes to GitHub (Vercel auto-deploys on push)

### Issue: Google Sign-In Popup Blocked

**Solution**:

1. Allow popups for your Vercel domain in browser settings
2. Or use redirect-based auth instead of popup (modify `AuthContext.tsx`):

   ```typescript
   // Change from signInWithPopup to signInWithRedirect
   import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

   const signInWithGoogle = async () => {
     const provider = new GoogleAuthProvider();
     await signInWithRedirect(auth, provider);
   };
   ```

### Issue: Navbar Doesn't Update After Login

**Solution**:

1. Check browser console for errors
2. Verify `AuthProvider` wraps entire app in `layout.tsx`
3. Clear browser cache and cookies
4. Try in incognito/private browsing mode

## Automatic Deployments

Vercel automatically deploys when you push to GitHub:

```bash
# Make changes locally
git add .
git commit -m "Update feature"
git push origin main

# Vercel automatically detects push and deploys
```

### Preview Deployments

- Every push to a branch creates a preview deployment
- Main branch deploys to production
- Preview URLs: `https://justdit-id-git-branch-name.vercel.app`

## Monitoring & Analytics

### Vercel Analytics

1. Go to Vercel project > **Analytics**
2. See page views, performance metrics
3. Free tier includes basic analytics

### Firebase Analytics (Optional)

1. Enable Firebase Analytics in console
2. Add Analytics config to `lib/firebase.ts`:

   ```typescript
   import { getAnalytics } from "firebase/analytics";

   // After initializeApp
   if (typeof window !== "undefined") {
     const analytics = getAnalytics(app);
   }
   ```

## Performance Optimization

### 1. Enable Vercel Speed Insights

```bash
npm install @vercel/speed-insights
```

In `app/layout.tsx`:

```typescript
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AuthProvider>{children}</AuthProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
```

### 2. Image Optimization

Images in `/public` are automatically optimized by Next.js Image component.
Ensure all images use `<Image>` from `next/image`.

### 3. Enable Caching

Vercel automatically caches:

- Static assets (images, CSS, JS)
- API routes (configure with headers)
- Static pages

## Security Best Practices

1. ✅ Never commit `.env.local` to Git
2. ✅ Use Vercel Environment Variables for secrets
3. ✅ Keep Firebase Admin SDK separate (never in client code)
4. ✅ Set up Firebase Security Rules:
   ```javascript
   // Firestore rules
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
     }
   }
   ```
5. ✅ Enable Firebase App Check for production

## Costs

### Vercel Free Tier Includes:

- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Custom domains
- ✅ Basic analytics

### Firebase Free Tier (Spark) Includes:

- ✅ 50,000 authentications/month
- ✅ 1GB storage
- ✅ 10GB/month data transfer
- ✅ Google Analytics unlimited

## Next Steps After Deployment

1. **Set up Sanity CMS** (see `SANITY_SETUP.md`)
2. **Add more features**:
   - Shopping cart functionality
   - Payment integration (Midtrans/Xendit)
   - Order management
3. **SEO Optimization**:
   - Add meta tags
   - Create `sitemap.xml`
   - Submit to Google Search Console
4. **Marketing**:
   - Connect Google Analytics
   - Set up Facebook Pixel
   - Add social sharing buttons

## Support & Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Firebase Hosting Alternatives](https://firebase.google.com/docs/hosting)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

---

**Deployment Checklist:**

- [ ] Firebase Google Auth enabled
- [ ] Code pushed to GitHub
- [ ] Project imported to Vercel
- [ ] Environment variables added
- [ ] Successful deployment
- [ ] Firebase authorized domains updated
- [ ] Google sign-in tested
- [ ] Custom domain configured (optional)
- [ ] Analytics enabled (optional)

**Your Production URL**: https://justdit-id.vercel.app (update after deployment)
