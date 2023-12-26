import HomeAbout from "./about";
import Experience from "./experiences";
import Projects from "./projects";

export default function HomePage() {
  return (
    <div className="sm:px-24 md:px-0 px-8 xl:pr-52 lg:pr-36 md:pr-16 py-20">
      <HomeAbout />
      <Experience />
      <Projects />
    </div>
  );
}
