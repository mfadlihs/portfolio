import { useEffect, useState } from "react";
import { ItemContainer } from "./styles";
import Link from "next/link";

interface ItemSectionProps {
  text: string;
  active: boolean;
  id: string;
}

export default function ItemSection({ text, active, id }: ItemSectionProps) {
  return (
    <Link href={`#${id}`}>
      <ItemContainer
        className={`${
          active ? "text-text md:text-base md:font-medium" : "md:text-sm"
        } flex text-xl font-medium w-fit`}
      >
        <div
          className={`${
            active ? "w-12 h-[1.5px] bg-text" : "w-8 h-[1px]"
          } bg-text2`}
        ></div>
        <div>{text}</div>
      </ItemContainer>
    </Link>
  );
}
