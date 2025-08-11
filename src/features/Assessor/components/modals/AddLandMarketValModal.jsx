import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid2,
  InputAdornment,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { ContainerModal } from "../../../../components/shared/ContainerModal";
import BaseSelect from "../../../../components/inputs/BaseSelect";
import { FIELD_NAMES } from "../../constants/fieldNames";
import NumberInput from "../../../../components/inputs/NumberInput";
import NumericFormatTextField from "../../../../components/inputs/NumericFormatTextField";
import {
  ADJUSTMENT_FACTOR_OPTIONS,
  CLASSIFICATION_OPTIONS,
  SUBCLASS_OPTIONS,
} from "../../constants/dropdownOptions";
import BaseTextField from "../../../../components/inputs/BaseTextField";
import { LandAppraisalTable } from "../tables/LandAppraisalTable";
import { DATA_GRID_STYLE } from "../../../../utils/constant";
import { LAND_INNER_TABLE_WIDTH } from "../../constants/styles";
import { DATA_GRID_INITIAL_STATE } from "../../constants/defaultValues";
import { DataGrid } from "@mui/x-data-grid";
import { APPRAISAL_COLUMN } from "../../constants/tableColumns";
import { Fragment, useEffect, useState } from "react";
import Fieldset from "../../../../components/shared/Fieldset";
import { SYMBOLS } from "../../../../constant/symbols";

const STRIPPING_DEFAULT = [
  {
    name: "1stStripping",
    label: "1st Stripping",
    unitVal: 0,
    percentOfAdj: 0,
    area: 0,
    valueAdjustment: 0,
  },
  {
    name: "2ndStripping",
    label: "2nd Stripping",
    unitVal: 0,
    percentOfAdj: 0,
    area: 0,
    valueAdjustment: 0,
  },
  {
    name: "3rdStripping",
    label: "3rd Stripping",
    unitVal: 0,
    percentOfAdj: 0,
    area: 0,
    valueAdjustment: 0,
  },
];

