import { useRef, useState } from "react";
import { useReactToPrint } from 'react-to-print';
import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import ContainerModal from "@components/shared/ContainerModal";
import MachineryFaasFrontPage from "../../printables/machineryFaasFrontPage";
import MachineryFaasRearPage from "../../printables/machineryFaasRearPage";


export const ViewMachineryAppraisalModal = ({ open, onClose, control, watch, setValue, disabled }) => {
  const [openView, setOpenView] = useState(true);
  const contentRef = useRef(null);
  const handlePrint = useReactToPrint({contentRef});

  return (
    <ContainerModal
      disabled={disabled}
      maxWidth="md"
      title="View Land Faas"
      open={openView}
      onClose={onClose}
      actionButton={
        <>
            <Button size="small" onClick={onClose} variant="outlined">
              Cancel
            </Button>
            <Button 
                size="small" 
                type="submit" 
                variant="contained"
                onClick={handlePrint}
            >
              Print
            </Button>
        </>
      }
    >
        <MachineryFaasFrontPage  ref={contentRef}/>
        <MachineryFaasRearPage/>

    </ContainerModal>
  );
};
