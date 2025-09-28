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
  const { fields, append, remove } = useFieldArray({ control: machineFormControl, name: FIELDS.M_BRAND_CAPACITY });


  const onSubmit = (data) => {
    try {
      const newItem = { ...data, id: v4() }

      append(newItem)
      resetForm(FORM_DEFAULT);
      toast.success("Machinery added successfully!");
      setModalActive(false);

    } catch (error) {
      toast.error("Failed to Add Machinery. Please try again.");
      console.error("Error in onSubmit:", error);
    }
  };

  const handleDelete = (idx) => {
    try {
      remove(idx)
      toast.success("Machinery deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete machinery. Please try again.");
      console.error(error);
    }
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
            onClick={() => setModalActive(true)}
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
        />

      </StyledFieldset>

      <AddBrandNCapacityModal
        disabled={isSubmitting}
        open={modalActive}
        onClose={() => setModalActive(false)}
        handleSubmit={handleSubmit(onSubmit)}
        control={formControl}
      />
    </>
  );
};

export default MachineBrandCapacity