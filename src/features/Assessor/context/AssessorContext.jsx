import { createContext } from "react";

const AssessorContext = createContext({});

export const AssessorProvider = ({ children }) => {
  const [landFaasRecords, setLandFaasRecords] = useState([]);

  return (
    <AssessorContext.Provider
      value={{
        landFaasRecords,
        setLandFaasRecords,
      }}
    >
      {children}
    </AssessorContext.Provider>
  );
};

export default AssessorContext;
