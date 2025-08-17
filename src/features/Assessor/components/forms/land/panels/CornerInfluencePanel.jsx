import { Collapse, Stack } from "@mui/material";
import DividerHeading from "@components/ui/DividerHeading";
import { FIELDS } from "../../../../constants/fieldNames";
import { ADORNMENTS } from "@constants/adornments";
import TextInput from "@components/ui/TextInput";

function CornerInfluencePanel({ open, selectedFactor, selControl }) {
  return (
    <Collapse in={open} timeout={0} unmountOnExit>
      <DividerHeading mt={2}>{selectedFactor} Computation</DividerHeading>

      <Stack spacing={1}>
        <Stack direction="row" spacing={1}>
          <TextInput
            isNumeric
            label="Base Market Value"
            name={FIELDS.LAND_BASE_MARKET_VALUE}
            control={selControl}
            readOnly={true}
            adornment={ADORNMENTS.PESO}
          />

          <TextInput
            isNumeric
            control={selControl}
            name={FIELDS.LAND_AREA}
            label="Area"
            readOnly={true}
            adornment={ADORNMENTS.SQM}
          />
          <TextInput
            isPercent
            control={selControl}
            name={FIELDS.MARKET_ADJUSTMENT_PERCENT}
            label="Percent of Adjustment"
            readOnly={true}
            adornment={ADORNMENTS.PERCENT}
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <TextInput
            isNumeric
            control={selControl}
            name={FIELDS.LAND_UNIT_VALUE}
            label="Unit Value"
            readOnly={true}
            adornment={ADORNMENTS.PESO}
          />
          <TextInput
            isNumeric
            control={selControl}
            name={FIELDS.TOTAL_MARKET_VALUE_ADJUSTMENT}
            label="Total Value Adjustment"
            readOnly={true}
            adornment={ADORNMENTS.PESO}
          />
        </Stack>
      </Stack>
    </Collapse>
  );
}

export default CornerInfluencePanel;
