# API Documentation

## Base URL
`/api`

## Endpoints

### 1. Cookies
- `POST /api/cookies/consent`
  - Logs user cookie consent to Supabase.

### 2. Blogs
- `GET /api/blogs`
  - Retrieves paginated list of published blogs.
- `GET /api/blogs/:slug`
  - Retrieves a specific blog post by slug.
- `POST /api/blogs` (Admin Only)
  - Creates a new blog post.

### 3. Leads
- `POST /api/leads`
  - Submits a new inbound lead or contact form.
- `POST /api/leads/newsletter`
  - Subscribes an email to the newsletter.

### 4. Auth
- Uses Supabase Auth heavily. Backend endpoints for custom JWT token exchanges if required.
