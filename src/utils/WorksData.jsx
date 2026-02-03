import weatherImg from "../assets/images/weather.png";
import newsApp from "../assets/images/newsapp.png";
import todoImg from "../assets/images/todo.png";
import veganfoodImg from "../assets/images/veganfood.png";
import portfolioImg from "../assets/images/portfolio.png";
import techmarketImg from "../assets/images/tectmarket.png";
import tecttutorials from "../assets/images/tutorials.png";
import nft from "../assets/images/nft.png";
import blogs from "../assets/images/blogs.png";

const data = [
  {
    name: "Trader's Blog",
    href: `https://blogs-ivory-five.vercel.app/`,
    description:
      "Full-stack blogging platform featuring rich text editing (TipTap), category-based content management, and real-time search with infinite scroll pagination. Includes an admin dashboard with analytics charts (Recharts) for tracking views and engagement, plus a comments system with view tracking.",
    img: blogs,
    // backgound: "linear-gradient(to right,#748bf0, #3A40D1)",
  },
  {
    name: "NeoTreasure",
    href: `https://www.neotreasure.xyz/`,
    description:
      "Developed a full-stack Web3 NFT marketplace platform featuring NFT minting, trading, and collection management, integrated with Ethereum blockchain using ethers.js. Built an interactive gaming ecosystem with prediction and coin-flip games, complete with admin dashboard for user management, analytics, and transaction monitoring.",
    img: nft,
    // backgound: "linear-gradient(to right,#748bf0, #3A40D1)",
  },
  {
    name: "Techie-Tutorials",
    href: `https://tech-tutorial-tan.vercel.app/`,
    description:
      "Developed a MERN stack-based tutorial platform featuring course browsing, topic management, and an admin dashboard. Implemented rich text editing with syntax highlighting and responsive design for optimal learning experience across devices.",
    img: tecttutorials,
    // backgound: "linear-gradient(to right,#748bf0, #3A40D1)",
  },
  {
    name: "Tech-market",
    href: `https://tech-market-0cds.onrender.com/`,
    description:
      "A full-stack Tech market ecommerce application built with React.js and Tailwind CSS on the frontend, powered by a Node.js + Express backend and MongoDB for data storage and for payment Stripe . Users can browse, search, and manage pelectronic products with features like user authentication, favorites, and dynamic content updates. and securely complete transactions using Stripe Payment Gateway for a seamless checkout experience.",
    img: techmarketImg,
    // backgound: "linear-gradient(to right,#748bf0, #3A40D1)",
  },
  {
    name: "Vegan-food",
    href: `https://vegan-food-webapp.onrender.com/`,
    description:
      "A full-stack vegan food application built with React.js and CSS on the frontend, powered by a Node.js + Express backend and MongoDB for data storage and for payment . Users can browse, search, and manage plant-based recipes with features like user authentication, favorites, and dynamic content updates. and securely complete transactions using Stripe Payment Gateway for a seamless checkout experience.",
    img: veganfoodImg,
    // backgound: "linear-gradient(to right, #086C29, #FDAB01)",
  },
   {
    name: "Personal Portfolio",
    href:`https://ankitportfolio-qcrf.onrender.com/`,
    description:
      "A personal portfolio website built using React and styled with modern CSS libraries. It showcases about, projects, skills, and contact information with a responsive design and smooth user experience, leveraging components and hooks for efficient development.",
    img: portfolioImg,
    // backgound: "linear-gradient(to right, #141628,#e66182)",
  },
  {
    name: "To-Do List",
    description:
      "A simple yet powerful task management web app built with React.js for dynamic UI updates, styled using custom CSS and Bootstrap for a clean, responsive layout. It features task creation, editing, deletion, and completion toggles—all managed with React state and local storage for persistent user experience.",
    href: `https://mytodos-ankit.web.app/`,
    img: todoImg,
    // backgound: "linear-gradient(to right, #284A73, #4A848D)",
  },
  {
    name: "Weather-Application",
    description:
      "This Weather Web Application is a sleek and responsive tool that allows users to check real-time weather information for any city in the world. Built using React.js for dynamic UI rendering, styled with Tailwind CSS for modern and responsive design, and powered by the OpenWeather API to fetch accurate and up-to-date weather data, this app combines functionality and user experience in a lightweight package.",
    href: `https://weather-app-ruddy-phi-60.vercel.app/`,
    img: weatherImg,
    // backgound: "linear-gradient(to right, #1e3a8a, #3b82f6)",
  },
  {
    name: "NewsPortal",
    description:
      "NewsPortal is a modern web application built using the React library for dynamic UI rendering and Tailwind CSS for sleek, responsive styling. It fetches real-time news data from the News API, allowing users to explore the latest headlines across various categories. The app provides a clean, user-friendly interface with fast loading and smooth navigation for an optimal news-reading experience.",
    href: `https://news-app-865t.onrender.com/`,
    img: newsApp,
    // backgound: "linear-gradient(to right, #DBEAFE, #F3F4F6)",
  },
];

export default data;
