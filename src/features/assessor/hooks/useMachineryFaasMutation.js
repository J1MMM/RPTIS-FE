import { useMutation } from "@tanstack/react-query";
import { createMachineryFaas } from "../api/machineryApi";

export const useCreateMachineryFaas = () => {
    return useMutation({
        mutationFn: createMachineryFaas,
    });
};


