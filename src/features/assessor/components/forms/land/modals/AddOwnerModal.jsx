import { Button, Stack } from "@mui/material";
import { Building2, UserRoundPlus } from "lucide-react";
import ContainerModal from "@components/shared/ContainerModal";
import CancelButton from "@components/ui/CancelButton";
import TextInput from "@components/ui/TextInput";
import SelectField from "@components/ui/SelectField";
import StyledFieldset from "@components/ui/StyledFieldset";
import Row from "@components/ui/Row";
import getPhLocations from "../../../../../../utils/getPhLocations";
import { isEmptyArray } from "../../../../../../utils/validator";

const OWNER_TYPES = [
  { label: "Person", value: "person" },
  { label: "Company", value: "company" },
];

const ROLES = [
  { label: "Owner", value: "owner" },
  { label: "Administrator", value: "administrator" },
];

function AddOwnerModal({ open, onClose, control, form, onSubmit, setValue }) {


  const { regionsOptions, provinceOptions, cityOptions, barangayOptions }
    = getPhLocations({
      selectedRegion: form?.regions,
      selectedProvince: form?.province,
      selectedCity: form?.city,
    })

  return (
    <ContainerModal
      title="Owner's Information"
      open={open}
      onClose={onClose}
      onSubmit={onSubmit}
      headerIcon={form?.type == "company" ? <Building2 /> : <UserRoundPlus />}
      actionButton={
        <>
          <CancelButton onClick={onClose} />
          <Button type="submit" size="small" variant="contained" >Submit</Button>
        </>
      }
    >
      <Stack>
        <Row>
          <SelectField
            control={control}
            name="type"
            label="Owner Type"
            options={OWNER_TYPES}
          />
          <SelectField
            control={control}
            name="role"
            label="Ownership Role"
            options={ROLES}
          />
        </Row>
        <StyledFieldset title={`${form?.type == "company" ? "Company" : "Owner's"} Information`}>
          <Row>
            {
              form?.type == "company" ?
                <TextInput control={control} name="name" label="Company Name" />
                :
                <>
                  <TextInput
                    control={control}
                    name="lastname"
                    label="Last Name"
                  />
                  <TextInput
                    control={control}
                    name="firstname"
                    label="First Name"
                  />
                  <TextInput
                    control={control}
                    name="middlename"
                    label="Middle Name"
                  />
                  <TextInput
                    required={false}
                    control={control}
                    name="suffix"
                    label="Suffix"
                  />
                </>
            }
          </Row>
          <Row>
            <TextInput
              control={control}
              name="contact_no"
              label="Contact Number"
            />
            <TextInput
              required={false}
              control={control}
              type="email"
              name="email"
              label="Email Address"
            />

          </Row>
          <Row>
            <TextInput
              required={false}
              control={control}
              name="remarks"
              label="Remarks"
            />
            <TextInput
              required={false}
              control={control}
              name="tin"
              label="TIN"
            />
          </Row>
        </StyledFieldset>
        <StyledFieldset title="Complete Address">
          <Row>
            <SelectField
              control={control}
              name="regions"
              label="Regions"
              onChange={() => {
                setValue("province", "");
                setValue("city", "");
                setValue("barangay", "");
              }}
              options={regionsOptions}

            />
            <SelectField
              disabled={isEmptyArray(provinceOptions)}
              control={control}
              name="province"
              label="Province"
              options={provinceOptions}
              onChange={() => {
                setValue("city", "");
                setValue("barangay", "");
              }}
            />
          </Row>
          <Row>
            <SelectField
              disabled={isEmptyArray(cityOptions)}
              control={control}
              name="city"
              label="City / Municipality"
              options={cityOptions}
              onChange={() => {
                setValue("barangay", "");
              }}
            />

            <SelectField
              disabled={isEmptyArray(barangayOptions)}
              control={control}
              name="barangay"
              label="Barangay"
              options={barangayOptions}
            />
          </Row>
          <Row>
            <TextInput
              disabled={isEmptyArray(barangayOptions)}
              required={false}
              control={control}
              name="street"
              label="House No. / Street"
            />
            <TextInput
              disabled={isEmptyArray(barangayOptions)}
              required={false}
              control={control}
              name="postal"
              label="Postal Code"
            />
          </Row>

        </StyledFieldset>
      </Stack>
    </ContainerModal >
  );
};

export default AddOwnerModal