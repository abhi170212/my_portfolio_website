import React, { useState } from 'react';
import { FaReact, FaNode, FaPython, FaJs, FaGit, FaGithub, FaDatabase, FaFire, FaSync } from 'react-icons/fa';
import { 
  SiDjango, SiExpress, SiNextdotjs, SiNestjs, SiTypescript, SiRedux, 
  SiTailwindcss, SiRedis, SiDocker, SiPrometheus, SiGrafana, 
  SiTensorflow, SiPrisma, SiBun, SiCplusplus, SiZod 
} from 'react-icons/si';

const SkillsWindow = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const skills = [
    { 
      name: "React Js", 
      icon: <FaReact className="text-4xl text-blue-500" />,
      description: "A JavaScript library for building user interfaces. React makes it painless to create interactive UIs by using a component-based approach.",
      github: "https://github.com/topics/react",
      learningResources: [
        { name: "React Official Documentation", url: "https://reactjs.org/docs/getting-started.html" },
        { name: "React Tutorial for Beginners", url: "https://www.youtube.com/watch?v=Ke90Tje7VS0" },
        { name: "Advanced React Patterns", url: "https://reactpatterns.com/" }
      ]
    },
    { 
      name: "Node Js", 
      icon: <FaNode className="text-4xl text-green-600" />,
      description: "A JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js allows you to run JavaScript on the server.",
      github: "https://github.com/topics/nodejs",
      learningResources: [
        { name: "Node.js Official Documentation", url: "https://nodejs.org/en/docs/" },
        { name: "Node.js Tutorial for Beginners", url: "https://www.youtube.com/watch?v=TlB_eWDSMt4" },
        { name: "Node.js Best Practices", url: "https://github.com/goldbergyoni/nodebestpractices" }
      ]
    },
    { 
      name: "Django", 
      icon: <SiDjango className="text-4xl text-green-800" />,
      description: "A high-level Python web framework that encourages rapid development and clean, pragmatic design.",
      github: "https://github.com/topics/django",
      learningResources: [
        { name: "Django Official Documentation", url: "https://docs.djangoproject.com/en/" },
        { name: "Django Tutorial for Beginners", url: "https://www.youtube.com/watch?v=UmljXZIypDc" },
        { name: "Django REST Framework", url: "https://www.django-rest-framework.org/" }
      ]
    },
    { 
      name: "Express Js", 
      icon: <SiExpress className="text-4xl text-black" />,
      description: "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
      github: "https://github.com/topics/express",
      learningResources: [
        { name: "Express Official Documentation", url: "https://expressjs.com/" },
        { name: "Express.js Tutorial", url: "https://www.youtube.com/watch?v=L72fhGm1tfE" },
        { name: "Building RESTful APIs with Express", url: "https://www.restapitutorial.com/" }
      ]
    },
    { 
      name: "Next Js", 
      icon: <SiNextdotjs className="text-4xl text-black" />,
      description: "A React-based framework that enables functionality such as server-side rendering and generating static websites for React based web applications.",
      github: "https://github.com/topics/nextjs",
      learningResources: [
        { name: "Next.js Official Documentation", url: "https://nextjs.org/docs" },
        { name: "Next.js Tutorial for Beginners", url: "https://www.youtube.com/watch?v=MFuwkrseXVE" },
        { name: "Next.js Examples", url: "https://github.com/vercel/next.js/tree/canary/examples" }
      ]
    },
    { 
      name: "Nest Js", 
      icon: <SiNestjs className="text-4xl text-red-600" />,
      description: "A progressive Node.js framework for building efficient, reliable and scalable server-side applications.",
      github: "https://github.com/topics/nestjs",
      learningResources: [
        { name: "NestJS Official Documentation", url: "https://docs.nestjs.com/" },
        { name: "NestJS Crash Course", url: "https://www.youtube.com/watch?v=NEof1K5sQK4" },
        { name: "NestJS Best Practices", url: "https://github.com/nestjs/nest/tree/master/sample" }
      ]
    },
    { 
      name: "Javascript", 
      icon: <FaJs className="text-4xl text-yellow-500" />,
      description: "A programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.",
      github: "https://github.com/topics/javascript",
      learningResources: [
        { name: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
        { name: "JavaScript.info", url: "https://javascript.info/" },
        { name: "Eloquent JavaScript", url: "https://eloquentjavascript.net/" }
      ]
    },
    { 
      name: "C++", 
      icon: <SiCplusplus className="text-4xl text-blue-700" />,
      description: "A general-purpose programming language created as an extension of the C programming language, or 'C with Classes'.",
      github: "https://github.com/topics/cpp",
      learningResources: [
        { name: "C++ Reference", url: "https://en.cppreference.com/w/" },
        { name: "Learn C++", url: "https://www.learncpp.com/" },
        { name: "C++ Tutorial", url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y" }
      ]
    },
    { 
      name: "TypeScript", 
      icon: <SiTypescript className="text-4xl text-blue-600" />,
      description: "A programming language developed by Microsoft that adds static typing to JavaScript. It is designed for the development of large applications.",
      github: "https://github.com/topics/typescript",
      learningResources: [
        { name: "TypeScript Official Documentation", url: "https://www.typescriptlang.org/docs/" },
        { name: "TypeScript Tutorial", url: "https://www.youtube.com/watch?v=BwuLxPH8IDs" },
        { name: "TypeScript Deep Dive", url: "https://basarat.gitbook.io/typescript/" }
      ]
    },
    { 
      name: "Python", 
      icon: <FaPython className="text-4xl text-blue-400" />,
      description: "An interpreted high-level general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation.",
      github: "https://github.com/topics/python",
      learningResources: [
        { name: "Python Official Documentation", url: "https://docs.python.org/3/" },
        { name: "Python Tutorial", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
        { name: "Automate the Boring Stuff with Python", url: "https://automatetheboringstuff.com/" }
      ]
    },
    { 
      name: "Redux", 
      icon: <SiRedux className="text-4xl text-purple-600" />,
      description: "A predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments, and are easy to test.",
      github: "https://github.com/topics/redux",
      learningResources: [
        { name: "Redux Official Documentation", url: "https://redux.js.org/" },
        { name: "Redux Tutorial", url: "https://www.youtube.com/watch?v=CVpUuw9XSjY" },
        { name: "Redux Best Practices", url: "https://redux.js.org/style-guide/style-guide" }
      ]
    },
    { 
      name: "Tailwind", 
      icon: <SiTailwindcss className="text-4xl text-teal-500" />,
      description: "A utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework.",
      github: "https://github.com/topics/tailwindcss",
      learningResources: [
        { name: "Tailwind CSS Official Documentation", url: "https://tailwindcss.com/docs" },
        { name: "Tailwind CSS Tutorial", url: "https://www.youtube.com/watch?v=UBOj6rqRUME" },
        { name: "Tailwind UI Components", url: "https://tailwindui.com/" }
      ]
    },
    { 
      name: "Redis", 
      icon: <SiRedis className="text-4xl text-red-500" />,
      description: "An in-memory data structure store, used as a database, cache, and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes, and streams.",
      github: "https://github.com/topics/redis",
      learningResources: [
        { name: "Redis Official Documentation", url: "https://redis.io/documentation" },
        { name: "Redis Tutorial", url: "https://www.youtube.com/watch?v=Hbt56gFj998" },
        { name: "Redis Labs University", url: "https://university.redislabs.com/" }
      ]
    },
    { 
      name: "Bun", 
      icon: <SiBun className="text-4xl text-yellow-400" />,
      description: "A JavaScript runtime, package manager, test runner, and bundler built from scratch using the Zig programming language.",
      github: "https://github.com/topics/bun",
      learningResources: [
        { name: "Bun Official Documentation", url: "https://bun.sh/docs" },
        { name: "Bun Tutorial", url: "https://www.youtube.com/watch?v=4M5ISfQxaw0" },
        { name: "Bun Examples", url: "https://github.com/oven-sh/bun/tree/main/examples" }
      ]
    },
    { 
      name: "Hono", 
      icon: <FaFire className="text-4xl text-orange-500" />,
      description: "A small, simple, and ultrafast web framework for the Edge. It works on any JavaScript runtime: Cloudflare Workers, Fastly Compute, Deno, Bun, Vercel, Netlify, AWS Lambda, Lambda@Edge, and Node.js.",
      github: "https://github.com/topics/hono",
      learningResources: [
        { name: "Hono Official Documentation", url: "https://honojs.dev/docs/" },
        { name: "Hono Tutorial", url: "https://www.youtube.com/watch?v=9XW6bM_3U0Y" },
        { name: "Hono Examples", url: "https://github.com/honojs/hono/tree/main/examples" }
      ]
    },
    { 
      name: "SQL", 
      icon: <FaDatabase className="text-4xl text-blue-700" />,
      description: "A domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.",
      github: "https://github.com/topics/sql",
      learningResources: [
        { name: "SQL Tutorial", url: "https://www.w3schools.com/sql/" },
        { name: "SQLBolt", url: "https://sqlbolt.com/" },
        { name: "Mode Analytics SQL Tutorial", url: "https://mode.com/sql-tutorial/" }
      ]
    },
    { 
      name: "Prisma", 
      icon: <SiPrisma className="text-4xl text-teal-600" />,
      description: "A next-generation ORM that consists of these tools: Prisma Client, Prisma Migrate, and Prisma Studio. It makes database access easy with an auto-generated and type-safe query builder.",
      github: "https://github.com/topics/prisma",
      learningResources: [
        { name: "Prisma Official Documentation", url: "https://www.prisma.io/docs/" },
        { name: "Prisma Tutorial", url: "https://www.youtube.com/watch?v=RebA5J-rlwg" },
        { name: "Prisma Examples", url: "https://github.com/prisma/prisma-examples" }
      ]
    },
    { 
      name: "Docker", 
      icon: <SiDocker className="text-4xl text-blue-500" />,
      description: "A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.",
      github: "https://github.com/topics/docker",
      learningResources: [
        { name: "Docker Official Documentation", url: "https://docs.docker.com/" },
        { name: "Docker Tutorial", url: "https://www.youtube.com/watch?v=3c-iBn73dDE" },
        { name: "Docker Curriculum", url: "https://docker-curriculum.com/" }
      ]
    },
    { 
      name: "CI/CD", 
      icon: <FaSync className="text-4xl text-green-500" />,
      description: "Continuous Integration and Continuous Deployment/Delivery. CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of app development.",
      github: "https://github.com/topics/ci-cd",
      learningResources: [
        { name: "CI/CD Explained", url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd" },
        { name: "GitHub Actions Tutorial", url: "https://www.youtube.com/watch?v=R8_veQiYBjI" },
        { name: "Jenkins Tutorial", url: "https://www.youtube.com/watch?v=LF5MVrOao-U" }
      ]
    },
    { 
      name: "Prometheus", 
      icon: <SiPrometheus className="text-4xl text-red-600" />,
      description: "A systems and service monitoring system. It collects metrics from configured targets at given intervals, evaluates rule expressions, displays the results, and can trigger alerts when specified conditions are observed.",
      github: "https://github.com/topics/prometheus",
      learningResources: [
        { name: "Prometheus Official Documentation", url: "https://prometheus.io/docs/introduction/overview/" },
        { name: "Prometheus Tutorial", url: "https://www.youtube.com/watch?v=h4Sl21AKiDg" },
        { name: "Prometheus Monitoring", url: "https://prometheus.io/docs/prometheus/latest/getting_started/" }
      ]
    },
    { 
      name: "Grafana", 
      icon: <SiGrafana className="text-4xl text-orange-500" />,
      description: "A multi-platform open source analytics and interactive visualization web application. It provides charts, graphs, and alerts for the web when connected to supported data sources.",
      github: "https://github.com/topics/grafana",
      learningResources: [
        { name: "Grafana Official Documentation", url: "https://grafana.com/docs/grafana/latest/" },
        { name: "Grafana Tutorial", url: "https://www.youtube.com/watch?v=OZsqr6L_25M" },
        { name: "Grafana Dashboards", url: "https://grafana.com/grafana/dashboards/" }
      ]
    },
    { 
      name: "Zod", 
      icon: <SiZod className="text-4xl text-blue-600" />,
      description: "A TypeScript-first schema declaration and validation library. It's designed to be easy to use and infer types from your schemas.",
      github: "https://github.com/topics/zod",
      learningResources: [
        { name: "Zod Official Documentation", url: "https://zod.dev/" },
        { name: "Zod Tutorial", url: "https://www.youtube.com/watch?v=P4a9WCliWoo" },
        { name: "Zod Examples", url: "https://github.com/colinhacks/zod#basic-usage" }
      ]
    },
    { 
      name: "TensorFlow", 
      icon: <SiTensorflow className="text-4xl text-orange-600" />,
      description: "An end-to-end open source platform for machine learning. It has a comprehensive, flexible ecosystem of tools, libraries and community resources that lets researchers push the state-of-the-art in ML and developers easily build and deploy ML powered applications.",
      github: "https://github.com/topics/tensorflow",
      learningResources: [
        { name: "TensorFlow Official Documentation", url: "https://www.tensorflow.org/learn" },
        { name: "TensorFlow Tutorial", url: "https://www.youtube.com/watch?v=tPYj3fFJGjk" },
        { name: "TensorFlow Examples", url: "https://github.com/tensorflow/examples" }
      ]
    },
    { 
      name: "Git", 
      icon: <FaGit className="text-4xl text-orange-600" />,
      description: "A distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files.",
      github: "https://github.com/topics/git",
      learningResources: [
        { name: "Git Official Documentation", url: "https://git-scm.com/doc" },
        { name: "Git Tutorial", url: "https://www.youtube.com/watch?v=USjZcfj8yxE" },
        { name: "Pro Git Book", url: "https://git-scm.com/book/en/v2" }
      ]
    },
    { 
      name: "GitHub", 
      icon: <FaGithub className="text-4xl text-black" />,
      description: "A provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features.",
      github: "https://github.com/topics/github",
      learningResources: [
        { name: "GitHub Official Documentation", url: "https://docs.github.com/en" },
        { name: "GitHub Tutorial", url: "https://www.youtube.com/watch?v=8Dd7KRpKeaE" },
        { name: "GitHub Skills", url: "https://skills.github.com/" }
      ]
    }
  ];

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
        <div className="grid grid-cols-8 gap-6">
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

              {/* Modal Content */}
              <div className="p-6">
                {/* Skill Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-black border-l-4 border-black pl-2">About {selectedSkill.name}</h3>
                  <p className="text-gray-800 mb-4">{selectedSkill.description}</p>
                </div>

                {/* GitHub Link */}
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
                <div>
                  <h3 className="text-xl font-bold mb-4 text-black border-l-4 border-black pl-2">Learning Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedSkill.learningResources.map((resource, index) => (
                      <a 
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-[3px] border-black shadow-[6px_6px_0_0_#000] bg-white p-4 hover:translate-x-1 hover:translate-y-1 transition-transform"
                      >
                        <h4 className="font-bold text-black mb-2">{resource.name}</h4>
                      </a>
                    ))}
                  </div>
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