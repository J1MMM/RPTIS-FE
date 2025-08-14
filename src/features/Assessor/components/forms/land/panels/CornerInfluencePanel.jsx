import { Box, Collapse, InputAdornment, Stack } from "@mui/material";
import DividerHeading from "@components/ui/DividerHeading";
import NumberInput from "@components/inputs/NumberInput";
import NumericFormatTextField from "@components/inputs/NumericFormatTextField";
import { SYMBOLS } from "@constants/symbols";
import { FIELD_NAMES } from "../../../../constants/fieldNames";
import { useEffect } from "react";
import { ADORNMENTS } from "../../../../../../constants/adornments";
import { formatPercent } from "../../../../../../utils/formatters";

function CornerInfluencePanel({ open, selectedRow, selectedFactor }) {
  return (
    <Collapse in={open} timeout={0} unmountOnExit>
      <DividerHeading mt={2}>{selectedFactor} Computation</DividerHeading>

      <Stack spacing={1}>
        <Stack direction="row" spacing={1}>
          <NumericFormatTextField
            label="Base Market Value"
            value={selectedRow[FIELD_NAMES.LAND_BASE_MARKET_VALUE] || ""}
            readOnly={true}
            adornment={ADORNMENTS.PESO}
          />

          <NumericFormatTextField
            label="Area"
            value={selectedRow[FIELD_NAMES.LAND_AREA] || ""}
            readOnly={true}
            adornment={ADORNMENTS.SQM}
          />
          <NumericFormatTextField
            label="Percent of Adjustment"
            value={formatPercent(selectedRow?.percent) || ""}
            readOnly={true}
            adornment={ADORNMENTS.PERCENT}
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <NumericFormatTextField
            label="Unit Value"
            value={selectedRow[FIELD_NAMES.LAND_UNIT_VALUE] || ""}
            readOnly={true}
            adornment={ADORNMENTS.PESO}
          />
          <NumericFormatTextField
            label="Total Value Adjustment"
            value={selectedRow[FIELD_NAMES.TOTAL_MARKET_VALUE_ADJUSTMENT] || ""}
            readOnly={true}
            adornment={ADORNMENTS.PESO}
          />
        </Stack>
      </Stack>
    </Collapse>
  );
}

export default CornerInfluencePanel;
