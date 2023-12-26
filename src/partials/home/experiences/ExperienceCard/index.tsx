import Icon from "@/components/Icon";
import { ExperienceType } from "@/types/experience";
import { CardContainer } from "./styles";
import Link from "next/link";

export default function ExperienceCard({
  data,
  active,
  onUpdate,
  handleActive,
}: {
  data: ExperienceType;
  active: 0 | 1 | 2;
  onUpdate: (id: number) => void;
  handleActive: (condition: boolean) => void;
}) {
  const handleMouseOver = () => {
    onUpdate(data.id);
    handleActive(true);
  };

  const handleMouseOut = () => {
    handleActive(false);
  };

  return (
    <Link
      href={data.linkCompany}
      target="_blank"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <CardContainer
        className={`${
          active == 2 && "opacity-50"
        } px-4 md:px-6 py-4 md:py-5 rounded-xl hover:bg-[#5ECED410] cursor-pointer hover:text-text"`}
      >
        <img src={data.logo} className="h-7 w-32 object-cover mb-2" />
        <div className="flex gap-x-8 gap-y-2 flex-col md:flex-row">
          <div className="text-sm basis-[25%]">{data.timestamp}</div>
          <div className="basis-[75%]">
            <div className="flex gap-2 items-end text-text title font-bold mb-2">
              <div className="text-lg ">
                {data.title} · {data.company}
              </div>
              <Icon name="arrow-up-right" size={12} />
            </div>
            <div className="text-sm mb-3">{data.description}</div>
            <div className="flex flex-wrap mb-3 gap-x-3 gap-y-1 items-center">
              {data.projects.map((e) => (
                <div
                  onClick={() => {
                    window.open(e.link, "_blank");
                  }}
                  key={e.link}
                  className="flex items-center gap-1 text-text hover:text-secondary font-medium"
                >
                  <Icon name="link" size={12} />
                  <div className="text-sm">{e.title}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-[6px] gap-y-1 items-center">
              {data.skills.map((e) => (
                <div
                  key={e}
                  className="flex items-center gap-1 bg-teal-400/10 rounded-2xl px-3 py-1 text-secondary text-xs font-medium"
                >
                  <div className="">{e}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContainer>
    </Link>
  );
}
