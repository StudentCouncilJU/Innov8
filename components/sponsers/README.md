# Sponsors Component

## How to Add Sponsors

1. **Add sponsor logos to the public folder:**
   - Create a folder: `public/sponsors/`
   - Add sponsor logo images (PNG, SVG, or WebP recommended)
   - Use transparent backgrounds for best results

2. **Update the sponsors array in `SponsorGrid.tsx`:**

```typescript
const sponsors: Sponsor[] = [
  {
    id: "1",
    name: "Your Sponsor Name",
    logo: "/sponsors/sponsor-logo.png",
    website: "https://sponsorwebsite.com",
    tier: "platinum", // platinum, gold, silver, or bronze
  },
  // Add more sponsors...
];
```

## Sponsor Tiers

- **Platinum**: Largest cards (2x2 grid), blue/purple gradient
- **Gold**: Wide cards (2x1 grid), gold/orange gradient  
- **Silver**: Standard cards (1x1 grid), gray gradient
- **Bronze**: Standard cards (1x1 grid), bronze/orange gradient

## Features

- ✅ Responsive grid layout
- ✅ Hover effects with border animations
- ✅ Grayscale to color transition on hover
- ✅ External link indicators
- ✅ Tier-based sizing and colors
- ✅ "Become a Sponsor" CTA button
- ✅ Performance optimized with Next.js Image

## Customization

### Change Border Animation Colors

Edit the `BorderBeam` component in `SponsorGrid.tsx`:

```typescript
<BorderBeam
  className="from-transparent via-YOUR-COLOR to-transparent"
/>
```

### Adjust Grid Layout

Modify the grid classes:

```typescript
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
```

### Change Tier Colors

Update the `getTierColor` function in `SponsorGrid.tsx`.
