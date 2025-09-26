# MostlyFutures React

A modern, full-stack React application for a decentralized cryptocurrency exchange platform. Built with React 18, TypeScript, Express.js, and PostgreSQL.

## 🚀 Features

- **Modern React 18** with TypeScript for type safety
- **Full-stack architecture** with Express.js backend
- **Database integration** with PostgreSQL and Drizzle ORM
- **Beautiful UI** with Radix UI components and Tailwind CSS
- **Responsive design** that works on all devices
- **Real-time updates** with WebSocket support
- **Form validation** with React Hook Form and Zod
- **State management** with TanStack Query

## 🛠️ Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- Radix UI for accessible components
- Wouter for client-side routing
- TanStack Query for state management

### Backend
- Express.js with TypeScript
- PostgreSQL with Drizzle ORM
- Passport.js for authentication
- WebSocket support
- Session management

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **PostgreSQL** database (optional - uses in-memory storage by default)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mf-react.git
   cd mf-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your database connection string if using PostgreSQL.

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server (requires build first)
- `npm run preview` - Build and preview the production build
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations

## 🗄️ Database Setup (Optional)

By default, the application uses in-memory storage for development. To use PostgreSQL:

1. Create a PostgreSQL database
2. Set the `DATABASE_URL` environment variable in your `.env` file
3. Run database migrations:
   ```bash
   npm run db:push
   ```

## 🏗️ Project Structure

```
mf-react/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
│   └── index.html          # Main HTML template
├── server/                 # Backend Express server
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Database/storage logic
│   └── vite.ts            # Vite integration
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Database schema definitions
├── attached_assets/        # Static assets
└── dist/                   # Production build output
```

## 🎨 Customization

### Styling
The application uses Tailwind CSS with a custom design system. Colors and themes can be customized in:
- `tailwind.config.ts` - Tailwind configuration
- `client/src/index.css` - Global styles and CSS variables

### Components
UI components are built using Radix UI primitives and can be customized in:
- `client/src/components/ui/` - Base UI components
- `client/src/components/` - Application-specific components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

If you have any questions or need help, please open an issue on GitHub.

---

Built with ❤️ for the decentralized future