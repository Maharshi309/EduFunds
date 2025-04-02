# EduFunds Scholarship Website

A modern web application for managing and applying for scholarships, built with React, TypeScript, and Supabase.

## Features

- User authentication and profile management
- Scholarship application system
- Modern UI with Tailwind CSS
- Internationalization support (i18n)
- Responsive design

## Tech Stack

- React 18
- TypeScript
- Vite
- Supabase
- Tailwind CSS
- React Router
- i18next for internationalization

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account and project

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd edufunds-scholarship-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
   - Update the `.env` file with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_SUPABASE_JWT_SECRET=your_supabase_jwt_secret
   ```
   You can find these values in your Supabase project settings.

4. Start the development server:
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── contexts/       # React contexts
  ├── lib/           # Utility functions and configurations
  ├── pages/         # Page components
  ├── types/         # TypeScript type definitions
  └── App.tsx        # Main application component
```

## Security Notes

- Never commit the `.env` file to version control
- Keep your Supabase credentials secure
- Rotate your JWT secrets if they have been exposed
- Use environment variables for all sensitive data

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 