import { useEffect } from "react";
import { FolderSearch, User, UserSearch } from "lucide-react";
import { IconButton, InputAdornment, Stack } from "@mui/material";
import { useFormContext, useWatch } from "react-hook-form";
import { StyledFieldset, TextInput, SelectField, NumberInput } from "@components/ui";
import { BRGY_OPTIONS } from "../../../../../../constants/dropdown";
import { BRGY_CODE, BRGY_DISTRICTS } from "../../../../../../constants/barangayCode";
import { FIELDS } from "../../../../constants/shared/fieldNames";
import { ADORNMENTS } from "../../../../../../constants/adornments";

function BuildingLocFields({ control, readOnly }) {
  const { setValue } = useFormContext();

  // Watch needed fields
  const arp = useWatch({ control, name: FIELDS.ARP_NO });
  const pin = useWatch({ control, name: FIELDS.PIN });

  const barangay = useWatch({ control, name: FIELDS.BRGY_REF });
  const arpInput = useWatch({ control, name: "arpInput" });
  const pinInput = useWatch({ control, name: "pinInput" });
  const arpAdornment = useWatch({ control, name: "arpAdornment" });
  const pinAdornment = useWatch({ control, name: "pinAdornment" });


  // useEffect(() => {
  //   if (!barangay) return
  //   const arp = `${BRGY_DISTRICTS[barangay]}-${BRGY_CODE[barangay]}-`;
  //   const pin = `130-${BRGY_DISTRICTS[barangay]}-${BRGY_CODE[barangay]}-`;

  //   if (arp) {
  //     setValue("arpInput", arp)
  //   }

  //   setValue("arpAdornment", arp);
  //   setValue("pinAdornment", pin);

  // }, [barangay]);

  // //  Auto-update derived values
  // useEffect(() => {
  //   if (arpAdornment !== undefined && arpInput !== undefined) {
  //     setValue(FIELDS.ARP_NO, `${arpAdornment}${arpInput}`);
  //   }
  // }, [arpAdornment, arpInput, setValue]);

  // useEffect(() => {
  //   if (pinAdornment !== undefined && pinInput !== undefined) {
  //     setValue(FIELDS.PIN, `${pinAdornment}${pinInput}`);
  //   }
  // }, [pinAdornment, pinInput, setValue]);

  return (
    <StyledFieldset title="Building Location">
      <Stack direction="row" gap={1}>
        <TextInput
          // placeholder={barangay ? undefined : "Select a barangay first"}
          // readOnly={readOnly || !arpAdornment}
          readOnly={readOnly}
          control={control}
          label="ARP NO."
          // name="arpInput"
          name={FIELDS.ARP_NO}
        // adornment={{
        //   startAdornment: (
        //     <InputAdornment position="start" sx={{ marginRight: "1px" }}>
        //       {arpAdornment}
        //     </InputAdornment>
        //   ),
        //   endAdornment: (
        //     <InputAdornment position="end">
        //       <IconButton
        //         title="Find latest ARP"
        //         color="primary"
        //         disabled={!barangay}
        //       >
        //         <FolderSearch />
        //       </IconButton>
        //     </InputAdornment>
        //   ),
        // }}
        />

        <TextInput
          // placeholder={barangay ? undefined : "Select a barangay first"}
          // readOnly={readOnly || !barangay}
          readOnly={readOnly}
          control={control}
          label="PIN NO."
          name={FIELDS.PIN}
        // adornment={{
        //   startAdornment: (
        //     <InputAdornment position="start" sx={{ marginRight: "1px" }}>
        //       {pinAdornment}
        //     </InputAdornment>
        //   ),
        // }}
        />
      </Stack>

      <Stack direction="row" gap={1}>
        <TextInput
          readOnly={readOnly}
          control={control}
          label="No. / Street"
          name={FIELDS.STREET_REF}
        />

        <SelectField
          readOnly={readOnly}
          control={control}
          label="Barangay"
          name={FIELDS.BRGY_REF}
          options={BRGY_OPTIONS}
        />

        <TextInput control={control} label="City" name={FIELDS.CITY_REF} readOnly />
        <TextInput control={control} label="Province" name={FIELDS.PROVINCE_REF} readOnly />
      </Stack>

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
        <NumberInput
          readOnly={readOnly}
          control={control}
          label="Area"
          name={FIELDS.LAND_AREA_REF}
          adornment={ADORNMENTS.SQM}
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
          label="Survey No."
          name={FIELDS.SURVEY_NO_REF}
        />
        <TextInput readOnly={readOnly} control={control} label="Lot No." name={FIELDS.LOT_NO_REF} />
        <TextInput readOnly={readOnly} control={control} label="Block No." name={FIELDS.BLOCK_NO_REF} />
      </Stack>
    </StyledFieldset>
  );
}

export default BuildingLocFields;
