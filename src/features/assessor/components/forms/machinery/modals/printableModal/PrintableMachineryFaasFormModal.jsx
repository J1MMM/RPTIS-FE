import { useRef, useState } from "react";
import { useReactToPrint } from 'react-to-print';
import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import ContainerModal from "@components/shared/ContainerModal";
import MachineryFaasFrontPage from "../../printables/machineryFaasFrontPage";
import MachineryFaasRearPage from "../../printables/machineryFaasRearPage";


export const PrintableMachineryFaasFormModal = ({ open, onClose, control, watch, setValue, disabled }) => {
  const contentRef = useRef(null);
  const handlePrint = useReactToPrint({contentRef});

  return (
    <ContainerModal
      disabled={disabled}
      maxWidth="md"
      title="FIELD APPRAISAL & ASSESSMENT SHEET FORM"
      open={open}
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
        <div ref={contentRef}>
          <div>
            <MachineryFaasFrontPage/>
          </div>
          <br />
          <div style={{ pageBreakBefore: 'always' }}>
            <MachineryFaasRearPage/>
          </div>
        </div>

    </ContainerModal>
  );
};
