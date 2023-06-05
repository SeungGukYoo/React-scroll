import React, { SetStateAction, useContext, useEffect, useState } from "react";

import SceneContainer from "./SceneContainer";

interface DescriptionProps {
  clientHeight: number[];
  setClientHeight: React.Dispatch<SetStateAction<number[]>>;
}

const Description1 = ({ clientHeight, setClientHeight }: DescriptionProps) => {
  const [curentHeight, setCurEentHeigth] = useState(0);

  useEffect(() => {
    setClientHeight((pre: number[]) => {
      const newArr = [...pre];
      newArr[0] = curentHeight;
      return newArr;
    });
  }, [curentHeight]);
  return (
    <SceneContainer heightNum={5} currentHeight={(height) => setCurEentHeigth(height)}>
      <h1 className="relative text-[4rem] -top-[10vh]  lg:text-[9vw] font-medium flex items-center justify-center">
        IPhone 13 Pro
      </h1>
      <div className="sticky-elem main-message left-0 leading-snug w-full">
        <p className="w-fulltext-center">프로 그 이상.</p>
      </div>
      <div className="sticky-elem main-message w-full left-0  leading-snug">
        <p className="w-full text-center">
          그 어떤 스마트폰 글래스보다
          <br /> 더 견고한 소재.
        </p>
      </div>
      <div className="sticky-elem main-message left-0 leading-snug">
        <p className="w-full text-center">
          격이 다른 카메라의
          <br /> 격이 다른 셀피.
        </p>
      </div>
    </SceneContainer>
  );
};

export default Description1;
