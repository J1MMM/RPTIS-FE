import { Button, Stack } from "@mui/material";
import ContainerModal from "@components/shared/ContainerModal";
import { TextInput, SelectField } from "@components/ui";
import { TRANSACTION_CODE } from "../../../../constants/shared/dropdown";
import { FIELDS } from "../../../../constants/shared/fieldNames";
import { ArrowLeftRight, Edit, Factory, Landmark, Printer, Split, } from "lucide-react";
import { useFormContext, useWatch } from "react-hook-form";
import { logger } from "../../../../../../utils/logger";
import seedLandReq from "../../../../../../../tmp/land_req.json";
import OwnerInfoFields from "../../land/fieldsets/OwnerInfoFields";
import PreviousRecFields from "../../land/fieldsets/PreviousRecFields";
import PropertyInfoFields from "../fieldsets/PropertyInfoFields";
import MachineBrandCapacity from "../fieldsets/MachineBrandCapacity";
import MachineAppraisal from "../fieldsets/MachineAppraisal";
import AssessmentFields from "../fieldsets/AssessmentFields";
import TaxabilityFields from "../fieldsets/TaxabilityFields";
import RecommendingFields from "../fieldsets/RecommendingFields";
import ReferenceNPostingFields from "../fieldsets/ReferenceNPostingFields";


export default function MachineyFaasModal({ open, onClose, handleSubmit, disabled, formMode, setFormMode, handleForm }) {
  const { control: landFormControl, reset } = useFormContext();
  const readOnly = formMode == "view"
  logger("FORM DATA", useWatch({ control: landFormControl }))
  const handleAutoFill = () => {
    reset(seedLandReq)
  }
  return (
    <>
      <ContainerModal
        maxWidth="lg"
        title="REAL PROPERTY APPRAISAL & ASSESSMENT SHEET - MACHINERY"
        open={open}
        onClose={onClose}
        onSubmit={handleSubmit}
        headerIcon={<Factory />}
        actionButton={
          formMode !== "view" ?
            <>
              <Button size="small" onClick={onClose} variant="outlined">
                Cancel
              </Button>
              <Button size="small" type="submit" variant="contained" disabled={disabled}>
                Submit
              </Button>
            </>
            :
            <Stack direction="row" width={"100%"} justifyContent={"space-between"} gap={1} px={2}>

              <Button size="small" onClick={onClose} variant="outlined">
                Cancel
              </Button>
              <Stack direction={"row"} alignItems={"center"} gap={1}>
                <Button startIcon={<Printer size={18} />} onClick={handleForm} size="small" variant="outlined" disabled={disabled}>
                  Forms
                </Button>
                <Button startIcon={<Split size={18} />} size="small" variant="outlined" disabled={disabled}>
                  Subdivide
                </Button>
                <Button startIcon={<ArrowLeftRight size={18} />} size="small" variant="outlined" disabled={disabled}>
                  Transfer
                </Button>
                <Button startIcon={<Edit size={18} />} size="small" variant="contained" disabled={disabled} onClick={() => setFormMode("edit")}>
                  Update
                </Button>
              </Stack>
            </Stack>

        }
      >
        {/* <Button size="small" onClick={handleAutoFill} variant="outlined">seeder</Button> */}
        <Stack width={230} direction="row" justifyContent="space-between">
          <SelectField readOnly={readOnly} control={landFormControl} label="Transaction Code" name={FIELDS.TRANSACTION_CODE} options={TRANSACTION_CODE} />
        </Stack>
        <PropertyInfoFields readOnly={readOnly} control={landFormControl} />
        <OwnerInfoFields readOnly={readOnly} ownerFieldName={"machine_ownership"} />
        <MachineBrandCapacity readOnly={readOnly} control={landFormControl} />
        <MachineAppraisal readOnly={readOnly} control={landFormControl} />
        <AssessmentFields readOnly={readOnly} control={landFormControl} />
        <TaxabilityFields readOnly={readOnly} control={landFormControl} />
        <RecommendingFields control={landFormControl} readOnly={readOnly} />
        <TextInput required={false} multiline shrink={true} rows={3} readOnly={readOnly} control={landFormControl} label="Memoranda" name={FIELDS.MEMORANDA} />
        <ReferenceNPostingFields readOnly={readOnly} control={landFormControl} />
      </ContainerModal >
    </>
  );
}
