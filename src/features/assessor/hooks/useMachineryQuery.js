import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createMachineFaas, fetchMachineryFaas } from "../api/machineryApi";

export const useMachineFaasQuery = () => {
    return useQuery({
        queryKey: ["machineFaasRecords"],
        queryFn: fetchMachineryFaas,
    });
};

export const useCreateMachineFaas = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createMachineFaas,
        onSuccess: () => {
            queryClient.invalidateQueries(["machineFaasRecords"]);
        },
    });
};


