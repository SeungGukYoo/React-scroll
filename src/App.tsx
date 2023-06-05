import React, { useEffect, useRef, useState } from "react";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Description1 from "./components/main/Description1";
import Description2 from "./components/main/Description2";
import Description3 from "./components/main/Description3";
import Description4 from "./components/main/Description4";

function App() {
  const [clientHeight, setClientHeight] = useState<number[]>([0, 0, 0, 0]);
  const [sceneInfo, setSceneInfo] = useState(0);
  const [preHeight, setPreHeight] = useState(0);

  let scrollY = useRef(0);
  let isScrolling = useRef(false);

  useEffect(() => {
    const scrollEvent = () => {
      scrollY.current = window.scrollY;
      console.log(scrollY.current, preHeight, sceneInfo);
      if (scrollY.current > preHeight + clientHeight[sceneInfo] && !isScrolling.current) {
        isScrolling.current = true;
        setPreHeight((pre) => (pre += clientHeight[sceneInfo]));
        setSceneInfo((pre) => (pre += 1));
        setTimeout(() => {
          isScrolling.current = false;
        }, 200);
      }
      if (scrollY.current < preHeight && !isScrolling.current) {
        isScrolling.current = true;
        setSceneInfo((pre) => (pre -= 1));
        setPreHeight((pre) => (pre -= clientHeight[sceneInfo - 1]));
        setTimeout(() => {
          isScrolling.current = false;
        }, 200);
      }
    };

    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [clientHeight, sceneInfo, preHeight]);

  return (
    <div>
      <Header />
      <Description1 clientHeight={clientHeight} setClientHeight={setClientHeight} />
      <Description2 clientHeight={clientHeight} setClientHeight={setClientHeight} />
      <Description3 clientHeight={clientHeight} setClientHeight={setClientHeight} />
      <Description4 clientHeight={clientHeight} setClientHeight={setClientHeight} />
      <Footer />
    </div>
  );
}

export default App;
