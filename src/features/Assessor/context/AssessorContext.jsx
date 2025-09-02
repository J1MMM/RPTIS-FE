import { createContext, useEffect, useState } from "react";
import { SAMPLE_DATA } from "../constants/defaultValues";

const AssessorContext = createContext({});

export const AssessorProvider = ({ children }) => {
  const [landFaasRecords, setLandFaasRecords] = useState([]);
  const [buildingFaasRecords, setBuildingFaasRecords] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const fetchLandFaas = async () => {
      try {
        // const data = await getLandFaasRecords();
        setLandFaasRecords(SAMPLE_DATA);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch land FAAS records:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLandFaas();
  }, []);

  return (
    <AssessorContext.Provider
      value={{
        landFaasRecords,
        setLandFaasRecords,
        buildingFaasRecords,
        setBuildingFaasRecords
      }}
    >
      {children}
    </AssessorContext.Provider>
  );
};

export default AssessorContext;
