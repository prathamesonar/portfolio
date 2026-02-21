const projects = [
  {
    id: 1,
    title: "Blogify: Full-Stack Blogging Platform",
    description:
      "Architected a scalable MERN stack application with JWT authentication, a rich text editor, and a comprehensive admin dashboard for content moderation.",
    techStack: ["React", "Node.js", "MongoDB", "TailwindCSS", "JWT"],
    githubUrl: "https://github.com/prathamesonar/blogify-Post-your-blogs",
    liveUrl: "https://blogify-post-your-blogs.onrender.com/",
    image: "/assets/img/blogify.png",
  },
  {
    id: 3,
    title: "Job Portal",
    description:
      "A full-stack job board application for recruiters to post, edit, and manage job listings. Features secure JWT authentication, user profile management, and a dedicated recruiter dashboard with analytics (mock data).",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT Auth", "Tailwind CSS", "Axios"],
    githubUrl: "https://github.com/prathamesonar/Job-Portal",
    liveUrl: "https://jobc-portaal.vercel.app",
    image: "/assets/img/job portal.png",
  },
  {
    id: 4,
    title: "AI Document Analyzer",
    description:
      "An intelligent web app that uses NLP to scan, analyze, and extract key information from uploaded documents like PDFs and text files.",
    techStack: ["HTML", "FastAPI (Python)", "Sarvam AI", "SQLite", "TailwindCSS"],
    githubUrl: "https://github.com/prathamesonar/ai-document-insight-tool",
    liveUrl: "https://ai-document-insight.onrender.com/",
    image: "/assets/img/ai document.png",
  },
  {
    id: 5,
    title: "LinkShorty - URL Shortener",
    description:
      "A full-stack application to shorten URLs, track detailed click analytics, and generate QR codes. Features custom aliases, system health monitoring, and a responsive dark mode UI.",
    techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/prathamesonar/link-shorty",
    liveUrl: "https://link-shorty-web.vercel.app/",
    image: "/assets/img/linkshorty.png",
  },
  {
    id: 6,
    title: "Personal Portfolio Website",
    description:
      "A responsive and interactive personal portfolio built from the ground up to showcase my projects, skills, and experience. Features a dark/light mode toggle.",
    techStack: ["HTML", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/prathamesonar/portfolio",
    liveUrl: "https://prathameshsonar-portfolio.onrender.com/",
    image: "/assets/img/portfolio.png",
  },
  {
    id: 7,
    title: "Book Review Platform",
    description:
      "A full-stack MERN application where users can discover, add, and review books. Features secure JWT authentication, CRUD operations, live search, and a dark/light mode.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/prathamesonar/book-review-platform",
    liveUrl: "https://book-review-sand.vercel.app/",
    image: "/assets/img/bookreview.png",
  },
  {
    id: 8,
    title: "Fix4Ever Service Marketplace",
    description:
      "A full-stack application connecting users needing repairs with technicians. Features user/technician dashboards, service request management, AI-powered suggestions (category, price, urgency), technician profiles with ratings, and an admin panel.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "Sarvam AI"],
    githubUrl: "https://github.com/prathamesonar/fix4ever",
    liveUrl: "https://fix4ever.vercel.app",
    image: "/assets/img/fix4ever.png",
  },
  {
    id: 9,
    title: "Twitch Gaming Trend Monitor",
    description:
      "A full-stack, real-time analytics platform tracking live streaming trends. Features Twitch OAuth, live chat sentiment analysis via WebSockets, and historical data visualization using PostgreSQL and Redis.",
    techStack: ["React", "Node.js", "PostgreSQL", "Redis", "Tailwind"],
    githubUrl: "https://github.com/prathamesonar/twitch-analytics-platform",
    liveUrl: null,
    image: "/assets/img/twitch.png",
  },
  // {
  //   id: 10,
  //   title: "ShiftBoard - HR Management",
  //   description:
  //     "A full-stack MERN application for managing employee shifts with Role-Based Access Control (RBAC), JWT authentication, and automated shift validation logic.",
  //   techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
  //   githubUrl: "https://github.com/prathamesonar/shiftboard-app",
  //   liveUrl: "https://shiftboard.vercel.app",
  //   image: "/assets/img/shiftboard.png",
  // },
  {
    id: 11,
    title: "AI Chat Assistant",
    description:
      "A modern, full-stack AI chat application featuring real-time responses using Groq (Llama 3), persistent chat history via MongoDB, and a responsive dark/light UI.",
    techStack: ["React", "Node.js", "MongoDB", "Groq AI", "Tailwind CSS"],
    githubUrl: "https://github.com/prathamesonar/ai-chat-app",
    liveUrl: "https://ai-chat-app-pas.vercel.app",
    image: "/assets/img/aichatapp.png",
  },
  {
    id: 12,
    title: "LearnMap AI Generator",
    description:
      "A full-stack application that intelligently generates interactive, AI-powered learning roadmaps for any topic. Features include multiple difficulty levels, dynamic node-based resource fetching, and map export to JSON/PDF.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Google Gemini API", "React Flow"],
    githubUrl: "https://github.com/prathamesonar/LearnMap",
    liveUrl: "https://learning-map.vercel.app",
    image: "/assets/img/leranmap.png",
  },
  {
    id: 13,
    title: "Editable HTML Poster",
    description:
      "A Next.js application that allows users to import, visually edit, and export HTML posters. Features a 720x720 stage, drag-and-drop repositioning, inline text editing, and image replacement.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "React-Draggable", "DOMPurify"],
    githubUrl: "https://github.com/prathamesonar/editable-html-poster",
    liveUrl: "https://html-poster-editor-pas.vercel.app",
    image: "/assets/img/html-postereditor.png",
  },
  {
    id: 2,
    title: "Disease Prediction & Medical Recommendation",
    description:
      "A symptom-based prediction platform using ML models with a chat-like frontend. Recommends medical facilities, diets, and workouts.",
    techStack: ["Python", "Machine Learning", "HTML/CSS", "JavaScript"],
    githubUrl:
      "https://github.com/prathamesonar/Disease-Prediction-and-Recommendation-System",
    liveUrl: null,
    image: "",
  },
];

export default projects;
