import Icon from "@/components/Icon";
import { ResumeContainer } from "./styles";

export default function Resume() {
  return (
    <ResumeContainer
      onClick={() => {
        window.open(
          "https://drive.google.com/drive/folders/1Wuskt7x406hD_lVFT7xdA8t8hmgKYUSw?usp=sharing"
        );
      }}
      className="flex hover:text-text mb-20 gap-2 text-lg font-semibold cursor-pointer w-fit"
    >
      <div className="resume relative">View Full Resume</div>
      <Icon name="arrow-right" size={20} />
    </ResumeContainer>
  );
}
