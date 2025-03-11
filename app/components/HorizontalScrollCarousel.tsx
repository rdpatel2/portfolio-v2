import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="bg-transparent" style={{ borderRadius: "50px" }}>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]); // Change this to make room for more

  return (
    <section
      ref={targetRef}
      className="relative h-[200vh] bg-transparent"
      style={{ borderRadius: "50px" }}
    >
      <div
        className="sticky top-0 flex h-screen items-center overflow-hidden"
        style={{ height: "65vh" }}
      >
        <motion.div
          style={{ x, willChange: "transform" }}
          className="flex gap-4"
        >
          {cards.map((card) => {
            return <ProjectCard card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

interface CardProps {
  card: {
    url: string;
    title: string;
    link: string;
    id: number;
  };
}

const ProjectCard = ({ card }: CardProps) => {
  return (
    <div
      key={card.id}
      className="group relative h-[300px] w-[300px] overflow-hidden bg-neutral-200"
      style={{ borderRadius: "50px" }}
    >
      <a href={card.link}>
        {/* Background image container */}
        <div className="absolute inset-0" style={{ borderRadius: "50px" }}>
          <div
            style={{
              backgroundImage: `url(${card.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "50px",
            }}
            className="h-full w-full transition-transform duration-300 group-hover:scale-110"
          ></div>
        </div>

        {/* Title container - disappears on hover */}
        <div className="absolute inset-0 z-10 grid place-content-center transition-all duration-300 group-hover:opacity-0 group-hover:invisible">
          <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-sm">
            {card.title}
          </p>
        </div>
      </a>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "/assets/chess.jpg",
    title: "Chess Mate",
    link: "https://github.com/rdpatel2/ChessAnalysis",
    id: 1,
  },
  {
    url: "/assets/dividend-calc.png",
    title: "Dividend Calc",
    link: "https://github.com/rdpatel2/Dividend-Calculator",
    id: 2,
  },
  {
    url: "/assets/web-dev.jpg",
    title: "R1649 Website",
    link: "https://main.d2m2suroqkuiz4.amplifyapp.com/dashboard-pages/contact-list",
    id: 3,
  },
];
