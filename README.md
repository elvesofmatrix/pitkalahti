# Pitkälahti Harbour

Official Phase 1 public website for Pitkälahti Harbour in Outokumpu, Finland.

This repository is only for the Pitkälahti Harbour digital experience: website, visitor storytelling, harbour information, events, history, gallery, and the future boat shed owner portal.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000/fi`. The root route redirects to Finnish.

## Build

```bash
npm run build
```

The site is designed to deploy on Vercel without environment variables.

## Structure

- `src/app` - Next.js App Router routes.
- `src/components` - reusable UI components.
- `src/data` - local structured bilingual content.
- `src/lib/i18n.ts` - locale and route helpers.
- `public/assets` - local placeholder imagery.
- `public/icons` - local app icon artwork.

## Content Model

All public content is local TypeScript data for now:

- navigation: `src/data/site.ts`
- page copy: `src/data/pages.ts`
- events, gallery, harbour services, timeline, routes, contacts: `src/data/content.ts`

Finnish is primary and English is secondary. The public routes are available under `/fi` and `/en` with localized slugs.

## Future Supabase Plan

Supabase is intentionally not connected in Phase 1. A later phase can introduce:

- typed content tables for events, pages, gallery items, and harbour notices
- invitation-based boat shed owner accounts
- document storage for owner materials
- role-based access for administrators and owners
- server actions or route handlers for contact and portal workflows

## Future Portal Scope

The current boat shed portal page is only a premium introduction and disabled login placeholder. Future scope may include owner communication, harbour notices, shared documents, event information, and member service updates.

## Current Limitations

- Contact form UI does not send email.
- Portal authentication is not implemented.
- Map is a local illustration, not an external map API.
- Event and service content is demo or informational until verified.
