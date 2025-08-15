import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { BRGY_LIST } from "@constants/barangays";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import StyledFieldset from "@components/ui/StyledFieldset";
import { FIELDS } from "../../../../constants/fieldNames";

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
          name={FIELDS.ARP_NO}
          value={formData[FIELDS.ARP_NO]}
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
          name={FIELDS.PIN}
          value={formData[FIELDS.PIN]}
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
          name={FIELDS.NO_AND_STREET}
          value={formData[FIELDS.NO_AND_STREET]}
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
            name={FIELDS.BARANGAY}
            value={formData[FIELDS.BARANGAY] || ""}
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
          name={FIELDS.CITY}
          value={formData[FIELDS.CITY]}
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
          name={FIELDS.PROVINCE}
          value={formData[FIELDS.PROVINCE]}
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
          name={FIELDS.OCT_TCT_NO}
          value={formData[FIELDS.OCT_TCT_NO]}
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
                formData[FIELDS.DATE] == null
                  ? null
                  : dayjs(formData[FIELDS.DATE])
              }
              readOnly={readOnly}
              onChange={(newVal) =>
                setFormData((prev) => ({
                  ...prev,
                  [FIELDS.DATE]: newVal,
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
          name={FIELDS.LOT_NO}
          value={formData[FIELDS.LOT_NO]}
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
          name={FIELDS.BLOCK_NO}
          value={formData[FIELDS.BLOCK_NO]}
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
          value={formData[FIELDS.SURVEY_NO]}
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
