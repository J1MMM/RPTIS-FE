import { Fragment } from "react";
import { FormLabel } from "@mui/material";
import { ADORNMENTS } from "@constants/adornments";
import { toFixedTwo } from "@utils/formatters";
import NumericFieldOld from "@components/ui/NumericFieldOld";

function StrippingAdjustmentList({ item }) {
  return (
    <Fragment>
      <FormLabel sx={{ textAlign: "end" }}>{item.label}:</FormLabel>
      <NumericFieldOld
        label="Unit Values"
        value={item.unitVal}
        size={"small"}
        readOnly={true}
        adornment={ADORNMENTS.PESO}
      />

      <NumericFieldOld
        label="Percent of Adjustment"
        size="small"
        value={item.percentOfAdj * 100}
        readOnly={true}
        adornment={ADORNMENTS.PERCENT}
      />

      <NumericFieldOld
        label="Area"
        size="small"
        value={toFixedTwo(item.area)}
        readOnly={true}
        adornment={ADORNMENTS.SQM}
      />

      <NumericFieldOld
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
