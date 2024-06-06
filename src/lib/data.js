import { Twitter, Codepen } from "@/components/icons";
import { AiFillTwitterCircle } from "react-icons/ai";
import { cn } from "./utils";

export const projectsData = [
  {
    title: "3D CSS Letter Transition",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "https://assets.codepen.io/383755/internal/screenshots/pens/xxVJZwo.default.png?fit=cover&format=auto&ha=true&height=540&quality=75&v=2&version=1569360312&width=960",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#BBACAF",
    classNames: cn("invert"),
  },
  {
    title: "Generative Paterns 8",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for 'The tawny rocks').",
    src: "https://assets.codepen.io/383755/internal/screenshots/pens/eYOXOdB.default.png?fit=cover&format=auto&ha=true&height=540&quality=75&v=2&version=1569360312&width=960",
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#977F6D",
    ImgClass: "shift",
  },
  {
    title: "NES Subscribe",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    src: "https://assets.codepen.io/383755/internal/screenshots/pens/OJVJJoj.default.png?fit=cover&format=auto&ha=true&height=540&quality=75&v=2&version=1569360312&width=960",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D",
    ImgClass: "inner",
  },
  {
    title: "CSS Neumorphic Toggle",
    description:
      "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
    src: "https://assets.codepen.io/383755/internal/screenshots/pens/YzXOBEN.default.png?fit=cover&format=auto&ha=true&height=540&quality=75&v=2&version=1569360312&width=960",
    link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
    color: "#B62429",
    ImgClass: "light",
  },
  {
    title: "Take me on",
    description:
      "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.",
    src: "https://assets.codepen.io/383755/internal/screenshots/pens/qBZWVmO.custom.png",
    link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
    color: "#88A28D",
    ImgClass: "inner",
  },
  {
    title: "Mark Rammers",
    description:
      "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.",
    src: "https://assets.codepen.io/383755/internal/screenshots/pens/qBZWVmO.custom.png",

    link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
    color: "#88A28D",
    ImgClass: "light",
  },
];

export const socials = [
  {
    label: "Twitter",
    // icon: AiFillTwitterCircle,
    icon: Twitter,
    href: "https://twitter.com",
  },
  {
    label: "Codepen",
    icon: Codepen,
    href: "https://codepen.io/cobra_winfrey",
  },
];
