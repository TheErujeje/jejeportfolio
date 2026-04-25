export interface Project {
  id: string
  category: string
  title: string
  tagline: string
  description: string
  fullDescription: string
  problem: string
  solution: string
  features: string[]
  techStack: string[]
  challenges: string
  learnings: string
  color: 'lime' | 'cyan' | 'fuchsia'
  githubUrl: string
  demoUrl: string
  status: 'Live' | 'Paused' | 'Offline'
  version: string
  license: string
  repo: 'public' | 'private'
}

export const projects: Project[] = [
  {
    id: 'ai-resume-screener',
    category: 'AI/ML',
    title: 'AI Resume Screener',
    tagline: 'Serverless AI-powered recruitment automation.',
    description:
      'Automatically parse, evaluate, and score resumes using LLMs and AI models based on job descriptions. Built with a fully serverless, scalable, and event-driven architecture on AWS.',
    fullDescription:
      'An intelligent resume screening system that leverages Amazon Bedrock and serverless architecture to automate the recruitment process. The system processes resumes in real-time, extracts relevant skills and experience, and provides detailed scoring against job requirements.',
    problem:
      'HR departments spend countless hours manually screening resumes, leading to inconsistent evaluation criteria and delayed hiring processes. Traditional ATS systems lack intelligent matching capabilities.',
    solution:
      'A serverless AI pipeline using Amazon Bedrock for LLM processing, AWS Lambda for compute, and DynamoDB for storage. The system provides consistent, objective resume evaluation with detailed skill matching and scoring.',
    features: [
      'Upload resumes and compare them to job descriptions',
      'Score resumes using NLP/LLM models (Amazon Bedrock)',
      'Serverless backend using AWS Lambda + API Gateway',
      'Resume storage on S3, score results in DynamoDB',
      'Optional batch scoring with EventBridge',
      'Simple Streamlit frontend for UI',
    ],
    techStack: ['Python', 'AWS Lambda', 'Amazon Bedrock', 'Streamlit', 'DynamoDB', 'S3', 'API Gateway', 'Terraform'],
    challenges:
      'Optimizing LLM prompts for consistent scoring across different resume formats and handling PDF parsing edge cases. Managing cold starts in Lambda functions for real-time processing.',
    learnings:
      'Learned the importance of prompt engineering for consistent AI outputs and gained deep experience with serverless architecture patterns. Understanding of cost optimization in AI workloads.',
    color: 'lime',
    githubUrl: 'https://github.com/TheErujeje/AI-Powered-Serverless-Resume-Screener-Real-Time-Scalable-',
    demoUrl: '#',
    status: 'Paused',
    version: 'v2.1.0',
    license: 'MIT',
    repo: 'public',
  },
  {
    id: 'scrumy',
    category: 'AI/ML',
    title: 'AI Meeting Assistant',
    tagline: 'TiDB Hackathon 2025 finalist with MCP integration.',
    description:
      'AI-Powered Meeting Assistant with TiDB & MCP Integration. Captures audio from video calls, processes it with AI, and automatically creates tasks in Notion and Slack.',
    fullDescription:
      'Built for TiDB Hackathon 2025, Scrumy extends the Meetily project with Chrome extension capabilities, TiDB Serverless integration, and Model Context Protocol (MCP) for seamless task management across platforms.',
    problem:
      'Meeting notes are often incomplete, action items get lost, and follow-up tasks are not properly tracked across different platforms and team members.',
    solution:
      'A Chrome extension that captures meeting audio in real-time, processes it with AI for speaker identification and summarization, then automatically creates actionable tasks in Notion and Slack using MCP protocol.',
    features: [
      'Chrome extension for direct audio capture from video calls',
      'Real-time WebSocket streaming to backend',
      'TiDB Serverless database for scalable storage',
      'Speaker identification and diarization',
      'Automatic task creation in Notion databases',
      'Real-time Slack notifications for action items',
      'Cross-platform task synchronization',
      'Meeting analytics and insights',
    ],
    techStack: ['FastAPI', 'Next.js', 'TiDB Serverless', 'Chrome Extension', 'Whisper.cpp', 'WebSocket', 'Notion API', 'Slack API'],
    challenges:
      'Integrating Chrome extension audio capture with WebSocket streaming while maintaining low latency. Implementing MCP protocol for cross-platform task synchronization.',
    learnings:
      'Gained experience with browser extension development and real-time audio processing. Learned about distributed database patterns with TiDB and the power of protocol-based integrations.',
    color: 'cyan',
    githubUrl: 'https://github.com/Scrumy-TiDB-Hackathon-2025/scrumy',
    demoUrl: '#',
    status: 'Offline',
    version: 'v1.3.2',
    license: 'MIT',
    repo: 'public',
  },
  {
    id: 'tech-blog',
    category: 'Full Stack',
    title: 'Tech Gadget Website',
    tagline: 'Full-stack CMS with serverless backend.',
    description:
      'A full-stack tech blog platform with CMS capabilities for content management. Features a modern Next.js frontend and a robust AWS Chalice API backend for seamless content delivery.',
    fullDescription:
      'A comprehensive blogging platform designed for tech content creators. Built with modern web technologies and serverless architecture, it provides a complete content management system with optimized performance and SEO.',
    problem:
      'Existing blogging platforms lack customization for tech content, have poor performance, or require expensive hosting. Content creators need a platform optimized for code snippets, technical diagrams, and developer-focused features.',
    solution:
      'A custom-built platform using Next.js for optimal performance and SEO, AWS Chalice for serverless API backend, and a comprehensive CMS for content management with rich text editing and media handling.',
    features: [
      'Rich text editor for article creation',
      'Image upload and media management',
      'Draft and publish workflow',
      'Category and tag organization',
      'Server-side rendering with Next.js',
      'Optimized images and lazy loading',
      'SEO-friendly URLs and metadata',
      'Fast API responses with caching',
      'Responsive design for all devices',
      'Search and filtering capabilities',
    ],
    techStack: ['Next.js', 'AWS Chalice', 'Python', 'React', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'S3'],
    challenges:
      'Implementing efficient content delivery with CDN integration and optimizing database queries for fast page loads. Building a user-friendly CMS interface while maintaining developer flexibility.',
    learnings:
      'Mastered serverless architecture patterns and learned advanced Next.js optimization techniques. Gained experience in building scalable content management systems.',
    color: 'fuchsia',
    githubUrl: 'https://github.com/TechGadgetFinds/tgf-web-dev',
    demoUrl: 'https://www.techgadgetfinds.com',
    status: 'Live',
    version: 'v1.0.8',
    license: 'MIT',
    repo: 'public',
  },

  {
    id: 'chess-website',
    category: 'Full Stack',
    title: 'Chess Corner Website',
    tagline: 'Modern chess platform with real-time gameplay.',
    description:
      'A modern chess platform featuring real-time multiplayer games, player ratings, and tournament management. Built with React, Node.js, and Socket.io for seamless gameplay experiences.',
    fullDescription:
      'An online chess platform that brings together chess enthusiasts worldwide. Features include real-time multiplayer matches, player ranking system, tournament organization, and a responsive design for all devices.',
    problem:
      'Existing chess platforms either lack real-time multiplayer capabilities or have outdated interfaces that don\'t engage modern players. There was a need for a platform that combines classic chess strategy with contemporary web technologies.',
    solution:
      'A full-stack chess platform using React for the frontend, Node.js with Express for the backend, and Socket.io for real-time communication between players. Includes a robust game engine and secure authentication system.',
    features: [
      'Real-time multiplayer chess games',
      'Player rating system with ELO calculation',
      'Tournament management and scheduling',
      'Game replay and analysis tools',
      'Mobile-responsive design',
      'User authentication and profiles',
      'Chat functionality during games',
      'Statistics and performance tracking',
      'Spectator mode for tournaments',
      'Custom game settings and variants',
    ],
    techStack: ['React', 'FastAPI', 'Dynamodb','TypeScript', 'Tailwind CSS'],
    challenges:
      'Implementing a reliable real-time game state synchronization system. Handling concurrent game sessions and ensuring smooth gameplay across different network conditions.',
    learnings:
      'Developed expertise in real-time application development and socket programming. Gained experience in building scalable multiplayer applications with consistent performance.',
    color: 'lime',
    githubUrl: 'https://github.com/ChessCorner/cc-web-dev',
    demoUrl: 'https://www.chesscornerofficial.com',
    status: 'Live',
    version: 'v2.4.1',
    license: 'MIT',
    repo: 'private',
  },

  {
    id: 'mlops-fd',
    category: 'AI/ML',
    title: 'MLOps Fraud Detection',
    tagline: 'End-to-End ML pipeline for fraud detection with Apache Airflow, Kafka and MLflow',
    description:
      'A comprehensive MLOps pipeline for real-time fraud detection in financial transactions. Implements CI/CD for ML models with automated retraining and monitoring.',
    fullDescription:
      'An enterprise-grade fraud detection system that processes real-time transaction data using machine learning models. Features automated model training, deployment, and monitoring with comprehensive logging and alerting.',
    problem:
      'Traditional fraud detection systems rely on static rules and manual updates, leading to high false positive rates and slow adaptation to new fraud patterns.',
    solution:
      'A complete MLOps solution using Apache Airflow for workflow orchestration, Kafka for real-time data streaming, MLflow for experiment tracking, and Docker for containerized deployments. Includes automated model retraining and A/B testing capabilities.',
    features: [
      'Real-time transaction monitoring and fraud detection',
      'Automated ML model training and deployment pipeline',
      'Kafka-based streaming for high-throughput data processing',
      'MLflow experiment tracking and model registry',
      'Automated model retraining with performance monitoring',
      'A/B testing framework for model comparison',
      'Comprehensive logging and alerting system',
      'Dockerized microservices for scalability',
      'CI/CD integration for ML workflows',
      'Dashboard for model performance visualization',
    ],
    techStack: ['Apache Airflow', 'Kafka', 'MLflow', 'Docker', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'],
    challenges:
      'Managing real-time data streams at scale while maintaining model accuracy. Implementing robust monitoring and alerting for model drift detection.',
    learnings:
      'Gained deep knowledge of MLOps practices and CI/CD pipelines for machine learning. Learned to build scalable, maintainable ML systems with proper version control and monitoring.',
    color: 'fuchsia',
    githubUrl: 'https://github.com/TheErujeje/fraud-detection-mlops.git',
    demoUrl: '#',
    status: 'Live',
    version: 'v1.2.0',
    license: 'Apache 2.0',
    repo: 'public',
  },
  {
    id: 'portfolio-website',
    category: 'Full Stack',
    title: 'My Portfolio',
    tagline: 'You are literally looking at it right now.',
    description:
      'A retro terminal-inspired developer portfolio built with Next.js 14, TypeScript, and Framer Motion. Features category-filtered project browsing, per-project deep-dive pages, and a dark/light theme.',
    fullDescription:
      'A fully custom portfolio site with a retro-terminal aesthetic. Built to avoid generic templates and give each project the space it deserves — including problem/solution breakdowns, tech stack details, and dev logs. Deployed on Vercel with instant global edge delivery.',
    problem:
      'Generic portfolio templates make every developer look the same. They bury project depth behind a thumbnail and a one-liner, and offer no room for the reasoning behind the work.',
    solution:
      'A ground-up custom build using Next.js App Router and TypeScript. Each project is a full data object with its own detail page. Framer Motion handles smooth transitions, and a category selector lets visitors filter by domain (Full Stack, AI/ML) without a page reload.',
    features: [
      'Retro terminal-inspired UI with dark and light mode',
      'Category-filtered project grid (Full Stack / AI/ML)',
      'Per-project detail pages with problem, solution, and dev log',
      'Public/private repo awareness — SOURCE_CODE button disabled for private repos',
      'Animated hero section with typewriter-style tagline',
      'Framer Motion page and scroll animations',
      'Fully responsive across mobile, tablet, and desktop',
      'Deployed on Vercel with edge CDN',
    ],
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    challenges:
      'Designing a UI that feels distinct without sacrificing readability. Structuring project data so adding a new project is a single object — no new components, no new routes.',
    learnings:
      'Learned how much personality a constrained color palette and a consistent type system can carry. Reinforced that the best abstractions are the ones you notice least.',
    color: 'cyan',
    githubUrl: 'https://github.com/TheErujeje/jejeportfolio',
    demoUrl: 'self',
    status: 'Live',
    version: 'v1.0.0',
    license: 'MIT',
    repo: 'public',
  }
]
