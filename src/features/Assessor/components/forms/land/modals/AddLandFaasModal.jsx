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
import { Landmark, } from "lucide-react";
import { useFormContext, useWatch } from "react-hook-form";
import { logger } from "../../../../../../utils/logger";

export default function AddLandFaasModal({ open, onClose, handleSubmit, disabled }) {
  const { control: landFormControl } = useFormContext();
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
          <>
            <Button size="small" onClick={onClose} variant="outlined">
              Cancel
            </Button>
            <Button size="small" type="submit" variant="contained" disabled={disabled}>
              Submit
            </Button>
          </>
        }
      >
        <Stack width={230} direction="row" justifyContent="space-between">
          <SelectField
            control={landFormControl}
            label="Transaction Code"
            name={FIELDS.TRANSACTION_CODE}
            options={TRANSACTION_CODE}
          />
        </Stack>
        <PropertyInfoFields control={landFormControl} />
        <OwnerInfoFields />
        <LandBounderiesFields control={landFormControl} />
        <LandAppraisalFields />
        <LandMarketValueFields />
        <AssessmentFields />
        <TaxabilityFields control={landFormControl} />
      </ContainerModal>
    </>
  );
}
