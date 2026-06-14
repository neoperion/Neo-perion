import { Blog } from '@/types/blog';

export const mockBlogs: Blog[] = [
  {
    id: '1',
    title: 'The Future of AI in Enterprise SaaS Architecture',
    slug: 'future-of-ai-enterprise-saas',
    excerpt: 'Explore how large language models and neural networks are reshaping how we build scalable, multi-tenant SaaS platforms.',
    content: `
## Introduction

Artificial Intelligence is no longer just a buzzword; it is a fundamental architectural component of modern SaaS platforms. In this article, we explore how integrating AI at the core of enterprise software development changes the paradigm of scalability and user experience.

### The Shift from Deterministic to Probabilistic Systems

Historically, software engineering relied entirely on deterministic logic. With the advent of advanced LLMs, we are moving towards probabilistic systems that can handle ambiguous user inputs and automate complex workflows.

*   **Intelligent Routing:** AI models can categorize and route support tickets, API requests, and data pipelines dynamically.
*   **Generative UI:** User interfaces that adapt in real-time based on the user's intent.

### Architecting for Scale

When building AI-first SaaS, you must design for high latency and massive compute costs. Using vector databases, semantic caching, and asynchronous edge functions is critical.

> "The software architecture of the 2020s is defined by how efficiently you can manage and retrieve vector embeddings." — Neo Perion Engineering

### Conclusion

The enterprises that win the next decade will be those that seamlessly integrate intelligent agents into their core product loops.
    `,
    cover_image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop',
    author: 'Alex Mercer',
    category: 'AI',
    tags: ['SaaS', 'Architecture', 'LLMs'],
    read_time: 5,
    featured: true,
    published: true,
    seo_title: 'Future of AI in Enterprise SaaS | Neo Perion',
    seo_description: 'Discover how AI is reshaping scalable enterprise SaaS architecture.',
    created_at: new Date('2026-06-01T10:00:00Z').toISOString(),
    updated_at: new Date('2026-06-01T10:00:00Z').toISOString()
  },
  {
    id: '2',
    title: 'From Monolith to Serverless: A Product Engineering Guide',
    slug: 'monolith-to-serverless-guide',
    excerpt: 'A comprehensive technical deep dive into migrating legacy monolithic applications to scalable serverless microservices.',
    content: `
## Why Go Serverless?

Serverless architectures provide infinite scale, zero-maintenance infrastructure, and pay-for-what-you-use pricing models.

### Step 1: Identify Bounded Contexts
Before touching any code, analyze your domain model and separate it into independent bounded contexts.

### Step 2: The API Gateway Pattern
Implement an API Gateway to handle routing, authentication, and rate limiting.

### Code Example
Here is how you might define a Supabase Edge Function:

\`\`\`typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  const { name } = await req.json()
  return new Response(
    JSON.stringify({ message: \`Hello \${name}\` }),
    { headers: { "Content-Type": "application/json" } },
  )
})
\`\`\`
    `,
    cover_image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop',
    author: 'Sarah Chen',
    category: 'Engineering',
    tags: ['Serverless', 'Microservices', 'Cloud'],
    read_time: 8,
    featured: false,
    published: true,
    seo_title: 'Monolith to Serverless Migration Guide',
    seo_description: 'Learn how to migrate legacy apps to scalable serverless architecture.',
    created_at: new Date('2026-06-05T14:30:00Z').toISOString(),
    updated_at: new Date('2026-06-05T14:30:00Z').toISOString()
  },
  {
    id: '3',
    title: 'Building a High-Performance MVP in 30 Days',
    slug: 'building-high-performance-mvp',
    excerpt: 'Startup founders face immense pressure to launch fast. Learn our proven methodology for delivering enterprise-grade MVPs in one month.',
    content: `
## Speed vs Quality

The biggest myth in startup engineering is that speed requires sacrificing quality.

### The Modern Tech Stack
By utilizing tools like React, Vite, TailwindCSS, and Supabase, teams can bypass months of boilerplate backend engineering.

*   **Frontend:** React + Vite
*   **Styling:** TailwindCSS
*   **Backend:** Supabase (PostgreSQL + Auth)
*   **Hosting:** Vercel

### Focus on Core Value
Cut all features that do not directly prove your hypothesis. If it doesn't solve the user's primary pain point, it doesn't belong in the MVP.
    `,
    cover_image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop',
    author: 'Marcus Johnson',
    category: 'Startups',
    tags: ['MVP', 'Product Development', 'React'],
    read_time: 4,
    featured: false,
    published: true,
    seo_title: 'Build a High-Performance MVP in 30 Days',
    seo_description: 'Our proven methodology for delivering enterprise-grade MVPs fast.',
    created_at: new Date('2026-06-10T09:15:00Z').toISOString(),
    updated_at: new Date('2026-06-10T09:15:00Z').toISOString()
  },
  {
    id: '4',
    title: 'Automating Healthcare Workflows with RPA',
    slug: 'automating-healthcare-workflows-rpa',
    excerpt: 'How Robotic Process Automation (RPA) and AI are reducing administrative overhead in modern healthcare systems.',
    content: `
## The Administrative Burden

Healthcare providers spend up to 40% of their time on administrative tasks instead of patient care. 

### The Role of RPA
Robotic Process Automation can handle repetitive tasks like data entry, scheduling, and billing reconciliation.

### AI-Driven Diagnostics
Beyond simple automation, AI can pre-process patient intake forms and flag high-risk symptoms for immediate review.
    `,
    cover_image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2000&auto=format&fit=crop',
    author: 'Dr. Elena Rodriguez',
    category: 'Automation',
    tags: ['Healthcare', 'RPA', 'Efficiency'],
    read_time: 6,
    featured: false,
    published: true,
    seo_title: 'Automating Healthcare Workflows | Neo Perion',
    seo_description: 'Reduce administrative overhead in healthcare using RPA and AI.',
    created_at: new Date('2026-06-12T11:45:00Z').toISOString(),
    updated_at: new Date('2026-06-12T11:45:00Z').toISOString()
  }
];
