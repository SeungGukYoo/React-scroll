import React, { SetStateAction, useEffect, useState } from "react";

import SceneContainer from "./SceneContainer";

interface DescriptionProps {
  clientScrollY: number;
  setClientHeight: React.Dispatch<SetStateAction<number[]>>;
  ratio: number;
}
type InfoType = [number, number, { start: number; end: number }];

const eventInfo: InfoType = [0, 1, { start: 0.3, end: 0.4 }];

const Description1 = ({ clientScrollY, setClientHeight, ratio }: DescriptionProps) => {
  const [currentHeight, setCurEentHeigth] = useState(0);

  // start 픽셀 높이값,end 픽셀 높이값
  const eventStart = eventInfo[2].start * currentHeight;
  const eventEnd = eventInfo[2].end * currentHeight;
  const eventHeight = eventEnd - eventStart;
  // console.log(clientScrollY / currentHeight);
  // console.log(eventStart, eventEnd, clientScrollY);

  let rv = 0;

  if (clientScrollY >= eventStart && clientScrollY <= eventEnd) {
    rv = ((clientScrollY - eventStart) / eventHeight) * (eventInfo[1] - eventInfo[0]) + eventInfo[0];
  } else if (clientScrollY < eventStart) rv = eventInfo[0];
  else if (clientScrollY > eventEnd) rv = eventInfo[1];

  useEffect(() => {
    setClientHeight((pre: number[]) => {
      const newArr = [...pre];
      newArr[0] = currentHeight;
      return newArr;
    });
  }, [currentHeight]);
  return (
    <SceneContainer heightNum={5} currentHeight={(height) => setCurEentHeigth(height)}>
      <h1 className="relative text-[4rem] -top-[10vh]  lg:text-[9vw] font-medium flex items-center justify-center">
        IPhone 13 Pro
      </h1>
      <div className="sticky-elem main-message left-0 leading-snug w-full">
        <p className="w-fulltext-center">프로 그 이상.</p>
      </div>
      <div className="sticky-elem main-message w-full left-0 leading-snug" style={{ opacity: `${rv}` }}>
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
