import { useContext } from "react";
import FormContext from "../context/FormContext";

const useAssessorForm = () => {
  return useContext(FormContext);
};

export default useAssessorForm;
