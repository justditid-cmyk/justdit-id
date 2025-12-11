# Firebase Authentication Setup Guide

This guide will help you set up Firebase Authentication for JustDit.id.

## Prerequisites

- A Google account
- Access to [Firebase Console](https://console.firebase.google.com)

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Add Project" or "Create a project"
3. Enter project name: `justdit-id` (or your preferred name)
4. (Optional) Enable Google Analytics
5. Click "Create Project"

## Step 2: Register Your Web App

1. In your Firebase project dashboard, click the **Web** icon (`</>`)
2. Register your app:
   - App nickname: `JustDit Web`
   - ✅ Check "Also set up Firebase Hosting" (optional)
3. Click "Register app"
4. Copy the Firebase configuration object that appears:

```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123",
};
```

## Step 3: Update Environment Variables

1. Open `.env.local` file in your project root
2. Replace the placeholder values with your Firebase config:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
```

⚠️ **Important**: Never commit `.env.local` to version control. It's already in `.gitignore`.

## Step 4: Enable Authentication Methods

### Email/Password Authentication

1. In Firebase Console, go to **Build** > **Authentication**
2. Click "Get started" if this is your first time
3. Go to **Sign-in method** tab
4. Click on **Email/Password**
5. Toggle **Enable**
6. Click "Save"

### Google Sign-In (OAuth)

1. In the **Sign-in method** tab, click on **Google**
2. Toggle **Enable**
3. Select a support email (your email)
4. Click "Save"

## Step 5: Set Up Firestore Database (Optional but Recommended)

1. In Firebase Console, go to **Build** > **Firestore Database**
2. Click "Create database"
3. Select **Start in test mode** (for development)
   - ⚠️ Remember to set up proper security rules for production
4. Choose a location closest to your users (e.g., `asia-southeast1` for Indonesia)
5. Click "Enable"

### Recommended Security Rules (Production)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Orders can only be created by authenticated users
    match /orders/{orderId} {
      allow create: if request.auth != null;
      allow read, update: if request.auth != null &&
        request.auth.uid == resource.data.userId;
    }
  }
}
```

## Step 6: Test Your Setup

1. Restart your development server:

   ```bash
   npm run dev
   ```

2. Navigate to `/register` page
3. Try creating an account with:
   - Email: `test@example.com`
   - Password: `password123`

4. Check Firebase Console > Authentication > Users to verify the user was created

5. Test Google Sign-In by clicking "Daftar dengan Google"

## Features Implemented

### ✅ Authentication Pages

- **Login Page** (`/login`)
  - Email/password login
  - Google OAuth
  - Error handling
  - Redirect to home after login

- **Register Page** (`/register`)
  - Email/password registration
  - Password confirmation
  - Google OAuth
  - Validation (min 6 characters)

### ✅ Authentication Context

- Global auth state management
- `useAuth()` hook for accessing user data
- Methods: `signUp()`, `signIn()`, `signInWithGoogle()`, `logout()`
- Persistent sessions (automatic re-authentication)

### ✅ Protected UI

- Navbar shows user email when logged in
- Dynamic Login/Daftar or Logout buttons
- Mobile-responsive auth UI

## File Structure

```
lib/
  firebase.ts                 # Firebase initialization
context/
  AuthContext.tsx            # Auth context provider
app/
  login/
    page.tsx                 # Login page
  register/
    page.tsx                 # Register page
  layout.tsx                 # Wrapped with AuthProvider
  components/
    Navbar.tsx               # Updated with auth state
```

## Common Issues

### Issue: "Firebase: Error (auth/invalid-api-key)"

**Solution**: Check that your API key in `.env.local` is correct and starts with `AIza`

### Issue: "Firebase: Error (auth/unauthorized-domain)"

**Solution**:

1. Go to Firebase Console > Authentication > Settings > Authorized domains
2. Add your development domain (e.g., `localhost`)
3. Add your production domain when deploying

### Issue: User not persisting after refresh

**Solution**: This is handled automatically by `onAuthStateChanged` in `AuthContext.tsx`. Make sure:

- `AuthProvider` wraps your entire app in `layout.tsx`
- You're using `useAuth()` hook to access user state

### Issue: "Firebase: Error (auth/popup-blocked)"

**Solution**: Browser is blocking the Google sign-in popup. Allow popups for your site or use `signInWithRedirect` instead.

## Next Steps

### 1. Add Protected Routes

Create a higher-order component to protect routes:

```typescript
// middleware.ts or use client-side protection
'use client';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useEffect } from 'react';

export function withAuth(Component: React.ComponentType) {
  return function ProtectedRoute(props: any) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push('/login');
      }
    }, [user, loading, router]);

    if (loading) return <div>Loading...</div>;
    if (!user) return null;

    return <Component {...props} />;
  };
}
```

### 2. Store User Data in Firestore

After registration, save additional user data:

```typescript
// In AuthContext after signUp
const userDocRef = doc(db, "users", userCredential.user.uid);
await setDoc(userDocRef, {
  email: userCredential.user.email,
  createdAt: new Date(),
  role: "customer",
});
```

### 3. Add Email Verification

```typescript
import { sendEmailVerification } from "firebase/auth";

await sendEmailVerification(userCredential.user);
```

### 4. Add Password Reset

Create a password reset page:

```typescript
import { sendPasswordResetEmail } from "firebase/auth";

const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset email sent!");
  } catch (error) {
    console.error(error);
  }
};
```

## Security Reminders

- ✅ `.env.local` is in `.gitignore`
- ⚠️ Never expose Firebase Admin SDK credentials
- ⚠️ Update Firestore rules before production
- ⚠️ Enable App Check for production
- ⚠️ Set up proper CORS for production domain

## Resources

- [Firebase Auth Documentation](https://firebase.google.com/docs/auth)
- [Next.js with Firebase](https://firebase.google.com/docs/web/setup)
- [Firebase Security Rules](https://firebase.google.com/docs/firestore/security/get-started)

---

**Last Updated**: December 2024
**Version**: 1.0
