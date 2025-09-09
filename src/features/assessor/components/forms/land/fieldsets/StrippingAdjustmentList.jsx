import { Fragment } from "react";
import { FormLabel } from "@mui/material";
import { ADORNMENTS } from "@constants/adornments";
import { toFixedTwo } from "@utils/formatters";
import FormattedNumberInput from "@components/ui/FormattedNumberInput";

function StrippingAdjustmentList({ item }) {
  return (
    <Fragment>
      <FormLabel sx={{ textAlign: "end" }}>{item.label}:</FormLabel>
      <FormattedNumberInput
        label="Unit Values"
        value={item.unitVal}
        size={"small"}
        readOnly={true}
        adornment={ADORNMENTS.PESO}
      />

      <FormattedNumberInput
        label="Percent of Adjustment"
        size="small"
        value={item.percentOfAdj * 100}
        readOnly={true}
        adornment={ADORNMENTS.PERCENT}
      />

      <FormattedNumberInput
        label="Area"
        size="small"
        value={toFixedTwo(item.area)}
        readOnly={true}
        adornment={ADORNMENTS.SQM}
      />

      <FormattedNumberInput
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
