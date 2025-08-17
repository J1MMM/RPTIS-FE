import { Collapse, Divider, Grid2, Stack } from "@mui/material";
import DividerHeading from "@components/ui/DividerHeading";
import TextInput from "@components/ui/TextInput";
import NumberInput from "@components/ui/NumberInput";
import StrippingAdjustmentList from "../fieldsets/StrippingAdjustmentList";
import { FIELDS } from "../../../../constants/fieldNames";
import { ADORNMENTS } from "@constants/adornments";

function StrippingComputationPanel({ open, selectedRowEmpty, strippingFields, selControl }) {

  return (
    <Collapse in={open} timeout={0} easing="ease-in-out" unmountOnExit>
      <DividerHeading mt={2}>Stripping Computation</DividerHeading>
      <Stack direction="row" gap={1}>
        <NumberInput
          control={selControl}
          disabled={selectedRowEmpty}
          label="Area"
          name={FIELDS.INPUT_AREA}
          adornment={ADORNMENTS.SQM}
        />

        <TextInput
          isNumeric
          control={selControl}
          disabled={selectedRowEmpty}
          label="Total Value Adjustment"
          name={FIELDS.TOTAL_MARKET_VALUE_ADJUSTMENT}
          readOnly={true}
          adornment={ADORNMENTS.PESO}
        />
      </Stack>

      <Divider sx={{ my: 2, borderColor: "primary.main" }} />

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
        {strippingFields?.slice(0, strippingFields?.lenght).map((item, index) => (
          <StrippingAdjustmentList key={index} item={item} />
        ))}
      </Grid2>
    </Collapse>
  );
}

export default StrippingComputationPanel;
