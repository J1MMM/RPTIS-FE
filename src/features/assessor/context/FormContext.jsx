import { createContext } from "react";
import { useForm } from "react-hook-form";
import { LAND_DEFAULT_FIELD } from "../constants/land/default";

const FormContext = createContext({});

export const AssessorFormProvider = ({ children }) => {
  const landFaasForm = useForm({ defaultValues: LAND_DEFAULT_FIELD });

  // Expose landFaasControl explicitly
  const value = {
    ...landFaasForm,
    landFaasControl: landFaasForm.control,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default FormContext;
