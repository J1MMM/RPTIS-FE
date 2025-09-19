import { createContext, useEffect, useState } from "react";
import axios from "../../../api/axios";
import { SAMPLE_DATA } from "../../../../tmp/sampleBldgRes";

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
        console.log("res.data.data");
        console.log(res);

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

  useEffect(() => {
    const fetchBldgFaas = async () => {
      try {
        const res = await axios('/faasBdlgFetch')
        console.log(res.data.data);
        setBuildingFaasRecords(res.data.data);

      } catch (err) {
        setBuildingFaasRecords([]);
        console.error("Failed to fetch building FAAS records:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBldgFaas();
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
