import {
  Button,
  Collapse,
  Divider,
  FormLabel,
  Grid2,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ContainerModal } from "../../../../components/shared/ContainerModal";
import BaseSelect from "../../../../components/inputs/BaseSelect";
import { FIELD_NAMES } from "../../constants/fieldNames";
import NumberInput from "../../../../components/inputs/NumberInput";
import NumericFormatTextField from "../../../../components/inputs/NumericFormatTextField";
import { ADJUSTMENT_FACTOR_OPTIONS } from "../../constants/dropdownOptions";
import { DATA_GRID_STYLE } from "../../../../utils/constant";
import {
  DATA_GRID_INITIAL_STATE,
  STRIPPING_FIELDS_DEFAULT,
} from "../../constants/defaultValues";
import { DataGrid } from "@mui/x-data-grid";
import { APPRAISAL_COLUMN } from "../../constants/tableColumns";
import { Fragment, useEffect, useState } from "react";
import { SYMBOLS } from "../../../../constant/symbols";
import { computeStrippingFields } from "../../utils/computeStrippingFields";
import { Close } from "@mui/icons-material";
import { NumberFormatBase } from "react-number-format";
import DividerHeading from "../../../../components/ui/DividerHeading";
import BaseTextField from "../../../../components/inputs/BaseTextField";
import { toFixedTwo } from "../../../../utils/formatters";

