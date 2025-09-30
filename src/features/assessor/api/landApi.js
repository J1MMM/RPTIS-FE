import axios from "../../../api/axios";

export const fetchLandFaas = async () => {
    const res = await axios.get("/faasLandFetch");
    return res.data.data;
};


export const createLandFaas = async (newRecord) => {
    const res = await axios.post("/faasLand", newRecord);
    return res.data;
};