export const AddLandMarketValModal = (props) => {
  const { open, onClose, inputFields, formData } = props;
  const [selectedRow, setSelectedRow] = useState({});
  const [visibleStripping, setVisibleStripping] = useState(1);
  const [strippingFields, setStrippingFields] = useState(STRIPPING_DEFAULT);
  const isSelectedRowEmpty = Object.keys(selectedRow).length !== 0;
  const inputArea =
    selectedRow?.[FIELD_NAMES.MARKET_VALUE_ADJUSTMENT_INPUT_AREA];

  const [disableSelection, setDisableSelection] = useState(true);
  const handleFieldsChange = (e) => {
    const { name, value } = e.target;

    setSelectedRow((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectClick = (row) => {
    if (isSelectedRowEmpty) {
      setSelectedRow({});
      return;
    }
    setSelectedRow(row);
  };
  console.log("strippingFields");
  console.log(strippingFields);

  useEffect(() => {
    let baseUnitVal = selectedRow[FIELD_NAMES.LAND_UNIT_VALUE];
    if (inputArea) {
      if (inputArea > 60) {
        setVisibleStripping(3);

        setStrippingFields((prev) => {
          return prev?.map((obj) => {
            if (obj.name == "3rdStripping") {
              const unitVal = baseUnitVal * 0.5;
              const area = inputArea - 60;

              return {
                ...obj,
                area: area,
                percentOfAdj: 50,
                unitVal: unitVal,
                valueAdjustment: unitVal * area,
              };
            }
            if (obj.name == "2ndStripping") {
              const unitVal = baseUnitVal * 0.75;
              return {
                ...obj,
                area: 30,
                percentOfAdj: 75,
                unitVal: unitVal,
                valueAdjustment: unitVal * 30,
              };
            }
            if (obj.name == "1stStripping") {
              return {
                ...obj,
                area: 30,
                percentOfAdj: 100,
                unitVal: baseUnitVal,
                valueAdjustment: baseUnitVal * 30,
              };
            }
          });
        });
      } else if (inputArea > 30) {
        setVisibleStripping(2);
        setStrippingFields((prev) => {
          return prev?.map((obj) => {
            if (obj.name == "2ndStripping") {
              const unitVal = baseUnitVal * 0.75;
              const area = inputArea - 30;
              return {
                ...obj,
                area: area,
                percentOfAdj: 75,
                unitVal: unitVal,
                valueAdjustment: unitVal * 30,
              };
            }
            if (obj.name == "1stStripping") {
              return {
                ...obj,
                area: 30,
                percentOfAdj: 100,
                unitVal: baseUnitVal,
                valueAdjustment: baseUnitVal * 30,
              };
            }
            return obj;
          });
        });
      } else {
        setVisibleStripping(1);
        setStrippingFields((prev) => {
          return prev?.map((obj) => {
            if (obj.name == "1stStripping") {
              return {
                ...obj,
                area: inputArea,
                percentOfAdj: 100,
                unitVal: baseUnitVal,
                valueAdjustment: baseUnitVal * inputArea,
              };
            }
            return obj;
          });
        });
      }
    }

    const totalValAdj =
      strippingFields.reduce((total, row) => row.valueAdjustment + total, 0) ||
      0;

    console.log("🚀🚀🚀🚀🚀🚀🚀🚀");
    console.log("totalValAdj");
    console.log(totalValAdj);
    setSelectedRow((prev) => ({
      ...prev,
      totalValueAdjustment: totalValAdj,
    }));
  }, [inputArea]);

  console.log("selectedRow");
  console.log(selectedRow);
  console.log(visibleStripping);
  return (
    <ContainerModal
      maxWidth="md"
      title="Market Value Adjustment"
      open={open}
      onClose={onClose}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
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
          <Button variant="contained" size="small" type="submit">
            Add
          </Button>
        </>
      }
    >
      <Stack>
        <Typography
          variant="h6"
          color="primary"
          sx={{ borderBottom: "2px solid", mb: 2 }}
        >
          Land Appraisal
        </Typography>
        <DataGrid
          rows={formData[FIELD_NAMES.LAND_APPRAISAL]}
          columns={[
            ...APPRAISAL_COLUMN,
            {
              field: "actions",
              headerName: "Actions",
              headerClassName: "data-grid-header",
              sortable: false,
              filterable: false,
              disableColumnMenu: true,
              headerAlign: "center",
              align: "center",

              renderCell: (params) => (
                <Button
                  variant="contained"
                  size="small"
                  color={
                    params.row.id !== selectedRow?.id ? "primary" : "inherit"
                  }
                  onClick={() => {
                    setDisableSelection((prev) => !prev);
                    handleSelectClick(params.row);
                  }}
                  disabled={
                    isSelectedRowEmpty && params.row.id !== selectedRow?.id
                  }
                >
                  {params.row.id !== selectedRow?.id ? "Select" : "Deselect"}
                </Button>
              ),
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
            isSelectedRowEmpty
              ? params.row.id === selectedRow?.id
                ? "active-row"
                : "disabled-row"
              : ""
          }
        />

        <Typography
          variant="h6"
          color="primary"
          sx={{ borderBottom: "2px solid", mt: 2 }}
        >
          Market Value Adjustment
        </Typography>

        <Stack direction="row" gap={1} mt={2}>
          <NumericFormatTextField
            disabled={!isSelectedRowEmpty}
            label="Base Market Value"
            name={FIELD_NAMES.LAND_BASE_MARKET_VALUE}
            value={selectedRow[FIELD_NAMES.LAND_BASE_MARKET_VALUE] || ""}
            readOnly={true}
            adornment={{
              startAdornment: (
                <InputAdornment position="start">&#8369;</InputAdornment>
              ),
            }}
          />
          <BaseSelect
            disabled={!isSelectedRowEmpty}
            label="Adjustment Factors"
            name={FIELD_NAMES.MARKET_ADJUSTMENT_FACTORS}
            value={selectedRow[FIELD_NAMES.MARKET_ADJUSTMENT_FACTORS] || ""}
            onChange={handleFieldsChange}
            options={ADJUSTMENT_FACTOR_OPTIONS}
          />
        </Stack>

        <Collapse
          in={selectedRow[FIELD_NAMES.MARKET_ADJUSTMENT_FACTORS] == "Stripping"}
          title="Stripping"
          unmountOnExit
        >
          <Typography
            variant="h6"
            fontSize={16}
            color="primary"
            sx={{ borderBottom: "2px solid", mt: 2 }}
          >
            Stripping Computation
          </Typography>
          <Grid2
            container
            // border={"1px solid red"}
            sx={{
              display: "grid",
              gridTemplateColumns: "auto 1fr  1fr 1fr 1fr", // 2 equal columns
              columnGap: 1,
              alignItems: "center",
              alignContent: "start",
              mt: 3,
            }}
          >
            {strippingFields.slice(0, visibleStripping).map((item, index) => (
              <Fragment key={index}>
                <Grid2 alignSelf={"center"}>
                  <FormLabel>{item.label}:</FormLabel>
                </Grid2>
                <Grid2>
                  <NumericFormatTextField
                    label="Unit Values"
                    disabled={!isSelectedRowEmpty}
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
                    value={item.percentOfAdj}
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
                    value={item.area}
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
                  <NumberInput
                    label="Value Adjustment"
                    size="small"
                    value={item.valueAdjustment}
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

          <Stack direction="row" spacing={1} mt={1}>
            <NumberInput
              disabled={!isSelectedRowEmpty}
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
              disabled={!isSelectedRowEmpty}
              label="Total Value Adjustment"
              name={FIELD_NAMES.MARKET_ADJUSTMENT_PERCENT}
              value={selectedRow?.totalValueAdjustment || ""}
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
          <Divider
            sx={{
              borderColor: "primary.main", // change line color
              borderWidth: "1px",
              my: 2, // add vertical margin
            }}
          />
        </Collapse>

        <Stack direction="row" gap={1} mt={1}>
          <BaseTextField
            disabled={!isSelectedRowEmpty}
            label="Percent of Adjustment"
            name={FIELD_NAMES.MARKET_ADJUSTMENT_PERCENT}
            value={selectedRow[FIELD_NAMES.MARKET_ADJUSTMENT_PERCENT] || ""}
            onChange={handleFieldsChange}
            readOnly={true}
            adornment={{
              endAdornment: <InputAdornment position="start">%</InputAdornment>,
            }}
          />

          {/* <NumericFormatTextField
            disabled={!isSelectedRowEmpty}
            label="Area"
            name={FIELD_NAMES.LAND_AREA}
            value={selectedRow[FIELD_NAMES.LAND_AREA] || ""}
            onChange={handleFieldsChange}
            readOnly={true}
            adornment={{
              endAdornment: (
                <InputAdornment position="start">m²</InputAdornment>
              ),
            }}
          /> */}
        </Stack>
        <Stack direction="row" gap={1}>
          <NumericFormatTextField
            disabled={!isSelectedRowEmpty}
            label="Value Adjustment"
            name={FIELD_NAMES.MARKET_VALUE_ADJUSTMENT}
            value={selectedRow[FIELD_NAMES.MARKET_VALUE_ADJUSTMENT]}
            adornment={{
              startAdornment: (
                <InputAdornment position="start">&#8369;</InputAdornment>
              ),
            }}
          />
          <NumericFormatTextField
            disabled={!isSelectedRowEmpty}
            label="Market Value"
            name={FIELD_NAMES.ADJUSTED_MARKETVALUE}
            value={selectedRow[FIELD_NAMES.ADJUSTED_MARKETVALUE]}
            adornment={{
              startAdornment: (
                <InputAdornment position="start">&#8369;</InputAdornment>
              ),
            }}
          />
        </Stack>
      </Stack>
    </ContainerModal>
  );
};
