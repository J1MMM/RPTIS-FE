import { Button, Stack } from "@mui/material";
import ContainerModal from "@components/shared/ContainerModal";
import CancelButton from "@components/ui/CancelButton";
import { UserRoundPlus } from "lucide-react";
import TextInput from "../../../../../../components/ui/TextInput";
import SelectField from "../../../../../../components/ui/SelectField";
import StyledFieldset from "../../../../../../components/ui/StyledFieldset";

function AddOwnerModal({ open, onClose, control, form }) {
  console.log("form");
  console.log(form);

  return (
    <ContainerModal
      title="Owner's Information"
      open={open}
      onClose={onClose}
      headerIcon={<UserRoundPlus />}
      actionButton={
        <>
          <CancelButton onClick={onClose} />
          <Button size="small" variant="contained">Submit</Button>
        </>
      }
    >
      <Stack>
        <Stack direction="row" gap={1}>
          <SelectField
            control={control}
            name="type"
            label="Owner Type"
            options={[{ label: "Person", value: "person" }, { label: "Company", value: "company" }]}
          />
          <SelectField
            control={control}
            name="role"
            label="Role"
            options={[{ label: "Owner", value: "owner" }, { label: "Administrator", value: "administrator" }]}
          />
        </Stack>
        <StyledFieldset title="Personal Information">
          <Stack direction="row" gap={1}>
            {
              form?.type == "company" ?
                <TextInput control={control} name="name" label="Company name" />
                :
                <>
                  <TextInput
                    control={control}
                    name="lastname"
                    label="Lastname"
                  />
                  <TextInput
                    control={control}
                    name="firstname"
                    label="Firstname"
                  />
                  <TextInput
                    control={control}
                    name="middlename"
                    label="Middlename"
                  />
                  <TextInput
                    control={control}
                    name="suffix"
                    label="Suffix"
                  />
                </>
            }
          </Stack>
          <Stack direction="row" gap={1}>
            <TextInput
              control={control}
              name="contact_no"
              label="Contact no."
            />
            <TextInput
              control={control}
              type="email"
              name="email"
              label="Email Address"
            />
            <TextInput
              control={control}
              name="tin"
              label="TIN"
            />
            <TextInput
              control={control}
              name="remarks"
              label="Remarks"
            />
          </Stack>
        </StyledFieldset>
        <StyledFieldset title="Complete Address">
          <Stack direction="row" gap={1}>
            <TextInput
              control={control}
              name="street"
              label="Street"
            />
            <TextInput
              control={control}
              name="brgy"
              label="Barangay"
            />
            <TextInput
              control={control}
              name="city"
              label="City"
            />
            <TextInput
              control={control}
              name="province"
              label="Province"
            />
          </Stack>
        </StyledFieldset>
      </Stack>
    </ContainerModal >
  );
};

export default AddOwnerModal