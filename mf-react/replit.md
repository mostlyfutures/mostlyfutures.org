# Overview

MostlyFutures is a full-stack web application for a decentralized cryptocurrency exchange platform. The application features a modern React frontend with a comprehensive component library and an Express.js backend with database integration. It's designed to showcase blockchain finance functionality with a focus on futures trading, leveraging high-performance architecture and user-friendly interfaces.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management with custom query client configuration
- **UI Components**: Comprehensive component library built on Radix UI primitives with shadcn/ui styling patterns
- **Styling**: Tailwind CSS with custom design system including dark theme support and CSS variables for consistent theming
- **Form Handling**: React Hook Form with Zod validation through @hookform/resolvers

## Backend Architecture
- **Framework**: Express.js with TypeScript for robust server-side development
- **Database ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Data Storage**: Dual storage approach with in-memory storage (MemStorage) for development and PostgreSQL for production
- **API Structure**: RESTful API design with `/api` prefix routing and centralized error handling
- **Development Tools**: Custom Vite integration for seamless full-stack development with HMR support

## Database Design
- **Schema Definition**: Centralized schema in `shared/schema.ts` with Drizzle table definitions
- **User Management**: Basic user table with username/password authentication structure
- **Validation**: Zod schemas for runtime type validation integrated with Drizzle
- **Migrations**: Drizzle Kit for database schema migrations and version control

## Development Workflow
- **Monorepo Structure**: Organized with `client/`, `server/`, and `shared/` directories for clear separation of concerns
- **TypeScript Configuration**: Unified TypeScript setup with path mapping for clean imports
- **Build Process**: Separate build processes for client (Vite) and server (esbuild) with production optimization
- **Development Server**: Integrated development experience with Vite middleware and Express server

# External Dependencies

## Database Services
- **Neon Database**: PostgreSQL hosting service via `@neondatabase/serverless` for cloud database operations
- **Connection Pooling**: PostgreSQL connection management through connect-pg-simple for session storage

## UI Component Library
- **Radix UI**: Comprehensive set of accessible UI primitives including dialogs, dropdowns, navigation, and form components
- **Lucide React**: Icon library providing consistent iconography throughout the application
- **Class Variance Authority**: Utility for creating type-safe component variants with Tailwind CSS

## Development Tools
- **Replit Integration**: Custom Replit plugins for development environment optimization and error handling
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer for cross-browser compatibility
- **ESBuild**: High-performance bundler for server-side code compilation

## Utility Libraries
- **Date Management**: date-fns for robust date manipulation and formatting
- **Carousel Components**: Embla Carousel React for interactive image/content carousels
- **Form Validation**: Comprehensive validation stack with React Hook Form, Zod, and Drizzle-Zod integration
- **Styling Utilities**: clsx and tailwind-merge for dynamic class name management