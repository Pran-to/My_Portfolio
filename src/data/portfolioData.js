export const PROFILE_DATA = {
  name: 'Pranto Chakrobortty',
  role: 'Full-Stack Web & Software Developer',
  tagline: 'Crafting interactive web applications, scalable architectures, and problem-solving digital experiences.',
  phone: '01755472937',
  email: 'Prantochakrobortty24@gmail.com',
  location: 'Kallyanpur, Dhaka, Bangladesh',
  resumePath: '/resume/Pranto-Chakrobortty-Resume.pdf',
  socials: {
    linkedin: 'https://www.linkedin.com/in/pranto-chakrobortty-a98755317/',
    githubPrimary: 'https://github.com/Pran-to',
    githubSecondary: 'https://github.com/Pranto-Chakrobortty',
  },
  summary:
    'I am a passionate professional with a strong focus on technology and entrepreneurship. Skilled in web development, software development, and problem-solving, I thrive in collaborative environments and aim to deliver innovative solutions. Committed to continuous learning and growth, I strive to make a meaningful impact through my work.',
  competencies: [
    'Problem Solving',
    'Strategic Thinking',
    'Innovation',
    'Teamwork',
    'Leadership',
    'Communication',
    'Adaptability',
    'Execution',
  ],
};

export const SKILLS_DATA = [
  {
    category: 'Frontend Engineering',
    accent: 'from-cyan-400 to-blue-500',
    items: [
      { name: 'React JS', level: 92 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'Daisy UI', level: 88 },
    ],
  },
  {
    category: 'Backend & Database',
    accent: 'from-indigo-400 to-purple-500',
    items: [
      { name: 'Firebase Auth & Hosting', level: 90 },
      { name: 'MongoDB', level: 84 },
      { name: 'REST API Integration', level: 86 },
      { name: 'Context API & State Mgmt', level: 91 },
    ],
  },
  {
    category: 'Languages & Problem Solving',
    accent: 'from-emerald-400 to-teal-500',
    items: [
      { name: 'C Programming', level: 88 },
      { name: 'Python', level: 82 },
      { name: 'HackerRank Problem Solving', level: 87 },
      { name: 'Git & GitHub', level: 90 },
    ],
  },
  {
    category: 'Developer Tools & Productivity',
    accent: 'from-amber-400 to-orange-500',
    items: [
      { name: 'VS Code & PyCharm', level: 94 },
      { name: 'Android Studio & Jupyter', level: 80 },
      { name: 'Code-Blocks', level: 85 },
      { name: 'MS Office & ChatGPT Workflows', level: 92 },
    ],
  },
];

