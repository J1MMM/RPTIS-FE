import axios from "../../../api/axios";

export const fetchBldgFaas = async () => {
    const res = await axios.get("/faasBldgFetch");
    return res.data?.data;
};

export const createBldgFaas = async (newRecord) => {
    const res = await axios.post("/faasBldg", newRecord);
    return res.data;
};

