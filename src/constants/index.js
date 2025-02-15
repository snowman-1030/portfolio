import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  crmnext,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,

  beeclone,carrent,herobg,ig,jobit,linktree,movie,notable,portfolio15,portfolio16,portfolio17,shop,smartrep,tiktok,tripguide,youtube,zapflow
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  projects: "projects",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.projects,
    title: "Projects",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Desktop App Developer",
    icon: backend,
  },
  {
    title: "Fullstack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Senior Software Developer",
    company_name: "Self Employed",
    company_website: "",
    icon: crmnext,
    iconBg: "#E6DEDD",
    date: "06/2024 - Present",
    points: [
      "Developed MoonCoin, a Telegram mini-app game using React, Node.js, and MongoDB, driving high user engagement.",
      "Designed and implemented backend logic to support seamless real-time interactions and optimized gameplay.",
      "Enhanced database performance with MongoDB, ensuring fast data retrieval and scalability for high user volume.",
      "Delivered a robust and interactive gaming experience for Telegram users, through intuitive UI design and seamless integration."
    ],
  },
  {
    title: "Senior Software Developer",
    company_name: "Best IT & Hire Remote Developer Solutions (Full-time, Hybrid)",
    company_website: "",
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "01/2022 - 03/2024",
    points: [
      "Developed and optimized eCommerce platforms using React and Next.js for the frontend, and Node.js for backend services.",
      "Implemented scalable and responsive user interfaces with React and Next.js, enhancing user experience and performance.",
      "Engineered robust backend solutions with Node.js, integrating with various APIs and databases.",
      "Collaborated with cross-functional teams to deliver high-quality, on-time project solutions."
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "ISBX (Full-time, Remote)",
    company_website: "https://newgensoft.com/home-india/",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "01/2019 - 06/2020",
    points: [
      "Led the development of an education project using the MERN stack, resulting in a 50% increase in user engagement.",
      "Architected scalable back-end services and RESTful APIs, improving data processing speed by 40%.",
      "Implemented interactive front-end features using React, enhancing user experience and retention.",
      "Conducted code reviews and mentoring sessions, fostering team growth and maintaining high-quality standards.",
      "Employed Agile methodologies to streamline development processes, reducing project delivery time by 20%."
    ],
  },
  {
    title: "Software Developer",
    company_name: "Upwork (Freelance)",
    company_website: "",
    icon: skillrisers,
    iconBg: "#E6DEDD",
    date: "05/2016 - 12/2018",
    points: [
      "Built end-to-end blockchain and AI applications for clients using JavaScript, React, Node.js, Python, SQL, and relevant frameworks.",
      "Leveraged AI tools like TensorFlow and PyTorch for machine learning and natural language processing (NLP) tasks, improving app intelligence.",
      "Collaborated with clients to define requirements, set project milestones, and ensure the on-time delivery of high-quality solutions.",
      "Tested and debugged full-stack applications, optimizing both frontend and backend performance for reliability and scalability.",
      "Integrated blockchain and AI features into existing systems, driving an improved and more engaging user experience.",
      "Fostered strong client relationships, resulting in repeat business, client referrals, and consistently high ratings."
    ],
  },
  {
    title: "Software Developer",
    company_name: "BlastAsia (Full-time, On-site)",
    company_website: "",
    icon: proximus,
    iconBg: "#E6DEDD",
    date: "12/2014 - 04/2016",
    points: [
      "Spearheaded development of a Hotel Service app using Angular and Laravel, resulting in a 40% increase in user satisfaction.",
      "Designed and integrated RESTful APIs, enhancing data retrieval efficiency by 30%.",
      "Optimized user experience with a responsive design, leading to a 25% increase in mobile engagement.",
      "Conducted comprehensive unit and integration testing, achieving a 95% pass rate and reducing bugs by 20%.",
      "Collaborated within Agile teams, contributing to a 15% improvement in project delivery timelines."
    ],
  },
];
// beeclone,carrent,herobg,ig,jobit,linktree,movie,notable,portfolio15,portfolio16,portfolio17,shop,smartrep,tiktok,tripguide,youtube,zapflow
const projects = [
  {
    name: "SmartRep AI",
    description:
      "SmartRep AI is an advanced AI chatbot designed to streamline customer interactions, book appointments, process payments, and manage leads. It seamlessly integrates with any website, offering a customizable interface and a suite of powerful features to enhance user experience and business operations.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Neon",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: smartrep,
    source_code_link: "https://github.com/jeffjiang13/smartrep-ai",
    liveUrl: "https://jj-smartrep.vercel.app/",
  },{
    name: "Notable",
    description:
      "Experience unparalleled team collaboration with Notable, a cutting-edge SaaS platform designed to enhance productivity dynamically. Built with Next.js 13 and adorned with the latest technologies like Stripe for secure payments, Drizzle ORM for efficient data management, Tailwind CSS for intuitive styling, Supabase for a scalable backend, and WebSockets for real-time interactions, Notable offers a modern workspace for teams and individuals to thrive in real time.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: notable,
    source_code_link: "https://github.com/jeffjiang13/notable",
    liveUrl: "https://jj-notable.up.railway.app/",
  },{
    name: "ZapFlow",
    description:
      "ZapFlow is a SaaS Automation Builder, a powerful and versatile platform designed to automate and streamline your business processes. Built from the ground up without relying on integration libraries, this builder offers a seamless and customizable experience for creating automation flows. Whether you are a small business or a large enterprise, our builder has the features you need to connect various services and automate your workflows efficiently.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Neon",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: zapflow,
    source_code_link: "https://github.com/jeffjiang13/saas-automation",
    liveUrl: "https://jj-zapflow.vercel.app/",
  },
  {
    name: "Beeclone",
    description:
      "This project is a fullstack clone of Linktree built with Next.js, Tailwind CSS, and MongoDB. It allows users to create a personalized page with links to their content across the internet, customize their profile, and view analytics on their links.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: beeclone,
    source_code_link: "https://github.com/jeffjiang13/saas-newsletter",
    liveUrl: "https://jj-newsletter.vercel.app/",
  },
  {
    name: "Aptihealth Web",
    description:
      "Revolutionizing mental healthcare in New York State with a user-friendly platform for personalized therapy and progress tracking. Provides the digital gateway to comprehensive behavioral healthcare.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthWeb,
    hosted_link: "https://www.aptihealth.com/",
  },{
    name: "LinkTri",
    description:
      "This project is a fullstack clone of Linktree built with Next.js, Tailwind CSS, and MongoDB. It allows users to create a personalized page with links to their content across the internet, customize their profile, and view analytics on their links.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: linktree,
    source_code_link: "https://github.com/jeffjiang13/LinkTree",
    liveUrl: "https://jj-linktri.vercel.app/",
  },
  {
    name: "Instagram Clone,",
    description:
      "The IG App 2024 is a comprehensive clone of the Instagram platform, designed to replicate the core functionalities and visual appeal of the original app with added enhancements. Developed using modern web technologies such as Vite, React.js, and Tailwind CSS, this project emphasizes a responsive and eye-catching user interface, ensuring optimal performance and user experience across various devices, specifically optimized for screens with a minimum width of 375px.",
    tags: [
      {
        name: "Vite.js",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ig,
    source_code_link: "https://github.com/jeffjiang13/IG-2.0",
    liveUrl: "https://quicktele.netlify.app/",
  },{
    name: "TikTok Clone",
    description:
      "Explore the modern web with our TikTok Clone Application! This project encompasses a full suite of features including Google Authentication, video uploads, publishing, sharing, commenting, liking, category filtering, advanced search functionalities, profile pages, suggested accounts, and a custom responsive design.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Sanity",
        color: "pink-text-gradient",
      },
    ],
    image: tiktok,
    source_code_link: "https://github.com/jeffjiang13/tiktok",
    liveUrl: "https://jj-tiktok.vercel.app/",
  },
  {
    name: "TailorTech",
    description:
      "This comprehensive SaaS platform leverages the latest technologies including Next.js 14, Bun, Stripe Connect, Prisma, MySQL, and Tailwind to offer a robust solution for building websites, managing projects, and handling financial transactions seamlessly. Designed for agencies, freelancers, and businesses, our platform simplifies the digital landscape through an intuitive interface and powerful features.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Bun",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio17,
    source_code_link: "https://github.com/jeffjiang13/tailortech",
    liveUrl: "https://jj-tailortech.vercel.app/",
  },
  {
    name: "ChiqueChickShop",
    description:
      "Engineered the ChiqueChickShop, a fully responsive e-commerce platform, from the ground up. This project entailed designing an inviting online shopping experience complete with intuitive navigation and streamlined user flows. Focused on integrating secure payment processing systems to ensure transactional safety. Implemented best practices in web development to enhance site responsiveness across all devices. Due to client confidentiality, project specifics and GitHub source are kept private.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio16,
    source_code_link: "https://github.com/jeffjiang13",
    liveUrl: "https://chiquechickshop.com/",
  },{
    name: "Madamcoon Maine Coon Cattery NYC",
    description:
      "Led the comprehensive development of the Madamcoon website, from concept to launch, focusing on crafting a responsive design that adapts seamlessly across devices. Enhanced user interaction and experience by implementing a user-friendly interface and streamlined navigation. Integrated robust content management systems for easy content updates and management. Employed advanced SEO strategies to maximize online visibility and search rankings. Project details are confidential with GitHub source kept private for client security.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio15,
    source_code_link: "https://github.com/jeffjiang13",
    liveUrl: "https://madamcoon.com/",
  },
  {
    name: "Movie App",
    description:
      "This app is an online database of information related to movies. Users can search for movies and learn about movies, as well as the cast of the movie. Navigating through the application is made simple with help of a AI voice chatbot. Also provides ratings of movies. Tech stack: JavaScript tools including React.js, Redux, Material UI, Alan AI, and more.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/jeffjiang13/movie-app",
    liveUrl: "https://jj-movie-app.netlify.app/",
  },{
    name: "Ecommerce App",
    description:
      "Fully responsive, full-stack e-commerce application with payments. It includes advanced React and Next.js best practices, and integrates Stripe for payment processing.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
      {
        name: "Sanity",
        color: "pink-text-gradient",
      },
    ],
    image: shop,
    source_code_link: "https://github.com/jeffjiang13/ecommerce_sanity",
    liveUrl: "https://jj-ecomstore.vercel.app/",
  },
  {
    name: "YouTube Clone",
    description:
      "A responsive React JS application consisting of stunning video sections, custom categories, channel pages, and, most importantly, you can play videos straight from this app!",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "RAPIDAPI",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/jeffjiang13/youtube-clone",
    liveUrl: "https://jj-youtube-clone.netlify.app/",
  },
  {
    name: "Aptihealth App",
    description:
      "Access top-notch mental healthcare anytime, anywhere in New York State with our innovative app. Track your progress, schedule appointments, and connect with expert therapists for personalized care.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sendbird",
        color: "green-text-gradient",
      },
      {
        name: "twilio",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthApp,
    hosted_link: "https://apps.apple.com/us/app/aptihealth/id1477170874",
  },
  {
    name: "Zeal Web",
    description:
      "The Zeal website elevates the experience of enjoying activities with trusted friends, fostering connections and making every interaction exciting.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "https://getzeal.co/",
  },
  {
    name: "Zeal App",
    description:
      "Discover a world of activities with friends through Zeal, an engaging platform. Create events, post updates, chat, and enjoy in-person activities hassle-free. Boost your social life with Zeal!",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sendgrid",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: zealApp,
    hosted_link:
      "https://apps.apple.com/us/app/zeal-activities-with-friends/id6446917140",
  },
  {
    name: "Roll Web",
    description:
      "The Roll website is the gateway to the future of decentralized communities and digital assets. It allows users to seamlessly earn, redeem, send, and trade social tokens.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "formik",
        color: "pink-text-gradient",
      },
    ],
    image: rollWeb,
    hosted_link: "https://app.tryroll.com/",
  },
  {
    name: "Roll App",
    description:
      "Join the future of decentralized communities and digital assets with Roll. Earn, redeem, send, and trade social tokens on this innovative platform. Experience transparent transactions and captivating UI design.",
    tags: [
      {
        name: "react-native-web",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "storybook",
        color: "pink-text-gradient",
      },
    ],
    image: rollApp,
    hosted_link:
      "https://play.google.com/store/apps/details?id=com.roll&hl=en_GB",
  }
];

const personalInfo = {
  name: "Marvin",
  fullName: "Marvin Santos",
  email: "crimsonaurax@outlook.com",
  role: "Software Developer",
  about: `Experienced Senior Software Developer with expertise in full-stack development and AI technologies. Skilled in React, Node.js, MongoDB, and
Python, with a strong focus on machine learning using TensorFlow and PyTorch. Proven ability to lead teams, optimize software performance, and
deliver scalable, secure solutions. Committed to continuous innovation and staying ahead of industry trends.`,
};

const publicUrls = {
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/marvin-santos-289a04350",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/snowman-1030",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
