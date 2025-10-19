Rare TCG – Ecommerce MVP (Pokémon-first, Multi-TCG Ready)

A production-grade, scalable ecommerce MVP for buying/selling rare TCG cards (Pokémon first; expandable to Yu-Gi-Oh!, MTG, etc.).
Frontend is Next.js 14 + Tailwind; backend is Node/Express + Prisma (PostgreSQL) with Stripe for payments, JWT auth, and security best practices.

Table of Contents

Goals & Scope

Architecture

Tech Stack

Monorepo Structure

Frontend (Next.js)

Design System / Tailwind Theme

Backend (Express + Prisma)

Database Models (Prisma)

API Overview

Auth & Security

Payments (Stripe)

Inventory Correctness

Observability & Reliability

Dev, CI/CD & Environments

Local Setup

Environment Variables

Deployment

Roadmap

What’s Missing / Known Gaps

Goals & Scope

MVP: Cards catalog, product details, search/filters, cart, checkout, order history.

Secure: JWT (HttpOnly), bcrypt/argon2, Helmet, CORS, rate limiting, validation.

Scalable: Domain-driven modules, DB transactions, webhook-driven payments, observability, ready for microservices.

Extensible: Multi-TCG, sets/rarities, discounts, shipments, audits, search, P2P marketplace later.

Architecture
Layer	Details
Frontend	Next.js 14 (App Router), TypeScript, Tailwind, React Query/SWR, Zustand/Redux for cart/auth.
Backend	Node.js + Express, Prisma ORM + PostgreSQL, modular DDD folders, OpenAPI, Zod validation.
Payments	Stripe Payment Intents + webhooks (server-authoritative payment state).
Auth	JWT (access/refresh), HttpOnly cookies, RBAC (user/admin).
Images	Next/Image; Cloudinary/S3 (configurable).
Infra	Vercel (FE), Render/Railway/AWS ECS (BE), Neon Postgres, Upstash Redis (optional cache/queues).
Observability	Pino/Winston logs, Sentry, OpenTelemetry → Prometheus/Grafana/Honeycomb; health/ready probes.
Tech Stack

Frontend: Next.js 14, TypeScript, Tailwind, React Query, Zustand/Redux

Backend: Node 20+, Express, Prisma, Zod (validation), Helmet, cors, express-rate-limit

DB: PostgreSQL (Neon recommended)

Payments: Stripe (Checkout/Elements/Payment Intents)

Testing: Jest + Supertest

Tooling: ESLint, Prettier, lint-staged, Husky, GitHub Actions

Monorepo Structure
/raretcg
├── apps/
│   ├── frontend/                 # Next.js 14
│   └── backend/                  # Express + Prisma
└── packages/                     # (optional) shared lib/ui/types

Frontend (Next.js)
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


Key UX

Product grid with filters (rarity, set, price range, game).

Accessible components (keyboard & screen reader friendly).

Cart persisted (localStorage) + server reconciliation on login.

SEO metadata, OG images (per card), Image optimization.

Design System / Tailwind Theme

Palette (premium/collectible vibe)

Token	Hex	Purpose
primary	#FFD700	Accent / CTAs (gold)
secondary	#E63946	Highlights / rarity badges
bg	#121212	App background (dark)
surface	#1E1E2E	Cards, panels
text	#F5F5F5	Primary text

tailwind.config.ts (excerpt)

extend: {
  colors: {
    primary: "#FFD700",
    secondary: "#E63946",
    bg: "#121212",
    surface: "#1E1E2E",
    text: "#F5F5F5",
  }
}

Backend (Express + Prisma)
apps/backend/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── server.ts                    # boot
│   ├── app.ts                       # express app + middleware
│   ├── loaders/                     # bootstrap pieces
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
│   ├── modules/                     # DDD modules
│   │   ├── auth/
│   │   │   ├── auth.routes.ts
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.validation.ts
│   │   │   └── auth.types.ts
│   │   ├── cards/
│   │   │   ├── card.routes.ts
│   │   │   ├── card.controller.ts
│   │   │   ├── card.service.ts
│   │   │   └── card.repository.ts
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

Database Models (Prisma)

Core (Users, Cards, Carts, Orders, Reviews):

model User {
  id            Int       @id @default(autoincrement())
  email         String    @unique
  username      String    @unique
  passwordHash  String
  role          String    @default("user") // user, admin
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
  condition   String    @default("NM") // NM, LP, MP, HP, Damaged, Graded-PSA10
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
  status              String    @default("created") // created, paid, picking, shipped, delivered, refunded, canceled
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
  delta     Int      // +5 restock, -1 reservation, -1 commit, +1 release
  reason    String   // order_reservation, order_commit, refund, manual_adjustment
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
  type           String   // percentage | fixed
  value          Decimal  @db.Decimal(10,2)
  startsAt       DateTime?
  endsAt         DateTime?
  maxRedemptions Int?
  redemptions    Int      @default(0)
  active         Boolean  @default(true)
}

API Overview

Conventions

Base: /api/v1

Pagination: ?limit=20&cursor=... (or limit/offset)

Auth: Bearer (access token) + HttpOnly cookie for refresh flows

Idempotency: Idempotency-Key header for mutating requests

Selected Endpoints

Auth: POST /auth/register, POST /auth/login, POST /auth/refresh, POST /auth/logout

Cards: GET /cards?search=&game=&set=&rarity=&min=&max=, GET /cards/:id (admin: POST/PUT/DELETE /cards)

