import { createContext, useContext, useReducer, useState } from "react";
import { cusineReducer, initialState } from "../Reducer/cusineReducer";

const cusineContext = createContext(null);
const dispatchcusineContext = createContext(null);

export function CusineProvider({ children }) {
  const [state, dispatch] = useReducer(cusineReducer, initialState);

  return (
    <cusineContext.Provider value={state}>
      <dispatchcusineContext.Provider value={{ dispatch }}>
        {children}
      </dispatchcusineContext.Provider>
    </cusineContext.Provider>
  );
}

export const useCusine = () => useContext(cusineContext);
export const useDispatch = () => useContext(dispatchcusineContext);
