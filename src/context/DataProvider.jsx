import { createContext } from "react";

const DataContext = createContext({});
const sample = () => { };

export const DataProvider = ({ children }) => {


  return (
    <DataContext.Provider
      value={{

      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
