export const projects = [
    { id: 'studyhub', title: 'StudyHub' },
    { id: 'inventlab', title: 'InventLab' },
    { id: 'shophub', title: 'ShopHub' },
    { id: 'urbanmart', title: 'UrbanMart' },
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
        whyBuilt: "I built StudyHub after noticing how difficult it was for students to manage notes and self-assessment in one place. This project allowed me to apply full-stack concepts while solving a real problem faced by students.",
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
        screenshots: [
            {
                id: "dashboard",
                title: "Dashboard Overview",
                description: "Displays user statistics, recent activity, quizzes attempted, and quick actions for notes and quizzes.",
                image: "/Projects/studyhub/dashboard.PNG",
                feature: "User Overview & Analytics"
            },
            {
                id: "notes",
                title: "Notes Explorer",
                description: "Browse, filter, preview, and download subject-wise notes shared by students.",
                image: "/Projects/studyhub/notes.PNG",
                feature: "Notes Management"
            },
            {
                id: "create-note",
                title: "Create & Upload Notes",
                description: "Allows users to create notes with subject selection, content editor, and file attachments.",
                image: "/Projects/studyhub/createnotes.PNG",
                feature: "Content Creation"
            },
            {
                id: "quizzes",
                title: "Quiz Library",
                description: "Explore quizzes by subject and difficulty level with details like time limit and total questions.",
                image: "/Projects/studyhub/quiz.PNG",
                feature: "Quiz Discovery"
            },
            {
                id: "quiz-interface",
                title: "Quiz Attempt Interface",
                description: "Interactive MCQ-based quiz interface with progress tracking and time management.",
                image: "/Projects/studyhub/quizinterface.PNG",
                feature: "Assessment & Interaction"
            },
            {
                id: "profile",
                title: "User Profile & Activity",
                description: "Shows user information, performance stats, created content, and recent quiz activity.",
                image: "/Projects/studyhub/profile.png",
                feature: "User Profile & Progress"
            }
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

        technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'JWT Authentication', 'MongoDB',],
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
        id: 'urbanmart',
        title: 'UrbanMart',
        description:
            'A full-stack production-style e-commerce platform with advanced filtering, cart & wishlist management, Razorpay payment integration, and a complete order lifecycle system.',

        problem:
            'Many beginner e-commerce projects focus only on UI and basic CRUD operations, lacking real-world features like stock validation, secure payment processing, structured order states, and scalable database design.',

        solution:
            'Built a complete e-commerce system with structured relational schema, stock-aware cart logic, secure Razorpay payment integration with backend verification, order lifecycle management, server-side filtering & pagination, and clean state handling to simulate real-world business logic.',

        whyBuilt:
            "I built UrbanMart to go beyond a basic shopping website and understand how real e-commerce systems work internally. I wanted to design proper database relationships, implement secure payment verification, handle order states correctly, and build production-level backend logic instead of just focusing on UI.",

        longDescription:
            'UrbanMart is a full-stack e-commerce application designed to simulate real-world online shopping platforms. It includes advanced filtering, sorting, server-side pagination, stock validation before checkout, wishlist functionality, and structured order creation. Razorpay is integrated for secure online payments with backend signature verification and order status updates. The backend is built using Node.js with Prisma ORM and PostgreSQL, ensuring a relational and scalable database design. This project helped me understand payment gateway integration, business logic implementation, and handling complex user flows like cart management and transaction states.',

        features: [
            'Advanced product filtering and sorting',
            'Server-side pagination for performance optimization',
            'Stock-aware quantity selection and validation',
            'Cart and wishlist management',
            'Complete checkout and order creation flow',
            'Razorpay payment gateway integration',
            'Backend signature verification for secure payment validation',
            'Structured order lifecycle (CREATED → PENDING_PAYMENT → PAID → FAILED → EXPIRED)',
            'Secure authentication with JWT',
        ],

        challenges: [
            'Designing a normalized relational database schema using Prisma',
            'Handling order state transitions correctly',
            'Integrating Razorpay and implementing secure signature verification',
            'Preventing overselling with stock validation logic',
            'Managing complex cart state across multiple pages',
            'Implementing pagination and filtering efficiently',
        ],

        learnings: [
            'Deepened understanding of relational database modeling',
            'Learned how real-world e-commerce payment systems operate',
            'Gained hands-on experience integrating Razorpay payment gateway',
            'Understood the importance of backend payment verification and security',
            'Improved backend API structuring and modularization',
            'Strengthened full-stack debugging and optimization skills',
        ],

        screenshots: [
            {
                id: "homepage",
                title: "Homepage & Product Listing",
                description: "Displays featured products with filtering, sorting, and pagination options.",
                image: "/Projects/urbanmart/homepage.png",
                feature: "Product Discovery"
            },
            {
                id: "product-details",
                title: "Product Details Page",
                description: "Shows detailed product information with stock validation and quantity selection.",
                image: "/Projects/urbanmart/product.PNG",
                feature: "Product Information & Stock Logic"
            },
            {
                id: "cart",
                title: "Cart & Wishlist",
                description: "Users can manage cart items, update quantities, and move items to wishlist.",
                image: "/Projects/urbanmart/cart.PNG",
                feature: "Cart Management"
            },
            {
                id: "checkout",
                title: "Checkout Flow",
                description: "Structured checkout system with order summary and validation before order creation.",
                image: "/Projects/urbanmart/checkout.png",
                feature: "Order Processing"
            },
            {
                id: "payment",
                title: "Secure Payment Integration (Razorpay)",
                description: "Integrated Razorpay checkout for secure online payments with backend verification and order status updates.",
                image: "/Projects/urbanmart/payment.PNG",
                feature: "Payment Processing & Order Lifecycle"
            },
            {
                id: "profile",
                title: "User Profile Dashboard",
                description: "Displays user account details, personal information, and quick access to order history and account settings.",
                image: "/Projects/urbanmart/profile.png",
                feature: "User Account Management"
            },
            {
                id: "order-history",
                title: "Order History",
                description: "Shows a list of all previous orders with status indicators (CREATED, PAID, FAILED, EXPIRED) and summary details.",
                image: "/Projects/urbanmart/orderHistory.PNG",
                feature: "Order Tracking & Status Overview"
            },
            {
                id: "order-details",
                title: "Order Details View",
                description: "Detailed breakdown of a selected order including products, quantity, pricing, payment status, and timestamps.",
                image: "/Projects/urbanmart/orderDetails.png",
                feature: "Order Lifecycle & Transaction Insights"
            }
        ],

        role: 'Full Stack Developer',

        roleDescription:
            'Built UrbanMart as a full-stack project focusing heavily on backend architecture, database schema design, and business logic implementation. Designed relational models using Prisma, implemented authentication and role-based access, and developed both customer and admin interfaces.',

        responsibilities: [
            'Designed relational database schema using Prisma & PostgreSQL',
            'Developed RESTful APIs for products, cart, and orders',
            'Implemented order lifecycle state management',
            'Built responsive UI using React and Tailwind CSS',
            'Implemented authentication and protected routes',
            'Optimized queries using server-side pagination and filtering',
            'Tested edge cases like stock mismatch and failed orders',
        ],

        technologies: [
            'React',
            'Tailwind CSS',
            'Node.js',
            'Express.js',
            'Prisma ORM',
            'PostgreSQL',
            'JWT Authentication'
        ],

        links: {
            live: 'https://urbanmart-dev.web.app/',
            github: 'http://github.com/akrathor18/urbanmart',
        },

        stats: {
            duration: '2 weeks (~120+ focused development hours)',
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

        whyBuilt: "I built InventLab during a hackathon to understand how real-world inventory systems work under time constraints. The goal was to design a practical solution for tracking stock movements while collaborating effectively as a team.",
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
        screenshots: [
            {
                id: "dashboard",
                title: "Inventory Dashboard",
                description: "Provides a real-time overview of stock levels, products, categories, low-stock alerts, and recent inventory activity.",
                image: "/Projects/inventlabs/dashboard.PNG",
                feature: "Inventory Analytics"
            },
            {
                id: "inventory",
                title: "Inventory Management",
                description: "Manage products with stock levels, categories, thresholds, and real-time status indicators.",
                image: "/Projects/inventlabs/inventory.PNG",
                feature: "Product & Stock Management"
            },
            {
                id: "add-product",
                title: "Add New Product",
                description: "Form to add new products with SKU, barcode, category, stock quantity, threshold alerts, and expiry date support.",
                image: "/Projects/inventlabs/addproducts.png",
                feature: "Product Creation"
            },
            {
                id: "categories",
                title: "Category Management",
                description: "Create and manage product categories to organize inventory efficiently.",
                image: "/Projects/inventlabs/category.PNG",
                feature: "Category Organization"
            },
            {
                id: "inventory-logs",
                title: "Inventory Logs",
                description: "Tracks all inventory movements such as stock additions, removals, and updates with user and timestamp details.",
                image: "/Projects/inventlabs/inventorylogs.png",
                feature: "Audit & Tracking"
            },
            {
                id: "reports",
                title: "Reports & Analytics",
                description: "Visual analytics including stock distribution, deficit analysis, and product-wise inventory reports.",
                image: "/Projects/inventlabs/reports.png",
                feature: "Reporting & Insights"
            }
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
        whyBuilt: "I built ShopHub to practice designing realistic e-commerce UI flows and managing complex frontend state. The project helped me understand how real shopping experiences are structured on modern platforms.",
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
        screenshots: [
            {
                id: "home",
                title: "Home Page",
                description: "Landing page showcasing featured products, key benefits like free shipping and secure payments, and a clear call-to-action.",
                image: "/Projects/shophub/home.PNG",
                feature: "Product Discovery"
            },
            {
                id: "products",
                title: "Product Listing",
                description: "Browse all products with category filters, price range selection, sorting options, and wishlist support.",
                image: "/Projects/shophub/products.PNG",
                feature: "Product Browsing & Filtering"
            },
            {
                id: "categories",
                title: "Product Categories",
                description: "Explore products by category such as Audio, Wearables, and Accessories for easier navigation.",
                image: "/Projects/shophub/categories.PNG",
                feature: "Category-Based Navigation"
            },
            {
                id: "cart",
                title: "Shopping Cart",
                description: "View selected products, adjust quantities, remove items, and see real-time price calculations.",
                image: "/Projects/shophub/cart.PNG",
                feature: "Cart Management"
            },
            {
                id: "checkout",
                title: "Checkout Page",
                description: "Secure checkout flow with shipping details, GST calculation, order summary, and payment confirmation.",
                image: "/Projects/shophub/checkout.PNG",
                feature: "Order Processing"
            },
            {
                id: "profile",
                title: "User Profile",
                description: "Manage personal information, address details, and account settings from a centralized profile page.",
                image: "/Projects/shophub/profile.PNG",
                feature: "User Account Management"
            },
            {
                id: "contact",
                title: "Contact & Support",
                description: "Contact page with business details and a support form for customer inquiries.",
                image: "/Projects/shophub/contact.PNG",
                feature: "Customer Support"
            }
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