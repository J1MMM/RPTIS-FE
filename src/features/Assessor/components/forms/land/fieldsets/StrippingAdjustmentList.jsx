import { Fragment } from "react";
import { FormLabel } from "@mui/material";
import { ADORNMENTS } from "@constants/adornments";
import { toFixedTwo } from "@utils/formatters";
import NumericField from "@components/ui/NumericField";

function StrippingAdjustmentList({ item }) {
  return (
    <Fragment>
      <FormLabel sx={{ textAlign: "end" }}>{item.label}:</FormLabel>
      <NumericField
        label="Unit Values"
        value={item.unitVal}
        size={"small"}
        readOnly={true}
        adornment={ADORNMENTS.PESO}
      />

      <NumericField
        label="Percent of Adjustment"
        size="small"
        value={item.percentOfAdj * 100}
        readOnly={true}
        adornment={ADORNMENTS.PERCENT}
      />

      <NumericField
        label="Area"
        size="small"
        value={toFixedTwo(item.area)}
        readOnly={true}
        adornment={ADORNMENTS.SQM}
      />

      <NumericField
        label="Value Adjustment"
        size="small"
        value={toFixedTwo(item.valueAdjustment)}
        readOnly={true}
        adornment={ADORNMENTS.PESO}
      />
    </Fragment>
  );
}

export default StrippingAdjustmentList;
