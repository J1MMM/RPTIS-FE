import axios from "../../../api/axios";

export const createMachineryFaas = async (newRecord) => {
    const res = await axios.post("/machine/create", newRecord);
    return res.data;
};


