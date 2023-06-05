import React from "react";

const Description1 = () => {
  return (
    <main className="pt-[50vh]">
      <section className="h-[4000px] relative w-full text-center">
        <h1 className="relative text-[4rem] -top-[10vh]  lg:text-[9vw] font-medium">IPhone 13 Pro</h1>
        <div className="fixed h-[3em] flex justify-center items-center left-0 leading-snug top-[35vh] opacity-0">
          <p className="text-[4rem]">프로 그 이상.</p>
        </div>
        <div className="fixed h-[3em] w-full left-0 flex justify-center items-center top-[35vh] leading-snug	opacity-0">
          <p className="text-[4rem]">그 어떤 스마트폰 글래스보다 더 견고한 소재.</p>
        </div>
        <div className="fixed h-[3em] top-[35vh] left-0 leading-snug flex justify-center items-center opacity-0">
          <p className="text-[4rem]">격이 다른 카메라의 격이 다른 셀피.</p>
        </div>
      </section>
    </main>
  );
};

export default Description1;
