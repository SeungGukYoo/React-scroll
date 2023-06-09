import React, { SetStateAction, useEffect, useState } from "react";
import { DescriptionProps } from "../../../types/component";
import SceneContainer from "./SceneContainer";

const Description4 = ({ ratio, sceneInfo, setClientHeight, clientScrollY }: DescriptionProps) => {
  const [curentHeight, setCurEentHeigth] = useState(0);
  useEffect(() => {
    setClientHeight((pre: number[]) => {
      const newArr = [...pre];
      newArr[3] = curentHeight;
      return newArr;
    });
  }, [curentHeight]);

  return (
    <SceneContainer
      heightNum={5}
      display="flex"
      flexDirection="column"
      alignItems="center"
      currentHeight={(height) => setCurEentHeigth(height)}
    >
      <p className="max-w-[1024px] text-[2rem] text-gray-400 mx-auto">
        <strong className="text-black">A16 Bionic 칩</strong>
        <br />
        사진속 모든 것이 가장 아름답게
        <br />
        보이도록 해줍니다.
      </p>
      <p className="max-w-[1024px] text-[1.2rem] text-gray-400 px-1 mx-auto ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis architecto. Doloribus sit officia maiores
        quo ad magni dignissimos inventore, placeat hic. Eos ducimus assumenda id sed, tempore provident nemo accusamus
        similique eius quisquam maiores totam aspernatur blanditiis fugit laudantium delectus nisi. Perferendis eum
        totam pariatur qui voluptates sunt iste odio modi magnam voluptas, quidem explicabo? Tempore aperiam nobis sunt
        minus laudantium nisi est quos nostrum, saepe magni minima, aliquam esse, fugiat facere. Deleniti magnam
        repellendus perspiciatis cum ex similique accusantium! Sequi quia animi, culpa corporis magni rerum consectetur
        tempora aperiam repellat pariatur commodi facere, consequatur quae minima magnam fugit.
      </p>
    </SceneContainer>
  );
};

export default React.memo(Description4);
