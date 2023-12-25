import { ReactNode } from "react";
import { LeftContainer } from "./styles";
import ItemSection from "./ItemSection";
import Icon from "@/components/Icon";
import sosmed from "./sosmed.json";
import Link from "next/link";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <LeftContainer className="px-32 flex flex-col justify-around">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-medium">
            Muhammad <span className="font-bold">Fadli</span> Hasan
          </h1>
          <h2 className="text-xl font-medium">
            Experienced Front-end & Mobile Engineer
          </h2>
          <div className="text-text2">
            I build exceptional and accessible digital experiences for the web &
            mobile
          </div>
        </div>
        <div className="text-text2 flex flex-col gap-3">
          <ItemSection text="ABOUT" active />
          <ItemSection text="EXPERIENCES" active={false} />
          <ItemSection text="PROJECTS" active={false} />
        </div>
        <div className="flex gap-5">
          {sosmed.map((e) => (
            <Link key={e.name} href={e.link} target="_blank">
              <Icon
                name={e.name}
                className="hover:text-text text-text2 cursor-pointer duration-100"
              />
            </Link>
          ))}
        </div>
      </LeftContainer>
      <div className="flex">
        <div className="basis-1/2"></div>
        <div className="basis-1/2">{children}</div>
      </div>
    </>
  );
}
