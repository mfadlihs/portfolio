import Link from "next/link";
import { CardContainer } from "../../experiences/ExperienceCard/styles";
import { ProjectType } from "@/types/project";
import Icon from "@/components/Icon";

interface ProjectCardProps {
  data: ProjectType;
  active: 0 | 1 | 2;
  onUpdate: (id: number) => void;
  handleActive: (condition: boolean) => void;
}

export default function ProjectCard({
  data,
  active,
  onUpdate,
  handleActive,
}: ProjectCardProps) {
  const handleMouseOver = () => {
    onUpdate(data.id);
    handleActive(true);
  };

  const handleMouseOut = () => {
    handleActive(false);
  };

  return (
    <Link
      href={data.link}
      target="_blank"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      data-aos={"fade-left"}
    >
      <CardContainer
        className={`${
          active == 2 && "opacity-50"
        } px-4 md:px-6 py-4 md:py-5 rounded-xl hover:bg-[#5ECED410] cursor-pointer hover:text-text"`}
      >
        <div className="flex gap-x-8 gap-y-2 flex-col md:flex-row">
          <div className="basis-[25%]">
            <img
              src={data.thumbnail}
              className="aspect-video object-cover object-center w-full block"
            />
          </div>
          <div className="basis-[75%]">
            <div className="flex gap-2 items-end text-text title font-bold">
              <div className="text-lg ">{data.title}</div>
              <Icon name="arrow-up-right" size={12} />
            </div>
            {data.subtitle && (
              <div className="text-base text-text">{data.subtitle}</div>
            )}
            <div className="text-sm mb-2">{data.timestamp}</div>
            <div className="text-sm mb-3">{data.description}</div>
            {data.github && (
              <div
                onClick={() => {
                  window.open(data.github, "_blank");
                }}
                className="flex mb-3 items-end gap-x-2 text-text hover:text-secondary font-medium"
              >
                <Icon name="github" size={12} />
                <div className="text-sm">Github</div>
              </div>
            )}
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
