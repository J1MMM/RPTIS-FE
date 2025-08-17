import { createContext } from "react";
import { DEFAULT_FIELD_VALUES } from "../constants/defaultValues";
import { useForm } from "react-hook-form";

const FormContext = createContext({});

export const AssessorFormProvider = ({ children }) => {
  const landFaasForm = useForm({ defaultValues: DEFAULT_FIELD_VALUES });

  // Expose landFaasControl explicitly
  const value = {
    ...landFaasForm,
    landFaasControl: landFaasForm.control,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default FormContext;
