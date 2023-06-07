import React, { SetStateAction, useEffect, useRef, useState } from "react";

import SceneContainer from "./SceneContainer";

interface DescriptionProps {
  clientScrollY: number;
  setClientHeight: React.Dispatch<SetStateAction<number[]>>;
  ratio: number;
}
type ScrollEventInfo = [number, number, { start: number; end: number }];
type EventInfo = {
  opacity_in: ScrollEventInfo;
  opacity_out: ScrollEventInfo;
  transform_in: ScrollEventInfo;
  transform_out: ScrollEventInfo;
};
interface InfoType {
  message_A: EventInfo;
  message_B: EventInfo;
  message_C: EventInfo;
  message_D: EventInfo;
}

const eventInfo: InfoType = {
  message_A: {
    opacity_in: [
      0,
      1,
      {
        start: 0.1,
        end: 0.2,
      },
    ],
    opacity_out: [
      1,
      0,
      {
        start: 0.25,
        end: 0.3,
      },
    ],
    transform_in: [
      -20,
      0,
      {
        start: 0.1,
        end: 0.2,
      },
    ],
    transform_out: [
      0,
      -20,
      {
        start: 0.25,
        end: 0.3,
      },
    ],
  },
  message_B: {
    opacity_in: [
      0,
      1,
      {
        start: 0.3,
        end: 0.4,
      },
    ],
    opacity_out: [
      1,
      0,
      {
        start: 0.45,
        end: 0.5,
      },
    ],
    transform_in: [
      -20,
      0,
      {
        start: 0.3,
        end: 0.4,
      },
    ],
    transform_out: [
      0,
      -20,
      {
        start: 0.45,
        end: 0.5,
      },
    ],
  },
  message_C: {
    opacity_in: [
      0,
      1,
      {
        start: 0.5,
        end: 0.6,
      },
    ],
    opacity_out: [
      1,
      0,
      {
        start: 0.65,
        end: 0.7,
      },
    ],
    transform_in: [
      -20,
      0,
      {
        start: 0.5,
        end: 0.6,
      },
    ],
    transform_out: [
      0,
      -20,
      {
        start: 0.65,
        end: 0.7,
      },
    ],
  },
  message_D: {
    opacity_in: [
      0,
      1,
      {
        start: 0.7,
        end: 0.8,
      },
    ],
    opacity_out: [
      1,
      0,
      {
        start: 0.85,
        end: 0.9,
      },
    ],
    transform_in: [
      -20,
      0,
      {
        start: 0.7,
        end: 0.8,
      },
    ],
    transform_out: [
      0,
      -20,
      {
        start: 0.85,
        end: 0.9,
      },
    ],
  },
};

const Description1 = ({ clientScrollY, setClientHeight, ratio }: DescriptionProps) => {
  const [currentHeight, setCurEentHeigth] = useState(0);

  // 외부 파일로 옮길 예정
  const scrollEvent = (section_info: ScrollEventInfo) => {
    const eventStart = section_info[2].start * currentHeight;
    const eventEnd = section_info[2].end * currentHeight;

    const eventHeight = eventEnd - eventStart;

    let rv = 0;
    if (clientScrollY >= eventStart && clientScrollY <= eventEnd) {
      rv = ((clientScrollY - eventStart) / eventHeight) * (section_info[1] - section_info[0]) + section_info[0];
    } else if (clientScrollY < eventStart) rv = section_info[0];
    else if (clientScrollY > eventEnd) rv = section_info[1];
    return rv;
  };
  let message_A_opacity;
  let message_A_translate;
  let message_B_opacity;
  let message_B_translate;
  let message_C_opacity;
  let message_C_translate;
  let message_D_opacity;
  let message_D_translate;
  if (ratio <= 0.22) {
    message_A_opacity = scrollEvent(eventInfo.message_A.opacity_in);
    message_A_translate = scrollEvent(eventInfo.message_A.transform_in);
  } else {
    message_A_opacity = scrollEvent(eventInfo.message_A.opacity_out);
    message_A_translate = scrollEvent(eventInfo.message_A.transform_out);
  }
  if (ratio <= 0.42) {
    message_B_opacity = scrollEvent(eventInfo.message_B.opacity_in);
    message_B_translate = scrollEvent(eventInfo.message_B.transform_in);
  } else {
    message_B_opacity = scrollEvent(eventInfo.message_B.opacity_out);
    message_B_translate = scrollEvent(eventInfo.message_B.transform_in);
  }
  if (ratio <= 0.62) {
    message_C_opacity = scrollEvent(eventInfo.message_C.opacity_in);
    message_C_translate = scrollEvent(eventInfo.message_C.transform_in);
  } else {
    message_C_opacity = scrollEvent(eventInfo.message_C.opacity_out);
    message_C_translate = scrollEvent(eventInfo.message_C.transform_out);
  }
  if (ratio <= 0.82) {
    message_D_opacity = scrollEvent(eventInfo.message_D.opacity_in);
    message_D_translate = scrollEvent(eventInfo.message_D.transform_in);
  } else {
    message_D_opacity = scrollEvent(eventInfo.message_D.opacity_out);
    message_D_translate = scrollEvent(eventInfo.message_D.transform_out);
  }

  useEffect(() => {
    setClientHeight((pre: number[]) => {
      const newArr = [...pre];
      newArr[0] = currentHeight;
      return newArr;
    });
  }, [currentHeight, setClientHeight]);
  return (
    <SceneContainer heightNum={5} currentHeight={(height) => setCurEentHeigth(height)}>
      <h1 className="relative text-[4rem] -top-[10vh] lg:text-[9vw] font-medium flex items-center justify-center">
        iPhone 13 Pro
      </h1>
      <div
        className="sticky-elem main-message left-0 leading-snug w-full"
        style={{ opacity: `${message_A_opacity}`, transform: `translate3d(0,${message_A_translate}%,0)` }}
      >
        <p className="w-fulltext-center">프로 그 이상</p>
      </div>
      <div
        className="sticky-elem main-message left-0 leading-snug w-full"
        style={{ opacity: `${message_B_opacity}`, transform: `translate3d(0,${message_B_translate}%,0)` }}
      >
        <p className="w-fulltext-center">
          스피드는
          <br /> 집안내력
        </p>
      </div>
      <div
        className="sticky-elem main-message w-full left-0 leading-snug"
        style={{ opacity: `${message_C_opacity}`, transform: `translate3d(0,${message_C_translate}%,0)` }}
      >
        <p className="w-full text-center">
          그 어떤 스마트폰 글래스보다
          <br /> 더 견고한 소재
        </p>
      </div>
      <div
        className="sticky-elem main-message left-0 leading-snug"
        style={{ opacity: `${message_D_opacity}`, transform: `translate3d(0,${message_D_translate}%,0)` }}
      >
        <p className="w-full text-center">
          격이 다른 카메라의
          <br /> 격이 다른 셀피
        </p>
      </div>
    </SceneContainer>
  );
};

export default React.memo(Description1);
