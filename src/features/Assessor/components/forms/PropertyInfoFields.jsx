import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { BRGY_LIST } from "../../../../utils/constant";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import StyledFieldset from "../ui/StyledFieldset";
import { FIELD_NAMES } from "../../constants/fieldNames";

export const PropertyInfoFields = (props) => {
  const { formData, setFormData, handleFormChange, readOnly, pendingPage } =
    props;

  return (
    <StyledFieldset title="Property Information">
      <Stack direction="row" gap={1}>
        <TextField
          fullWidth
          required
          label="ARP No."
          variant="outlined"
          name={FIELD_NAMES.ARP_NO}
          value={formData[FIELD_NAMES.ARP_NO]}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: readOnly || pendingPage,
            },
          }}
        />

        <TextField
          fullWidth
          required
          label="PIN"
          variant="outlined"
          name={FIELD_NAMES.PIN}
          value={formData[FIELD_NAMES.PIN]}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: readOnly,
            },
          }}
        />
      </Stack>
      <Stack direction="row" gap={1}>
        <TextField
          margin="dense"
          fullWidth
          label="House No. & Street"
          variant="outlined"
          name={FIELD_NAMES.NO_AND_STREET}
          value={formData[FIELD_NAMES.NO_AND_STREET]}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: readOnly,
            },
          }}
        />

        <FormControl fullWidth margin="dense">
          <InputLabel id="Barangay/District">Barangay/District</InputLabel>
          <Select
            labelId="Barangay/District"
            id="demo-simple-select"
            name={FIELD_NAMES.BARANGAY}
            value={formData[FIELD_NAMES.BARANGAY] || ""}
            required
            label="Barangay/District"
            onChange={handleFormChange}
            readOnly={readOnly || pendingPage}
          >
            {BRGY_LIST.map((val, index) => (
              <MenuItem key={index} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          margin="dense"
          fullWidth
          label="City/Municipality"
          variant="outlined"
          name={FIELD_NAMES.CITY}
          value={formData[FIELD_NAMES.CITY]}
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
        />
        <TextField
          margin="dense"
          fullWidth
          label="Province"
          variant="outlined"
          name={FIELD_NAMES.PROVINCE}
          value={formData[FIELD_NAMES.PROVINCE]}
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
        />
      </Stack>
      <Stack direction="row" gap={1}>
        <TextField
          margin="dense"
          fullWidth
          label="OCT/TCT/No."
          variant="outlined"
          name={FIELD_NAMES.OCT_TCT_NO}
          value={formData[FIELD_NAMES.OCT_TCT_NO]}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: readOnly,
            },
          }}
        />

        <FormControl margin="dense" fullWidth>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              value={
                formData[FIELD_NAMES.DATE] == null
                  ? null
                  : dayjs(formData[FIELD_NAMES.DATE])
              }
              readOnly={readOnly}
              onChange={(newVal) =>
                setFormData((prev) => ({
                  ...prev,
                  [FIELD_NAMES.DATE]: newVal,
                }))
              }
              slotProps={{ textField: { required: true } }}
            />
          </LocalizationProvider>
        </FormControl>
      </Stack>
      <Stack direction="row" gap={1}>
        <TextField
          margin="dense"
          fullWidth
          label="Lot No"
          variant="outlined"
          name={FIELD_NAMES.LOT_NO}
          value={formData[FIELD_NAMES.LOT_NO]}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: readOnly,
            },
          }}
        />

        <TextField
          margin="dense"
          fullWidth
          label="Block No."
          variant="outlined"
          name={FIELD_NAMES.BLOCK_NO}
          value={formData[FIELD_NAMES.BLOCK_NO]}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: readOnly,
            },
          }}
        />
      </Stack>
      <Stack direction="row" gap={1}>
        <TextField
          margin="dense"
          fullWidth
          multiline
          label="Survey No."
          variant="outlined"
          name="Survey"
          value={formData[FIELD_NAMES.SURVEY_NO]}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: readOnly,
            },
          }}
        />
      </Stack>
    </StyledFieldset>
  );
};
