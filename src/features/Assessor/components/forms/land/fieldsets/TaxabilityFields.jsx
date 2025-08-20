import { Controller } from "react-hook-form";
import { FormControl, FormControlLabel, Radio, RadioGroup, Stack } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import StyledFieldset from "@components/ui/StyledFieldset";
import SelectField from "@components/ui/SelectField";
import useAssessorForm from "../../../../hooks/useFormContext";
import { FIELDS } from "../../../../constants/fieldNames";
import { QUATER_OPTIONS } from "../../../../constants/dropdownOptions";
import DateInput from "../../../../../../components/ui/DateInput";

function TaxabilityFields({ control }) {

  return (
    <StyledFieldset title="Taxability & Effectivity">
      <Stack direction="row" gap={1}>
        <Stack direction="row" width={"100%"}>
          <Controller
            name={FIELDS.TAXABILITY}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <RadioGroup {...field} sx={{ display: "flex", flexDirection: "row" }} >
                <FormControlLabel
                  required
                  value="Taxable"
                  control={<Radio />}
                  label="Taxable"
                />
                <FormControlLabel
                  required
                  value="Exempt"
                  control={<Radio />}
                  label="Exempt"
                />
              </RadioGroup>
            )}
          />
        </Stack>


        <SelectField
          control={control}
          label="Quarter"
          name={FIELDS.EFFECTIVITY_QTR}
          options={QUATER_OPTIONS}
        />


        <DateInput popperClass="yearOnly" control={control} label="Year" name={FIELDS.EFFECTIVITY_YEAR} yearOnly={true} />

      </Stack>
    </StyledFieldset>
  );
};

export default TaxabilityFields