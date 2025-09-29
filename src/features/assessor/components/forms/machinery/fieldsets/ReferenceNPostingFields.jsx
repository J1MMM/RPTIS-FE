import { useState } from "react";
import { Button, Stack } from "@mui/material";
import { v4 } from "uuid";
import StyledFieldset from "@components/ui/StyledFieldset";
import { FIELDS } from "../../../../constants/shared/fieldNames";
import { useFieldArray, useForm, useFormContext } from "react-hook-form";
import { toast } from "react-toastify";
import { PlusCircle } from "lucide-react";
import { BrandNCapacityTable } from "../../../tables/machinery/BrandNCapacityTable";
import { AddBrandNCapacityModal } from "../modals/AddBrandNCapacityModal";
import { AddReferenceNPosting } from "../modals/AddReferenceNPosting";
import { ReferenceNPostingTable } from "../../../tables/machinery/ReferenceNPostingTable";

const FORM_DEFAULT = {
  pin: "",
  previous_posting: "",
  present_posting: "",
  posting: {
    initial: "",
    date: ""
  }
}

function ReferenceNPostingFields({ readOnly }) {
  const { control: machineFormControl, reset, getValues } = useFormContext();
  const { control: formControl, watch, setValue, handleSubmit, reset: resetForm, formState: { isSubmitting } } = useForm({ defaultValues: FORM_DEFAULT });
  const [modalActive, setModalActive] = useState(false);
  const [formMode, setFormMode] = useState("add");
  const [editingId, setEditingId] = useState(null);
  const { fields, append, remove, update } = useFieldArray({ control: machineFormControl, name: FIELDS.M_REF_N_POSTING });


  const onAddSubmit = (data) => {
    try {
      const newItem = { ...data, id: v4() }

      append(newItem)
      resetForm(FORM_DEFAULT);
      toast.success("Reference and posting added successfully!");
      setModalActive(false);

    } catch (error) {
      toast.error("Failed to Add reference and posting. Please try again.");
      console.error("Error in onAddSubmit:", error);
    }
  };

  const onEditSubmit = (data) => {
    try {
      update(editingId, { ...data, id: fields[editingId].id });
      setModalActive(false);
      setEditingId(null);
      resetForm(FORM_DEFAULT);
      toast.success("Reference and posting updated successfully!");
    } catch (error) {
      toast.error("Failed to update reference and posting. Please try again.");
      console.error("Error in onEditSubmit:", error);
    }
  };

  const handleDelete = (idx) => {
    try {
      remove(idx)
      toast.success("Reference and posting deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete reference and posting. Please try again.");
      console.error(error);
    }
  };

  const handleEdit = (idx) => {
    setFormMode("edit");
    setEditingId(idx);
    setModalActive(true);
    resetForm(fields[idx]);
  };

  const handleClose = () => {
    setModalActive(false);
    setEditingId(null);
    setFormMode("add");
    resetForm(FORM_DEFAULT);
  };

  const handleAddBtnClick = () => {
    setFormMode("add");
    setModalActive(true);
  };

  return (
    <>
      <StyledFieldset title="Reference & Posting Summary">
        <Stack mb={2}>
          <Button
            disabled={readOnly}
            disableFocusRipple
            variant="contained"
            startIcon={<PlusCircle size="18" />}
            onClick={handleAddBtnClick}
            sx={{
              alignSelf: "flex-start",
            }}
          >
            Reference
          </Button>
        </Stack>

        <ReferenceNPostingTable
          readOnly={readOnly}
          rows={fields}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />

      </StyledFieldset>

      <AddReferenceNPosting
        disabled={isSubmitting}
        open={modalActive}
        onClose={handleClose}
        handleSubmit={formMode === "add" ? handleSubmit(onAddSubmit) : handleSubmit(onEditSubmit)}
        control={formControl}
        formMode={formMode}
      />
    </>
  );
};

export default ReferenceNPostingFields