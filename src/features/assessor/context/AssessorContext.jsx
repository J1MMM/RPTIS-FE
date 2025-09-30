import { createContext, useEffect, useState } from "react";
import axios from "../../../api/axios";
import { v4 } from "uuid";

const AssessorContext = createContext({});

export const AssessorProvider = ({ children }) => {
  const [landFaasRecords, setLandFaasRecords] = useState([]);
  const [buildingFaasRecords, setBuildingFaasRecords] = useState([]);
  const [machineFaasRecords, setMachineFaasRecords] = useState([]);
  const [loading, setLoading] = useState([]);

  // useEffect(() => {
  //   const fetchLandFaas = async () => {
  //     try {
  //       // const data = await getLandFaasRecords();
  //       const res = await axios('/faasLandFetch')
  //       console.log(res.data.data);

  //       setLandFaasRecords(res.data.data);
  //     } catch (err) {
  //       // setError(err);
  //       console.error("Failed to fetch land FAAS records:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchLandFaas();
  // }, []);

  useEffect(() => {
    const fetchBldgFaas = async () => {
      try {
        const res = await axios('/faasBdlgFetch')
        console.log(res.data.data);
        setBuildingFaasRecords(res.data.data);

      } catch (err) {
        console.error("Failed to fetch building FAAS records:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBldgFaas();
  }, []);

  useEffect(() => {
    const fetchBldgFaas = async () => {
      try {
        const res = await axios('/machine')
        console.log("machine");
        console.log(res.data.data);
        const result = res.data.data?.map(v => ({ id: v4(), ...v }))
        setMachineFaasRecords(result);

      } catch (err) {
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
        landFaasRecords, setLandFaasRecords,
        buildingFaasRecords, setBuildingFaasRecords,
        machineFaasRecords, setMachineFaasRecords
      }}
    >
      {children}
    </AssessorContext.Provider>
  );
};

export default AssessorContext;
