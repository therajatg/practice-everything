import { useReducer, createContext, useContext } from "react";
import { dataReducer } from "./dataReducer";
import { products } from "./products";

const dataContext = createContext();
const useData = () => useContext(dataContext);

function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, {
    sortBy: null,
    sizeFilter: null,
  });
  return (
    <dataContext.Provider value={{ state, dispatch }}>
      {children}
    </dataContext.Provider>
  );
}
