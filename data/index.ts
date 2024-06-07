import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  /* { name: "Testimonials", link: "#testimonials" }, */
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I'm constantly learning and challenging myself",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for design.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a ticketing platform for festivals",
    description: "Roadmap",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Brainwave",
    des: "Landing page for a company specialized in UI solutions, fully responsive and with a modern design.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://brainwave-suvsj07wq-joanas-projects-36679726.vercel.app/",
  },
  {
    id: 2,
    title: "ravelens",
    des: "Social media for ravers and festival goers who want to share their best memories.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://ravelens.netlify.app/",
  },
  {
    id: 3,
    title: "DJ Website",
    des: "[Under developement ]Showcase website for an internacional DJ, with all the information promoters need.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
  },
  {
    id: 4,
    title: "Festival CREW",
    des: "Landing page for a Festival Community to list all the upcoming events.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Developer intern",
    desc: "Internship as a Developer creating data visualization apps with Angular.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Fullstack Developer",
    desc: "Designed and developed web apps for the Port of Valencia, using Angular and SpringBoot.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Developer",
    desc: "Assisting people with their websites and services needs.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "UX/UI Designer",
    desc: "Creating awesome designs for highly customed projects.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/joanacastello",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/joanaacastello/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/joana-castello/",
  },
];
