import { useQuery } from "@tanstack/react-query";
import { fetchLandFaas } from "../api/landApi";

export const useLandFaasQuery = () => {
    return useQuery({
        queryKey: ["landFaasRecords"],
        queryFn: fetchLandFaas,
    });
};
