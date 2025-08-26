import { useContext } from "react";
import ConfirmContext from "../context/ConfirmProvider";

const useConfirm = () => {
    return useContext(ConfirmContext);
}

export default useConfirm