export const AddLandMarketValModal = (props) => {
  const {
    open,
    onClose,
    formData,
    handleSubmit,
    selectedRow,
    setSelectedRow,
    strippingFields,
    setStrippingFields,
    selectedFactor,
    setSelectedFactor,
  } = props;

  const [visibleStripping, setVisibleStripping] = useState(1);
  const selectedRowEmpty = Object.keys(selectedRow).length === 0;
  // variablesssssssssss
  const FILTERED_LAND_APPRAISAL = formData[FIELD_NAMES.LAND_APPRAISAL]?.filter(
    (row) => row?.adjusted == false
  );
  const USER_INPUT_AREA =
    selectedRow?.[FIELD_NAMES.MARKET_VALUE_ADJUSTMENT_INPUT_AREA];
  const BASE_UNIT_VALUE = Number(
    selectedRow?.[FIELD_NAMES.LAND_UNIT_VALUE] ?? 0
  );

  const handleFieldsChange = (e) => {
    const { name, value } = e.target;

    setSelectedRow((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onDropDownChange = (row, value) => {
    setSelectedRow({ ...row, [FIELD_NAMES.MARKET_ADJUSTMENT_FACTORS]: value });
    setSelectedFactor(value);
    setStrippingFields(STRIPPING_FIELDS_DEFAULT);
    setVisibleStripping(1);
  };

  const onClear = () => {
    setSelectedRow({});
    setSelectedFactor("");
    setStrippingFields(STRIPPING_FIELDS_DEFAULT);
    setVisibleStripping(1);
  };

  console.log("strippingFields");
  console.log(strippingFields);

  useEffect(() => {
    if (!USER_INPUT_AREA) return;

    const { totalValAdj, updatedFields, visibleCount } = computeStrippingFields(
      USER_INPUT_AREA,
      BASE_UNIT_VALUE
    );

    // wag update pag same
    setStrippingFields((prev) =>
      JSON.stringify(prev) === JSON.stringify(updatedFields)
        ? prev
        : updatedFields
    );

    setVisibleStripping((prev) =>
      prev === visibleCount ? prev : visibleCount
    );

    setSelectedRow((prev) => {
      if (!prev) return prev;
      const prevTotal = Number(prev.totalValueAdjustment) || 0;
      if (toFixedTwo(prevTotal) === toFixedTwo(totalValAdj)) {
        return prev; // no change -> avoid state update
      }
      return { ...prev, totalValueAdjustment: toFixedTwo(totalValAdj) };
    });
  }, [USER_INPUT_AREA, selectedRow?.[FIELD_NAMES.LAND_UNIT_VALUE]]);

  console.log("selectedRow");
  console.log(selectedRow);

  return (
    <ContainerModal
      maxWidth="md"
      title="Market Value Adjustment"
      open={open}
      onClose={onClose}
      onSubmit={handleSubmit}
      actionButton={
        <>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            size="small"
            type="submit"
            disabled={selectedFactor == ""}
          >
            Submit
          </Button>
        </>
      }
    >
      <Stack>
        <DividerHeading mt={0}> Land Appraisal</DividerHeading>
        <DataGrid
          rows={FILTERED_LAND_APPRAISAL}
          columns={[
            ...APPRAISAL_COLUMN,
            {
              field: "Adjustment",
              headerName: "Adjustment",
              headerClassName: "data-grid-header",
              sortable: false,
              filterable: false,
              disableColumnMenu: true,
              headerAlign: "center",
              align: "center",
              width: 220,
              display: "flex",

              renderCell: (params) => {
                const isSelected = params.row.id === selectedRow?.id;
                const disabled = selectedRowEmpty && !isSelected;

                return (
                  <TextField
                    select
                    size="small"
                    variant="standard"
                    fullWidth
                    value={isSelected ? selectedFactor : ""}
                    onChange={(e) =>
                      onDropDownChange(params.row, e.target.value)
                    }
                    slotProps={{
                      input: {
                        startAdornment: isSelected ? (
                          <InputAdornment position="start">
                            <IconButton size="small" onClick={onClear}>
                              <Close fontSize="small" />
                            </IconButton>
                          </InputAdornment>
                        ) : null,
                      },
                    }}
                  >
                    <MenuItem disabled value="">
                      <em>Adjustment Factors</em>
                    </MenuItem>
                    {ADJUSTMENT_FACTOR_OPTIONS.map((item) => (
                      <MenuItem key={item.value} value={item.value}>
                        {item.label}
                      </MenuItem>
                    ))}
                  </TextField>
                );
              },
            },
          ]}
          initialState={DATA_GRID_INITIAL_STATE}
          disableRowSelectionOnClick
          sx={{
            ...DATA_GRID_STYLE,
            borderBottom: "1px solid #e3e3e3",
            minHeight: 220,
            maxHeight: 220,

            "& .disabled-row": {
              opacity: 0.5,
              userSelect: "none",
              pointerEvents: "none",
            },
            "& .active-row": {
              bgcolor: "#EDF0F6",
            },

            "& .active-row:hover": {
              bgcolor: "#EDF0F6",
            },
          }}
          hideFooterPagination
          disableColumnResize
          showCellVerticalBorder
          hideFooter
          getRowClassName={(params) =>
            !selectedRowEmpty
              ? params.row.id === selectedRow?.id
                ? "active-row"
                : "disabled-row"
              : ""
          }
        />

        <Collapse
          in={!selectedRowEmpty && selectedFactor == "Stripping"}
          title="Stripping"
          unmountOnExit
        >
          <DividerHeading mt={2}>Stripping</DividerHeading>
          <Stack direction="row" gap={1}>
            <NumberInput
              disabled={selectedRowEmpty}
              label="Area"
              name={FIELD_NAMES.MARKET_VALUE_ADJUSTMENT_INPUT_AREA}
              value={
                selectedRow[FIELD_NAMES.MARKET_VALUE_ADJUSTMENT_INPUT_AREA] ||
                ""
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
              value={
                selectedRow[FIELD_NAMES.TOTAL_MARKET_VALUE_ADJUSTMENT] || ""
              }
              onChange={handleFieldsChange}
              readOnly={true}
              adornment={{
                startAdornment: (
                  <InputAdornment position="start">
                    {SYMBOLS.PESO}
                  </InputAdornment>
                ),
              }}
            />

            {/* <NumericFormatTextField
              disabled={selectedRowEmpty}
              label="Market Value"
              name={FIELD_NAMES.ADJUSTED_MARKETVALUE}
              value={selectedRow[FIELD_NAMES.ADJUSTED_MARKETVALUE] || ""}
              onChange={handleFieldsChange}
              readOnly={true}
              adornment={{
                startAdornment: (
                  <InputAdornment position="start">
                    {SYMBOLS.PESO}
                  </InputAdornment>
                ),
              }}
            /> */}
          </Stack>
          <Divider
            sx={{
              my: 2,
              borderColor: "primary.main",
            }}
          />
          <Grid2
            container
            // border={"1px solid red"}
            sx={{
              display: "grid",
              gridTemplateColumns: "auto 1fr  1fr 1fr 1fr", // 2 equal columns
              columnGap: 1,
              alignItems: "center",
              alignContent: "start",
            }}
          >
            {strippingFields.slice(0, visibleStripping).map((item, index) => (
              <Fragment key={index}>
                <Grid2
                  display={"flex"}
                  alignSelf={"center"}
                  justifyContent={"end"}
                >
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

          <Stack direction="row" spacing={1} mt={1}></Stack>
        </Collapse>

        <Collapse
          in={!selectedRowEmpty && selectedFactor === "Corner Influence"}
          title="Stripping"
          unmountOnExit
        >
          <DividerHeading>Corner Influence</DividerHeading>
          <Stack direction="row" spacing={1} mt={1}>
            <NumberInput
              disabled={selectedRowEmpty}
              label="Area"
              name={FIELD_NAMES.MARKET_VALUE_ADJUSTMENT_INPUT_AREA}
              value={
                selectedRow[FIELD_NAMES.MARKET_VALUE_ADJUSTMENT_INPUT_AREA] ||
                ""
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
              value={
                selectedRow[FIELD_NAMES.TOTAL_MARKET_VALUE_ADJUSTMENT] || ""
              }
              onChange={handleFieldsChange}
              readOnly={true}
              adornment={{
                startAdornment: (
                  <InputAdornment position="start">
                    {SYMBOLS.PESO}
                  </InputAdornment>
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
                  <InputAdornment position="start">
                    {SYMBOLS.PESO}
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Collapse>
      </Stack>
    </ContainerModal>
  );
};
