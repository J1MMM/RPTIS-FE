import { Button, Stack } from "@mui/material";
import ContainerModal from "@components/shared/ContainerModal";
import SelectField from "@components/ui/SelectField";
import OwnerInfoFields from "../fieldsets/OwnerInfoFields";
import PropertyInfoFields from "../fieldsets/PropertyInfoFields";
import LandBounderiesFields from "../fieldsets/LandBounderiesFields";
import LandAppraisalFields from "../fieldsets/LandAppraisalFields";
import LandMarketValueFields from "../fieldsets/LandMarketValueFields";
import AssessmentFields from "../fieldsets/AssessmentFields";
import TaxabilityFields from "../fieldsets/TaxabilityFields";
import { TRANSACTION_CODE } from "../../../../constants/dropdownOptions";
import { FIELDS } from "../../../../constants/fieldNames";
import { ArrowLeftRight, Edit, Landmark, Printer, Split, SplitSquareHorizontal, } from "lucide-react";
import { useFormContext, useWatch } from "react-hook-form";
import { logger } from "../../../../../../utils/logger";
import { useEffect } from "react";

export default function AddLandFaasModal({ open, onClose, handleSubmit, disabled, formMode, setFormMode }) {
  const { control: landFormControl } = useFormContext();
  const readOnly = formMode == "view"
  logger("data", useWatch({ control: landFormControl }))




  return (
    <>
      <ContainerModal
        title="REAL PROPERTY FIELD APPRAISAL & ASSESSMENT SHEET - LAND"
        open={open}
        onClose={onClose}
        onSubmit={handleSubmit}
        headerIcon={<Landmark />}
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
                <Button startIcon={<Printer size={18} />} size="small" variant="outlined" disabled={disabled}>
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
        <Stack width={230} direction="row" justifyContent="space-between">
          <SelectField
            readOnly={readOnly}
            control={landFormControl}
            label="Transaction Code"
            name={FIELDS.TRANSACTION_CODE}
            options={TRANSACTION_CODE}
          />
        </Stack>
        <PropertyInfoFields readOnly={readOnly} control={landFormControl} />
        <OwnerInfoFields readOnly={readOnly} />
        <LandBounderiesFields readOnly={readOnly} control={landFormControl} />
        <LandAppraisalFields readOnly={readOnly} />
        <LandMarketValueFields readOnly={readOnly} />
        <AssessmentFields readOnly={readOnly} />
        <TaxabilityFields readOnly={readOnly} control={landFormControl} />
      </ContainerModal >
    </>
  );
}
