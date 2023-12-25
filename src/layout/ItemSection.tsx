import { ItemContainer } from "./styles";

interface ItemSectionProps {
  text: string;
  active: boolean;
}

export default function ItemSection({ text, active }: ItemSectionProps) {
  return (
    <ItemContainer
      className={`${active && "text-text"} flex ${
        active ? "text-base font-medium" : "text-sm"
      }`}
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
