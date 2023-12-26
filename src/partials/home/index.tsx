import HomeAbout from "./about";
import Experience from "./experiences";

export default function HomePage() {
  return (
    <div className="sm:px-24 px-8 xl:pr-52 lg:pr-36 md:pr-16 py-20">
      <HomeAbout />
      <Experience />
    </div>
  );
}
