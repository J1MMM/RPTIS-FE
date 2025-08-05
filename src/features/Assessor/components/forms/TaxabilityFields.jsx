import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Stack,
  TextField,
} from "@mui/material";
import StyledFieldset from "../ui/StyledFieldset";
import { FIELD_NAMES } from "../../constants/fieldNames";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import BaseTextField from "../../../../components/inputs/BaseTextField";
import BaseSelect from "../../../../components/inputs/BaseSelect";
import { QUATER_OPTIONS } from "../../constants/dropdownOptions";

export const TaxabilityFields = (props) => {
  const { formData, handleFormChange, setFormData } = props;
  return (
    <StyledFieldset title="Taxability & Effectivity">
      <Stack direction="row" gap={1}>
        <FormControlLabel
          control={<Checkbox />}
          label="Taxable"
          checked={formData[FIELD_NAMES.TAXABILITY] == "Taxable"}
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              [FIELD_NAMES.TAXABILITY]: "Taxable",
            }))
          }
          disabled={props?.readOnly}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Exempt"
          checked={formData[FIELD_NAMES.TAXABILITY] == "Exempt"}
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              TAXABILITY: "Exempt",
            }))
          }
          disabled={props?.readOnly}
        />

        <BaseSelect
          label="Quarter"
          name={FIELD_NAMES.EFFECTIVITY_QTR}
          value={formData[FIELD_NAMES.EFFECTIVITY_QTR] || ""}
          onChange={handleFormChange}
          readOnly={props?.readOnly}
          options={QUATER_OPTIONS}
        />
        <FormControl margin="dense" fullWidth>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Year"
              value={props?.row?.year == null ? null : dayjs(props?.row?.year)}
              format="YYYY"
              openTo="year"
              readOnly={props?.readOnly}
              onChange={(newVal) =>
                props?.setSelectedRow((prev) => ({
                  ...prev,
                  year: newVal,
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
