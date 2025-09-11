import { Button, IconButton, InputAdornment, Stack } from "@mui/material";
import StyledFieldset from "@components/ui/StyledFieldset";
import { FIELDS } from "../../../../constants/fieldNames";
import TextInput from "../../../../../../components/ui/TextInput";
import SelectField from "../../../../../../components/ui/SelectField";
import { BRGY_OPTIONS } from "../../../../../../constants/dropdown";
import DateInput from "../../../../../../components/ui/DateInput";
import { useFormContext } from "react-hook-form";
import { BRGY_CODE, BRGY_DISTRICTS } from "../../../../../../constants/barangayCode";
import { FolderSearch, UserSearch, } from "lucide-react";

function BuildingLocFields({ control, readOnly }) {
  const { setValue, getValues } = useFormContext()

  return (
    <StyledFieldset title="Building Location">

      <Stack direction="row" gap={1}>
        <TextInput
          control={control}
          label="TD / ARP NO."
          name={FIELDS.TD_ARP_REF}
          adornment={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton color="primary" title="Search Owner">
                  <UserSearch />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextInput
          readOnly={readOnly}
          control={control}
          label="Area"
          name={FIELDS.LAND_AREA_REF}
        />
      </Stack>
      <Stack direction="row" gap={1}>
        <TextInput
          readOnly={readOnly}
          control={control}
          label="Owner"
          name={FIELDS.LAND_OWNER_REF}
        />
      </Stack>
      <Stack direction="row" gap={1}>
        <TextInput
          readOnly={readOnly}
          control={control}
          label="OCT/TCT/CLOA No."
          name={FIELDS.OCT_REF}
        />
        <TextInput
          readOnly={readOnly}
          control={control}
          // multiline={true}
          label="Survey No."
          name={FIELDS.SURVEY_NO_REF}
        />
        <TextInput readOnly={readOnly} control={control} label="Lot No." name={FIELDS.LOT_NO_REF} />
        <TextInput readOnly={readOnly} control={control} label="Block No." name={FIELDS.BLOCK_NO_REF} />
      </Stack>


      <Stack direction="row" gap={1}>
        <TextInput
          placeholder={getValues(FIELDS.BARANGAY) ? undefined : "Select a barangay first"}
          readOnly={readOnly || !getValues("arpAdornment")}
          control={control}
          label="ARP NO."
          name={"arpInput"}
          onChange={(e) => {
            setValue(FIELDS.ARP_NO, `${getValues("arpAdornment")}${e.target.value}`)
          }}
          adornment={{
            startAdornment: (
              <InputAdornment position="start" sx={{ marginRight: "1px" }} >{getValues("arpAdornment")}</InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton title="Find latest ARP" color="primary" disabled={!getValues(FIELDS.BARANGAY)}>
                  <FolderSearch />
                </IconButton>
              </InputAdornment>
            ),
          }} />

        <TextInput
          placeholder={getValues(FIELDS.BARANGAY) ? undefined : "Select a barangay first"}
          readOnly={readOnly || !getValues(FIELDS.BARANGAY)}
          control={control}
          label="PIN NO."
          name={"pinInput"}
          onChange={(e) => {
            setValue(FIELDS.PIN, `${getValues("pinAdornment")}${e.target.value}`)
          }}
          adornment={{
            startAdornment: (
              <InputAdornment position="start" sx={{ marginRight: "1px" }}>{getValues("pinAdornment")}</InputAdornment>
            ),
          }} />
      </Stack>
      <Stack direction="row" gap={1}>
        <TextInput
          readOnly={readOnly}
          control={control}
          label="No. / Street"
          name={FIELDS.NO_AND_STREET}
        />

        <SelectField
          readOnly={readOnly}
          control={control}
          label="Barangay"
          name={FIELDS.BARANGAY}
          options={BRGY_OPTIONS}
          onChange={(e) => {
            const { value } = e.target;
            const arpAdornment = `${BRGY_DISTRICTS[value]}-${BRGY_CODE[value]}-`;
            const pinAdornment = `130-${BRGY_DISTRICTS[value]}-`;
            setValue("arpAdornment", arpAdornment);
            setValue("pinAdornment", pinAdornment);
            setValue(FIELDS.ARP_NO, `${arpAdornment}${getValues("arpInput")}`)
            setValue(FIELDS.PIN, `${pinAdornment}${getValues("pinInput")}`)
          }}
        />

        <TextInput
          control={control}
          label="City"
          name={FIELDS.CITY}
          readOnly={true}
        />
        <TextInput
          control={control}
          label="Province"
          name={FIELDS.PROVINCE}
          readOnly={true}

        />
      </Stack>
    </StyledFieldset>
  );
}

export default BuildingLocFields;
