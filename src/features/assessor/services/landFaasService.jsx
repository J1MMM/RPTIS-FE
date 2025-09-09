import axios from "axios";

export const getLandFaasRecords = async () => {
  try {
    const response = await axios.get("/api/landfaas");
    return response.data;
  } catch (error) {
    console.error("Error fetching land FAAS records:", error);
    throw error;
  }
};
