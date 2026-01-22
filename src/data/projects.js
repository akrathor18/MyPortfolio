export const projects = [
    { id: 'studyhub', title: 'StudyHub' },
    { id: 'inventlab', title: 'InventLab' },
    { id: 'shophub', title: 'ShopHub' },
];

export const projectsData = [
    {
        id: 'studyhub',
        title: 'StudyHub',
        description:
            'A student-focused web platform for sharing study notes and practicing MCQ-based quizzes for selected subjects.',
        problem:
            'Students often struggle to find organized study notes and reliable self-assessment tools in one place, especially for specific subjects.',
        solution:
            'Built a centralized platform where students can access subject-wise notes, take quizzes, and track their learning activity through a clean and simple interface.',
        whyBuilt:"I built StudyHub after noticing how difficult it was for students to manage notes and self-assessment in one place. This project allowed me to apply full-stack concepts while solving a real problem faced by students.",
            longDescription:
            'StudyHub is a web application designed to help students learn more effectively by combining note-sharing and quiz-based self-assessment. The platform focuses on simplicity and usability, allowing students to quickly find relevant notes and test their understanding using MCQs. It was built as a college minor project with an emphasis on practical features and clean UI.',
        features: [
            'Subject-wise note sharing',
            'MCQ-based quizzes for self-assessment',
            'Simple and clean user interface',
            'Responsive design for mobile and desktop',
            'Easy navigation between notes and quizzes',
            'Basic user activity tracking',
        ],
        challenges: [
            'Designing a clear structure for notes and quizzes',
            'Managing application state across different sections',
            'Ensuring smooth navigation and user experience',
            'Balancing feature development alongside regular college studies',
        ],
        learnings: [
            'Improved understanding of React component architecture',
            'Learned how to manage state in a medium-sized application',
            'Gained experience building real-world features instead of demo apps',
            'Understood the importance of UI clarity and usability for students',
        ],
        role: 'Full Stack Developer',
        roleDescription: 'Built StudyHub as a solo full-stack project from idea to implementation. Worked on frontend UI development, backend API integration, database design, and core features like notes and quizzes. Focused on building a functional, scalable learning platform while improving real-world full-stack development skills.',
        responsibilities: [
            'Designed and developed the frontend using React and Tailwind CSS',
            'Implemented responsive layouts for notes, quizzes, and dashboards',
            'Built and integrated RESTful APIs for core application features',
            'Implemented quiz functionality including MCQs, scoring, and attempts',
            'Managed application state and handled client-side validation',
            'Deployed the application and handled basic performance optimizations',
        ],

        technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        links: {
            github: 'https://github.com/akrathor18/Note-sharing-app',
            live: 'https://studyhub-dev.web.app/',
        },
        stats: {
            duration: '4 months',
            teamSize: 'Solo',
            status: 'Completed',
        },
    },
    {
        id: 'inventlab',
        title: 'InventLab',
        description:
            'A real-time inventory management system built during a hackathon to track stock, sales, and inventory movements.',
        problem:
            'Small businesses and teams often lack a simple system to track inventory changes, sales, and stock levels in real time.',
        solution:
            'Developed an inventory management system that allows users to manage products, update stock on sales or restocks, and view inventory activity through a dashboard.',
            
        whyBuilt:"I built InventLab during a hackathon to understand how real-world inventory systems work under time constraints. The goal was to design a practical solution for tracking stock movements while collaborating effectively as a team.",
            longDescription:
            'InventLab is a hackathon-built inventory management system focused on simplicity and real-time tracking. The application allows teams to manage products, monitor stock levels, and log inventory actions such as sales and restocking. The project emphasized teamwork, clear API design, and building practical features within a limited time frame.',
        features: [
            'Product creation and management',
            'Real-time stock updates',
            'Inventory action logs (sale, restock)',
            'Low-stock indicators',
            'Dashboard overview of inventory status',
            'Role-based workflow for team usage',
        ],
        challenges: [
            'Building multiple features within a limited hackathon timeframe',
            'Designing a clear inventory update flow',
            'Handling concurrent stock updates safely',
            'Collaborating efficiently with team members under time pressure',
        ],
        learnings: [
            'Improved understanding of inventory management logic',
            'Learned to design APIs quickly and efficiently',
            'Gained experience working in a team-based development environment',
            'Understood the importance of clear task division during hackathons',
        ],
        role: 'Full Stack Developer',
        roleDescription: 'Built InventLab as a full-stack inventory management system to track products, stock movements, and sales. Worked on designing the backend APIs, database schema, and frontend dashboards. Focused on building a reliable system with clear inventory logs, role-based actions, and real-time insights.',
        responsibilities: [
            'Designed database schema for products, stock, sales, and inventory logs',
            'Built RESTful APIs using Node.js and Express for inventory operations',
            'Implemented stock actions such as sales, returns, and restocking',
            'Developed dashboard UI for inventory tracking and activity logs',
            'Added role-based access logic for admin and staff users',
            'Handled data validation and error handling across the application',
        ],

        technologies: ['Next.js', 'Node.js', 'Express', 'SQLite', 'Tailwind CSS'],
        links: {
            github: 'https://github.com/Kashina69/InventLabs/',
            live: 'https://invent-labs-frontend.vercel.app/',
        },
        stats: {
            duration: '48 hours (Hackathon)',
            teamSize: '3 members',
            status: 'Prototype',
        },
    },

    {
        id: 'shophub',
        title: 'ShopHub',
        description:
            'A frontend-focused e-commerce application that simulates a modern online shopping experience with product browsing and cart management.',
        problem:
            'Many beginner e-commerce projects lack realistic UI flows and proper state handling for shopping interactions.',
        solution:
            'Built a responsive frontend application that allows users to browse products, filter categories, manage a cart, and experience a clean e-commerce UI similar to real-world platforms.',
        whyBuilt:"I built ShopHub to practice designing realistic e-commerce UI flows and managing complex frontend state. The project helped me understand how real shopping experiences are structured on modern platforms.",
            longDescription:
            'ShopHub is a frontend-only e-commerce project built to strengthen UI design, component architecture, and state management skills. The application focuses on realistic shopping flows such as product listing, category filtering, cart updates, and responsive layouts. While it does not include backend or payment integration, it closely mirrors real e-commerce user experiences.',
        features: [
            'Product listing with category-based filtering',
            'Shopping cart management',
            'Responsive layout for mobile and desktop',
            'Reusable and modular UI components',
            'Clean and modern user interface',
            'Client-side state management for cart and products',
        ],
        challenges: [
            'Managing cart state across multiple components',
            'Designing reusable UI components for scalability',
            'Handling dynamic UI updates efficiently',
            'Ensuring responsive behavior across different screen sizes',
        ],
        learnings: [
            'Strengthened understanding of React component structure',
            'Improved frontend state management skills',
            'Learned to design realistic UI flows for e-commerce applications',
            'Gained confidence building larger frontend-only projects',
        ],
        role: 'Frontend Developer',
        roleDescription:
            'Developed ShopHub as a solo frontend-focused e-commerce project to practice building realistic shopping interfaces. Worked on UI design, component architecture, and client-side state management to simulate real-world product browsing and cart interactions.',
        responsibilities: [
            'Designed and implemented the complete frontend UI using React and Tailwind CSS',
            'Built product listing and category-based filtering functionality',
            'Implemented shopping cart logic with client-side state management',
            'Created reusable and modular UI components for scalability',
            'Handled dynamic UI updates based on user interactions',
            'Ensured responsive design across mobile and desktop devices',
        ],

        technologies: ['React', 'JavaScript', 'Tailwind CSS'],
        links: {
            github: 'https://github.com/akrathor18/ShopHub',
            live: 'https://shophub-dev.web.app/',
        },
        stats: {
            duration: '3 weeks',
            teamSize: 'Solo',
            status: 'Completed',
        },
    },

];