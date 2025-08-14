import { Box, Collapse, Divider, Grid2, Stack } from "@mui/material";
import DividerHeading from "@components/ui/DividerHeading";
import { FIELD_NAMES } from "../../../../constants/fieldNames";
import StrippingAdjustmentList from "../fields/StrippingAdjustmentList";
import { ADORNMENTS } from "@constants/adornments";
import NumberInput from "@components/inputs/NumberInput";
import NumericFormatTextField from "@components/inputs/NumericFormatTextField";

function StrippingComputationPanel({
  open,
  selectedRow,
  selectedRowEmpty,
  visibleStripping,
  strippingFields,
  handleFieldsChange,
}) {
  return (
    <Collapse in={open} timeout={0} easing="ease-in-out" unmountOnExit>
      <DividerHeading mt={2}>Stripping Computation</DividerHeading>

      <Stack direction="row" gap={1}>
        <NumberInput
          disabled={selectedRowEmpty}
          label="Area"
          name={FIELD_NAMES.MARKET_VALUE_ADJUSTMENT_INPUT_AREA}
          value={
            selectedRow[FIELD_NAMES.MARKET_VALUE_ADJUSTMENT_INPUT_AREA] || ""
          }
          onChange={handleFieldsChange}
          adornment={ADORNMENTS.SQM}
        />

        <NumericFormatTextField
          disabled={selectedRowEmpty}
          label="Total Value Adjustment"
          name={FIELD_NAMES.TOTAL_MARKET_VALUE_ADJUSTMENT}
          value={selectedRow[FIELD_NAMES.TOTAL_MARKET_VALUE_ADJUSTMENT] || ""}
          onChange={handleFieldsChange}
          readOnly={true}
          adornment={ADORNMENTS.PESO}
        />
      </Stack>

      <Divider
        sx={{
          my: 2,
          borderColor: "primary.main",
        }}
      />

      <Grid2
        container
        sx={{
          display: "grid",
          gridTemplateColumns: "auto 1fr  1fr 1fr 1fr",
          columnGap: 1,
          alignItems: "center",
          alignContent: "start",
        }}
      >
        {strippingFields?.slice(0, visibleStripping).map((item, index) => (
          <StrippingAdjustmentList key={index} item={item} />
        ))}
      </Grid2>
    </Collapse>
  );
}

export default StrippingComputationPanel;
