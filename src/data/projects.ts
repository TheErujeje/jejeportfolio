export interface Project {
  id: string
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
}

export const projects: Project[] = [
  {
    id: 'ai-resume-screener',
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
  },
  {
    id: 'scrumy',
    title: 'Scrumy: AI Meeting Assistant',
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
  },
  {
    id: 'tech-blog',
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
  },
]