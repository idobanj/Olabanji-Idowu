export const projects = [
  {
    id: 'sabiwrite-ai',
    title: 'SabiWrite AI',
    shortDescription: 'A full-stack AI writing coach and mastery platform built with React 19, Supabase, PostgreSQL, Deno Edge Functions, and Gemini API.',
    description: 'SabiWrite AI is an end-to-end full-stack writing assistant and personalized feedback platform. It pairs an interactive, real-time writing environment with serverless Deno Edge Functions for text analysis, automated quiz generation, mistake analytics, and a gamified mastery engine backed by PostgreSQL and Supabase Auth.',
    liveUrl: 'https://sabiwrite-ai.vercel.app',
    githubUrl: 'https://github.com/idobanj/SabiWrite-AI',
    image: '/img/sabiwrite-ai.png',
    technologies: ['React', 'Supabase', 'PostgreSQL', 'Deno Edge Functions', 'Gemini API', 'Tailwind CSS', 'Vercel'],
    featured: true,
    caseStudy: {
      overview: 'SabiWrite AI was engineered as an end-to-end full-stack writing coach. It bridges natural language processing via Google\'s Gemini API with a robust Supabase/PostgreSQL backend running 12 database migrations and serverless Deno Edge Functions for text analysis, automated quiz generation, mistake tracking, and user skill mastery progression.',
      problem: 'Writers, content creators, and students need more than just one-off text generation; they need structured writing workflows, systematic error tracking, personalized learning feedback, and persistent cloud accounts without security compromises or high latency.',
      solution: 'A comprehensive full-stack platform featuring a distraction-free split-screen editor, automated server-side writing evaluation, gamified skill mastery tracking, quiz generation, and authenticated user workspaces.',
      architecture: 'Full-stack architecture combining a React 19 frontend with a managed Supabase backend. Server-side logic runs across specialized Deno Edge Functions (analyze-text, generate-quiz, skill-mastery, log-mistake, bump-mastery, user-stats, get-notifications). Persistent data, user profiles, and mistake histories are structured in PostgreSQL with Row-Level Security (RLS).',
      decisions: [
        {
          title: 'Serverless Deno Edge Functions',
          description: 'Moved AI prompt orchestration, quiz generation, and mistake logging into Supabase Edge Functions (Deno/TypeScript) to protect API credentials and ensure low latency near users.'
        },
        {
          title: 'Relational PostgreSQL Schema & RLS',
          description: 'Implemented 12 migration files establishing relations between users, mistake logs, quiz sessions, notification feeds, and mastery engines protected by strict Row-Level Security.'
        },
        {
          title: 'React 19 & Fluid Typography',
          description: 'Leveraged React 19 and Tailwind CSS to style a responsive split-screen writing layout: prompts and mastery feedback on the left, rich editor on the right.'
        }
      ],
      challenges: [
        {
          title: 'Managing AI Latency & Microservices',
          description: 'Orchestrating multi-step AI requests and database updates across edge functions while maintaining a responsive UI using loading states, optimistic UI feedback, and structured text parsing.'
        },
        {
          title: 'Mobile Editor Usability',
          description: 'Writing long-form content on mobile is difficult with on-screen keyboards. I created an adaptive viewport using dynamic CSS custom properties (100svh) to keep toolbar buttons visible above the keyboard.'
        }
      ],
      lessons: 'Designing serverless edge functions to preprocess prompts and validate outputs with structured schemas provides far better reliability and security than direct client-side model calls.',
      improvements: [
        'Export documents to formatted PDF and DOCX.',
        'Real-time collaborative editing sessions.',
        'Custom organization-level writing style guides.'
      ]
    }
  },
  {
    id: 'churchdue',
    title: 'ChurchDue',
    shortDescription: 'A full-stack dues tracking, financial ledger, and payment platform built with React, Supabase, PostgreSQL, and Paystack.',
    description: 'ChurchDue is a full-stack organization ledger and financial management platform designed for churches and community groups. Built with React, Supabase PostgreSQL, and Paystack integration, it features member directories, dues tracking, payment processing, role-based access control, and real-time financial reporting.',
    liveUrl: 'https://churchdue.vercel.app/',
    githubUrl: 'https://github.com/idobanj/ChurchDue-project',
    image: '/img/churchdue.png',
    technologies: ['React', 'Supabase', 'PostgreSQL', 'Paystack API', 'Serverless Functions', 'Tailwind CSS', 'TanStack Query', 'Zustand'],
    featured: true,
    caseStudy: {
      overview: 'ChurchDue was built as a full-stack financial platform for community organizations and churches to replace manual ledgers and chaotic spreadsheets. It delivers secure organization onboarding, role-based access control (Admins and Members), dues management, and Paystack payment processing with serverless webhook validation.',
      problem: 'Churches and associations struggle with tracking member dues, tithes, and special project pledges. Spreadsheets lead to reconciliation errors, lack audit trails, and cannot securely automate digital payments.',
      solution: 'A robust full-stack dues management portal. Administrators create organizations, configure dues, and track reconciliation in real time. Members can register, view outstanding balances, and pay online through Paystack.',
      architecture: 'Full-stack system utilizing React 18 with TanStack Query and Zustand on the frontend, paired with a Supabase PostgreSQL backend. Edge functions handle Paystack checkout initialization, server-side transaction verification, webhook event ingestion, and admin provisioning, secured with PostgreSQL Row Level Security (RLS).',
      decisions: [
        {
          title: 'Serverless Payment & Webhook Architecture',
          description: 'Implemented Supabase Edge Functions (initialize-paystack-payment, verify-paystack-payment, and paystack-webhook) to securely sign requests, handle Paystack callbacks, and prevent fraudulent client-side transaction spoofing.'
        },
        {
          title: 'Role-Based Row Level Security',
          description: 'Engineered PostgreSQL RLS policies ensuring administrators have isolated multi-tenant organization access while students/members can only query their own payment and dues records.'
        },
        {
          title: 'TanStack Query & Zustand State',
          description: 'Utilized TanStack Query for server-state caching, automatic refetching on transaction updates, and Zustand for lightweight local UI state.'
        }
      ],
      challenges: [
        {
          title: 'Webhook Idempotency & Verification',
          description: 'Ensuring payment callbacks from Paystack are processed idempotently without double-crediting dues or failing on transient network retries.'
        },
        {
          title: 'Responsive Tabular Data',
          description: 'Wide financial tables do not fit on phone screens. I solved this by building an adaptive component that transforms table rows into compact key-value cards on mobile viewports.'
        }
      ],
      lessons: 'Payment processing must always be verified server-side via cryptographic signature checks and webhooks; client-side confirmation alone is never sufficient.',
      improvements: [
        'Automated PDF receipt generation and email dispatch.',
        'SMS notifications for pending dues and payment confirmations.',
        'Multi-currency support for international branches.'
      ]
    }
  },
  {
    id: 'perspective-lifestyle',
    title: 'Perspective Lifestyle',
    shortDescription: 'An aesthetic, responsive lifestyle and editorial concept website with dynamic grids.',
    description: 'Perspective Lifestyle is a frontend conceptual website highlighting aesthetic layouts, responsive lookbook grids, and modern web typography. Built to showcase visual hierarchy, premium spacing, and custom animation work.',
    liveUrl: 'https://perspective-lifestyle.vercel.app',
    githubUrl: 'https://github.com/idobanj/perspective-lifestyle',
    image: '/img/second.png',
    technologies: ['React', 'JavaScript', 'CSS Grid', 'Tailwind CSS', 'Vercel'],
    featured: false
  },
  {
    id: 'acme-rocket',
    title: 'Acme Rocket',
    shortDescription: 'A clean, high-conversion landing page built with custom Tailwind CSS configurations.',
    description: 'Acme Rocket is a modern sales landing page template showcasing custom Tailwind styling, interactive product specification grids, smooth scroll behaviors, and responsive navigation components.',
    liveUrl: 'https://acme-rocket-website-rose.vercel.app',
    githubUrl: 'https://github.com/idobanj/Acme-Rocket-website',
    image: '/img/second1.png',
    technologies: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'Vercel'],
    featured: false
  }
];
