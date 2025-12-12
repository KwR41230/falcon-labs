# Falcon Labs Website

A comprehensive, responsive website for Falcon Labs, a business specializing in full-stack web development, hosting, and digital marketing services.

## Features

- **Home Page**: Professional landing page with business overview, services, and call-to-actions
- **About Page**: Company story, mission, and team information
- **Contact Page**: Advanced contact form with package selection, phone number field, and professional success messaging
- **Pricing Page**: Service packages and pricing information
- **Testimonials Page**: Client reviews and testimonial submission form
- **Work Page**: Portfolio showcase of completed projects
- **SEO Optimized**: JSON-LD structured data, Open Graph, Twitter Cards, and meta tags
- **Email Integration**: MailerSend API for contact form submissions and testimonials
- **Social Media Integration**: Social sharing buttons and AI-powered content strategy
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Dark Theme**: Professional dark color scheme with amber/orange accents

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd falcon-labs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file based on `.env.example`:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your actual values.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14.2.5**: App Router with server components and API routes
- **React 18**: With TypeScript for type safety
- **Tailwind CSS**: Utility-first CSS framework
- **MailerSend**: Email API for form submissions
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing

## Project Structure

```
falcon-labs/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── sitemap.ts               # SEO sitemap generation
│   ├── about/page.tsx           # About page
│   ├── contact/page.tsx         # Contact page with form
│   ├── pricing/page.tsx         # Pricing page
│   ├── testimonials/page.tsx    # Testimonials page
│   ├── work/page.tsx            # Portfolio page
│   └── api/                     # API routes
│       ├── contact/route.ts     # Contact form handler
│       ├── testimonial/route.ts # Testimonial form handler
│       └── google-reviews/route.ts # Google reviews API
├── components/                  # Reusable React components
│   ├── GoogleReviewsScroller.tsx
│   ├── SocialShare.tsx
│   └── TestimonialSubmissionForm.tsx
├── public/                      # Static assets
│   ├── robots.txt               # Search engine crawling instructions
│   └── ...                      # Other static assets
├── .github/                     # GitHub configuration
│   └── copilot-instructions.md  # Development guidelines
└── package.json                 # Dependencies and scripts
```

## API Routes

- `POST /api/contact`: Handles contact form submissions
- `POST /api/testimonial`: Handles testimonial submissions
- `GET /api/google-reviews`: Fetches Google reviews data

## Environment Variables

- `MAILERSEND_API_KEY`: Required for email functionality
- `NEXT_PUBLIC_SITE_URL`: Your website domain for sitemap generation (e.g., `https://yourdomain.com`)

## Deployment

The application is configured for deployment with PM2 and includes webhook support for automated deployments.

## SEO & Search Engine Optimization

- **Sitemap**: Automatically generated XML sitemap at `/sitemap.xml` for search engine indexing
- **Robots.txt**: Search engine crawling instructions in `public/robots.txt`
- **Meta Tags**: Comprehensive meta tags, Open Graph, and Twitter Cards in layout
- **Structured Data**: JSON-LD schema markup for local business and organization
- **Performance**: Optimized for Core Web Vitals and search engine rankings

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

Testing