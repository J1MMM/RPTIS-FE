import { useQuery } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBldgFaas, fetchBldgFaas } from "../api/buildingApi";

export const useBldgFaasQuery = () => {
    return useQuery({
        queryKey: ["bldgFaasRecords"],
        queryFn: fetchBldgFaas,
    });
};

export const useCreateBldgFaas = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createBldgFaas,
        onSuccess: () => {
            queryClient.invalidateQueries(["bldgFaasRecords"]);
        },
    });
};
