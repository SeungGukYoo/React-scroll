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
  const [ratio, setRatio] = useState(0);
  let scrollY = useRef(0);
  let client_scrollY = useRef(0);
  let isScrolling = useRef(false);

  useEffect(() => {
    client_scrollY.current = scrollY.current - preHeight;
  }, [preHeight]);

  useEffect(() => {
    // scroll event 최적화 안됨

    const scrollEvent = () => {
      scrollY.current = window.scrollY;

      if (scrollY.current > preHeight + clientHeight[sceneInfo] && !isScrolling.current) {
        isScrolling.current = true;
        setPreHeight((pre) => {
          return (pre += clientHeight[sceneInfo]);
        });
        setSceneInfo((pre) => (pre += 1));

        setTimeout(() => {
          isScrolling.current = false;
        }, 200);
        return;
      }
      if (scrollY.current < preHeight && !isScrolling.current) {
        isScrolling.current = true;
        setPreHeight((pre) => {
          return (pre -= clientHeight[sceneInfo - 1]);
        });
        setSceneInfo((pre) => (pre -= 1));
        setTimeout(() => {
          isScrolling.current = false;
        }, 200);
        return;
      }

      setRatio((pre) => {
        let result = (scrollY.current - preHeight) / clientHeight[sceneInfo];
        if (result < 0) result = 0;
        else if (result > 1) result = 1;
        pre = result;
        return pre;
      });

      client_scrollY.current = scrollY.current - preHeight;
    };

    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [clientHeight, sceneInfo, preHeight]);

  return (
    <div>
      <Header />
      <Description1
        sceneInfo={sceneInfo}
        ratio={ratio}
        clientScrollY={client_scrollY.current}
        setClientHeight={setClientHeight}
      />
      <Description2
        sceneInfo={sceneInfo}
        ratio={ratio}
        clientScrollY={client_scrollY.current}
        setClientHeight={setClientHeight}
      />
      <Description3
        sceneInfo={sceneInfo}
        ratio={ratio}
        clientScrollY={client_scrollY.current}
        setClientHeight={setClientHeight}
      />

      <Description4
        sceneInfo={sceneInfo}
        ratio={ratio}
        clientScrollY={client_scrollY.current}
        setClientHeight={setClientHeight}
      />
      <Footer />
    </div>
  );
}

export default App;
