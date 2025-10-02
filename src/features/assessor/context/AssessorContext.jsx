import { createContext, useEffect, useState } from "react";
import axios from "../../../api/axios";
import { v4 } from "uuid";

const AssessorContext = createContext({});

export const AssessorProvider = ({ children }) => {
  const [landFaasRecords, setLandFaasRecords] = useState([]);
  const [buildingFaasRecords, setBuildingFaasRecords] = useState([]);
  const [machineFaasRecords, setMachineFaasRecords] = useState([]);
  const [loading, setLoading] = useState([]);



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
