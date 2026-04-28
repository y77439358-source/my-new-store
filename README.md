# Next.js E-commerce Store

This is a full-stack e-commerce application built with Next.js 14 and Tailwind CSS. The application is designed to be a professional and integrated online store, utilizing Sanity.io as a headless CMS for managing products and site settings, and Stripe for payment processing.

## Features

- **Home Page**: Displays a promotional banner, featured products, and category sections.
- **Product Page**: Shows detailed information about individual products, including images, descriptions, size/color options, and an 'Add to Cart' button.
- **Cart System**: A smooth and efficient cart experience for users to manage their selected items.
- **Checkout Process**: Integrates with Stripe for electronic payments and offers a 'Cash on Delivery' option.
- **Security**: Implements API route protection and basic security protocols.
- **Global Reach**: Supports multiple currencies and languages, with a fully responsive design for mobile devices.

## Project Structure

```
nextjs-ecommerce-store
├── app
│   ├── layout.tsx
│   ├── page.tsx
│   ├── cart
│   │   └── page.tsx
│   ├── product
│   │   └── [slug]
│   │       └── page.tsx
│   └── checkout
│       └── page.tsx
├── components
│   ├── Banner.tsx
│   ├── CartSummary.tsx
│   ├── CurrencySelector.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── ProductCard.tsx
│   └── ProductGallery.tsx
├── lib
│   ├── sanity.ts
│   ├── stripe.ts
│   └── utils.ts
├── styles
│   ├── globals.css
│   └── tailwind.css
├── public
│   └── images
├── sanity
│   ├── schemas
│   │   ├── product.ts
│   │   ├── category.ts
│   │   └── siteSettings.ts
│   └── sanity.config.ts
├── .env.example
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Instructions to Connect Sanity and Stripe

1. **Set Up Sanity.io:**
   - Create a Sanity project at Sanity.io.
   - Define your schemas (product, category, site settings) in the Sanity studio.
   - Deploy the Sanity studio to manage your content.

2. **Connect Sanity to Your Project:**
   - In `lib/sanity.ts`, configure the Sanity client with your project ID and dataset.
   - Use the functions in `lib/sanity.ts` to fetch products and categories in your Next.js app.

3. **Set Up Stripe:**
   - Create a Stripe account and obtain your API keys.
   - In `lib/stripe.ts`, configure the Stripe client with your secret key.
   - Implement payment processing in the `app/checkout/page.tsx` file using Stripe's API.

4. **Environment Variables:**
   - Create a `.env` file in the root of your project and add your Sanity and Stripe credentials.
   - Use the variables in your configuration files (e.g., `sanity.config.ts`, `lib/stripe.ts`).

5. **Testing:**
   - Test the integration by adding products through Sanity and checking if they appear in your Next.js app.
   - Test the checkout process with Stripe's test mode.

6. **Deployment:**
   - Deploy your Next.js app to a hosting provider (e.g., Vercel) and ensure that your Sanity and Stripe configurations are set correctly in the production environment.