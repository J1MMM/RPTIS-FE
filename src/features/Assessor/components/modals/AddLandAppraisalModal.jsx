import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import {
  CLASSIFICATION_DD,
  SUBCLASS_DD,
} from "../../constants/dropdownOptions";
import { ContainerModal } from "../../../../components/shared/ContainerModal";
import { FIELD_NAMES } from "../../constants/fieldNames";
import {
  ACTUALUSE_EQUI_LEVEL,
  UNIT_VALUE_TABLE,
} from "../../constants/unitValues";

import NumericFormatTextField from "../ui/NumericFormatTextField";
import NumberInputTextField from "../ui/NumberInputTextField";

export const AddLandAppraisalModal = (props) => {
  const { landAppraisal, setLandAppraisal, handleSubmit, open, onClose } =
    props;

  const handleFieldsChange = (e) => {
    const { name, value } = e.target;

    setLandAppraisal((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      };

      // Reset subclass if classification changes
      if (name === FIELD_NAMES.LAND_CLASSIFICATION) {
        updated[FIELD_NAMES.LAND_SUB_CLASS] = "";
      }

      const classification =
        updated[FIELD_NAMES.LAND_CLASSIFICATION]?.toLowerCase();
      const subClass = updated[FIELD_NAMES.LAND_SUB_CLASS]?.toLowerCase();
      const area = parseFloat(updated[FIELD_NAMES.LAND_AREA]) || 0;
      const actualUse =
        updated[FIELD_NAMES.PROPERTY_ASSESSMENT_ACTUAL_USE]?.toLowerCase();

      updated[FIELD_NAMES.LAND_UNIT_VALUE] =
        UNIT_VALUE_TABLE[classification]?.[subClass] || 0;
      updated[FIELD_NAMES.PROPERTY_ASSESSMENT_LEVEL] =
        ACTUALUSE_EQUI_LEVEL[actualUse] || 0;

      updated[FIELD_NAMES.LAND_BASE_MARKET_VALUE] = parseFloat(
        (area * updated[FIELD_NAMES.LAND_UNIT_VALUE]).toFixed(2)
      );

      return updated;
    });
  };

  return (
    <ContainerModal
      maxWidth="sm"
      title="Land Appraisal"
      open={open}
      onClose={onClose}
      onSubmit={handleSubmit}
      actionButton={
        <>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button variant="contained" size="small" type="submit">
            Add
          </Button>
        </>
      }
    >
      <Stack>
        <Stack direction="row" gap={1}>
          <FormControl fullWidth margin="dense">
            <InputLabel>Classification</InputLabel>
            <Select
              required
              label="Classification"
              value={landAppraisal[FIELD_NAMES.LAND_CLASSIFICATION] || ""}
              name={FIELD_NAMES.LAND_CLASSIFICATION}
              onChange={handleFieldsChange}
              readOnly={props?.readOnly || props?.pendingPage}
            >
              {CLASSIFICATION_DD.map((val, index) => (
                <MenuItem key={index} value={val.value}>
                  {val.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            fullWidth
            margin="dense"
            disabled={!landAppraisal[FIELD_NAMES.LAND_CLASSIFICATION]}
          >
            <InputLabel>Sub-Class</InputLabel>
            <Select
              required
              label="Sub-Class"
              value={landAppraisal[FIELD_NAMES.LAND_SUB_CLASS] || ""}
              name={FIELD_NAMES.LAND_SUB_CLASS}
              onChange={handleFieldsChange}
              readOnly={props?.readOnly || props?.pendingPage}
            >
              {SUBCLASS_DD[
                landAppraisal?.[FIELD_NAMES.LAND_CLASSIFICATION]
              ]?.map((val, index) => (
                <MenuItem key={index} value={val}>
                  {val}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <NumberInputTextField
            label="Area"
            name={FIELD_NAMES.LAND_AREA}
            value={landAppraisal?.[FIELD_NAMES.LAND_AREA]}
            onChange={handleFieldsChange}
            readOnly={props?.readOnly}
          />
        </Stack>

        <Stack direction="row" gap={1}>
          <NumericFormatTextField
            label="Unit Value"
            name={FIELD_NAMES.LAND_UNIT_VALUE}
            value={landAppraisal?.[FIELD_NAMES.LAND_UNIT_VALUE]}
          />
          <NumericFormatTextField
            label="Base Market Value"
            name={FIELD_NAMES.LAND_BASE_MARKET_VALUE}
            value={landAppraisal?.[FIELD_NAMES.LAND_BASE_MARKET_VALUE]}
          />
        </Stack>
      </Stack>
    </ContainerModal>
  );
};
