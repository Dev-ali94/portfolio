
import { assests } from "../assets/assets";
export const projects = [
    {
      id: 1,
      slug: "my-protfolio",
      hero: {
        image: assests.arrow_icon,
        title: "Awesome Project",
        subtitle: "A modern web application built with React and Node.js",
        button1: "https://github.com/example",
        button2: "https://example.com",
      },
      timeline: [
        { title: "Planning", subtitle: "Initial research", date: "Jan 2025", category: "complete" },
        { title: "Development", subtitle: "Core features", date: "Feb 2025", category: "progress" },
      ],
      features: [
        { title: "Authentication", subtitle: "Secure login/logout", image: "https://via.placeholder.com/50" },
        { title: "Dashboard", subtitle: "Interactive UI", image: "https://via.placeholder.com/50" },
      ],
      projectProcess: [
        {
          phase: "Design",
          duration: "2 weeks",
          description: "Wireframes, UI/UX design",
          tools: ["Figma", "Adobe XD"],
          image: "https://via.placeholder.com/60",
          catogre: "left",
        },
        {
          phase: "Development",
          duration: "4 weeks",
          description: "Frontend + Backend integration",
          tools: ["React", "Node.js", "MongoDB"],
          image: "https://via.placeholder.com/60",
          catogre: "right",
        },
      ],
      technicalstack: [
        { title: "React", subtitle: "Frontend framework", image: "https://via.placeholder.com/50" },
        { title: "Node.js", subtitle: "Backend runtime", image: "https://via.placeholder.com/50" },
      ],
      projectgallery: [
        { image: "https://via.placeholder.com/400x300" },
        { image: "https://via.placeholder.com/400x300" },
      ],
    },
  ];