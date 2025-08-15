import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Stack,
  TextField,
} from "@mui/material";
import StyledFieldset from "@components/ui/StyledFieldset";
import { FIELDS } from "../../../../constants/fieldNames";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextInput from "../../../../../../components/ui/TextInput";
import SelectField from "../../../../../../components/ui/SelectField";
import { QUATER_OPTIONS } from "../../../../constants/dropdownOptions";
import dayjs from "dayjs";

export const TaxabilityFields = (props) => {
  const { formData, handleFormChange, setFormData } = props;
  return (
    <StyledFieldset title="Taxability & Effectivity">
      <Stack direction="row" gap={1}>
        <FormControlLabel
          control={<Checkbox />}
          label="Taxable"
          checked={formData[FIELDS.TAXABILITY] == "Taxable"}
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              [FIELDS.TAXABILITY]: "Taxable",
            }))
          }
          disabled={props?.readOnly}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Exempt"
          checked={formData[FIELDS.TAXABILITY] == "Exempt"}
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              TAXABILITY: "Exempt",
            }))
          }
          disabled={props?.readOnly}
        />

        <SelectField
          label="Quarter"
          name={FIELDS.EFFECTIVITY_QTR}
          value={formData[FIELDS.EFFECTIVITY_QTR] || ""}
          onChange={handleFormChange}
          readOnly={props?.readOnly}
          options={QUATER_OPTIONS}
        />
        <FormControl margin="dense" fullWidth>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Year"
              value={
                formData[FIELDS.EFFECTIVITY_YEAR] == null
                  ? null
                  : dayjs(formData[FIELDS.EFFECTIVITY_YEAR])
              }
              format="YYYY"
              openTo="year"
              readOnly={props?.readOnly}
              onChange={(newVal) =>
                setFormData((prev) => ({
                  ...prev,
                  [FIELDS.EFFECTIVITY_YEAR]: newVal,
                }))
              }
              slotProps={{ textField: { required: true } }}
            />
          </LocalizationProvider>
        </FormControl>
      </Stack>
    </StyledFieldset>
  );
};
