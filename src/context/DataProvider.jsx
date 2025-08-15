import { createContext } from "react";
import { useQuery } from "react-query";

const DataContext = createContext({});
const sample = () => {};

export const DataProvider = ({ children }) => {
  const {
    data: assessorData,
    isLoading: isAssessorLoading,
    isError: isAssessorError,
  } = useQuery("assessorData", sample);

  const {
    data: cancelsData,
    isLoading: isCancelsLoading,
    isError: isCancelsError,
  } = useQuery("cancelsData", sample);
  const {
    data: pendingData,
    isLoading: isPendingLoading,
    isError: isPendingError,
  } = useQuery("pendingData", sample);

  return (
    <DataContext.Provider
      value={{
        assessorData,
        isAssessorLoading,
        isAssessorError,
        cancelsData,
        isCancelsLoading,
        isCancelsError,
        pendingData,
        isPendingError,
        isPendingLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
