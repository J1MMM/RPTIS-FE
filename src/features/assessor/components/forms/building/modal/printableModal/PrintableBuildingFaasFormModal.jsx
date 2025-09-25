import { Button } from "@mui/material";
import ContainerModal from "@components/shared/ContainerModal";
import { Printer } from "lucide-react";
import { useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import BuildingFaasFrontPage from "../../printables/buildingFaasFrontPage";
import BuildingFaasRearPage from "../../printables/buildingFaasRearPage";


export default function PrintableBuildingFaasFormModal({ open, onClose, handleSubmit, disabled, }) {
  const contentRef = useRef(null);
  const handlePrint = useReactToPrint({ contentRef });

  return (
    <>
      <ContainerModal
        title="FIELD APPRAISAL & ASSESSMENT SHEET FORM"
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
          <div>
            <BuildingFaasFrontPage/>
          </div>
          <br />
          <div style={{ pageBreakBefore: 'always' }}>
            <BuildingFaasRearPage/>
          </div>
        </div>
      </ContainerModal >
    </>
  );
}

