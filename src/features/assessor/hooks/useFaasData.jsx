import { useContext } from "react";
import AssessorContext from "../context/AssessorContext";

const useFaasData = () => {
  return useContext(AssessorContext);
};

export default useFaasData;
