import { v4 } from "uuid";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Input, Stack } from "@mui/material";
import { useFieldArray, useForm, useFormContext, useWatch } from "react-hook-form";
import { LandOwnerTable } from "../../../tables/land/owners-table/LandOwnerTable";
import { DEFAULT_OWNER_FORM } from "../../../../constants/land/default";
import StyledFieldset from "@components/ui/StyledFieldset";
import AddOwnerModal from "../modals/AddOwnerModal";
import { FIELDS } from "../../../../constants/shared/fieldNames";
import { PlusCircle } from "lucide-react";

function OwnerInfoFields({ readOnly, ownerFieldName }) {
  const [activeModal, setActiveModal] = useState(false)
  const [formMode, setFormMode] = useState("add")
  const [editingId, setEditingId] = useState(null)
  const { control: bldgControl } = useFormContext()
  const { control: ownerFieldControl, handleSubmit, setValue, reset } = useForm({ defaultValues: DEFAULT_OWNER_FORM })
  const ownersForm = useWatch({ control: ownerFieldControl })
  const { fields, append, remove, update } = useFieldArray({ control: bldgControl, name: ownerFieldName });

  const onAddSubmit = (e) => {
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
  const handleAddBtnClick = () => {
    setFormMode("add")
    setActiveModal(true)
  }

  const handleEdit = (id) => {
    setFormMode("edit")
    setEditingId(id)
    setActiveModal(true)
    reset(fields[id])
  }

  const handleClose = () => {
    setActiveModal(false)
    setEditingId(null)
    reset(DEFAULT_OWNER_FORM)
  }

  const onEditSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation()

    handleSubmit((data) => {
      try {
        update(editingId, { ...data, id: fields[editingId].id })
        setActiveModal(false);
        setEditingId(null);
        reset(DEFAULT_OWNER_FORM);
        toast.success("Owner updated successfully!");
      } catch (error) {
        console.error("Error updating owner:", error);
        toast.error("Failed to update owner. Please try again.");
      }
    })()
  }

  return (
    <StyledFieldset title="Owner's / Administrator">
      <Stack mb={2}>
        <Button
          disabled={readOnly}
          disableFocusRipple
          variant="contained"
          startIcon={<PlusCircle size="18" />}
          sx={{ alignSelf: "flex-start" }}
          onClick={handleAddBtnClick}
        >
          Add Owner
        </Button>
      </Stack>

      <LandOwnerTable readOnly={readOnly} rows={fields} handleDelete={deleteOwner} handleEdit={handleEdit} />

      <AddOwnerModal
        open={activeModal}
        onClose={handleClose}
        control={ownerFieldControl}
        form={ownersForm}
        setValue={setValue}
        onAddSubmit={onAddSubmit}
        onEditSubmit={onEditSubmit}
        formMode={formMode}
      />
    </StyledFieldset >
  );
}

export default OwnerInfoFields;
