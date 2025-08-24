import { Button, Stack } from "@mui/material";
import StyledFieldset from "@components/ui/StyledFieldset";
import { Add } from "@mui/icons-material";
import { LandOwnerTable } from "../../../tables/land/owners-table/LandOwnerTable";
import AddOwnerModal from "../modals/AddOwnerModal";
import { useState } from "react";
import { useForm, useFormContext, useWatch } from "react-hook-form";
import { toast } from "react-toastify";
import { v4 } from "uuid";

const DEFAULT_OWNER_FORM = {
  regions: "",
  province: "",
  city: "",
  barangay: "",
  street: "",
  postal: "",
  type: "",
  role: "",
  contact_no: "",
  email: "",
  name: ""
}

function OwnerInfoFields() {
  const [activeModal, setActiveModal] = useState(false)
  const { control: landFormControl, getValues, setValue: setLandFormVal, } = useFormContext()
  const { control: ownerFieldControl, handleSubmit, setValue, reset } = useForm({ defaultValues: DEFAULT_OWNER_FORM })
  const ownersForm = useWatch({ control: ownerFieldControl })
  const land_ownership = useWatch({ control: landFormControl, name: "land_ownership" }) || [];


  const onFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation()

    handleSubmit((data) => {
      try {
        const updatedOwners = [...land_ownership, { ...data, id: v4() }];
        setLandFormVal("land_ownership", updatedOwners);

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
      const updatedOwners = land_ownership.filter(owner => owner.id !== id);
      setLandFormVal("land_ownership", updatedOwners);
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
          disableFocusRipple
          variant="contained"
          startIcon={<Add />}
          sx={{ alignSelf: "flex-start" }}
          onClick={() => setActiveModal(true)}
        >
          Add Owner
        </Button>
      </Stack>

      <LandOwnerTable rows={land_ownership} handleDelete={deleteOwner} />

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
