import { Button, Stack } from "@mui/material";
import StyledFieldset from "@components/ui/StyledFieldset";
import { FIELDS } from "../../../../constants/fieldNames";
import TextInput from "../../../../../../components/ui/TextInput";
import { BRGY_OPTIONS } from "../../../../../../constants/dropdown";
import SelectField from "../../../../../../components/ui/SelectField";
import { LandAppraisalTable } from "../../../tables/land-appraisal/LandAppraisalTable";
import { Add } from "@mui/icons-material";
import { LandOwnerTable } from "../../../tables/owners-table/LandOwnerTable";
import AddOwnerModal from "../modals/AddOwnerModal";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";

function OwnerInfoFields({ control }) {
  const { control: ownerFieldControl } = useForm()
  const ownersForm = useWatch({ control: ownerFieldControl })
  const [activeModal, setActiveModal] = useState(false)

  return (
    <StyledFieldset title="Owner's / Administrator">
      <Stack mb={2}>
        <Button
          disableFocusRipple
          variant="contained"
          startIcon={<Add />}
          sx={{ alignSelf: "flex-start" }}
          onClick={() => setActiveModal(true)}
        >
          Add Owner
        </Button>
      </Stack>

      <LandOwnerTable />
      <AddOwnerModal open={activeModal} onClose={() => setActiveModal(false)} control={ownerFieldControl} form={ownersForm} />
    </StyledFieldset >
  );
}

export default OwnerInfoFields;
