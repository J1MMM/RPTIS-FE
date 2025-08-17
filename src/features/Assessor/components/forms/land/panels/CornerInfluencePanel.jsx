import { Collapse, Stack } from "@mui/material";
import DividerHeading from "@components/ui/DividerHeading";
import NumericFieldOld from "@components/ui/NumericFieldOld";
import { FIELDS } from "../../../../constants/fieldNames";
import { ADORNMENTS } from "@constants/adornments";
import { formatPercent } from "@utils/formatters";

function CornerInfluencePanel({ open, selectedRow, selectedFactor }) {
  return (
    <Collapse in={open} timeout={0} unmountOnExit>
      <DividerHeading mt={2}>{selectedFactor} Computation</DividerHeading>

      <Stack spacing={1}>
        <Stack direction="row" spacing={1}>
          <NumericFieldOld
            label="Base Market Value"
            value={selectedRow[FIELDS.LAND_BASE_MARKET_VALUE] || ""}
            readOnly={true}
            adornment={ADORNMENTS.PESO}
          />

          <NumericFieldOld
            label="Area"
            value={selectedRow[FIELDS.LAND_AREA] || ""}
            readOnly={true}
            adornment={ADORNMENTS.SQM}
          />
          <NumericFieldOld
            label="Percent of Adjustment"
            value={formatPercent(selectedRow?.percent) || ""}
            readOnly={true}
            adornment={ADORNMENTS.PERCENT}
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <NumericFieldOld
            label="Unit Value"
            value={selectedRow[FIELDS.LAND_UNIT_VALUE] || ""}
            readOnly={true}
            adornment={ADORNMENTS.PESO}
          />
          <NumericFieldOld
            label="Total Value Adjustment"
            value={selectedRow[FIELDS.TOTAL_MARKET_VALUE_ADJUSTMENT] || ""}
            readOnly={true}
            adornment={ADORNMENTS.PESO}
          />
        </Stack>
      </Stack>
    </Collapse>
  );
}

export default CornerInfluencePanel;
