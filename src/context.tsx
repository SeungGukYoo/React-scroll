import { createContext, useContext, useReducer } from "react";

type Action =
  | { type: "INCREASE_SCENE_INFO" }
  | { type: "DECREASE_SCENE_INFO" }
  | { type: "SET_SCROLL_VALUE"; payload: number }
  | { type: "INCREASE_PREV_HEIGHT"; payload: number }
  | { type: "DECREASE_PREV_HEIGHT"; payload: number };

type State = { sceneInfo: number; scrollValue: number; prevHeight: number };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "INCREASE_SCENE_INFO":
      return { ...state, sceneInfo: state.sceneInfo + 1 };
    case "DECREASE_SCENE_INFO":
      return { ...state, sceneInfo: state.sceneInfo - 1 };
    case "SET_SCROLL_VALUE":
      return { ...state, scrollValue: action.payload };
    case "INCREASE_PREV_HEIGHT":
      return { ...state, prevHeight: state.prevHeight + action.payload };
    case "DECREASE_PREV_HEIGHT":
      return { ...state, prevHeight: state.prevHeight - action.payload };
    default:
      return state;
  }
}

interface SharedValuesContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}
type Props = {
  children: React.ReactNode;
};
const SharedValuesContext = createContext<SharedValuesContextType | undefined>(undefined);
const useSharedValuesContext = (): SharedValuesContextType => {
  const context = useContext(SharedValuesContext);
  if (!context) {
    throw new Error("useSharedValuesContext must be used within a SharedValuesProvider");
  }
  return context;
};

const SharedValuesProvider = ({ children }: Props) => {
  const initialState: State = { sceneInfo: 0, scrollValue: 0, prevHeight: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  return <SharedValuesContext.Provider value={{ state, dispatch }}>{children}</SharedValuesContext.Provider>;
};

export { SharedValuesProvider, useSharedValuesContext };
