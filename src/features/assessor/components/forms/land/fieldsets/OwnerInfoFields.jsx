import { v4 } from "uuid";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Input, Stack } from "@mui/material";
import { useFieldArray, useForm, useFormContext, useWatch } from "react-hook-form";
import { LandOwnerTable } from "../../../tables/land/owners-table/LandOwnerTable";
import { DEFAULT_OWNER_FORM } from "../../../../constants/defaultValues";
import StyledFieldset from "@components/ui/StyledFieldset";
import AddOwnerModal from "../modals/AddOwnerModal";
import { FIELDS } from "../../../../constants/fieldNames";
import { PlusCircle } from "lucide-react";

function OwnerInfoFields({ readOnly, ownerFieldName }) {
  const [activeModal, setActiveModal] = useState(false)
  const { control: bldgControl } = useFormContext()
  const { control: ownerFieldControl, handleSubmit, setValue, reset } = useForm({ defaultValues: ownerFieldName })
  const ownersForm = useWatch({ control: ownerFieldControl })
  const { fields, append, remove } = useFieldArray({ control: bldgControl, name: FIELDS.OWNERSHIP });

  const onFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation()

    handleSubmit((data) => {
      try {
        append({ ...data, id: v4() })
        setActiveModal(false);
        reset(DEFAULT_OWNER_FORM);
        toast.success("Owner added successfully!");
      } catch (error) {
        console.error("Error adding owner:", error);
        toast.error("Failed to add owner. Please try again.");
      }
    })()
  }

  const deleteOwner = (id) => {
    try {
      remove(id)
      toast.success("Owner deleted successfully!");
    } catch (error) {
      console.error("Error deleting owner:", error);
      toast.error("Failed to delete owner. Please try again.");
    }
  };

  return (
    <StyledFieldset title="Owner's / Administrator">
      <Stack mb={2}>
        <Button
          disabled={readOnly}
          disableFocusRipple
          variant="contained"
          startIcon={<PlusCircle size="18" />}
          sx={{ alignSelf: "flex-start" }}
          onClick={() => setActiveModal(true)}
        >
          Add Owner
        </Button>
      </Stack>

      <LandOwnerTable readOnly={readOnly} rows={fields} handleDelete={deleteOwner} />

      <AddOwnerModal
        open={activeModal}
        onClose={() => setActiveModal(false)}
        control={ownerFieldControl}
        form={ownersForm}
        setValue={setValue}
        onSubmit={onFormSubmit}
      />
    </StyledFieldset >
  );
}

export default OwnerInfoFields;
