import React, { useState, useEffect } from 'react';
import { FaReact, FaNode, FaPython, FaJs, FaGit, FaGithub, FaDatabase, FaFire, FaSync } from 'react-icons/fa';
import { 
  SiDjango, SiExpress, SiNextdotjs, SiNestjs, SiTypescript, SiRedux, 
  SiTailwindcss, SiRedis, SiDocker, SiPrometheus, SiGrafana, 
  SiTensorflow, SiPrisma, SiBun, SiCplusplus, SiZod 
} from 'react-icons/si';

const SkillsWindow = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState({
    youtube: 0,
    courses: 0,
    documentation: 0
  });

  // Reset slides when skill changes
  useEffect(() => {
    if (selectedSkill) {
      setCurrentSlide({ youtube: 0, courses: 0, documentation: 0 });
    }
  }, [selectedSkill]);

  const skills = [
    { 
      name: "React Js", 
      icon: <FaReact className="text-4xl text-blue-500" />,
      description: "A JavaScript library for building user interfaces. React makes it painless to create interactive UIs by using a component-based approach.",
      github: "https://github.com/topics/react",
      learningResources: {
        youtube: [
          { name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/user/programmingwithmosh" },
          { name: "Academind", url: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w" },
          { name: "Ben Awad", url: "https://www.youtube.com/user/99baddawg" },
          { name: "Jack Herrington", url: "https://www.youtube.com/user/jherr2006" }
        ],
        courses: [
          { name: "React - The Complete Guide", url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/" },
          { name: "Modern React with Redux", url: "https://www.udemy.com/course/react-redux/" },
          { name: "Advanced React and Redux", url: "https://www.udemy.com/course/react-redux-tutorial/" },
          { name: "React Front to Back", url: "https://www.udemy.com/course/modern-react-front-to-back/" },
          { name: "Complete React Developer", url: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/" }
        ],
        documentation: [
          { name: "Official React Docs", url: "https://reactjs.org/docs/getting-started.html" },
          { name: "React Beta Docs", url: "https://beta.reactjs.org/" },
          { name: "React Patterns", url: "https://reactpatterns.com/" },
          { name: "React Cheat Sheet", url: "https://devhints.io/react" },
          { name: "React Hooks", url: "https://usehooks.com/" }
        ]
      }
    },
    { 
      name: "Node Js", 
      icon: <FaNode className="text-4xl text-green-600" />,
      description: "A JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js allows you to run JavaScript on the server.",
      github: "https://github.com/topics/nodejs",
      learningResources: {
        youtube: [
          { name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/user/programmingwithmosh" },
          { name: "The Net Ninja", url: "https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" },
          { name: "Academind", url: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w" },
          { name: "Coder Coder", url: "https://www.youtube.com/c/TheCoderCoder" }
        ],
        courses: [
          { name: "Node.js - The Complete Guide", url: "https://www.udemy.com/course/nodejs-the-complete-guide/" },
          { name: "The Complete Node.js Developer", url: "https://www.udemy.com/course/the-complete-nodejs-developer-course-2/" },
          { name: "Node JS: Advanced Concepts", url: "https://www.udemy.com/course/advanced-node-for-developers/" },
          { name: "Node.js, Express, MongoDB", url: "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/" },
          { name: "Build RESTful APIs", url: "https://www.udemy.com/course/build-restful-apis-with-node-and-express/" }
        ],
        documentation: [
          { name: "Official Node.js Docs", url: "https://nodejs.org/en/docs/" },
          { name: "Node.js Best Practices", url: "https://github.com/goldbergyoni/nodebestpractices" },
          { name: "Node.js API Docs", url: "https://nodejs.org/api/" },
          { name: "Express.js Docs", url: "https://expressjs.com/" },
          { name: "Node.js Security", url: "https://nodesecroadmap.fyi/" }
        ]
      }
    },
    { 
      name: "Django", 
      icon: <SiDjango className="text-4xl text-green-800" />,
      description: "A high-level Python web framework that encourages rapid development and clean, pragmatic design.",
      github: "https://github.com/topics/django",
      learningResources: {
        youtube: [
          { name: "Corey Schafer", url: "https://www.youtube.com/user/schafer5" },
          { name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/user/programmingwithmosh" },
          { name: "Sentdex", url: "https://www.youtube.com/user/sentdex" },
          { name: "CodingEntrepreneurs", url: "https://www.youtube.com/user/CodingEntrepreneurs" }
        ],
        courses: [
          { name: "Python and Django Full Stack", url: "https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/" },
          { name: "Django 3 - Full Stack", url: "https://www.udemy.com/course/django-3-make-websites-with-python-tutorial-beginners-tutorial/" },
          { name: "Django for Beginners", url: "https://www.udemy.com/course/django-for-beginners-course/" },
          { name: "Django with React", url: "https://www.udemy.com/course/django-with-react/" },
          { name: "Django REST Framework", url: "https://www.udemy.com/course/django-python-advanced/" }
        ],
        documentation: [
          { name: "Official Django Docs", url: "https://docs.djangoproject.com/en/" },
          { name: "Django REST Framework", url: "https://www.django-rest-framework.org/" },
          { name: "Django Girls Tutorial", url: "https://tutorial.djangogirls.org/en/" },
          { name: "Django Best Practices", url: "https://django-best-practices.readthedocs.io/en/latest/" },
          { name: "Django Cheatsheet", url: "https://www.djangoproject.com/start/overview/" }
        ]
      }
    },
    { 
      name: "Express Js", 
      icon: <SiExpress className="text-4xl text-black" />,
      description: "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
      github: "https://github.com/topics/express",
      learningResources: {
        youtube: [
          { name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/user/programmingwithmosh" },
          { name: "The Net Ninja", url: "https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" },
          { name: "Academind", url: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w" },
          { name: "Coder Coder", url: "https://www.youtube.com/c/TheCoderCoder" }
        ],
        courses: [
          { name: "Express.js Fundamentals", url: "https://www.udemy.com/course/expressjs-from-beginner-to-advanced/" },
          { name: "Node.js, Express, MongoDB", url: "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/" },
          { name: "REST APIs with Express", url: "https://www.udemy.com/course/rest-api-with-express/" },
          { name: "Express.js Crash Course", url: "https://www.udemy.com/course/express-js-crash-course/" },
          { name: "Building RESTful APIs", url: "https://www.udemy.com/course/building-restful-apis-with-express-and-mongodb/" }
        ],
        documentation: [
          { name: "Official Express Docs", url: "https://expressjs.com/" },
          { name: "Express API Reference", url: "https://expressjs.com/en/4x/api.html" },
          { name: "Express Routing", url: "https://expressjs.com/en/guide/routing.html" },
          { name: "Express Middleware", url: "https://expressjs.com/en/guide/using-middleware.html" },
          { name: "Express Best Practices", url: "https://expressjs.com/en/advanced/best-practice-performance.html" }
        ]
      }
    },
    { 
      name: "Next Js", 
      icon: <SiNextdotjs className="text-4xl text-black" />,
      description: "A React-based framework that enables functionality such as server-side rendering and generating static websites for React based web applications.",
      github: "https://github.com/topics/nextjs",
      learningResources: {
        youtube: [
          { name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/user/programmingwithmosh" },
          { name: "The Net Ninja", url: "https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" },
          { name: "Sonny Sangha", url: "https://www.youtube.com/user/ssangha32" },
          { name: "Lee Robinson", url: "https://www.youtube.com/user/MaStaleee" }
        ],
        courses: [
          { name: "Next.js & React", url: "https://www.udemy.com/course/next-js-react-hooks-fundamentals/" },
          { name: "Complete Next.js Developer", url: "https://www.udemy.com/course/the-complete-next-js-developer-course/" },
          { name: "Next.js Masterclass", url: "https://www.udemy.com/course/nextjs-react-the-complete-guide/" },
          { name: "Server Side Rendering", url: "https://www.udemy.com/course/server-side-rendering-with-nextjs/" },
          { name: "Next.js & TypeScript", url: "https://www.udemy.com/course/nextjs-typescript/" }
        ],
        documentation: [
          { name: "Official Next.js Docs", url: "https://nextjs.org/docs" },
          { name: "Next.js Learn", url: "https://nextjs.org/learn" },
          { name: "Next.js Examples", url: "https://github.com/vercel/next.js/tree/canary/examples" },
          { name: "Next.js Blog", url: "https://nextjs.org/blog" },
          { name: "Next.js GitHub", url: "https://github.com/vercel/next.js" }
        ]
      }
    },
    { 
      name: "Nest Js", 
      icon: <SiNestjs className="text-4xl text-red-600" />,
      description: "A progressive Node.js framework for building efficient, reliable and scalable server-side applications.",
      github: "https://github.com/topics/nestjs",
      learningResources: {
        youtube: [
          { name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/user/programmingwithmosh" },
          { name: "Academind", url: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w" },
          { name: "Ben Awad", url: "https://www.youtube.com/user/99baddawg" },
          { name: "Code with Antonio", url: "https://www.youtube.com/c/AntonioErdeljac" }
        ],
        courses: [
          { name: "NestJS Zero to Hero", url: "https://www.udemy.com/course/nestjs-zero-to-hero/" },
          { name: "Master NestJS", url: "https://www.udemy.com/course/master-nestjs-the-javascript-nodejs-framework/" },
          { name: "NestJS Crash Course", url: "https://www.udemy.com/course/nestjs-crash-course/" },
          { name: "NestJS Microservices", url: "https://www.udemy.com/course/nestjs-microservices/" },
          { name: "NestJS Authentication", url: "https://www.udemy.com/course/nestjs-authentication/" }
        ],
        documentation: [
          { name: "Official NestJS Docs", url: "https://docs.nestjs.com/" },
          { name: "NestJS GitHub", url: "https://github.com/nestjs/nest" },
          { name: "NestJS Samples", url: "https://github.com/nestjs/nest/tree/master/sample" },
          { name: "NestJS CLI", url: "https://docs.nestjs.com/cli/overview" },
          { name: "NestJS Recipes", url: "https://docs.nestjs.com/recipes" }
        ]
      }
    },
    { 
      name: "Javascript", 
      icon: <FaJs className="text-4xl text-yellow-500" />,
      description: "A programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.",
      github: "https://github.com/topics/javascript",
      learningResources: {
        youtube: [
          { name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/user/programmingwithmosh" },
          { name: "The Net Ninja", url: "https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" },
          { name: "Academind", url: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w" },
          { name: "Kevin Powell", url: "https://www.youtube.com/user/KepowOb" }
        ],
        courses: [
          { name: "The Complete JavaScript Course", url: "https://www.udemy.com/course/the-complete-javascript-course/" },
          { name: "JavaScript - The Complete Guide", url: "https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/" },
          { name: "Modern JavaScript", url: "https://www.udemy.com/course/modern-javascript-from-novice-to-expert/" },
          { name: "JavaScript Essentials", url: "https://www.udemy.com/course/javascript-essentials/" },
          { name: "JavaScript for Beginners", url: "https://www.udemy.com/course/javascript-for-beginners-intro-lecture/" }
        ],
        documentation: [
          { name: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
          { name: "JavaScript.info", url: "https://javascript.info/" },
          { name: "Eloquent JavaScript", url: "https://eloquentjavascript.net/" },
          { name: "JavaScript Cheat Sheet", url: "https://htmlcheatsheet.com/js/" },
          { name: "ES6 Features", url: "https://github.com/lukehoban/es6features" }
        ]
      }
    },
    { 
      name: "C++", 
      icon: <SiCplusplus className="text-4xl text-blue-700" />,
      description: "A general-purpose programming language created as an extension of the C programming language, or 'C with Classes'.",
      github: "https://github.com/topics/cpp",
      learningResources: {
        youtube: [
          { name: "The Cherno", url: "https://www.youtube.com/user/TheChernoProject" },
          { name: "Derek Banas", url: "https://www.youtube.com/user/derekbanas" },
          { name: "FreeCodeCamp", url: "https://www.youtube.com/user/FreeCodeCamp" },
          { name: "CodeBeauty", url: "https://www.youtube.com/c/CodeBeauty" },
          { name: "Bo Qian", url: "https://www.youtube.com/user/BoQianTheProgrammer" }
        ],
        courses: [
          { name: "Beginning C++ Programming", url: "https://www.udemy.com/course/beginning-c-plus-plus-programming/" },
          { name: "C++ for Programmers", url: "https://www.coursera.org/learn/c-plus-plus-a" },
          { name: "C++ Masterclass", url: "https://www.udemy.com/course/cpp-masterclass/" },
          { name: "Modern C++", url: "https://www.udemy.com/course/beg-modern-cpp/" },
          { name: "C++ Advanced Topics", url: "https://www.udemy.com/course/advanced-c-programming/" }
        ],
        documentation: [
          { name: "C++ Reference", url: "https://en.cppreference.com/w/" },
          { name: "Learn C++", url: "https://www.learncpp.com/" },
          { name: "C++ Standard", url: "https://isocpp.org/std/the-standard" },
          { name: "C++ Core Guidelines", url: "https://github.com/isocpp/CppCoreGuidelines" },
          { name: "C++ STL", url: "https://en.cppreference.com/w/cpp/container" }
        ]
      }
    },
    { 
      name: "TypeScript", 
      icon: <SiTypescript className="text-4xl text-blue-600" />,
      description: "A programming language developed by Microsoft that adds static typing to JavaScript. It is designed for the development of large applications.",
      github: "https://github.com/topics/typescript",
      learningResources: {
        youtube: [
          { name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/user/programmingwithmosh" },
          { name: "The Net Ninja", url: "https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" },
          { name: "Academind", url: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w" },
          { name: "Ben Awad", url: "https://www.youtube.com/user/99baddawg" }
        ],
        courses: [
          { name: "Understanding TypeScript", url: "https://www.udemy.com/course/understanding-typescript/" },
          { name: "TypeScript Bootcamp", url: "https://www.udemy.com/course/typescript-bootcamp/" },
          { name: "TypeScript Masterclass", url: "https://www.udemy.com/course/typescript-masterclass/" },
          { name: "TypeScript for Professionals", url: "https://www.udemy.com/course/typescript-for-professionals/" },
          { name: "Advanced TypeScript", url: "https://www.udemy.com/course/advanced-typescript/" }
        ],
        documentation: [
          { name: "TypeScript Official Docs", url: "https://www.typescriptlang.org/docs/" },
          { name: "TypeScript Playground", url: "https://www.typescriptlang.org/play" },
          { name: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/intro.html" },
          { name: "TypeScript Deep Dive", url: "https://basarat.gitbook.io/typescript/" },
          { name: "TypeScript Cheatsheet", url: "https://github.com/typescript-cheatsheets/react" }
        ]
      }
    },
    { 
      name: "Python", 
      icon: <FaPython className="text-4xl text-blue-400" />,
      description: "An interpreted high-level general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation.",
      github: "https://github.com/topics/python",
      learningResources: {
        youtube: [
          { name: "Corey Schafer", url: "https://www.youtube.com/user/schafer5" },
          { name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/user/programmingwithmosh" },
          { name: "Sentdex", url: "https://www.youtube.com/user/sentdex" },
          { name: "Tech With Tim", url: "https://www.youtube.com/user/TechWithTim" }
        ],
        courses: [
          { name: "Complete Python Bootcamp", url: "https://www.udemy.com/course/complete-python-bootcamp/" },
          { name: "Python for Everybody", url: "https://www.coursera.org/specializations/python" },
          { name: "Python Masterclass", url: "https://www.udemy.com/course/python-masterclass-for-beginners/" },
          { name: "Automate with Python", url: "https://www.udemy.com/course/automate/" },
          { name: "Python for Data Science", url: "https://www.coursera.org/learn/python-data-analysis" }
        ],
        documentation: [
          { name: "Python Official Docs", url: "https://docs.python.org/3/" },
          { name: "Python Tutorial", url: "https://docs.python.org/3/tutorial/index.html" },
          { name: "Python Library", url: "https://docs.python.org/3/library/index.html" },
          { name: "Python PEPs", url: "https://www.python.org/dev/peps/" },
          { name: "Python Style Guide", url: "https://pep8.org/" }
        ]
      }
    },
    { 
      name: "Redux", 
      icon: <SiRedux className="text-4xl text-purple-600" />,
      description: "A predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments, and are easy to test.",
      github: "https://github.com/topics/redux",
      learningResources: {
        youtube: [
          { name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/user/programmingwithmosh" },
          { name: "The Net Ninja", url: "https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" },
          { name: "Academind", url: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w" },
          { name: "Ben Awad", url: "https://www.youtube.com/user/99baddawg" }
        ],
        courses: [
          { name: "Redux Masterclass", url: "https://www.udemy.com/course/react-redux/" },
          { name: "Modern React with Redux", url: "https://www.udemy.com/course/react-redux/" },
          { name: "Redux Toolkit", url: "https://www.udemy.com/course/redux-toolkit/" },
          { name: "Advanced Redux", url: "https://www.udemy.com/course/react-redux-tutorial/" },
          { name: "Redux Saga", url: "https://www.udemy.com/course/react-redux-saga/" }
        ],
        documentation: [
          { name: "Redux Official Docs", url: "https://redux.js.org/" },
          { name: "Redux Toolkit", url: "https://redux-toolkit.js.org/" },
          { name: "Redux Style Guide", url: "https://redux.js.org/style-guide/style-guide" },
          { name: "Redux FAQ", url: "https://redux.js.org/faq" },
          { name: "Redux Examples", url: "https://github.com/reduxjs/redux/tree/master/examples" }
        ]
      }
    },
    { 
      name: "Tailwind", 
      icon: <SiTailwindcss className="text-4xl text-teal-500" />,
      description: "A utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework.",
      github: "https://github.com/topics/tailwindcss",
      learningResources: {
        youtube: [
          { name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/user/programmingwithmosh" },
          { name: "The Net Ninja", url: "https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" },
          { name: "Academind", url: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w" },
          { name: "Web Dev Simplified", url: "https://www.youtube.com/user/WebDevSimplified" }
        ],
        courses: [
          { name: "Tailwind CSS From Scratch", url: "https://www.udemy.com/course/tailwind-css-from-scratch-learn-by-building-projects/" },
          { name: "Master Tailwind CSS", url: "https://www.udemy.com/course/mastering-tailwind-css/" },
          { name: "Tailwind CSS Crash Course", url: "https://www.udemy.com/course/tailwind-css-crash-course/" },
          { name: "Tailwind UI", url: "https://www.udemy.com/course/tailwind-ui/" },
          { name: "Advanced Tailwind CSS", url: "https://www.udemy.com/course/advanced-tailwind-css/" }
        ],
        documentation: [
          { name: "Tailwind CSS Docs", url: "https://tailwindcss.com/docs" },
          { name: "Tailwind UI", url: "https://tailwindui.com/" },
          { name: "Tailwind Play", url: "https://play.tailwindcss.com/" },
          { name: "Tailwind Components", url: "https://tailwindcomponents.com/" },
          { name: "Tailwind Cheat Sheet", url: "https://nerdcave.com/tailwind-cheat-sheet" }
        ]
      }
    },
    { 
      name: "Redis", 
      icon: <SiRedis className="text-4xl text-red-500" />,
      description: "An in-memory data structure store, used as a database, cache, and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes, and streams.",
      github: "https://github.com/topics/redis",
      learningResources: {
        youtube: [
          { name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/user/programmingwithmosh" },
          { name: "Tech With Tim", url: "https://www.youtube.com/user/TechWithTim" },
          { name: "GOTO Conferences", url: "https://www.youtube.com/user/GotoConferences" },
          { name: "Redis Labs", url: "https://www.youtube.com/user/RedisLabs" }
        ],
        courses: [
          { name: "Redis Masterclass", url: "https://www.udemy.com/course/redis-masterclass/" },
          { name: "Redis with Node.js", url: "https://www.udemy.com/course/redis-with-nodejs/" },
          { name: "Redis for Beginners", url: "https://www.udemy.com/course/redis-for-beginners/" },
          { name: "Redis Cluster", url: "https://www.udemy.com/course/redis-cluster/" },
          { name: "Redis Performance", url: "https://www.udemy.com/course/redis-performance/" }
        ],
        documentation: [
          { name: "Redis Official Docs", url: "https://redis.io/documentation" },
          { name: "Redis Commands", url: "https://redis.io/commands" },
          { name: "Redis Clients", url: "https://redis.io/clients" },
          { name: "Redis Modules", url: "https://redis.io/modules" },
          { name: "Redis Benchmarks", url: "https://redis.io/topics/benchmarks" }
        ]
      }
    },
    { 
      name: "Bun", 
      icon: <SiBun className="text-4xl text-yellow-400" />,
      description: "A JavaScript runtime, package manager, test runner, and bundler built from scratch using the Zig programming language.",
      github: "https://github.com/topics/bun",
      learningResources: {
        youtube: [
          { name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/user/programmingwithmosh" },
          { name: "The Net Ninja", url: "https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" },
          { name: "Jack Herrington", url: "https://www.youtube.com/user/jherr2006" },
          { name: "ByteByteGo", url: "https://www.youtube.com/c/ByteByteGo" }
        ],
        courses: [
          { name: "Bun Masterclass", url: "https://www.udemy.com/course/bun-masterclass/" },
          { name: "Bun for Beginners", url: "https://www.udemy.com/course/bun-for-beginners/" },
          { name: "Bun with React", url: "https://www.udemy.com/course/bun-with-react/" },
          { name: "Bun Full Stack", url: "https://www.udemy.com/course/bun-full-stack/" },
          { name: "Bun Performance", url: "https://www.udemy.com/course/bun-performance/" }
        ],
        documentation: [
          { name: "Bun Official Docs", url: "https://bun.sh/docs" },
          { name: "Bun Examples", url: "https://github.com/oven-sh/bun/tree/main/examples" },
          { name: "Bun Benchmarks", url: "https://bun.sh/#performance" },
          { name: "Bun API", url: "https://bun.sh/docs/api" },
          { name: "Bun Community", url: "https://bun.sh/community" }
        ]
      }
    },
    { 
      name: "Hono", 
      icon: <FaFire className="text-4xl text-orange-500" />,
      description: "A small, simple, and ultrafast web framework for the Edge. It works on any JavaScript runtime: Cloudflare Workers, Fastly Compute, Deno, Bun, Vercel, Netlify, AWS Lambda, Lambda@Edge, and Node.js.",
      github: "https://github.com/topics/hono",
      learningResources: {
        youtube: [
          { name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/user/programmingwithmosh" },
          { name: "The Net Ninja", url: "https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" },
          { name: "Jack Herrington", url: "https://www.youtube.com/user/jherr2006" },
          { name: "ByteByteGo", url: "https://www.youtube.com/c/ByteByteGo" }
        ],
        courses: [
          { name: "Hono Masterclass", url: "https://www.udemy.com/course/hono-masterclass/" },
          { name: "Hono for Beginners", url: "https://www.udemy.com/course/hono-for-beginners/" },
          { name: "Hono with Cloudflare", url: "https://www.udemy.com/course/hono-with-cloudflare/" },
          { name: "Hono Full Stack", url: "https://www.udemy.com/course/hono-full-stack/" },
          { name: "Hono Performance", url: "https://www.udemy.com/course/hono-performance/" }
        ],
        documentation: [
          { name: "Hono Official Docs", url: "https://honojs.dev/docs/" },
          { name: "Hono Examples", url: "https://github.com/honojs/hono/tree/main/examples" },
          { name: "Hono API", url: "https://honojs.dev/docs/api/" },
          { name: "Hono Middleware", url: "https://honojs.dev/docs/middleware/" },
          { name: "Hono Community", url: "https://honojs.dev/docs/community/" }
        ]
      }
    },
    { 
      name: "SQL", 
      icon: <FaDatabase className="text-4xl text-blue-700" />,
      description: "A domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.",
      github: "https://github.com/topics/sql",
      learningResources: {
        youtube: [
          { name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/user/programmingwithmosh" },
          { name: "The Net Ninja", url: "https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" },
          { name: "Kevin Stratvert", url: "https://www.youtube.com/c/KevinStratvert" },
          { name: "Alex The Analyst", url: "https://www.youtube.com/c/AlexTheAnalyst" }
        ],
        courses: [
          { name: "SQL for Beginners", url: "https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/" },
          { name: "Advanced SQL", url: "https://www.udemy.com/course/advanced-sql/" },
          { name: "SQL Masterclass", url: "https://www.udemy.com/course/the-complete-sql-bootcamp/" },
          { name: "PostgreSQL", url: "https://www.udemy.com/course/sql-and-postgresql/" },
          { name: "MySQL", url: "https://www.udemy.com/course/mysql-bootcamp/" }
        ],
        documentation: [
          { name: "SQL Tutorial", url: "https://www.w3schools.com/sql/" },
          { name: "SQLBolt", url: "https://sqlbolt.com/" },
          { name: "Mode Analytics", url: "https://mode.com/sql-tutorial/" },
          { name: "SQL Zoo", url: "https://sqlzoo.net/" },
          { name: "PostgreSQL Docs", url: "https://www.postgresql.org/docs/" }
        ]
      }
    },
    { 
      name: "Prisma", 
      icon: <SiPrisma className="text-4xl text-teal-600" />,
      description: "A next-generation ORM that consists of these tools: Prisma Client, Prisma Migrate, and Prisma Studio. It makes database access easy with an auto-generated and type-safe query builder.",
      github: "https://github.com/topics/prisma",
      learningResources: {
        youtube: [
          { name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/user/programmingwithmosh" },
          { name: "The Net Ninja", url: "https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" },
          { name: "Academind", url: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w" },
          { name: "Prisma", url: "https://www.youtube.com/channel/UC914Ul8-Su9hE1u3vxnVGMA" }
        ],
        courses: [
          { name: "Prisma Masterclass", url: "https://www.udemy.com/course/prisma-masterclass/" },
          { name: "Prisma with Node.js", url: "https://www.udemy.com/course/prisma-with-nodejs/" },
          { name: "Prisma for Beginners", url: "https://www.udemy.com/course/prisma-for-beginners/" },
          { name: "Prisma Full Stack", url: "https://www.udemy.com/course/prisma-full-stack/" },
          { name: "Prisma Performance", url: "https://www.udemy.com/course/prisma-performance/" }
        ],
        documentation: [
          { name: "Prisma Official Docs", url: "https://www.prisma.io/docs/" },
          { name: "Prisma Examples", url: "https://github.com/prisma/prisma-examples" },
          { name: "Prisma Client", url: "https://www.prisma.io/docs/concepts/components/prisma-client" },
          { name: "Prisma Migrate", url: "https://www.prisma.io/docs/concepts/components/prisma-migrate" },
          { name: "Prisma Studio", url: "https://www.prisma.io/docs/concepts/components/prisma-studio" }
        ]
      }
    },
    { 
      name: "Docker", 
      icon: <SiDocker className="text-4xl text-blue-500" />,
      description: "A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.",
      github: "https://github.com/topics/docker",
      learningResources: {
        youtube: [
          { name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/user/programmingwithmosh" },
          { name: "TechWorld with Nana", url: "https://www.youtube.com/c/TechWorldwithNana" },
          { name: "Docker", url: "https://www.youtube.com/user/docker" },
          { name: "NetworkChuck", url: "https://www.youtube.com/user/NetworkChuck" }
        ],
        courses: [
          { name: "Docker Mastery", url: "https://www.udemy.com/course/docker-mastery/" },
          { name: "Docker for Beginners", url: "https://www.udemy.com/course/learn-docker/" },
          { name: "Docker with Kubernetes", url: "https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/" },
          { name: "Docker Swarm", url: "https://www.udemy.com/course/docker-swarm/" },
          { name: "Docker Security", url: "https://www.udemy.com/course/docker-security/" }
        ],
        documentation: [
          { name: "Docker Official Docs", url: "https://docs.docker.com/" },
          { name: "Docker Hub", url: "https://hub.docker.com/" },
          { name: "Docker CLI", url: "https://docs.docker.com/engine/reference/commandline/cli/" },
          { name: "Docker Compose", url: "https://docs.docker.com/compose/" },
          { name: "Dockerfile", url: "https://docs.docker.com/engine/reference/builder/" }
        ]
      }
    },
    { 
      name: "CI/CD", 
      icon: <FaSync className="text-4xl text-green-500" />,
      description: "Continuous Integration and Continuous Deployment/Delivery. CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of app development.",
      github: "https://github.com/topics/ci-cd",
      learningResources: {
        youtube: [
          { name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/user/programmingwithmosh" },
          { name: "TechWorld with Nana", url: "https://www.youtube.com/c/TechWorldwithNana" },
          { name: "DevOps Journey", url: "https://www.youtube.com/c/DevOpsJourney" },
          { name: "KodeKloud", url: "https://www.youtube.com/user/kodekloud" }
        ],
        courses: [
          { name: "CI/CD Masterclass", url: "https://www.udemy.com/course/cicd-masterclass/" },
          { name: "DevOps with Jenkins", url: "https://www.udemy.com/course/learn-devops-ci-cd-with-jenkins-using-pipelines/" },
          { name: "GitHub Actions", url: "https://www.udemy.com/course/github-actions-the-complete-guide/" },
          { name: "GitLab CI", url: "https://www.udemy.com/course/gitlab-ci-pipelines-ci-cd-and-devops-for-beginners/" },
          { name: "Azure DevOps", url: "https://www.udemy.com/course/azure-devops-ci-cd/" }
        ],
        documentation: [
          { name: "CI/CD Explained", url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd" },
          { name: "GitHub Actions", url: "https://docs.github.com/en/actions" },
          { name: "GitLab CI", url: "https://docs.gitlab.com/ee/ci/" },
          { name: "Jenkins", url: "https://www.jenkins.io/doc/" },
          { name: "CircleCI", url: "https://circleci.com/docs/" }
        ]
      }
    },
    { 
      name: "Prometheus", 
      icon: <SiPrometheus className="text-4xl text-red-600" />,
      description: "A systems and service monitoring system. It collects metrics from configured targets at given intervals, evaluates rule expressions, displays the results, and can trigger alerts when specified conditions are observed.",
      github: "https://github.com/topics/prometheus",
      learningResources: {
        youtube: [
          { name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/user/programmingwithmosh" },
          { name: "TechWorld with Nana", url: "https://www.youtube.com/c/TechWorldwithNana" },
          { name: "DevOps Journey", url: "https://www.youtube.com/c/DevOpsJourney" },
          { name: "KodeKloud", url: "https://www.youtube.com/user/kodekloud" }
        ],
        courses: [
          { name: "Prometheus Masterclass", url: "https://www.udemy.com/course/prometheus-masterclass/" },
          { name: "Monitoring with Prometheus", url: "https://www.udemy.com/course/monitoring-with-prometheus/" },
          { name: "Prometheus for Beginners", url: "https://www.udemy.com/course/prometheus-for-beginners/" },
          { name: "Prometheus with Grafana", url: "https://www.udemy.com/course/prometheus-with-grafana/" },
          { name: "Advanced Prometheus", url: "https://www.udemy.com/course/advanced-prometheus/" }
        ],
        documentation: [
          { name: "Prometheus Official Docs", url: "https://prometheus.io/docs/introduction/overview/" },
          { name: "Prometheus Query", url: "https://prometheus.io/docs/prometheus/latest/querying/basics/" },
          { name: "Prometheus Alerts", url: "https://prometheus.io/docs/alerting/latest/overview/" },
          { name: "Prometheus Exporters", url: "https://prometheus.io/docs/instrumenting/exporters/" },
          { name: "Prometheus Best Practices", url: "https://prometheus.io/docs/practices/naming/" }
        ]
      }
    },
    { 
      name: "Grafana", 
      icon: <SiGrafana className="text-4xl text-orange-500" />,
      description: "A multi-platform open source analytics and interactive visualization web application. It provides charts, graphs, and alerts for the web when connected to supported data sources.",
      github: "https://github.com/topics/grafana",
      learningResources: {
        youtube: [
          { name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/user/programmingwithmosh" },
          { name: "TechWorld with Nana", url: "https://www.youtube.com/c/TechWorldwithNana" },
          { name: "DevOps Journey", url: "https://www.youtube.com/c/DevOpsJourney" },
          { name: "KodeKloud", url: "https://www.youtube.com/user/kodekloud" }
        ],
        courses: [
          { name: "Grafana Masterclass", url: "https://www.udemy.com/course/grafana-masterclass/" },
          { name: "Visualization with Grafana", url: "https://www.udemy.com/course/visualization-with-grafana/" },
          { name: "Grafana for Beginners", url: "https://www.udemy.com/course/grafana-for-beginners/" },
          { name: "Grafana with Prometheus", url: "https://www.udemy.com/course/grafana-with-prometheus/" },
          { name: "Advanced Grafana", url: "https://www.udemy.com/course/advanced-grafana/" }
        ],
        documentation: [
          { name: "Grafana Official Docs", url: "https://grafana.com/docs/grafana/latest/" },
          { name: "Grafana Dashboards", url: "https://grafana.com/grafana/dashboards/" },
          { name: "Grafana Plugins", url: "https://grafana.com/grafana/plugins/" },
          { name: "Grafana Alerts", url: "https://grafana.com/docs/grafana/latest/alerting/" },
          { name: "Grafana Best Practices", url: "https://grafana.com/docs/grafana/latest/best-practices/" }
        ]
      }
    },
    { 
      name: "Zod", 
      icon: <SiZod className="text-4xl text-blue-600" />,
      description: "A TypeScript-first schema declaration and validation library. It's designed to be easy to use and infer types from your schemas.",
      github: "https://github.com/topics/zod",
      learningResources: {
        youtube: [
          { name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/user/programmingwithmosh" },
          { name: "The Net Ninja", url: "https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" },
          { name: "Jack Herrington", url: "https://www.youtube.com/user/jherr2006" },
          { name: "Ben Awad", url: "https://www.youtube.com/user/99baddawg" }
        ],
        courses: [
          { name: "Zod Masterclass", url: "https://www.udemy.com/course/zod-masterclass/" },
          { name: "Validation with Zod", url: "https://www.udemy.com/course/validation-with-zod/" },
          { name: "Zod for Beginners", url: "https://www.udemy.com/course/zod-for-beginners/" },
          { name: "Zod with React", url: "https://www.udemy.com/course/zod-with-react/" },
          { name: "Advanced Zod", url: "https://www.udemy.com/course/advanced-zod/" }
        ],
        documentation: [
          { name: "Zod Official Docs", url: "https://zod.dev/" },
          { name: "Zod GitHub", url: "https://github.com/colinhacks/zod" },
          { name: "Zod Examples", url: "https://github.com/colinhacks/zod#basic-usage" },
          { name: "Zod API", url: "https://github.com/colinhacks/zod#api" },
          { name: "Zod Guides", url: "https://github.com/colinhacks/zod#guides" }
        ]
      }
    },
    { 
      name: "TensorFlow", 
      icon: <SiTensorflow className="text-4xl text-orange-600" />,
      description: "An end-to-end open source platform for machine learning. It has a comprehensive, flexible ecosystem of tools, libraries and community resources that lets researchers push the state-of-the-art in ML and developers easily build and deploy ML powered applications.",
      github: "https://github.com/topics/tensorflow",
      learningResources: {
        youtube: [
          { name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/user/programmingwithmosh" },
          { name: "Sentdex", url: "https://www.youtube.com/user/sentdex" },
          { name: "Siraj Raval", url: "https://www.youtube.com/user/sirajraval" },
          { name: "Two Minute Papers", url: "https://www.youtube.com/user/keeroyz" }
        ],
        courses: [
          { name: "TensorFlow Masterclass", url: "https://www.udemy.com/course/tensorflow-masterclass/" },
          { name: "Deep Learning with TensorFlow", url: "https://www.udemy.com/course/deep-learning-with-tensorflow/" },
          { name: "TensorFlow for Beginners", url: "https://www.udemy.com/course/tensorflow-for-beginners/" },
          { name: "TensorFlow 2.0", url: "https://www.udemy.com/course/tensorflow-20/" },
          { name: "Advanced TensorFlow", url: "https://www.udemy.com/course/advanced-tensorflow/" }
        ],
        documentation: [
          { name: "TensorFlow Official Docs", url: "https://www.tensorflow.org/learn" },
          { name: "TensorFlow Tutorials", url: "https://www.tensorflow.org/tutorials" },
          { name: "TensorFlow API", url: "https://www.tensorflow.org/api_docs" },
          { name: "TensorFlow Models", url: "https://www.tensorflow.org/resources/models-datasets" },
          { name: "TensorFlow Playground", url: "https://playground.tensorflow.org/" }
        ]
      }
    },
    { 
      name: "Git", 
      icon: <FaGit className="text-4xl text-orange-600" />,
      description: "A distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files.",
      github: "https://github.com/topics/git",
      learningResources: {
        youtube: [
          { name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/user/programmingwithmosh" },
          { name: "The Net Ninja", url: "https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" },
          { name: "Kevin Stratvert", url: "https://www.youtube.com/c/KevinStratvert" },
          { name: "Amigoscode", url: "https://www.youtube.com/c/amigoscode" }
        ],
        courses: [
          { name: "Git Masterclass", url: "https://www.udemy.com/course/git-masterclass/" },
          { name: "Complete Git Guide", url: "https://www.udemy.com/course/the-complete-git-guide/" },
          { name: "Git for Beginners", url: "https://www.udemy.com/course/git-for-beginners/" },
          { name: "Git Advanced", url: "https://www.udemy.com/course/git-advanced/" },
          { name: "Git with GitHub", url: "https://www.udemy.com/course/git-with-github/" }
        ],
        documentation: [
          { name: "Git Official Docs", url: "https://git-scm.com/doc" },
          { name: "Git Book", url: "https://git-scm.com/book/en/v2" },
          { name: "Git Reference", url: "https://git-scm.com/docs" },
          { name: "Git Cheat Sheet", url: "https://education.github.com/git-cheat-sheet-education.pdf" },
          { name: "Git Branching", url: "https://learngitbranching.js.org/" }
        ]
      }
    },
    { 
      name: "GitHub", 
      icon: <FaGithub className="text-4xl text-black" />,
      description: "A provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features.",
      github: "https://github.com/topics/github",
      learningResources: {
        youtube: [
          { name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/user/programmingwithmosh" },
          { name: "The Net Ninja", url: "https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" },
          { name: "Kevin Stratvert", url: "https://www.youtube.com/c/KevinStratvert" },
          { name: "GitHub", url: "https://www.youtube.com/user/github" }
        ],
        courses: [
          { name: "GitHub Masterclass", url: "https://www.udemy.com/course/github-masterclass/" },
          { name: "Complete GitHub Guide", url: "https://www.udemy.com/course/the-complete-github-guide/" },
          { name: "GitHub for Beginners", url: "https://www.udemy.com/course/github-for-beginners/" },
          { name: "GitHub Actions", url: "https://www.udemy.com/course/github-actions-the-complete-guide/" },
          { name: "GitHub with Git", url: "https://www.udemy.com/course/github-with-git/" }
        ],
        documentation: [
          { name: "GitHub Official Docs", url: "https://docs.github.com/en" },
          { name: "GitHub Guides", url: "https://guides.github.com/" },
          { name: "GitHub Skills", url: "https://skills.github.com/" },
          { name: "GitHub CLI", url: "https://cli.github.com/manual/" },
          { name: "GitHub Pages", url: "https://pages.github.com/" }
        ]
      }
    }
  ];

  // Sample data for carousels
  const youtubeChannels = [
    { name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
    { name: "Programming with Mosh", url: "https://www.youtube.com/user/programmingwithmosh" },
    { name: "The Net Ninja", url: "https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" },
    { name: "Academind", url: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w" },
    { name: "Ben Awad", url: "https://www.youtube.com/user/99baddawg" },
    { name: "Jack Herrington", url: "https://www.youtube.com/user/jherr2006" },
    { name: "Corey Schafer", url: "https://www.youtube.com/user/schafer5" },
    { name: "Sentdex", url: "https://www.youtube.com/user/sentdex" },
    { name: "Tech With Tim", url: "https://www.youtube.com/user/TechWithTim" },
    { name: "Kevin Powell", url: "https://www.youtube.com/user/KepowOb" }
  ];

  const courses = [
    { name: "React - The Complete Guide", url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/" },
    { name: "The Complete Node.js Developer", url: "https://www.udemy.com/course/the-complete-nodejs-developer-course-2/" },
    { name: "Python and Django Full Stack", url: "https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/" },
    { name: "Docker Mastery", url: "https://www.udemy.com/course/docker-mastery/" },
    { name: "The Complete JavaScript Course", url: "https://www.udemy.com/course/the-complete-javascript-course/" },
    { name: "AWS Certified Developer", url: "https://www.udemy.com/course/aws-certified-developer-associate/" },
    { name: "Kubernetes for the Absolute Beginners", url: "https://www.udemy.com/course/learn-kubernetes/" },
    { name: "Microservices with Node Js and React", url: "https://www.udemy.com/course/microservices-with-node-js-and-react/" },
    { name: "GraphQL with React", url: "https://www.udemy.com/course/graphql-with-react/" },
    { name: "Advanced CSS and Sass", url: "https://www.udemy.com/course/advanced-css-and-sass/" }
  ];

  const documentation = [
    { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/" },
    { name: "React Documentation", url: "https://reactjs.org/docs/getting-started.html" },
    { name: "Node.js Documentation", url: "https://nodejs.org/en/docs/" },
    { name: "Django Documentation", url: "https://docs.djangoproject.com/en/" },
    { name: "Python Documentation", url: "https://docs.python.org/3/" },
    { name: "TypeScript Documentation", url: "https://www.typescriptlang.org/docs/" },
    { name: "Tailwind CSS Documentation", url: "https://tailwindcss.com/docs" },
    { name: "Docker Documentation", url: "https://docs.docker.com/" },
    { name: "Kubernetes Documentation", url: "https://kubernetes.io/docs/home/" },
    { name: "AWS Documentation", url: "https://docs.aws.amazon.com/" }
  ];

  const nextSlide = (type) => {
    const items = type === 'youtube' ? youtubeChannels : type === 'courses' ? courses : documentation;
    const maxSlides = Math.ceil(items.length / 5) - 1;
    
    if (currentSlide[type] < maxSlides) {
      setCurrentSlide(prev => ({ ...prev, [type]: prev[type] + 1 }));
    }
  };

  const prevSlide = (type) => {
    if (currentSlide[type] > 0) {
      setCurrentSlide(prev => ({ ...prev, [type]: prev[type] - 1 }));
    }
  };

  const renderCarousel = (items, type) => {
    if (!items || items.length === 0) return null;
    
    const startIndex = currentSlide[type] * 5;
    const visibleItems = items.slice(startIndex, startIndex + 5);

    return (
      <div className="relative">
        <div className="flex gap-4">
          {visibleItems.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-1/5">
              <a 
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-[3px] border-black shadow-[6px_6px_0_0_#000] bg-white p-4 hover:translate-x-1 hover:translate-y-1 transition-transform block h-full"
              >
                <h5 className="font-bold text-black mb-2">{item.name}</h5>
              </a>
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={() => prevSlide(type)}
          disabled={currentSlide[type] === 0}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-black text-white w-8 h-8 flex items-center justify-center rounded-full ${currentSlide[type] === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'}`}
        >
          &lt;
        </button>
        <button 
          onClick={() => nextSlide(type)}
          disabled={currentSlide[type] >= Math.ceil(items.length / 5) - 1}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-black text-white w-8 h-8 flex items-center justify-center rounded-full ${currentSlide[type] >= Math.ceil(items.length / 5) - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'}`}
        >
          &gt;
        </button>
      </div>
    );
  };

  const renderLearningResources = (resources) => {
    if (!resources) return null;
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* YouTube Resources */}
        <div>
          <h4 className="text-lg font-bold mb-3 text-black border-l-4 border-black pl-2">YouTube Channels</h4>
          <div className="space-y-2">
            {resources.youtube?.slice(0, 5).map((resource, index) => (
              <a 
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-[3px] border-black shadow-[4px_4px_0_0_#000] bg-white p-3 hover:translate-x-1 hover:translate-y-1 transition-transform"
              >
                <h5 className="font-bold text-black text-sm">{resource.name}</h5>
              </a>
            ))}
          </div>
        </div>

        {/* Courses */}
        <div>
          <h4 className="text-lg font-bold mb-3 text-black border-l-4 border-black pl-2">Courses</h4>
          <div className="space-y-2">
            {resources.courses?.slice(0, 5).map((resource, index) => (
              <a 
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-[3px] border-black shadow-[4px_4px_0_0_#000] bg-white p-3 hover:translate-x-1 hover:translate-y-1 transition-transform"
              >
                <h5 className="font-bold text-black text-sm">{resource.name}</h5>
              </a>
            ))}
          </div>
        </div>

        {/* Documentation */}
        <div>
          <h4 className="text-lg font-bold mb-3 text-black border-l-4 border-black pl-2">Documentation</h4>
          <div className="space-y-2">
            {resources.documentation?.slice(0, 5).map((resource, index) => (
              <a 
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-[3px] border-black shadow-[4px_4px_0_0_#000] bg-white p-3 hover:translate-x-1 hover:translate-y-1 transition-transform"
              >
                <h5 className="font-bold text-black text-sm">{resource.name}</h5>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 h-full overflow-auto bg-amber-50">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-black text-black mb-4 uppercase border-b-4 border-black pb-2 inline-block">
            My Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 mb-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 h-24 relative group rounded-sm 
                         bg-[#E8FFEA] border-[3px] border-black 
                         shadow-[6px_6px_0_0_#000]
                         flex justify-center items-center
                         cursor-pointer active:translate-x-1 active:translate-y-1 active:shadow-none"
              onClick={() => {
                setSelectedSkill(skill);
                setIsModalOpen(true);
              }}
            >
              {/* ICON WITH BORDER */}
              <div className="p-3 bg-[#E8FFEA] border-[3px] border-black shadow-[4px_4px_0_0_#000] rounded-sm">
                {skill.icon}
              </div>

              {/* TOOLTIP */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 
                              mb-2 bg-white border-[3px] border-black 
                              shadow-[6px_6px_0_0_#000] px-3 py-2 
                              opacity-0 group-hover:opacity-100 transition-opacity 
                              whitespace-nowrap z-20 rounded-sm">
                <span className="text-black font-black tracking-wide">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Resources Section */}
        <div className="mt-8 flex-1">
          <h3 className="text-2xl font-black text-black mb-6 uppercase border-b-4 border-black pb-2 inline-block">
            Learning Resources
          </h3>
          
          {/* YouTube Channels */}
          <div className="mb-8">
            <h4 className="text-xl font-bold mb-4 text-black border-l-4 border-black pl-2">YouTube Channels</h4>
            {renderCarousel(youtubeChannels, 'youtube')}
          </div>
          
          {/* Courses */}
          <div className="mb-8">
            <h4 className="text-xl font-bold mb-4 text-black border-l-4 border-black pl-2">Courses</h4>
            {renderCarousel(courses, 'courses')}
          </div>
          
          {/* Documentation */}
          <div className="mb-8">
            <h4 className="text-xl font-bold mb-4 text-black border-l-4 border-black pl-2">Documentation</h4>
            {renderCarousel(documentation, 'documentation')}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && selectedSkill && (
        <>
          <div className="fixed inset-0 bg-amber-100 bg-opacity-70 backdrop-blur-sm z-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-white border-[3px] border-black shadow-[12px_12px_0_0_#000] w-full max-w-4xl my-8 rounded-lg">
              {/* Modal Header */}
              <div className="border-b-[3px] border-black p-4 flex justify-between items-center bg-[#E8FFEA]">
                <h2 className="text-2xl font-black uppercase text-black">{selectedSkill.name}</h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-2xl font-black border-[3px] border-black w-8 h-8 flex items-center justify-center bg-red-500 text-white hover:bg-red-600 rounded-full transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="p-6">
                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-black border-l-4 border-black pl-2">About {selectedSkill.name}</h3>
                  <p className="text-gray-800 mb-4">{selectedSkill.description}</p>
                </div>

                {/* Proof of Work */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-black border-l-4 border-black pl-2">Proof of Work</h3>
                  <a 
                    href={selectedSkill.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold border-[3px] border-black px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors rounded inline-block"
                  >
                    View Projects on GitHub
                  </a>
                </div>

                {/* Learning Resources */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-black border-l-4 border-black pl-2">Learning Resources</h3>
                  {renderLearningResources(selectedSkill.learningResources)}
                </div>

                {/* Close Button */}
                <div className="mt-8 text-center">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="font-bold border-[3px] border-black px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors rounded"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SkillsWindow;