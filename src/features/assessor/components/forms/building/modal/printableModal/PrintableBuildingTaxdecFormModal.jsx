import { Button } from "@mui/material";
import ContainerModal from "@components/shared/ContainerModal";
import { Printer } from "lucide-react";
import { useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import { useFormContext, useWatch } from "react-hook-form";
import { BuildingTaxDeclaration } from "../../printables/buildingTaxDeclaration";


export default function PrintableBuildingTaxdecFormModal({ open, onClose, handleSubmit, disabled, }) {
  // const { control: landFormControl } = useFormContext();
  const contentRef = useRef(null);
  const handlePrint = useReactToPrint({ contentRef });

  return (
    <>
      <ContainerModal
        title="TAX DECLARAION FORM"
        open={open}
        onClose={onClose}
        onSubmit={handleSubmit}
        headerIcon={<Printer />}
        actionButton={
          <>
            <Button size="small" onClick={onClose} variant="outlined">
              Cancel
            </Button>
            <Button size="small" onClick={handlePrint} variant="contained" disabled={disabled}>
              Print
            </Button>
          </>
        }
      >
        <div ref={contentRef}>
          <BuildingTaxDeclaration/>
        </div>
      </ContainerModal >
    </>
  );
}

