import React, { useEffect, useRef, useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Description1 from "./components/main/Description1";
import Description2 from "./components/main/Description2";
import Description3 from "./components/main/Description3";
import Description4 from "./components/main/Description4";
import { useSharedValuesContext } from "./context";

function App() {
  const [clientHeight, setClientHeight] = useState<number[]>([0, 0, 0, 0]);
  const { state, dispatch } = useSharedValuesContext();
  let scrollY = useRef(0);

  useEffect(() => {
    if (state.scrollValue > clientHeight[state.sceneInfo] + state.prevHeight) {
      dispatch({
        type: "INCREASE_PREV_HEIGHT",
        payload: clientHeight[state.sceneInfo],
      });
      dispatch({
        type: "INCREASE_SCENE_INFO",
      });
    } else if (state.scrollValue < state.prevHeight) {
      dispatch({
        type: "DECREASE_PREV_HEIGHT",
        payload: clientHeight[state.sceneInfo - 1],
      });
      dispatch({
        type: "DECREASE_SCENE_INFO",
      });
    }
  }, [clientHeight, dispatch, state.prevHeight, state.sceneInfo, state.scrollValue]);

  useEffect(() => {
    const scrollEvent = () => {
      scrollY.current = window.scrollY;
      dispatch({ type: "SET_SCROLL_VALUE", payload: scrollY.current });
    };
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Description1 setClientHeight={setClientHeight} />
      <Description2 setClientHeight={setClientHeight} />
      <Description3 setClientHeight={setClientHeight} />
      <Description4 setClientHeight={setClientHeight} />y
      <Footer />
    </div>
  );
}

export default App;
