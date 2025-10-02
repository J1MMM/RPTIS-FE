import axios from "../../../api/axios";

export const fetchMachineryFaas = async () => {
    const res = await axios.get("/machine");
    return res.data?.data;
};

export const createMachineFaas = async (newRecord) => {
    const res = await axios.post("/machine/create", newRecord);
    return res.data;
};

