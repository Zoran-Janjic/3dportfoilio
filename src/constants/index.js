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
  redux,
  materialui,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  em,
  gl,
  mj,
  awsLogo,
  beehive,
  carrent,
  jobit,
  tripguide,
  bootstrap,
  flask,
  expressjs,
  weather,
  rest,
  movie,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack",
    icon: web,
  },
  {
    title: "AI",
    icon: mobile,
  },
  {
    title: "Backend",
    icon: backend,
  },
  {
    title: "Frontend",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Express",
    icon: expressjs,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Material UI",
    icon: materialui,
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
    name: "Flask",
    icon: flask,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: awsLogo,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "GL navigation",
    icon: gl,
    iconBg: "#383E56",
    date: "Oct 2023 - Current",
    points: [
      "Connects tourists with local guides for authentic Japanese experiences, emphasizing culture, history, and natural beauty.",
      "Technology Stack: MERN (MongoDB, Express, React, Node.js)",
      "Development Tasks: Database design and implementation (MongoDB), Server-side development (Express) for REST APIs, Client-side development (React) for user interfaces, Integration of front-end and back-end (Node.js), Implementing security measures, Testing and debugging, Deployment and maintenance",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Meet Japan",
    icon: mj,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Mar 2024",
    points: [
      "Meet Japan is a startup platform that connects tourists with local tour guides for authentic experiences in Japan. Our aim is to offer personalized journeys showcasing Japan's rich culture, history, and natural beauty. We provide customized tours tailored to each visitor's interests and budget, from discovering Tokyo's hidden gems to experiencing traditional Japanese culture.",
      "Technology Stack: MERN (MongoDB, Express, React, Node.js)",
      "Development Tasks:",
      "1. Database design and implementation (MongoDB)",
      "2. Server-side development (Express) for REST APIs",
      "3. Client-side development (React) for user interfaces",
      "4. Integration of front-end and back-end (Node.js)",
      "5. Implementing security measures",
      "6. Testing and debugging",
      "7. Deployment and maintenance",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Beehivve",
    icon: beehive,
    iconBg: "#383E56",
    date: "Apr 2022 - Oct 2023",
    points: [
      "Migrated a website from Handlebars to React + Firebase, enhancing scalability and maintainability.",
      "Technology Stack: React.js, JavaScript, Firebase, Node.js, Express.js, Redux.js, Git, React Hooks, styled-components",
      "High-level Tasks:",
      "1. Analyzed existing Handlebars website structure and data usage.",
      "2. Designed and implemented new architecture using React.js and Firebase.",
      "3. Implemented state management with Redux.js and managed component state and logic with React Hooks.",
      "4. Styled components using styled-components.",
      "5. Developed back-end using Node.js and Express.js to provide REST APIs.",
      "6. Integrated front-end and back-end using Firebase as the database.",
      "7. Utilized Git for version control and development process management.",
      "8. Tested migrated website for functionality.",
      "9. Deployed website to live environment and continue maintenance.",
    ],
  },
  {
    title: "Flight Attendant",
    company_name: "Emirates Airlines",
    icon: em,
    iconBg: "#E6DEDD",
    date: "Sep 2016 - Apr 2021",
    points: [
      "Welcoming passengers: Making passengers feel welcome as they board the plane",
      "Assisting passengers: Helping passengers with luggage, special needs, and other requests",
      "Providing service: Serving and refilling beverages, distributing items, and answering questions",
      "Demonstrating safety: Enforcing safety measures before, during, and after takeoff, and demonstrating emergency procedures",
      "Maintaining comfort: Ensuring passenger comfort throughout the flight",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "It was a pleasure working with Zoran. He worked efficiently and independently. Additionally he is a great team player with a positive attitude. So meetings with him were always productive and fun.",
    name: "Elisabeth Keck",
    designation: "CTO",
    company: "Beehive",
    image:
      "https://media.licdn.com/dms/image/C5603AQF60WLF90q42Q/profile-displayphoto-shrink_800_800/0/1519407545366?e=1726099200&v=beta&t=n85c31QAb2PKmbEZiQU2_iEZN73Rf_N71ZZjI8oJy4I",
  },
];

const projects = [
  {
    name: "Employee CRUD management",
    description:
      "This project involves building an Employee CRUD (Create, Read, Update, Delete) management system using JavaScript, React.js for the frontend, Node.js with Mongoose for the backend, and Redux Toolkit for state management. It allows seamless management of employee data, enabling functionalities such as adding new employees, viewing employee details, updating information, and deleting records.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ZoranUTF8/react-bootstrap-website",
    live_code_link: "https://react-bootstrap-website-zoran-janjic.netlify.app",
  },
  {
    name: "Job tracking",
    description:
      "The Job Tracking application utilizes JavaScript, React.js, Node.js, and Mongoose to manage and visualize job application statuses through interactive charts. It provides functionalities for users to track the progress of their job applications, including stages like applied, interview scheduled, offer received, and rejected. The app enhances job application management by offering clear visual insights into the application pipeline, aiding in better decision-making and organization throughout the job search process.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ZoranUTF8/noviPosao_MERN",
    live_code_link: "https://newjob.onrender.com",
  },
  {
    name: "Movie Search",
    description:
      "The Movie Search application is built using JavaScript and React.js, integrating with the TMDb API (The Movie Database). It allows users to search for movies and retrieve detailed information such as ratings, reviews, cast, and trailers. The app provides a user-friendly interface for browsing movies, making it easy to discover new releases, classics, and popular titles while leveraging real-time data from TMDb for up-to-date information.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Restapi",
        color: "blue-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/",
    live_code_link: "https://search-moviedb-react.netlify.app/",
  },
  {
    name: "Restaurant website",
    description:
      "The Restaurant Website project is developed using JavaScript and Bootstrap. It serves as an interactive platform where users can explore various aspects of the restaurant, such as menus, special offers, location, and contact information. The use of Bootstrap ensures a responsive design that adapts well to different devices, providing a seamless browsing experience. This project showcases the restaurant's offerings in a visually appealing and user-friendly manner, enhancing customer engagement and accessibility.",
    tags: [
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ZoranUTF8/fabrika_ukusa_webPage",
    live_code_link:
      "https://zoranutf8.github.io/fabrika_ukusa_webPage/index.html",
  },
  {
    name: "Weather forecast",
    description:
      "The Weather Forecast project is built using JavaScript and utilizes the OpenWeatherMap API. It allows users to check current weather conditions and forecasts for locations worldwide. This application fetches real-time weather data and displays it in a user-friendly interface, providing essential information such as temperature, humidity, wind speed, and weather conditions. It demonstrates practical use of API integration to deliver valuable weather updates to users efficiently.",
    tags: [
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/ZoranUTF8/WeatherApi",
  },
  {
    name: "Rest API",
    description:
      "The RESTful API project implemented using JavaScript and Node.js showcases the creation of a robust API server following REST principles. It includes endpoints for performing CRUD operations (Create, Read, Update, Delete) on resources, demonstrating efficient data handling and interaction through HTTP requests. The project emphasizes clean API design, scalability, and adherence to REST conventions for seamless integration with client applications.",
    tags: [
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
    ],
    image: rest,
    source_code_link: "https://github.com/ZoranUTF8/RESTapi_example",
    source_code_link: "https://restapi-example.onrender.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
