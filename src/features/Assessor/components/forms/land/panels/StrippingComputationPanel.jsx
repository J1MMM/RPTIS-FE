import {
  Collapse,
  Divider,
  FormLabel,
  Grid2,
  InputAdornment,
  Stack,
} from "@mui/material";
import { Fragment } from "react";
import NumberInput from "@components/inputs/NumberInput";
import NumericFormatTextField from "@components/inputs/NumericFormatTextField";
import DividerHeading from "@components/ui/DividerHeading";
import { toFixedTwo } from "@utils/formatters";
import { SYMBOLS } from "@constants/symbols";
import { FIELD_NAMES } from "../../../../constants/fieldNames";

function StrippingComputationPanel({
  open,
  selectedRow,
  selectedRowEmpty,
  visibleStripping,
  strippingFields,
  handleFieldsChange,
}) {
  return (
    <Collapse in={open} title="Stripping" unmountOnExit>
      <DividerHeading mt={2}>Stripping</DividerHeading>

      <Stack direction="row" gap={1}>
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
          gridTemplateColumns: "auto 1fr  1fr 1fr 1fr", // 2 equal columns
          columnGap: 1,
          alignItems: "center",
          alignContent: "start",
        }}
      >
        {strippingFields?.slice(0, visibleStripping).map((item, index) => (
          <Fragment key={index}>
            <Grid2 display={"flex"} alignSelf={"center"} justifyContent={"end"}>
              <FormLabel>{item.label}:</FormLabel>
            </Grid2>
            <Grid2>
              <NumericFormatTextField
                label="Unit Values"
                disabled={selectedRowEmpty}
                value={item.unitVal}
                size={"small"}
                readOnly={true}
                adornment={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {SYMBOLS.PESO}
                    </InputAdornment>
                  ),
                }}
              />
            </Grid2>
            <Grid2>
              <NumberInput
                label="Percent"
                size="small"
                value={item.percentOfAdj * 100}
                readOnly={true}
                adornment={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {SYMBOLS.PERCENT}
                    </InputAdornment>
                  ),
                }}
              />
            </Grid2>
            <Grid2>
              <NumberInput
                label="Area"
                size="small"
                value={toFixedTwo(item.area)}
                readOnly={true}
                adornment={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {SYMBOLS.SQUARE_METER}
                    </InputAdornment>
                  ),
                }}
              />
            </Grid2>
            <Grid2>
              <NumericFormatTextField
                label="Value Adjustment"
                size="small"
                value={toFixedTwo(item.valueAdjustment)}
                readOnly={true}
                adornment={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {SYMBOLS.PESO}
                    </InputAdornment>
                  ),
                }}
              />
            </Grid2>
          </Fragment>
        ))}
      </Grid2>
    </Collapse>
  );
}

export default StrippingComputationPanel;
