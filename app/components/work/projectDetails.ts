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
        name: "Eldora UI",
        description:
            "A sleek, modern UI library for React, inspired by the elegance of nature.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/dahnielson/eldoraui",
        demo: "https://www.eldoraui.site/",
        image: "/projects/eldoraui.png",
        available: true,
    },
    {
        id: 1,
        name: "VR Mall",
        description:
            "A virtual reality shopping experience, allowing users to browse and purchase products in a 3D environment.",
        technologies: [SiCplusplus, SiWebgl, SiZig, SiRust, SiNeovim],
        techNames: ["C++", "WebGL", "Zig", "Rust", "Neovim"],
        techLinks: ["https://isocpp.org/", "https://www.khronos.org/webgl/", "https://ziglang.org/", "https://www.rust-lang.org/", "https://neovim.io/"],
        github: "https://github.com/dahnielson/Vrmall",
        demo: "https://vrmall.dahnielson.com/",
        image: "/projects/vrmall.png",
        available: true,
    },
    {
        id: 2,
        name: "Project 3",
        description:
            "A short description of the project, what it does, and why it's cool.",
        technologies: [SiGithub],
        techNames: ["GitHub"],
        techLinks: ["https://github.com/"],
        github: "",
        demo: "",
        image: "",
        available: false,
    },
];
