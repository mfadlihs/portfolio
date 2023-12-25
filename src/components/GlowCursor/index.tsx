// GlowCursor.tsx
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

interface Position {
  x: number;
  y: number;
}

const GlowContainer = styled.div`
  position: absolute;
  pointer-events: none;
  z-index: 9999;
`;

const GlowCursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <GlowContainer
      className="!transition-none"
      style={{ left: position.x, top: position.y }}
    >
      <div className="glow-effect"></div>
    </GlowContainer>
  );
};

export default GlowCursor;
