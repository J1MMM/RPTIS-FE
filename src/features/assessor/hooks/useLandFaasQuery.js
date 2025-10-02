import { useQuery } from "@tanstack/react-query";
import { fetchLandFaas, editLandFaas, createLandFaas } from "../api/landApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLandFaasQuery = () => {
    return useQuery({
        queryKey: ["landFaasRecords"],
        queryFn: fetchLandFaas,
    });
};

export const useCreateLandFaas = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createLandFaas,
        onSuccess: () => {
            queryClient.invalidateQueries(["landFaasRecords"]);
        },
    });
};

export const useEditLandFaas = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: editLandFaas,
        onSuccess: () => {
            queryClient.invalidateQueries(["landFaasRecords"]);
        },
    });
};