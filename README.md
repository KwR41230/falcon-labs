# Falcon Labs Website

A responsive modern website for Falcon Labs, a business specializing in full stack web development and hosting.

## Features

- **Home Page**: Describes the business with a slogan, mission statement, and services offered.
- **Contact Page**: Includes a form for users to fill out to get a free consultation.
- **Responsive Design**: Built with Tailwind CSS for mobile and desktop compatibility.

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

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js**: React framework for server-rendered applications.
- **TypeScript**: For type-safe JavaScript.
- **Tailwind CSS**: For responsive styling.
- **ESLint**: For code linting.

## Project Structure

- `app/`: Next.js App Router pages and components
  - `page.tsx`: Home page
  - `contact/page.tsx`: Contact page
  - `layout.tsx`: Root layout
  - `globals.css`: Global styles
- `public/`: Static assets

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.