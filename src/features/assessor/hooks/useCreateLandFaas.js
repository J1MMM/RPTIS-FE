import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createLandFaas } from "../api/landApi";

export const useCreateLandFaas = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createLandFaas,
        onSuccess: () => {
            queryClient.invalidateQueries(["landFaasRecords"]);
        },
    });
};