export const INITIAL_PROJECTS = [
  {
    id: 'career-counseling',
    title: 'Career Counseling Platform',
    subtitle: 'Full-Stack Authentication & Guidance Web App',
    category: 'Full-Stack',
    liveUrl: 'https://career-counseling-3a383.web.app/',
    githubUrl: 'https://github.com/Pranto-Chakrobortty',
    gradient: 'from-cyan-500/20 via-blue-600/20 to-indigo-900/40',
    accentColor: '#38bdf8',
    description:
      'A modern web application built with React and Firebase that provides seamless user authentication, dynamic UI updates, and smooth user experience with real-time toast notifications.',
    architecture:
      'Authentication state is managed using Firebase onAuthStateChanged listener and stored in React Context API across components. Supports secure email/password login, Google Sign-In, sendPasswordResetEmail, and updateProfile API.',
    technologies: [
      'React.js',
      'Firebase Auth',
      'Tailwind CSS',
      'React Router DOM',
      'Context API',
      'React Toastify',
      'Vite',
    ],
    features: [
      'User Registration via Email/Password & Google Sign-In',
      'Authentication State Persistence & Protected Routes',
      'User Profile Update (Display Name & Photo URL)',
      'Password Reset Functionality with Email Notification',
      'Real-Time Toast Feedback for Every User Interaction',
    ],
    featured: true,
  },
  {
    id: 'gadget-heaven',
    title: 'Gadget Heaven',
    subtitle: 'Modern Electronics E-Commerce Storefront',
    category: 'E-Commerce',
    liveUrl: 'https://gadget-heaven-online-shop.netlify.app/',
    githubUrl: 'https://github.com/Pran-to',
    gradient: 'from-purple-500/20 via-fuchsia-600/20 to-slate-900/40',
    accentColor: '#c084fc',
    description:
      'An e-commerce platform for gadget enthusiasts featuring a wide selection of electronic products where users can browse, learn about, and purchase gadgets with ease.',
    architecture:
      'Uses Context API to manage app-wide data including product listings, category filters, user interactions, and shopping cart state across responsive React Router views.',
    technologies: [
      'React.js',
      'Tailwind CSS',
      'DaisyUI',
      'Context API',
      'React Router',
      'Firebase',
    ],
    features: [
      'Product Browsing & Category Search Across Gadgets',
      'Interactive Shopping Cart & Checkout System',
      'User Authentication for Personalized Shopping',
      'Responsive Design Optimized for Mobile & Desktop',
    ],
    featured: true,
  },
  {
    id: 'dream-eleven',
    title: 'Dream Eleven',
    subtitle: 'Fantasy Cricket Team Builder & Live Leaderboard',
    category: 'Frontend',
    liveUrl: 'https://react-cricket-dream-team.netlify.app/',
    githubUrl: 'https://github.com/Pran-to',
    gradient: 'from-emerald-500/20 via-teal-600/20 to-slate-900/40',
    accentColor: '#34d399',
    description:
      'A fantasy sports platform where users create and manage dream cricket teams, strategize player selections, and track live performance rankings.',
    architecture:
      'Combines React Context and custom hooks with LocalStorage retrieval for user data, team selections, and leaderboard statistics.',
    technologies: [
      'React.js',
      'Tailwind CSS',
      'React Context',
      'React Router',
      'LocalStorage',
    ],
    features: [
      'Player Selection & Custom Dream Team Builder',
      'Live Leaderboard Ranking Player Performances',
      'Persistent Roster & Stats via LocalStorage',
      'Cross-Device Responsive User Interface',
    ],
    featured: true,
  },
  {
    id: 'peddy-pet',
    title: 'Peddy Pet Adoption',
    subtitle: 'Animal Welfare & Pet Adoption Web Portal',
    category: 'Full-Stack',
    liveUrl: 'https://peddy-petss.netlify.app/',
    githubUrl: 'https://github.com/Pranto-Chakrobortty',
    gradient: 'from-amber-500/20 via-orange-600/20 to-slate-900/40',
    accentColor: '#fbbf24',
    description:
      'A pet adoption platform designed to connect animal lovers with pets in need of a home through detailed listings and a guided adoption workflow.',
    architecture:
      'Utilizes React useState for local component state alongside LocalStorage persistence for saved favorites across page reloads and Firebase backend services.',
    technologies: [
      'React.js',
      'Tailwind CSS',
      'DaisyUI',
      'React Router',
      'Firebase',
      'LocalStorage',
    ],
    features: [
      'Pet Listings with Detailed Animal Profiles',
      'Step-by-Step Guided Adoption Process',
      'User Authentication & Account Management',
      'Persistent Saved Selections Across Sessions',
    ],
    featured: false,
  },
];

export const EDUCATION_DATA = [
  {
    degree: 'B.Sc. in Computer Science and Engineering',
    institution: 'Daffodil International University',
    location: 'Dhaka, Bangladesh',
    period: '2019 – 2023',
    grade: 'CGPA: 2.92 / 4.00',
    highlights: [
      'Core coursework in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, and Web Engineering.',
      'Built multiple full-stack web applications and solved algorithmic challenges on HackerRank.',
    ],
  },
  {
    degree: 'Higher Secondary Certificate (HSC) — Science',
    institution: 'Govt. Bangabandhu College',
    location: 'Khulna, Bangladesh',
    period: '2016 – 2018',
    grade: 'GPA: 4.08 / 5.00',
    highlights: [
      'Focused on Higher Mathematics, Physics, Chemistry, and Information & Communication Technology.',
    ],
  },
  {
    degree: 'Secondary School Certificate (SSC) — Science',
    institution: 'Lohagara Pilot High School',
    location: 'Lohagara, Narail, Bangladesh',
    period: '2014 – 2015',
    grade: 'GPA: 4.44 / 5.00',
    highlights: [
      'Strong academic foundation in Science and Mathematics.',
    ],
  },
];
