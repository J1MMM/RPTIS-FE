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

export const TaxabilityFields = (props) => {
  const { formData, handleFormChange, setFormData } = props;
  return (
    <StyledFieldset title="TAXABILITY">
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

        <TextField
          margin="dense"
          fullWidth
          label="QTR"
          variant="outlined"
          name="qtr"
          value={props?.row?.qtr}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
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
