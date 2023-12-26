import { useEffect, useState } from "react";
import ExperienceCard from "./ExperienceCard";
import data from "./data.json";
import Resume from "./Resume";

export default function Experience() {
  const [id, setId] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <div>
      <div className="-mx-3 md:-mx-8 flex flex-col gap-y-3">
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
      <Resume />
    </div>
  );
}
