import React, { useEffect, useRef, useState } from "react";
import { DescriptionProps, EventInfo } from "../../../types/component";
import { useSharedValuesContext } from "../../context";
import ScrollEvent from "../../util/scrollUtil";
import SceneContainer from "./SceneContainer";

interface InfoType {
  message_A: EventInfo;
  message_B: EventInfo;
  message_C: EventInfo;
  pin_B: EventInfo;
  pin_C: EventInfo;
}

const eventInfo: InfoType = {
  message_A: {
    opacity_in: [
      0,
      1,
      {
        start: 0.15,
        end: 0.2,
      },
    ],
    opacity_out: [
      1,
      0,
      {
        start: 0.3,
        end: 0.35,
      },
    ],
    transform_in: [
      20,
      0,
      {
        start: 0.15,
        end: 0.2,
      },
    ],
    transform_out: [
      0,
      -20,
      {
        start: 0.3,
        end: 0.35,
      },
    ],
  },
  message_B: {
    opacity_in: [
      0,
      1,
      {
        start: 0.5,
        end: 0.55,
      },
    ],
    opacity_out: [
      1,
      0,
      {
        start: 0.6,
        end: 0.65,
      },
    ],
    transform_in: [
      -20,
      0,
      {
        start: 0.5,
        end: 0.55,
      },
    ],
    transform_out: [
      0,
      -20,
      {
        start: 0.6,
        end: 0.65,
      },
    ],
  },
  message_C: {
    opacity_in: [
      0,
      1,
      {
        start: 0.72,
        end: 0.77,
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
        start: 0.72,
        end: 0.77,
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
  pin_B: {
    opacity_in: [
      0,
      1,
      {
        start: 0.5,
        end: 0.55,
      },
    ],
    opacity_out: [
      1,
      0,
      {
        start: 0.6,
        end: 0.65,
      },
    ],
    scale_in: [
      0.5,
      1,
      {
        start: 0.5,
        end: 0.55,
      },
    ],
  },
  pin_C: {
    opacity_in: [
      0,
      1,
      {
        start: 0.72,
        end: 0.77,
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
    scale_in: [
      0.5,
      1,
      {
        start: 0.72,
        end: 0.77,
      },
    ],
  },
};

const Description3 = ({ setClientHeight }: DescriptionProps) => {
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
  let pin_B_opacity = 0;
  let pin_B_scale = 0;
  let pin_C_opacity = 0;
  let pin_C_scale = 0;
  if (state.sceneInfo === 2) {
    scrollValue.current = state.scrollValue - state.prevHeight;
    if (ratio <= 0.32) {
      message_A_opacity = ScrollEvent(eventInfo.message_A.opacity_in, currentHeight, scrollValue.current);
      message_A_translate = ScrollEvent(eventInfo.message_A.transform_in!, currentHeight, scrollValue.current);
    } else {
      message_A_opacity = ScrollEvent(eventInfo.message_A.opacity_out, currentHeight, scrollValue.current);
      message_A_translate = ScrollEvent(eventInfo.message_A.transform_out!, currentHeight, scrollValue.current);
    }
    if (ratio <= 0.58) {
      message_B_opacity = ScrollEvent(eventInfo.message_B.opacity_in, currentHeight, scrollValue.current);
      message_B_translate = ScrollEvent(eventInfo.message_B.transform_in!, currentHeight, scrollValue.current);
      pin_B_opacity = ScrollEvent(eventInfo.pin_B.opacity_in, currentHeight, scrollValue.current);
      pin_B_scale = ScrollEvent(eventInfo.pin_B.scale_in!, currentHeight, scrollValue.current);
    } else {
      message_B_opacity = ScrollEvent(eventInfo.message_B.opacity_out, currentHeight, scrollValue.current);
      message_B_translate = ScrollEvent(eventInfo.message_B.transform_out!, currentHeight, scrollValue.current);
      pin_B_opacity = ScrollEvent(eventInfo.pin_B.opacity_out, currentHeight, scrollValue.current);
    }
    if (ratio <= 0.84) {
      message_C_opacity = ScrollEvent(eventInfo.message_C.opacity_in, currentHeight, scrollValue.current);
      message_C_translate = ScrollEvent(eventInfo.message_C.transform_in!, currentHeight, scrollValue.current);
      pin_C_opacity = ScrollEvent(eventInfo.pin_C.opacity_in, currentHeight, scrollValue.current);
      pin_C_scale = ScrollEvent(eventInfo.pin_C.scale_in!, currentHeight, scrollValue.current);
    } else {
      message_C_opacity = ScrollEvent(eventInfo.message_C.opacity_out, currentHeight, scrollValue.current);
      message_C_translate = ScrollEvent(eventInfo.message_C.transform_out!, currentHeight, scrollValue.current);
      pin_C_opacity = ScrollEvent(eventInfo.pin_C.opacity_out, currentHeight, scrollValue.current);
    }
  }

  useEffect(() => {
    if (state.sceneInfo !== 2) return;
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
      newArr[2] = currentHeight;
      return newArr;
    });
  }, [currentHeight, setClientHeight]);
  return (
    <SceneContainer heightNum={5} currentHeight={(height) => setCurEentHeigth(height)}>
      <div
        className=" top-[35vh] w-full sticky-elem flex items-center justify-center text-[3.5rem] lg:text-[8vw]"
        style={{ opacity: `${message_A_opacity}`, transform: `translate3d(0,${message_A_translate}%,0)` }}
      >
        <p className=" text-center top-[45vh] leading-[1.2]">
          <small className="block text-[1.2rem]">빛이 부족할 때도,</small>
          부족함 없는 동영상
        </p>
      </div>
      <div
        className="sticky-elem top-[10%] left-[40%] leading-[1.2] w-1/2"
        style={{ opacity: `${message_B_opacity}`, transform: `translate3d(0,${message_B_translate}%,0)` }}
      >
        <p>
          한참 몰입 중이었던 동영상 촬영이 빛 때문에 방해를 받아서는 안 되죠. 향상된 동영상 촬영 기능을 갖춘 iPhone 13
          Pro는 해가 진 다음에도 명부와 암부, 윤곽 등의 디테일을 놀라운 수준으로 담아냅니다.
        </p>
        <div
          className="w-[1px] h-[100px] bg-black"
          style={{ transform: `scale(${pin_B_scale})`, opacity: `${pin_B_opacity}` }}
        ></div>
      </div>
      <div
        className="sticky-elem top-[15%] left-[45%] w-1/2 leading-[1.2]"
        style={{ opacity: `${message_C_opacity}`, transform: `translate3d(0,${message_C_translate}%,0)` }}
      >
        <p>탁월한 선명함, 밝기 그리고 풍부한 색감을 자랑하는 Retina HD 디스플레이.</p>
        <div
          className="w-[1px] h-[100px] bg-black"
          style={{ transform: `scale(${pin_C_scale})`, opacity: `${pin_C_opacity}` }}
        ></div>
      </div>
    </SceneContainer>
  );
};

export default React.memo(Description3);
