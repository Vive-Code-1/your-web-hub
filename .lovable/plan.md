# Evana Clinique — Modern Redesign Plan

PRD এবং লাইভ সাইট (evanaclinique.com) দুটোই পর্যালোচনা করলাম। এটি একটি অনলাইন সেক্সোলজি ক্লিনিক — মূল সমস্যা হলো ইউজারের "লজ্জা" ও "বিশ্বাসের অভাব"। ডিজাইনটি অবশ্যই warm, calm, trustworthy এবং premium হতে হবে — মেডিকেল সাইটের মতো নয়।

## 🎨 ব্র্যান্ড ডিরেকশন (আগের সাইটের মতোই)

**কালার প্যালেট** (existing brand থেকে extracted):
- Background cream: `#F5EFE7` (soft warm beige)
- Sand / hero block: `#D9C7B5` (muted taupe)
- Deep accent: `#3A2E27` (warm charcoal — CTA + heading)
- Off-white surface: `#FBF8F4`
- Soft ivory circle accent: `#EDE2D0`
- Muted text: `#6B5D52`

**Typography:**
- Display / hero: *Cormorant Garamond* বা *Instrument Serif* (elegant, editorial)
- Script accent (logo tagline "sexualité & santé globale" এর মতো): *Dancing Script* / *Great Vibes*
- Body: *Inter* বা *DM Sans* (clean, readable, modern)

**Visual language:**
- Generous whitespace, rounded-2xl / rounded-3xl cards
- Soft shadows (`shadow-elegant` — warm-tinted, low opacity)
- Rounded arch-shaped image frames (existing site এর signature move)
- Subtle grain/paper texture হোয়াইট সেকশনে
- সব ইমেজ AI-generated professional, soothing interior/therapy scenes — কোনো stock cartoon নয়

## 🗂️ পেজ স্ট্রাকচার (৫ টি রুট, প্রতিটি আলাদা route file)

```
src/routes/
  index.tsx                    → / (Accueil / Homepage)
  rendez-vous.tsx              → /rendez-vous (Booking)
  services.individuel.tsx      → /services/individuel
  services.couples.tsx         → /services/couples
  boutique.tsx                 → /boutique (Shop)
  a-propos.tsx                 → /a-propos (About & Trust)
```

প্রতিটি পেজে নিজস্ব `head()` — unique title, description, og:title, og:description (ফরাসিতে, PRD এর ভাষা অনুযায়ী)।

## 🏠 Homepage (Accueil) — Section-by-Section

PRD সেকশন ৪ hubuhu follow করে:

1. **Hero** — Split layout: বাম দিকে serif headline "Consultations en sexologie en ligne, confidentielles et sans jugement", sub-headline, dual CTA (Prendre rendez-vous primary + Poser une question outline)। ডান দিকে arch-framed warm interior image + floating "PRENDRE RENDEZ-VOUS" circle badge (existing signature)।
2. **Confidentiality Pillar** — "Votre vie privée est notre priorité" — ৫টি icon+text card (Lock, Video, Clock, Handshake, Shield)। Sand background block, rounded-3xl।
3. **3-Step Journey** — সংখ্যাযুক্ত ৩ কার্ড (Choisissez → Remplissez → Consultez) + trust tag "Disponible en moins de 24h"।
4. **Problem-focused Categories** — "Nous pouvons vous aider si…" — ৫ টি soft card, hover এ warm accent lift।
5. **Boutique Preview** — ৪ টি product card এর carousel/grid + "Voir la boutique" CTA।
6. **Trust & Social Proof** — থেরাপিস্ট প্রোফাইল (২ জন, PRD থেকে), diplomas/affiliations badges, anonymous reviews with stars, FAQ accordion (৪ প্রশ্ন)।
7. **Repeat CTA band** — "Vous n'êtes pas seul·e" normalizing message + booking CTA।
8. **Footer** — Navigation, contact, confidentiality note।

## 📅 /rendez-vous — Booking Page

- Warm hero, reassurance copy
- Multi-step visual booking form (design only, no backend): Service type → Individual/Couple → Preferred slot → Contact info
- সাইড panel: "Ce qui vous attend" (kya expect করবেন) + confidentiality reminder
- Trust signals: secure badge, "réponse < 24h"

## 💬 /services/individuel & /services/couples

PRD সেকশন ৫ flow অনুযায়ী প্রতিটি পেজে:
1. **Problem** — empathetic hero ("Vous ressentez…")
2. **Solution** — কীভাবে Evana সাহায্য করে
3. **How it works** — session ফরম্যাট, duration, price
4. **CTA** — "Réserver une consultation"
- মাঝে normalizing quote block ("C'est une démarche normale et fréquente")

## 🛍️ /boutique — Shop

- Hero + category filter chips
- Product grid (rounded cards, warm hover state, price + "Ajouter" button — design only)
- Featured/bundle section
- Trust footer band

## 👥 /a-propos — About & Trust

- Hero: mission statement
- ২ therapist profile cards (large arch photos, diplomas, approach, LinkedIn-style credentials)
- "Notre approche thérapeutique" — ৩-৪ pillar
- Values grid
- CTA band

## 📱 UX rules (সব পেজে)

- **Sticky mobile CTA** — screen bottom এ fixed "Prendre rendez-vous" button (mobile only)
- Every 2 sections পর একটি CTA
- Normalizing microcopy scattered throughout
- Header: clean nav (Accueil / Services ▾ / Boutique / À propos / **Prendre rendez-vous** — highlighted pill)
- Smooth scroll, subtle fade-in animations (motion sparingly)
- Fully responsive, mobile-first

## 🛠️ Technical setup

- Design tokens সব `src/styles.css` এ oklch semantic tokens হিসাবে define হবে (`--background`, `--primary`, `--accent`, `--muted`, `--sand`, `--cream`, `--gradient-warm`, `--shadow-elegant`) — কোনো hardcoded color class নেই।
- shadcn components (Button, Card, Accordion, Sheet mobile nav, Carousel) — custom variants দিয়ে ব্র্যান্ডে fit করানো হবে।
- Google Fonts (Cormorant Garamond + Inter + Dancing Script) `__root.tsx` head এ `<link>` দিয়ে load হবে।
- Hero + section images `imagegen` দিয়ে generate — professional, soothing, warm interior/therapy scenes (no cartoons, no generic stock)।
- Language: ফরাসি content (PRD অনুযায়ী site ভাষা)।

## 🚫 Out of scope (PRD সেকশন ৮)

- No backend, no real booking calendar integration, no payments, no auth, no SEO keyword optimization coding.

## ✅ Deliverable

৫টি সম্পূর্ণ ডিজাইন করা রুট, শেয়ার্ড header/footer, sticky mobile CTA, warm brand-consistent visual system, ৮–১০টি generated professional images, এবং PRD এর প্রতিটি section-by-section requirement মেটানো।

---

Approve করলে আমি build mode এ গিয়ে প্রথমে design tokens + shared layout + Homepage build করব, তারপর একে একে বাকি ৪টি পেজ।
