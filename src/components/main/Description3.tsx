import React from "react";

const Description3 = () => {
  return (
    <section className="h-[4000px] t-[45vh] relative">
      <div className="absolute top-[10vh] w-full flex justify-center items-center">
        <p className="text-[3.5rem] text-center">
          <small className="block text-[1.2rem]">빛이 부족할 때도,</small>
          부족함 없는 동영상
        </p>
      </div>
      <div className="absolute top-[20%] left-[45%]">
        <p>
          한참 몰입 중이었던 동영상 촬영이 빛 때문에 방해를 받아서는 안 되죠. 향상된 동영상 촬영 기능을 갖춘 iPhone 13
          Pro는 해가 진 다음에도 명부와 암부, 윤곽 등의 디테일을 놀라운 수준으로 담아냅니다.
        </p>
        <div className="w-[1px] h-[100px] bg-black"></div>
      </div>
      <div className="absolute top-[10%] left-[55%]">
        <p>
          탁월한 선명함, 밝기 그리고 <br></br>
          풍부한 색감을 자랑하는 Retina HD 디스플레이.
        </p>
        <div className="w-[1px] h-[100px] bg-black"></div>
      </div>
    </section>
  );
};

export default Description3;
