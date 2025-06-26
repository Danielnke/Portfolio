import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiWebgl,
    SiZig
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "AI Agents",
        description:
            "Custom-built agents to handle complex tasks and workflows.",
        technologies: [],
        techNames: [],
        techLinks: [],
        github: "",
        demo: "",
        image: "",
        available: true,
    },
    {
        id: 1,
        name: "AI-Powered Automations",
        description:
            "Streamlining business processes to increase efficiency.",
        technologies: [],
        techNames: [],
        techLinks: [],
        github: "",
        demo: "",
        image: "",
        available: true,
    },
    {
        id: 2,
        name: "AI Chatbots",
        description:
            "Intelligent, 24/7 customer support and lead generation.",
        technologies: [],
        techNames: [],
        techLinks: [],
        github: "",
        demo: "",
        image: "",
        available: true,
    },
    {
        id: 3,
        name: "AI Voice Assistants",
        description:
            "Voice-enabled solutions for enhanced user interaction.",
        technologies: [],
        techNames: [],
        techLinks: [],
        github: "",
        demo: "",
        image: "",
        available: true,
    },
    {
        id: 4,
        name: "AI-Driven Websites",
        description:
            "Creating or enhancing websites with AI capabilities.",
        technologies: [],
        techNames: [],
        techLinks: [],
        github: "",
        demo: "",
        image: "",
        available: true,
    },
];
