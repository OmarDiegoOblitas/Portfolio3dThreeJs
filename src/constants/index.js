const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  // { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 12, suffix: "+", label: "Completed Projects" },
  // { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Diego brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2022 - December",
    responsibilities: [
      "Developed and maintained user-facing features for the Bitbucket website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Las contribuciones de Diego a los sitios web de Docker han sido excepcionales. Aborda los desafíos con una mentalidad resolutiva.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "May 2023 - Present",
    responsibilities: [
      "I developed a website using Laravel, Vue.js, and PostgreSQL technologies, worked with a focus on scalability, ",
      "I worked with backend engineers to seamlessly integrate APIs with the frontend ",
      "I contributed to open source projects.",
    ],
  },
  {
    review:
      "Diego's work on mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2021 - January 2022",
    responsibilities: [
      "Built cross-platform mobile apps using React Native,",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    id: "instagram",
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    id: "facebook",
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    id: "twitter",
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    id: "LinkedIn",
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];
const certifications = [
  {
    platform: "Platzi",
    certificates: [
      {
        id: 1,
        name: "Curso de React",
        pdf: "/pdfs/platzi/react.pdf",
      },
      {
        id: 2,
        name: "Curso de JavaScript",
        pdf: "/pdfs/platzi/javascript.pdf",
      },
      {
        id: 3,
        name: "Curso de Python",
        pdf: "/pdfs/platzi/python.pdf",
      },
      {
        id: 4,
        name: "Curso de Node.js",
        pdf: "/pdfs/platzi/nodejs.pdf",
      },
      {
        id: 5,
        name: "Curso de Docker",
        pdf: "/pdfs/platzi/docker.pdf",
      },
      {
        id: 6,
        name: "Curso de Git y GitHub",
        pdf: "/pdfs/platzi/git-github.pdf",
      },
      {
        id: 7,
        name: "Curso de Desarrollo Web Full Stack",
        pdf: "/pdfs/platzi/fullstack.pdf",
      },
      {
        id: 8,
        name: "Curso de Inteligencia Artificial",
        pdf: "/pdfs/platzi/ai.pdf",
      },
    ],
  },
  {
    platform: "Coursera",
    certificates: [
      {
        id: 1,
        name: "Python for Everybody",
        pdf: "/pdfs/coursera/python.pdf",
      },
      {
        id: 2,
        name: "Machine Learning",
        pdf: "/pdfs/coursera/ml.pdf",
      },
      {
        id: 3,
        name: "Full Stack Web Development",
        pdf: "/pdfs/coursera/fullstack.pdf",
      },
      {
        id: 4,
        name: "Data Science Specialization",
        pdf: "/pdfs/coursera/datascience.pdf",
      },
      {
        id: 5,
        name: "Cloud Computing Basics",
        pdf: "/pdfs/coursera/cloud.pdf",
      },
      {
        id: 6,
        name: "DevOps Foundations",
        pdf: "/pdfs/coursera/devops.pdf",
      },
    ],
  },
  {
    platform: "LinkedIn",
    certificates: [
      {
        id: 1,
        name: "Node.js Essentials",
        pdf: "/pdfs/linkedin/nodejs.pdf",
      },
      {
        id: 2,
        name: "Full Stack Web Development",
        pdf: "/pdfs/linkedin/fullstack.pdf",
      },
      {
        id: 3,
        name: "React Native Basics",
        pdf: "/pdfs/linkedin/reactnative.pdf",
      },
      {
        id: 4,
        name: "Advanced JavaScript",
        pdf: "/pdfs/linkedin/advancedjs.pdf",
      },
      {
        id: 5,
        name: "Python for Data Science",
        pdf: "/pdfs/linkedin/python-datascience.pdf",
      },
      {
        id: 6,
        name: "Git and GitHub Fundamentals",
        pdf: "/pdfs/linkedin/git-github.pdf",
      },
    ],
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  certifications,
};
