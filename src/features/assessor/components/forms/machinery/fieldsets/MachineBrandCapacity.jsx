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

const FORM_DEFAULT = {
  description: "",
  model: "",
  hp: "",
  date_acquired: "",
  condition_when_acquired: "",
  economic_life: {
    estimated: "",
    remaining: ""
  },
  date_installed: "",
  dare_of_operation: "",
  remarks: ""
}

function MachineBrandCapacity({ readOnly }) {
  const { control: machineFormControl, reset, getValues } = useFormContext();
  const { control: formControl, watch, setValue, handleSubmit, reset: resetForm, formState: { isSubmitting } } = useForm({ defaultValues: FORM_DEFAULT });
  const [modalActive, setModalActive] = useState(false);
  const [formMode, setFormMode] = useState("add");
  const [editingId, setEditingId] = useState(null);
  const { fields, append, remove, update } = useFieldArray({ control: machineFormControl, name: FIELDS.M_BRAND_CAPACITY });

  const handleEdit = (idx) => {
    setFormMode("edit");
    setEditingId(idx);
    setModalActive(true);
    resetForm(fields[idx]);
  }

  const onAddSubmit = (data) => {
    try {
      const newItem = { ...data, id: v4() }
      append(newItem);
      resetForm(FORM_DEFAULT);
      toast.success("Machinery added successfully!");
      setModalActive(false);
    } catch (error) {
      toast.error("Failed to Add Machinery. Please try again.");
      console.error("Error in onAddSubmit:", error);
    }
  };

  const onEditSubmit = (data) => {
    try {
      const selectedItem = getValues(FIELDS.M_BRAND_CAPACITY) || []
      update(editingId, { ...data, id: selectedItem[editingId].id });
      setModalActive(false);
      setEditingId(null);
      resetForm(FORM_DEFAULT);
      toast.success("Machinery updated successfully!");
    } catch (error) {
      console.error("Error updating machinery:", error);
      toast.error("Failed to update machinery. Please try again.");
    }
  };

  const handleDelete = (idx) => {
    try {
      remove(idx);
      toast.success("Machinery deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete machinery. Please try again.");
      console.error(error);
    }
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
      <StyledFieldset title="Machinery Brand & Capacity">
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
            Machinery
          </Button>
        </Stack>

        <BrandNCapacityTable
          readOnly={readOnly}
          rows={fields}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />

      </StyledFieldset>

      <AddBrandNCapacityModal
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

export default MachineBrandCapacity