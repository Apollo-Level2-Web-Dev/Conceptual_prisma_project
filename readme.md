---

## Library Management System API

This project is a simple **Library Management System API** built with **Express.js**, **TypeScript**, and **Prisma**. The system provides CRUD operations for managing **Users**, **Books**, **Authors**, and **Categories**. It also includes JWT-based user authentication.

### Features

- **User Authentication**: JWT-based authentication for protected routes.
- **CRUD Operations**: Full CRUD capabilities for managing users, books, authors, and categories.
- **Relational Database**: Prisma ORM is used to manage relational data across models.

### Tech Stack

- **Node.js** and **Express.js**
- **TypeScript**
- **Prisma** with **PostgreSQL** (or other relational databases)
- **JWT** for authentication

---

### Prerequisites

- **Node.js** (>= 14.x)
- **PostgreSQL** (or any other relational database supported by Prisma)
- **npm** or **yarn**
- **Prisma CLI** (optional for manual Prisma commands)

### Getting Started

1. **Clone the repository**:

   ```bash
   git clone url
   cd project
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and configure your environment variables as follows:

   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/library_db"
   JWT_SECRET="your_secret_key" # A secret key for JWT signing
   ```

   Replace `user`, `password`, and `library_db` with your actual database credentials and database name.

4. **Set up the database**:

   Run the following Prisma commands to set up the database:

   ```bash
   npx prisma migrate dev
   ```

5. **Generate Prisma client**:

   ```bash
   npx prisma generate
   ```

6. **Run the server**:

   ```bash
   npm run dev
   ```

   The API will be accessible at `http://localhost:5000`.

---

### API Endpoints

Below are some example routes for each resource:

- **Auth**:

  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Log in a user to receive a JWT

- **Books**:

  - `GET /api/books` - Get all books
  - `GET /api/books/:id` - Get a book by ID
  - `POST /api/books` - Create a new book
  - `PUT /api/books/:id` - Update a book by ID
  - `DELETE /api/books/:id` - Delete a book by ID

- **Authors**:

  - `GET /api/authors` - Get all authors
  - `GET /api/authors/:id` - Get an author by ID
  - `POST /api/authors` - Create a new author
  - `PUT /api/authors/:id` - Update an author by ID
  - `DELETE /api/authors/:id` - Delete an author by ID

- **Categories**:
  - `GET /api/categories` - Get all categories
  - `GET /api/categories/:id` - Get a category by ID
  - `POST /api/categories` - Create a new category
  - `PUT /api/categories/:id` - Update a category by ID
  - `DELETE /api/categories/:id` - Delete a category by ID

### Authentication and Authorization

All protected routes (e.g., `/api/books`, `/api/authors`, `/api/categories`) require a valid JWT token. Use the `Authorization` header with `Bearer <token>` to access these routes.

### Scripts

- **Start server**: `npm run dev`
- **Prisma migration**: `npx prisma migrate dev`
- **Prisma Studio**: `npx prisma studio` (to view and interact with the database)
- **Lint**: `npm run lint`