Cart: GET /cart, POST /cart/items, PATCH /cart/items/:id, DELETE /cart/items/:id

Orders: POST /orders/checkout (start checkout & reserve), GET /orders/:id, GET /orders

Stripe: POST /payments/session (or Payment Intent), POST /webhooks/stripe (server-authoritative)

Reviews: POST /cards/:id/reviews, GET /cards/:id/reviews

Discounts: POST /discounts/apply (validates code, adjusts totals)

Auth & Security

Passwords: bcrypt/argon2 (configurable cost).

Tokens: short-lived Access + long-lived Refresh; HttpOnly cookies for refresh to prevent XSS theft.

RBAC: roles user, admin (room to add ops, support, fulfillment).

Helmet: strict CSP, XSS protections.

Rate limiting: global + login-specific.

Validation: Zod/Joi at every request boundary.

Audit: admin actions recorded (table not shown above; see “Missing/Gaps”).

Payments (Stripe)

Use Payment Intents; never mark orders paid from client redirects.

Webhook (/api/v1/webhooks/stripe) is the source of truth:

payment_intent.succeeded: mark order paid, commit stock reservations.

payment_intent.payment_failed: mark failed, release reservations.

charge.refunded: record refund, update inventory as policy allows.

Idempotency: apply to create/confirm calls and webhook processing.

Inventory Correctness

Reservation → Commit pattern

Reserve: when checkout starts, decrement available stock (temporary) and write StockMovement with reason order_reservation. TTL (e.g., 15–30 min).

Commit: on payment_intent.succeeded, convert reservation to committed sale (order_commit).

Release: on timeout/cancel/failure, restore stock (release).

Use DB transactions + row/record locking for high contention SKUs.

Observability & Reliability

Logging: Pino/Winston (JSON), request IDs (correlation), redact secrets/PII.

Errors: Sentry.

Metrics: OpenTelemetry → Prometheus/Grafana or Honeycomb.

Probes: /healthz (liveness), /readyz (DB ready).

Backups: automated Postgres snapshots, restore runbook.

Migrations: expand-migrate-contract; zero-downtime where possible.

Dev, CI/CD & Environments

Environments: dev, staging, prod (isolated Stripe keys, DBs, buckets).

CI (GitHub Actions): typecheck, lint, test, build, prisma migrate, deploy to staging, manual promotion to prod.

Pre-commit: lint-staged + Husky for formatting and linting.

Local Setup

Prereqs: Node 20+, PNPM/NPM, Docker (optional), Postgres (or Neon URL), Stripe account.

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


Optional: docker-compose up to run API + Postgres locally.

Environment Variables

Backend (apps/backend/.env)

DATABASE_URL=postgresql://USER:PASS@HOST:5432/raretcg
JWT_SECRET=change_me
JWT_REFRESH_SECRET=change_me_too
COOKIE_DOMAIN=localhost
FRONTEND_URL=http://localhost:3000
STRIPE_SECRET_KEY=sk_test_***
STRIPE_WEBHOOK_SECRET=whsec_***
NODE_ENV=development


Frontend (apps/frontend/.env)

NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_***

Deployment

Frontend: Vercel → set NEXT_PUBLIC_* env.

Backend: Render/Railway/AWS ECS → set secrets; ensure webhook URL publicly reachable.

DB: Neon (serverless Postgres).

Redis (optional): Upstash for caching/queues.

Configure Stripe webhook → POST {BACKEND_URL}/api/v1/webhooks/stripe.

Roadmap

Phase 1 (MVP)

Catalog, details, reviews, cart, checkout, order history.

Admin: CRUD cards, basic analytics.

Phase 2

Wishlist, stock notifications, discount codes.

Search via Meilisearch/Algolia; more filters.

Address book, multi-shipment support.

Phase 3

Multi-TCG expansion (Yu-Gi-Oh!, MTG).

P2P marketplace (user listings, escrow).

AI price estimation, fraud scoring, graded card metadata.

What’s Missing / Known Gaps

These are intentional gaps to keep MVP tight; add as you scale:

Admin Audit Logs – a table for AdminAudit (who changed what & when).

Taxes – region-aware tax calc & compliance (Stripe Tax or a provider).

Shipping Integrations – real carriers (Shippo/EasyPost) quotes + labels.

Refund Flows – partial / full refunds + policy enforcement + inventory policy.

Feature Flags – gradual rollouts with Unleash/ConfigCat.

OpenAPI Spec + SDKs – generate clients from Zod/OpenAPI; Postman collection.

Advanced RBAC / ABAC – ops, support, fulfillment roles & permissions.

Full i18n & Multi-Currency – prices by currency (FX), rounded displays.

Rate Limit Tiers – per-user & per-route, plus WAF/CDN shields.

Zero-Downtime Migrations – formalize expand-migrate-contract runbook.

Stock Reservation TTL Worker – background job (BullMQ) to auto-release expirations.

PII Minimization Review – ensure we only store what we must; tokenize via Stripe.

Comprehensive Tests – fixtures/factories, E2E happy paths + failure modes.

SLA/SLOs – define and monitor latencies, error budgets, on-call runbook.

License

Choose a license appropriate for your use (MIT recommended for open distribution).

Credits

Built with ❤️ for a premium TCG shopping experience, Pokémon-first and multi-TCG future-proof. If you want this scaffold converted to a starter repo with code files, say the word and I’ll output the bootstrapped project structure with working endpoints, Stripe webhook stub, and scripts.
