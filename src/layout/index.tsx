import { ReactNode, useEffect, useState } from "react";
import { LeftContainer } from "./styles";
import ItemSection from "./ItemSection";
import Icon from "@/components/Icon";
import sosmed from "./sosmed.json";
import Link from "next/link";

export default function Layout({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const sections = ["about", "experience", "projects"];

  const [currentSection, setCurrentSection] = useState<string>("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Menentukan di mana pengguna berada berdasarkan posisi scroll
      let section = currentSection;
      sections.forEach((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const offsetTop = sectionElement.offsetTop;
          const offsetBottom = offsetTop + sectionElement.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            section = sectionId;
          }
        }
      });

      // Memperbarui state dengan bagian yang sedang dilihat
      setCurrentSection(section);
    };

    // Menambahkan event listener untuk scroll
    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    console.log(currentSection);
  }, [currentSection]);

  return (
    <>
      <LeftContainer className="md:fixed md:px-16 lg:px-24 xl:px-32 h-screen sm:px-24 px-8 md:h-auto flex flex-col justify-around text-text">
        <div className="flex flex-col gap-6 md:gap-3 text-center md:text-left">
          <h1 className="md:text-3xl lg:text-4xl text-4xl font-medium">
            Muhammad <span className="font-bold">Fadli</span> Hasan
          </h1>
          <h2 className="md:text-lg lg:text-xl text-xl font-medium">
            Experienced Front-end & Mobile Engineer
          </h2>
          <div className="text-text2 md:text-sm text-base lg:text-base">
            I build exceptional and accessible digital experiences for the web &
            mobile
          </div>
        </div>
        <div className="text-text2 flex flex-col gap-3">
          <ItemSection
            id="about"
            text="ABOUT"
            active={currentSection == "about"}
          />
          <ItemSection
            text="EXPERIENCES"
            id="experience"
            active={currentSection == "experience"}
          />
          <ItemSection
            text="PROJECTS"
            id="projects"
            active={currentSection == "projects"}
          />
        </div>
        <div className="flex gap-5 md:justify-start justify-center">
          {sosmed.map((e) => (
            <Link key={e.name} href={e.link} target="_blank">
              <Icon
                name={e.name}
                className="hover:text-text text-text2 cursor-pointer duration-100"
                size={isMobile ? 40 : 24}
              />
            </Link>
          ))}
        </div>
      </LeftContainer>
      <div className="md:flex">
        <div className="basis-1/2"></div>
        <div className="basis-1/2">{children}</div>
      </div>
    </>
  );
}
