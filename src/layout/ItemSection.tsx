import { useEffect, useState } from "react";
import { ItemContainer } from "./styles";

interface ItemSectionProps {
  text: string;
  active: boolean;
}

export default function ItemSection({ text, active }: ItemSectionProps) {
  return (
    <ItemContainer
      className={`${
        active ? "text-text md:text-base md:font-medium" : "md:text-sm"
      } flex text-xl font-medium`}
    >
      <div
        className={`${
          active ? "w-12 h-[1.5px] bg-text" : "w-8 h-[1px]"
        } bg-text2`}
      ></div>
      <div>{text}</div>
    </ItemContainer>
  );
}
