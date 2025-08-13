import { Collapse, InputAdornment, Stack } from "@mui/material";
import DividerHeading from "@components/ui/DividerHeading";
import NumberInput from "@components/inputs/NumberInput";
import NumericFormatTextField from "@components/inputs/NumericFormatTextField";
import { SYMBOLS } from "@constants/symbols";
import { FIELD_NAMES } from "../../../../constants/fieldNames";

function CornerInfluencePanel({
  open,
  selectedRow,
  handleFieldsChange,
  selectedRowEmpty,
}) {
  return (
    <Collapse in={open} title="Stripping" unmountOnExit>
      <DividerHeading>Corner Influence</DividerHeading>
      <Stack direction="row" spacing={1} mt={1}>
        <NumberInput
          disabled={selectedRowEmpty}
          label="Area"
          name={FIELD_NAMES.MARKET_VALUE_ADJUSTMENT_INPUT_AREA}
          value={
            selectedRow[FIELD_NAMES.MARKET_VALUE_ADJUSTMENT_INPUT_AREA] || ""
          }
          onChange={handleFieldsChange}
          adornment={{
            endAdornment: (
              <InputAdornment position="start">
                {SYMBOLS.SQUARE_METER}
              </InputAdornment>
            ),
          }}
        />
        <NumericFormatTextField
          disabled={selectedRowEmpty}
          label="Total Value Adjustment"
          name={FIELD_NAMES.TOTAL_MARKET_VALUE_ADJUSTMENT}
          value={selectedRow[FIELD_NAMES.TOTAL_MARKET_VALUE_ADJUSTMENT] || ""}
          onChange={handleFieldsChange}
          readOnly={true}
          adornment={{
            startAdornment: (
              <InputAdornment position="start">{SYMBOLS.PESO}</InputAdornment>
            ),
          }}
        />
        <NumericFormatTextField
          disabled={selectedRowEmpty}
          label="Market Value"
          name={FIELD_NAMES.ADJUSTED_MARKETVALUE}
          value={selectedRow[FIELD_NAMES.ADJUSTED_MARKETVALUE] || ""}
          onChange={handleFieldsChange}
          readOnly={true}
          adornment={{
            startAdornment: (
              <InputAdornment position="start">{SYMBOLS.PESO}</InputAdornment>
            ),
          }}
        />
      </Stack>
    </Collapse>
  );
}

export default CornerInfluencePanel;
