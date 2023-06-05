import React, { useEffect, useState } from "react";

type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
type AlignItems = "stretch" | "center" | "start" | "end";
type Display = "block" | "inline-block" | "none" | "flex" | "grid";

type Props = {
  heightNum: number;
  display?: Display;
  flexDirection?: FlexDirection;
  alignItems?: AlignItems;
  children: React.ReactNode;
  currentHeight: (height: number) => void;
};

const SceneContainer = ({ heightNum, display, flexDirection, alignItems, children, currentHeight }: Props) => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const calcHeight = () => {
      const sceneHeight = window.innerHeight * heightNum;
      setHeight(sceneHeight);
      currentHeight(sceneHeight);
    };
    calcHeight();
    window.addEventListener("resize", calcHeight);
    return () => {
      window.removeEventListener("resize", calcHeight);
    };
  }, [heightNum, currentHeight]);

  const modifiedChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child as React.ReactElement, { height });
  });

  return (
    <section
      className={`relative w-full pt-[50vh] px-[0.1em]`}
      style={{
        height: `${height}px`,
        display: display,
        flexDirection: flexDirection,
        alignItems: alignItems,
      }}
    >
      {modifiedChildren}
    </section>
  );
};

export default SceneContainer;
