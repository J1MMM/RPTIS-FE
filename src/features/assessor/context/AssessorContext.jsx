import { createContext, useEffect, useState } from "react";
import { SAMPLE_DATA } from "../constants/defaultValues";
import axios from "../../../api/axios";

const AssessorContext = createContext({});

export const AssessorProvider = ({ children }) => {
  const [landFaasRecords, setLandFaasRecords] = useState([]);
  const [buildingFaasRecords, setBuildingFaasRecords] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const fetchLandFaas = async () => {
      try {
        // const data = await getLandFaasRecords();
        const res = await axios('/faasLandFetch')
        setLandFaasRecords(res.data.data);
      } catch (err) {
        // setError(err);
        setLandFaasRecords(SAMPLE_DATA);
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
