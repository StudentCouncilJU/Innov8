# Sponsors Directory

This directory contains logos for all sponsors of JU Innov8 3.0.

## Instructions

1. Add sponsor logos to this directory
2. Recommended format: PNG with transparent background
3. Recommended size: 800x400px or similar aspect ratio
4. Name files descriptively (e.g., `company-name.png`)

## Update Sponsors

To update the sponsors list, edit:
`/components/sponsers/SponsorGrid.tsx`

Update the `sponsors` array with:
- `id`: Unique identifier
- `name`: Company name
- `logo`: Path to logo file (e.g., `/sponsors/company-name.png`)
- `website`: Company website URL

Example:
```typescript
{
  id: "1",
  name: "Tech Company",
  logo: "/sponsors/tech-company.png",
  website: "https://techcompany.com",
}
```
