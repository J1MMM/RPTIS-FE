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
  const { fields, append, remove } = useFieldArray({ control: machineFormControl, name: FIELDS.M_REF_N_POSTING });


  const onSubmit = (data) => {
    try {
      const newItem = { ...data, id: v4() }

      append(newItem)
      resetForm(FORM_DEFAULT);
      toast.success("Reference and posting added successfully!");
      setModalActive(false);

    } catch (error) {
      toast.error("Failed to Add reference and posting. Please try again.");
      console.error("Error in onSubmit:", error);
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

  return (
    <>
      <StyledFieldset title="Reference & Posting Summary">
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
            Reference
          </Button>
        </Stack>

        <ReferenceNPostingTable
          readOnly={readOnly}
          rows={fields}
          handleDelete={handleDelete}
        />

      </StyledFieldset>

      <AddReferenceNPosting
        disabled={isSubmitting}
        open={modalActive}
        onClose={() => setModalActive(false)}
        handleSubmit={handleSubmit(onSubmit)}
        control={formControl}
      />
    </>
  );
};

export default ReferenceNPostingFields