import React, { useEffect, useRef, useState } from "react";

import { DescriptionProps, EventInfo } from "../../../types/component";

import { useSharedValuesContext } from "../../context";
import ScrollEvent from "../../util/scrollUtil";
import SceneContainer from "./SceneContainer";

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

const Description1 = ({ setClientHeight }: DescriptionProps) => {
  const [currentHeight, setCurEentHeigth] = useState(0);
  const { state } = useSharedValuesContext();
  const [ratio, setRatio] = useState(0);

  let scrollValue = useRef(0);
  let message_A_opacity = 0;
  let message_A_translate = 0;
  let message_B_opacity = 0;
  let message_B_translate = 0;
  let message_C_opacity = 0;
  let message_C_translate = 0;
  let message_D_opacity = 0;
  let message_D_translate = 0;

  if (state.sceneInfo === 0) {
    scrollValue.current = state.scrollValue - state.prevHeight;
    if (ratio <= 0.22) {
      message_A_opacity = ScrollEvent(eventInfo.message_A.opacity_in, currentHeight, scrollValue.current);
      message_A_translate = ScrollEvent(eventInfo.message_A.transform_in!, currentHeight, scrollValue.current);
    } else {
      message_A_opacity = ScrollEvent(eventInfo.message_A.opacity_out, currentHeight, scrollValue.current);
      message_A_translate = ScrollEvent(eventInfo.message_A.transform_out!, currentHeight, scrollValue.current);
    }
    if (ratio <= 0.42) {
      message_B_opacity = ScrollEvent(eventInfo.message_B.opacity_in, currentHeight, scrollValue.current);
      message_B_translate = ScrollEvent(eventInfo.message_B.transform_in!, currentHeight, scrollValue.current);
    } else {
      message_B_opacity = ScrollEvent(eventInfo.message_B.opacity_out, currentHeight, scrollValue.current);
      message_B_translate = ScrollEvent(eventInfo.message_B.transform_in!, currentHeight, scrollValue.current);
    }
    if (ratio <= 0.62) {
      message_C_opacity = ScrollEvent(eventInfo.message_C.opacity_in, currentHeight, scrollValue.current);
      message_C_translate = ScrollEvent(eventInfo.message_C.transform_in!, currentHeight, scrollValue.current);
    } else {
      message_C_opacity = ScrollEvent(eventInfo.message_C.opacity_out, currentHeight, scrollValue.current);
      message_C_translate = ScrollEvent(eventInfo.message_C.transform_out!, currentHeight, scrollValue.current);
    }
    if (ratio <= 0.82) {
      message_D_opacity = ScrollEvent(eventInfo.message_D.opacity_in, currentHeight, scrollValue.current);
      message_D_translate = ScrollEvent(eventInfo.message_D.transform_in!, currentHeight, scrollValue.current);
    } else {
      message_D_opacity = ScrollEvent(eventInfo.message_D.opacity_out, currentHeight, scrollValue.current);
      message_D_translate = ScrollEvent(eventInfo.message_D.transform_out!, currentHeight, scrollValue.current);
    }
  }

  useEffect(() => {
    if (state.sceneInfo !== 0) return;
    setRatio((pre) => {
      let result = scrollValue.current / currentHeight;
      if (result < 0) result = 0;
      else if (result > 1) result = 1;
      pre = result;
      return pre;
    });
  }, [currentHeight, state.prevHeight, state.sceneInfo, state.scrollValue]);

  useEffect(() => {
    setClientHeight((pre: number[]) => {
      const newArr = [...pre];
      newArr[0] = currentHeight;
      return newArr;
    });
  }, [currentHeight, setClientHeight]);

  return (
    <SceneContainer heightNum={5} currentHeight={(height) => setCurEentHeigth(height)}>
      <h1 className="relative -top-[10vh] text-[4rem] lg:text-[8vw]  font-medium flex items-center justify-center">
        iPhone 13 Pro
      </h1>
      <div
        className="sticky-elem main-message left-0 leading-snug w-full  sm:text-[4rem] lg:text-[8vw] "
        style={{ opacity: `${message_A_opacity}`, transform: `translate3d(0,${message_A_translate}%,0)` }}
      >
        <p className="w-fulltext-center">프로 그 이상</p>
      </div>
      <div
        className="sticky-elem main-message left-0 leading-snug w-full   sm:text-[4rem] lg:text-[8vw] "
        style={{ opacity: `${message_B_opacity}`, transform: `translate3d(0,${message_B_translate}%,0)` }}
      >
        <p className="w-fulltext-center">
          스피드는
          <br /> 집안내력
        </p>
      </div>
      <div
        className="sticky-elem main-message w-full left-0 leading-snug   sm:text-[4rem] lg:text-[8vw] "
        style={{ opacity: `${message_C_opacity}`, transform: `translate3d(0,${message_C_translate}%,0)` }}
      >
        <p className="w-full text-center">
          그 어떤 스마트폰 글래스보다
          <br /> 더 견고한 소재
        </p>
      </div>
      <div
        className="sticky-elem main-message left-0 leading-snug   sm:text-[4rem] lg:text-[8vw] "
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
