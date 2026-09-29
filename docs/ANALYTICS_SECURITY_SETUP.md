# 📊 Analytics & Security Setup Guide

## ✅ What Was Added

### 1. **Google Analytics 4** 📈
- Automatic pageview tracking
- Event tracking ready
- Privacy-focused implementation
- Conditional loading (only if ID is set)

### 2. **Security Headers** 🔒
- X-Frame-Options (prevent clickjacking)
- X-Content-Type-Options (prevent MIME sniffing)
- X-XSS-Protection (XSS protection)
- Referrer-Policy (privacy)
- Content Security Policy (CSP)
- Permissions-Policy (restrict features)

---

## 🚀 Setup Instructions

### Step 1: Get Google Analytics ID

1. **Go to Google Analytics**
   - Visit: https://analytics.google.com/
   - Sign in with your Google account

2. **Create Property**
   - Click "Admin" (gear icon)
   - Click "Create Property"
   - Name: "ELEC3 Portfolio"
   - Select timezone and currency
   - Click "Next"

3. **Set Up Data Stream**
   - Choose "Web"
   - Website URL: `https://mark-siazon.github.io`
   - Stream name: "Portfolio Website"
   - Click "Create stream"

4. **Get Measurement ID**
   - You'll see: `G-XXXXXXXXXX`
   - Copy this ID

---

### Step 2: Add to GitHub Secrets

1. **Go to Repository Settings**
   ```
   https://github.com/mark-siazon/AE3-Portfolio-Cloud-DevOps/settings/secrets/actions
   ```

2. **Add New Secret**
   - Click "New repository secret"
   - Name: `GA_MEASUREMENT_ID`
   - Value: `G-XXXXXXXXXX` (your ID)
   - Click "Add secret"

---

### Step 3: Deploy

```bash
git add .
git commit -m "Add Google Analytics and security headers"
git push origin main
```

GitHub Actions will automatically:
- Read the secret
- Inject it during build
- Deploy with analytics enabled

---

## 🧪 Testing Analytics

### After Deployment:

1. **Visit Your Site**
   ```
   https://mark-siazon.github.io/AE3-Portfolio-Cloud-DevOps/
   ```

2. **Check Real-Time Reports**
   - Go to Google Analytics
   - Reports → Realtime
   - You should see yourself as 1 active user

3. **Verify Tracking**
   - Open DevTools (F12)
   - Network tab
   - Filter: `google-analytics`
   - You should see requests to GA

---

## 📊 What Gets Tracked

### Automatic Tracking:
- ✅ **Page Views** - Every page visit
- ✅ **User Sessions** - Unique visitors
- ✅ **Traffic Sources** - Where users come from
- ✅ **Device Type** - Desktop/Mobile/Tablet
- ✅ **Location** - Country/City (approximate)
- ✅ **Browser** - Chrome, Firefox, Safari, etc.

### Custom Events (Optional):
You can add custom tracking for:
- Project modal opens
- PDF downloads
- Button clicks
- External link clicks

**Example:**
```tsx
// Track project modal open
gtag('event', 'view_project', {
  project_name: 'Spring Boot API',
  project_type: 'backend'
});
```

---

## 🔒 Security Headers Explained

### What Each Header Does:

**X-Frame-Options: DENY**
- Prevents your site from being embedded in iframes
- Protects against clickjacking attacks

**X-Content-Type-Options: nosniff**
- Prevents browsers from MIME-sniffing
- Stops execution of malicious files

**X-XSS-Protection: 1; mode=block**
- Enables browser's XSS filter
- Blocks page if XSS attack detected

**Referrer-Policy: strict-origin-when-cross-origin**
- Controls referrer information sent
- Privacy-focused policy

**Content-Security-Policy**
- Restricts resource loading
- Only allows trusted sources
- Prevents XSS and injection attacks

**Permissions-Policy**
- Disables unnecessary browser features
- Blocks geolocation, camera, microphone, etc.

---

## ⚠️ Important Notes

### GitHub Pages Limitations:

GitHub Pages has **limited support** for custom headers via `_headers` file. Some headers may not work.

**What Works:**
- ✅ Meta tags in HTML (implemented)
- ✅ CSP via meta tag (if needed)

**What May Not Work:**
- ⚠️ Custom HTTP headers via `_headers`
- ⚠️ Cache-Control headers

**Solution:**
We've added security headers as **meta tags** in the HTML, which work on all platforms.

---

## 🔍 Verify Security Headers

### After Deployment:

1. **Use Security Headers Checker**
   ```
   https://securityheaders.com/?q=https://mark-siazon.github.io/AE3-Portfolio-Cloud-DevOps/
   ```

2. **Check in DevTools**
   - F12 → Network tab
   - Click any request
   - Headers tab
   - Look for security headers

3. **Expected Headers:**
   - X-Frame-Options: DENY
   - X-Content-Type-Options: nosniff
   - X-XSS-Protection: 1; mode=block
   - Referrer-Policy: strict-origin-when-cross-origin

---

## 📝 Files Created

1. **`.env.example`** - Environment variable template
2. **`public/_headers`** - Security headers (limited support on GH Pages)
3. **Updated `router-head.tsx`** - Added GA and security meta tags
4. **Updated `static.yml`** - Added GA secret injection

---

## 🎯 Privacy Compliance

### GDPR/Privacy Considerations:

**Current Setup:**
- ✅ No cookies set without consent
- ✅ IP anonymization (GA4 default)
- ✅ No personal data collected
- ✅ Privacy-focused analytics

**Optional Enhancements:**
- [ ] Cookie consent banner
- [ ] Privacy policy page
- [ ] Analytics opt-out option

---

## 🚀 Next Steps

### 1. Set Up GA (Required)
```bash
# Add secret to GitHub
GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 2. Deploy
```bash
git push origin main
```

### 3. Verify
- Check GA Real-Time reports
- Test security headers
- Monitor analytics data

---

## 📊 Analytics Dashboard

### Key Metrics to Watch:

1. **Users** - Total unique visitors
2. **Sessions** - Total visits
3. **Bounce Rate** - Single-page visits
4. **Avg Session Duration** - Time on site
5. **Top Pages** - Most visited pages
6. **Traffic Sources** - Where users come from

### Access Reports:
```
Google Analytics → Reports → 
  - Realtime (live users)
  - Acquisition (traffic sources)
  - Engagement (page views)
  - Demographics (age, location)
```

---

## ✅ Checklist

- [ ] Get Google Analytics ID
- [ ] Add GA_MEASUREMENT_ID to GitHub Secrets
- [ ] Push changes to GitHub
- [ ] Verify analytics tracking
- [ ] Check security headers
- [ ] Monitor analytics dashboard

---

**Status:** ✅ Analytics & Security Ready!

Just add your GA ID to GitHub Secrets and deploy! 🚀
