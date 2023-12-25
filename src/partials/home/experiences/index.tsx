import { useEffect, useState } from "react";
import ExperienceCard from "./ExperienceCard";
import data from "./data.json";

export default function Experience() {
  const [id, setId] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <div className="-mx-8 mb-20 flex flex-col gap-y-3">
      {data.map((e) => (
        <ExperienceCard
          active={!active ? 0 : active && id == e.id ? 1 : 2}
          onUpdate={(e) => {
            setId(e);
          }}
          handleActive={(e) => {
            setActive(e);
          }}
          data={e}
          key={e.company}
        />
      ))}
    </div>
  );
}
