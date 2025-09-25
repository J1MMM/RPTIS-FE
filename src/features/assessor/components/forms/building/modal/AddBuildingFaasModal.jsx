import { Button, Stack } from "@mui/material";
import { useFormContext, useWatch } from "react-hook-form";
import { ArrowLeftRight, Building2, Edit, Printer, Split } from "lucide-react";
import { SelectField, TextInput } from "@components/ui";
import ContainerModal from "@components/shared/ContainerModal";
import OwnerInfoFields from "../../land/fieldsets/OwnerInfoFields";
import TaxabilityFields from "../../land/fieldsets/TaxabilityFields";
import { TRANSACTION_CODE } from "../../../../constants/dropdownOptions";
import { FIELDS } from "../../../../constants/fieldNames";
import { logger } from "../../../../../../utils/logger";
import BuildingLocFields from "../fieldsets/BuildingLocFields";
import BuildingGenDescFields from "../fieldsets/BuildingGenDescFields";
import StructuralMaterialFields from "../fieldsets/StructuralMaterialFields";
import PropertyAppraisalFields from "../fieldsets/PropertyAppraisalFields";
import PreviousRecFields from "../../land/fieldsets/PreviousRecFields";
import AdditionalItemsFields from "../fieldsets/AdditionalItemsFields";
import BuildingAssessmentFields from "../fieldsets/BuildingAssessmentFields";

export default function AddBuildingFaasModal({ open, onClose, handleSubmit, disabled, formMode, setFormMode, handleForm }) {
  const { control: buildingFormControl } = useFormContext();
  const readOnly = formMode == "view"
  logger("data", useWatch({ control: buildingFormControl }))

  return (
    <>
      <ContainerModal
        title="FIELD APPRAISAL & ASSESSMENT SHEET - BUILDING & OTHER STRUCTURES"
        open={open}
        onClose={onClose}
        onSubmit={handleSubmit}
        headerIcon={<Building2 />}
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
        <Stack width={230} direction="row" justifyContent="space-between">
          <SelectField
            readOnly={readOnly}
            control={buildingFormControl}
            label="Transaction Code"
            name={FIELDS.TRANSACTION_CODE}
            options={TRANSACTION_CODE}
          />
        </Stack>
        <BuildingLocFields readOnly={readOnly} control={buildingFormControl} />
        <OwnerInfoFields ownerFieldName={"bldg_ownership"} readOnly={readOnly} />
        <BuildingGenDescFields readOnly={readOnly} control={buildingFormControl} />
        <StructuralMaterialFields readOnly={readOnly} control={buildingFormControl} />
        <PropertyAppraisalFields readOnly={readOnly} control={buildingFormControl} />
        <AdditionalItemsFields readOnly={readOnly} control={buildingFormControl} />

        <BuildingAssessmentFields readOnly={readOnly} />
        <TaxabilityFields readOnly={readOnly} control={buildingFormControl} />
        <TextInput
          multiline
          shrink={true}
          rows={3}
          readOnly={readOnly}
          control={buildingFormControl}
          label="Memoranda"
          name={FIELDS.MEMORANDA}
        />
        <PreviousRecFields readOnly={readOnly} control={buildingFormControl} />

      </ContainerModal >
    </>
  );
}
