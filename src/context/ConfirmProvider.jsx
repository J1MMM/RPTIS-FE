import { createContext, useState } from "react";
import { ConfirmationDialog } from "../components/shared";

const ConfirmContext = createContext();

export const ConfirmProvider = ({ children }) => {
    const [confirmState, setConfirmState] = useState({
        open: false,
        title: "",
        message: "",
        onConfirm: async () => { },
        serverity: "success",
        label: "Confirm",
        disabled: false,
        loading: false,
    });

    const confirm = ({
        title,
        message,
        onConfirm,
        serverity = "info",
        label = "Confirm",
    }) => {
        setConfirmState({ open: true, title, message, onConfirm, serverity, label, loading: false });
    };

    const handleClose = () =>
        setConfirmState((prev) => ({ ...prev, open: false, loading: false }));

    const handleConfirm = async () => {
        const { onConfirm } = confirmState; // grab current function
        try {
            setConfirmState((prev) => ({ ...prev, loading: true }));
            await onConfirm();
            handleClose();
        } catch (err) {
            console.error(err);
            setConfirmState((prev) => ({ ...prev, loading: false }));
        }
    };


    return (
        <ConfirmContext.Provider value={confirm}>
            {children}
            <ConfirmationDialog
                {...confirmState}
                disabled={confirmState.loading}
                onCancel={handleClose}
                onConfirm={handleConfirm}
            />
        </ConfirmContext.Provider>
    );
}

export default ConfirmContext