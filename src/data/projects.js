export const projects = [
  {
    id: 'sabiwrite-ai',
    title: 'SabiWrite AI',
    shortDescription: 'An AI-powered writing assistant helping content creators generate, format, and optimize copy with Gemini API.',
    description: 'SabiWrite AI is a professional writing portal that leverages artificial intelligence to streamline document drafting, proofreading, and copywriting. Built for content writers, students, and professionals, it provides customized template prompts (e.g. emails, blog posts, outlines) alongside an interactive, real-time editor.',
    liveUrl: 'https://sabiwrite-ai.vercel.app',
    githubUrl: 'https://github.com/idobanj/SabiWrite-AI',
    image: '/img/sabiwrite-ai.png',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Gemini API', 'Vercel'],
    featured: true,
    caseStudy: {
      overview: 'SabiWrite AI was built to solve the creative friction writers experience during drafting. By combining natural language processing via Google\'s Gemini API with a distraction-free writing environment, the application acts as an editor, brainstormer, and copy generator in one cohesive tab.',
      problem: 'Many content creators face writer\'s block, spend significant time formatting documents, or find existing AI tools over-complicated and expensive. There was a clear need for a fast, responsive, template-oriented text assistant that allows immediate editing and copying of drafts without page reloads.',
      solution: 'A modern, single-page writing portal. Users can select from specialized templates (outlines, copy edits, headlines, full drafts), enter their requirements, and receive structured AI outputs. The integrated live editor lets them immediately edit, format, and copy the results.',
      architecture: 'The client-side architecture leverages React.js for modularity. State management is handled through React Hooks, maintaining document history in localStorage. The AI integration interacts directly with API end-points using robust error handling and loading feedback (skeletons and progress cues).',
      decisions: [
        {
          title: 'React Functional Components & Routing',
          description: 'Used functional components with hooks for cleaner lifecycle management and React Router for fast page navigation between templates, active documents, and settings.'
        },
        {
          title: 'Direct API Integration with Fallbacks',
          description: 'Integrated the Gemini API directly with custom helper utilities to parse responses and manage loading states, ensuring standard error boundaries handle API timeouts gracefuly.'
        },
        {
          title: 'Tailwind CSS for Layout Fluidity',
          description: 'Leveraged Tailwind CSS to style a responsive split-screen writing layout: prompts on the left, rich editor on the right.'
        }
      ],
      challenges: [
        {
          title: 'Managing Latency of AI Responses',
          description: 'AI model inference takes time. I implemented skeleton layouts, loading state cues, and structured text rendering to keep the user engaged. I also added client-side caching for duplicate prompt inputs.'
        },
        {
          title: 'Mobile Editor Usability',
          description: 'Writing long-form content on mobile is difficult with on-screen keyboards. I created an adaptive viewport using dynamic CSS custom properties (`100svh`) to keep toolbar buttons visible above the keyboard.'
        }
      ],
      lessons: 'Working with LLM endpoints taught me the importance of structured prompts. Designing UI helpers to preprocess user input before sending it to the model significantly improved the quality and formatting of the output text.',
      improvements: [
        'User authentication using Supabase to store documents in the cloud.',
        'Rich-text formatting export to PDF and DOCX.',
        'Real-time grammar verification and tone-of-voice profiling.'
      ]
    }
  },
  {
    id: 'churchdue',
    title: 'ChurchDue',
    shortDescription: 'A simplified contribution tracker and financial record management system for organizations.',
    description: 'ChurchDue is a tailored ledger application designed to track contributions, tithes, and special project funds. Built to replace error-prone spreadsheets, it features member registration, transaction entries, and client-side financial reports.',
    liveUrl: 'https://churchdue.vercel.app/',
    githubUrl: 'https://github.com/idobanj/ChurchDue-project',
    image: '/img/churchdue.png',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Web Storage API', 'Vercel'],
    featured: true,
    caseStudy: {
      overview: 'ChurchDue was built as a solution for community organizations that require clear, error-free tracking of members\' voluntary financial contributions without the cost or complexity of heavy ERP accounting suites.',
      problem: 'Small community organizations often rely on Excel spreadsheets or paper ledgers. This process leads to transcription errors, lack of backup security, and makes searching or filtering transaction history tedious for administrators.',
      solution: 'A high-performance contribution ledger app. Administrators can manage members, log tithes/offerings against specific profiles, categorize entries by fund types, and generate summaries. It operates fully offline using Web Storage, enabling file import/export.',
      architecture: 'Built as a React SPA. Data operations are managed through local storage with helper utilities to import and export backup JSON files. The interface separates administrative tables, transaction logging forms, and financial metrics charts.',
      decisions: [
        {
          title: 'Client-Side Local Storage & JSON Backup',
          description: 'To ensure data sovereignty and low cost, the ledger operates locally in the browser, offering manual JSON export/import for backups rather than forcing database setups.'
        },
        {
          title: 'Tabular Search & Filter State',
          description: 'Constructed custom hooks to filter contribution lists by date ranges, member names, and payment modes on the fly.'
        },
        {
          title: 'Clean Grid Layouts',
          description: 'Employed Tailwind CSS flex-grids to present key metrics cards (Total Collected, Member Counts, Active Projects) at the top of the dashboard.'
        }
      ],
      challenges: [
        {
          title: 'Performance with Growing Datasets',
          description: 'As rows of contributions grow, client-side table rendering slows down. I implemented basic pagination and memoized filtered results using `useMemo` to prevent unnecessary component re-renders.'
        },
        {
          title: 'Responsive Tabular Data',
          description: 'Wide financial tables do not fit on phone screens. I solved this by building an adaptive component that transforms table rows into compact key-value cards on mobile viewports.'
        }
      ],
      lessons: 'Offline-first client-side storage is incredibly fast and cheap, but it requires explicit backup prompts. Educating the user on downloading backup JSON files was a key product experience constraint.',
      improvements: [
        'Database synchronization with PostgreSQL/Supabase for multi-user support.',
        'Automated receipt generation and emailing features.',
        'Analytical graphs visualizing seasonal contribution trends.'
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
