Rare TCG – Ecommerce MVP (Pokémon-first, Multi-TCG Ready)

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
![Node](https://img.shields.io/badge/node-%3E%3D20.x-339933?logo=node.js&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=next.js)
![Express](https://img.shields.io/badge/Express-4/5-404D59?logo=express)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma)
![Stripe](https://img.shields.io/badge/Stripe-Payments-6772E5?logo=stripe)

A production-grade, scalable ecommerce MVP for buying/selling rare TCG cards — Pokémon-first and expandable to Yu-Gi-Oh!, MTG, and more. Frontend is Next.js 14 + Tailwind; backend is Node/Express + Prisma (PostgreSQL) with Stripe for payments, JWT auth, and strong security defaults.

### Table of Contents

- **[Features](#features)**
- **[Architecture](#architecture)**
- **[Tech Stack](#tech-stack)**
- **[Monorepo Structure](#monorepo-structure)**
- **[Frontend](#frontend-nextjs)**
- **[Design System](#design-system--tailwind-theme)**
- **[Backend](#backend-express--prisma)**
- **[Database Models](#database-models-prisma)**
- **[API Overview](#api-overview)**
- **[Auth & Security](#auth--security)**
- **[Payments](#payments-stripe)**
- **[Inventory Correctness](#inventory-correctness)**
- **[Observability](#observability--reliability)**
- **[Local Setup](#local-setup)**
- **[Environment Variables](#environment-variables)**
- **[Deployment](#deployment)**
- **[Roadmap](#roadmap)**
- **[Known Gaps](#whats-missing--known-gaps)**
- **[Contributing](#contributing)**
- **[License](#license)**

## Features

- **MVP**: Catalog, product details, search/filters, cart, checkout, order history
- **Security**: JWT (HttpOnly), bcrypt/argon2, Helmet, CORS, rate limiting, validation
- **Scalability**: DDD modules, DB transactions, webhook-driven payments, observability
- **Extensibility**: Multi-TCG, sets/rarities, discounts, shipments, audits, search, P2P later

## Architecture

| Layer         | Details                                                                       |
| ------------- | ----------------------------------------------------------------------------- |
| Frontend      | Next.js 14 (App Router), TypeScript, Tailwind, React Query/SWR, Zustand/Redux |
| Backend       | Node.js + Express, Prisma ORM + PostgreSQL, modular DDD, OpenAPI, Zod         |
| Payments      | Stripe Payment Intents + webhooks (server-authoritative payment state)        |
| Auth          | JWT (access/refresh), HttpOnly cookies, RBAC (user/admin)                     |
| Images        | Next/Image; Cloudinary/S3                                                     |
| Infra         | Vercel (FE), Render/Railway/AWS ECS (BE), Neon Postgres, Upstash Redis        |
| Observability | Pino/Winston logs, Sentry, OpenTelemetry → Prometheus/Grafana/Honeycomb       |

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind, React Query, Zustand/Redux
- **Backend**: Node 20+, Express, Prisma, Zod, Helmet, cors, express-rate-limit
- **DB**: PostgreSQL (Neon recommended)
- **Payments**: Stripe (Checkout/Elements/Payment Intents)
- **Testing**: Jest + Supertest
- **Tooling**: ESLint, Prettier, lint-staged, Husky, GitHub Actions

## Monorepo Structure

```text
/raretcg
├── apps/
│   ├── frontend/                 # Next.js 14
│   └── backend/                  # Express + Prisma
└── packages/                     # (optional) shared lib/ui/types
```

## Frontend (Next.js)

```text
apps/frontend/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Home / featured
│   ├── cards/[id]/page.tsx         # Card details
│   ├── cart/page.tsx
│   ├── checkout/page.tsx
│   ├── profile/page.tsx
│   ├── login/page.tsx
│   ├── register/page.tsx
│   └── admin/
│       ├── cards/page.tsx
│       └── orders/page.tsx
├── lib/ (api clients, fetchers)
├── store/ (cart/auth store)
├── components/
└── tailwind.config.ts
```

### Key UX

- Product grid with filters (rarity, set, price range, game)
- Accessible components (keyboard & screen reader friendly)
- Cart persisted (localStorage) + server reconciliation on login
- SEO metadata, OG images (per card), Image optimization

## Design System / Tailwind Theme

Palette (premium/collectible vibe)

| Token     | Hex     | Purpose                    |
| --------- | ------- | -------------------------- |
| primary   | #FFD700 | Accent / CTAs (gold)       |
| secondary | #E63946 | Highlights / rarity badges |
| bg        | #121212 | App background (dark)      |
| surface   | #1E1E2E | Cards, panels              |
| text      | #F5F5F5 | Primary text               |

Tailwind excerpt:

```ts
// tailwind.config.ts
extend: {
  colors: {
    primary: "#FFD700",
    secondary: "#E63946",
    bg: "#121212",
    surface: "#1E1E2E",
    text: "#F5F5F5",
  }
}
```

## Backend (Express + Prisma)

```text
apps/backend/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── server.ts                    # boot
│   ├── app.ts                       # express app + middleware
│   ├── loaders/
│   │   ├── express.ts
│   │   ├── prisma.ts
│   │   └── routes.ts
│   ├── config/
│   │   ├── env.ts
│   │   ├── logger.ts
│   │   └── corsOptions.ts
│   ├── core/http/
│   │   ├── ApiError.ts
│   │   └── ApiResponse.ts
│   ├── middleware/
│   │   ├── authMiddleware.ts
│   │   ├── errorHandler.ts
│   │   ├── requestLogger.ts
│   │   └── security.ts
│   ├── modules/
│   │   ├── auth/
│   │   ├── cards/
│   │   ├── cart/
│   │   ├── orders/
│   │   ├── reviews/
│   │   └── stripe/
│   ├── utils/
│   │   ├── asyncHandler.ts
│   │   ├── jwt.ts
│   │   ├── hash.ts
│   │   ├── pagination.ts
│   │   └── stripe.ts
│   └── tests/ (jest + supertest)
├── package.json
└── tsconfig.json
```

## Database Models (Prisma)

Core (Users, Cards, Carts, Orders, Reviews):

```prisma
model User {
  id            Int       @id @default(autoincrement())
  email         String    @unique
  username      String    @unique
  passwordHash  String
  role          String    @default("user")
  createdAt     DateTime  @default(now())
  profile       UserProfile?
  cart          Cart?
  orders        Order[]
  reviews       Review[]
  addresses     Address[]
}

model Game {
  id    Int    @id @default(autoincrement())
  name  String @unique
  sets  Set[]
  cards Card[]
}

model Set {
  id     Int    @id @default(autoincrement())
  name   String
  gameId Int
  game   Game   @relation(fields: [gameId], references: [id])
  cards  Card[]
}

model Card {
  id          Int       @id @default(autoincrement())
  name        String
  description String?
  rarity      String?
  setId       Int?
  set         Set?      @relation(fields: [setId], references: [id])
  gameId      Int?
  game        Game?     @relation(fields: [gameId], references: [id])
  condition   String    @default("NM")
  sku         String    @unique
  price       Decimal   @db.Decimal(10,2)
  stock       Int       @default(0)
  imageUrl    String?
  createdAt   DateTime  @default(now())
  reviews     Review[]
  orderItems  OrderItem[]
  stockMoves  StockMovement[]
}

model UserProfile {
  id                       Int      @id @default(autoincrement())
  userId                   Int      @unique
  user                     User     @relation(fields: [userId], references: [id])
  defaultShippingAddressId Int?
  defaultBillingAddressId  Int?
}

model Address {
  id          Int     @id @default(autoincrement())
  userId      Int
  user        User    @relation(fields: [userId], references: [id])
  label       String?
  name        String
  line1       String
  line2       String?
  city        String
  state       String?
  postalCode  String
  country     String
  isDefaultShipping Boolean @default(false)
  isDefaultBilling  Boolean @default(false)
}

model Cart {
  id        Int        @id @default(autoincrement())
  userId    Int        @unique
  user      User       @relation(fields: [userId], references: [id])
  items     CartItem[]
  createdAt DateTime   @default(now())
}

model CartItem {
  id       Int   @id @default(autoincrement())
  cartId   Int
  cardId   Int
  quantity Int   @default(1)
  cart     Cart  @relation(fields: [cartId], references: [id])
  card     Card  @relation(fields: [cardId], references: [id])
}

model Order {
  id                  Int       @id @default(autoincrement())
  userId              Int
  status              String    @default("created")
  subtotal            Decimal   @db.Decimal(10,2)
  taxTotal            Decimal   @default(0) @db.Decimal(10,2)
  shippingTotal       Decimal   @default(0) @db.Decimal(10,2)
  discountTotal       Decimal   @default(0) @db.Decimal(10,2)
  grandTotal          Decimal   @db.Decimal(10,2)
  currency            String    @default("usd")
  stripePaymentIntentId String?
  shippingAddressId   Int?
  billingAddressId    Int?
  createdAt           DateTime  @default(now())
  updatedAt           DateTime  @updatedAt
  user                User      @relation(fields: [userId], references: [id])
  items               OrderItem[]
  shipments           Shipment[]
}

model OrderItem {
  id         Int     @id @default(autoincrement())
  orderId    Int
  cardId     Int
  sku        String
  name       String
  condition  String
  unitPrice  Decimal @db.Decimal(10,2)
  quantity   Int
  lineTotal  Decimal @db.Decimal(10,2)
  order      Order   @relation(fields: [orderId], references: [id])
  card       Card    @relation(fields: [cardId], references: [id])
}

model Shipment {
  id            Int      @id @default(autoincrement())
  orderId       Int
  carrier       String?
  service       String?
  trackingNumber String?
  shippedAt     DateTime?
  order         Order    @relation(fields: [orderId], references: [id])
}

model StockMovement {
  id        Int      @id @default(autoincrement())
  cardId    Int
  delta     Int
  reason    String
  refType   String?
  refId     Int?
  createdAt DateTime @default(now())
  card      Card     @relation(fields: [cardId], references: [id])
}

model Review {
  id        Int      @id @default(autoincrement())
  userId    Int
  cardId    Int
  rating    Int
  comment   String?
  createdAt DateTime @default(now())
  user      User     @relation(fields: [userId], references: [id])
  card      Card     @relation(fields: [cardId], references: [id])
}

model DiscountCode {
  id             Int      @id @default(autoincrement())
  code           String   @unique
  type           String
  value          Decimal  @db.Decimal(10,2)
  startsAt       DateTime?
  endsAt         DateTime?
  maxRedemptions Int?
  redemptions    Int      @default(0)
  active         Boolean  @default(true)
}
```

## API Overview

### Conventions

- **Base**: `/api/v1`
- **Pagination**: `?limit=20&cursor=...` (or limit/offset)
- **Auth**: Bearer (access token) + HttpOnly cookie for refresh flows
- **Idempotency**: `Idempotency-Key` header for mutating requests

### Selected Endpoints

- Auth: `POST /auth/register`, `POST /auth/login`, `POST /auth/refresh`, `POST /auth/logout`
- Cards: `GET /cards`, `GET /cards/:id` (admin: `POST/PUT/DELETE /cards`)
- Cart: `GET /cart`, `POST /cart/items`, `PATCH /cart/items/:id`, `DELETE /cart/items/:id`
- Orders: `POST /orders/checkout`, `GET /orders/:id`, `GET /orders`
- Stripe: `POST /payments/session`, `POST /webhooks/stripe`
- Reviews: `POST /cards/:id/reviews`, `GET /cards/:id/reviews`
- Discounts: `POST /discounts/apply`

## Auth & Security

- Passwords: bcrypt/argon2 (configurable cost)
- Tokens: short-lived Access + long-lived Refresh; HttpOnly cookies for refresh
- RBAC: roles `user`, `admin`
- Helmet: strict CSP, XSS protections
- Rate limiting: global + login-specific
- Validation: Zod/Joi at every request boundary
- Audit: admin actions recorded (see Gaps)

## Payments (Stripe)

- Use Payment Intents; never mark orders paid from client redirects
- Webhook (`/api/v1/webhooks/stripe`) is the source of truth
  - `payment_intent.succeeded`: mark paid, commit reservations
  - `payment_intent.payment_failed`: mark failed, release reservations
  - `charge.refunded`: record refund, update inventory per policy
- Idempotency on create/confirm calls and webhook processing

## Inventory Correctness

Reservation → Commit pattern

- Reserve: on checkout start, decrement available stock (temporary) and write `StockMovement` with reason `order_reservation` (TTL 15–30 min)
- Commit: on `payment_intent.succeeded`, convert reservation to committed sale (`order_commit`)
- Release: on timeout/cancel/failure, restore stock (`release`)
- Use DB transactions + row/record locking for high contention SKUs

## Observability & Reliability

- Logging: Pino/Winston (JSON), request IDs, redact secrets/PII
- Errors: Sentry
- Metrics: OpenTelemetry → Prometheus/Grafana or Honeycomb
- Probes: `/healthz` (liveness), `/readyz` (DB ready)
- Backups: automated Postgres snapshots, restore runbook
- Migrations: expand-migrate-contract; zero-downtime where possible

## Local Setup

Prereqs: Node 20+, PNPM/NPM, Docker (optional), Postgres (or Neon URL), Stripe account

```bash
# Clone & install (pnpm recommended)
pnpm i   # or npm i

# Backend: set up Prisma & DB
cd apps/backend
cp .env.example .env
pnpm prisma generate
pnpm prisma migrate dev --name init
pnpm dev  # starts Express on :5000 (ENV configurable)

# Frontend
cd ../frontend
cp .env.example .env
pnpm dev  # starts Next.js on :3000
```

Optional: `docker-compose up` to run API + Postgres locally.

## Environment Variables

### Backend (`apps/backend/.env`)

```env
DATABASE_URL=postgresql://USER:PASS@HOST:5432/raretcg
JWT_SECRET=change_me
JWT_REFRESH_SECRET=change_me_too
COOKIE_DOMAIN=localhost
FRONTEND_URL=http://localhost:3000
STRIPE_SECRET_KEY=sk_test_***
STRIPE_WEBHOOK_SECRET=whsec_***
NODE_ENV=development
```

### Frontend (`apps/frontend/.env`)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_***
```

## Deployment

- Frontend: Vercel → set `NEXT_PUBLIC_*` env
- Backend: Render/Railway/AWS ECS → set secrets; ensure webhook URL publicly reachable
- DB: Neon (serverless Postgres)
- Redis (optional): Upstash for caching/queues
- Configure Stripe webhook → `POST {BACKEND_URL}/api/v1/webhooks/stripe`

## Roadmap

### Phase 1 (MVP)

- Catalog, details, reviews, cart, checkout, order history
- Admin: CRUD cards, basic analytics

### Phase 2

- Wishlist, stock notifications, discount codes
- Search via Meilisearch/Algolia; more filters
- Address book, multi-shipment support

### Phase 3

- Multi-TCG expansion (Yu-Gi-Oh!, MTG)
- P2P marketplace (user listings, escrow)
- AI price estimation, fraud scoring, graded card metadata

## What’s Missing / Known Gaps

Intentional gaps to keep MVP tight; add as you scale:

- Admin Audit Logs
- Taxes (Stripe Tax or a provider)
- Shipping integrations (Shippo/EasyPost)
- Refund flows (partial/full) + inventory policy
- Feature flags (Unleash/ConfigCat)
- OpenAPI spec + SDKs (generate clients)
- Advanced RBAC / ABAC
- Full i18n & multi-currency
- Rate limit tiers + WAF/CDN shields
- Zero-downtime migrations runbook
- Stock reservation TTL worker (BullMQ)
- PII minimization review
- Comprehensive tests (fixtures/factories, E2E)
- SLA/SLOs

## Contributing

PRs welcome! Please open an issue to discuss large changes. Use conventional commits, add tests where applicable, and keep CI green.

## License

MIT

---

Built with ❤️ for a premium TCG shopping experience. If you want this scaffold converted to a starter repo with code files, say the word and I’ll generate a bootstrapped project with working endpoints, a Stripe webhook stub, and scripts.
