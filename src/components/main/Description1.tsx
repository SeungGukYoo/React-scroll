import React from "react";

const Description1 = () => {
  return (
    <main className="pt-[50vh]">
      <section className="h-[4000px] relative w-full border-red-400 border-4 text-center">
        <h1 className="text-[4rem] lg:text-[9vw] font-medium">IPhone 13 Pro</h1>
        <div className="absolute h-[3em] bg-slate-400 -top-[10vh] left-0 w-full text-center leading-snug opacity-1">
          <p className="text-[4rem]">프로 그 이상.</p>
        </div>
        <div className="absolute h-[3em] w-full -top-[10vh] left-0 text-center leading-snug	opacity-0">
          <p className="text-[4rem]">그 어떤 스마트폰 글래스보다 더 견고한 소재.</p>
        </div>
        <div className="absolute h-[3em] w-full -top-[10vh] left-0 text-center leading-snug	opacity-0">
          <p className="text-[4rem]">격이 다른 카메라의 격이 다른 셀피.</p>
        </div>
      </section>
    </main>
  );
};

export default Description1;
