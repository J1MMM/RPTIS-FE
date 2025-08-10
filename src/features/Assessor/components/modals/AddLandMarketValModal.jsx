import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
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
import { useState } from "react";
import Fieldset from "../../../../components/shared/Fieldset";

const STRIPPINGS = [
  { name: "stripping1st", label: "1st Stripping" },
  { name: "stripping2nd", label: "2nd Stripping" },
  { name: "stripping3rd", label: "3rd Stripping" },
];

export const AddLandMarketValModal = (props) => {
  const { open, onClose, inputFields, formData } = props;
  const [selectedRow, setSelectedRow] = useState({});
  const isSelectedRowEmpty = Object.keys(selectedRow).length !== 0;
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

  console.log("selectedRow");
  console.log(selectedRow);
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
        {selectedRow[FIELD_NAMES.MARKET_ADJUSTMENT_FACTORS] == "Stripping" && (
          <Fieldset title="Stripping">
            <Grid2
              container
              border={"1px solid red"}
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr", // 2 equal columns
                gap: 2, // theme spacing
              }}
            >
              <Grid2 border={"1px solid"}>
                <table border={"1px solid"}>
                  <tbody>
                    {STRIPPINGS.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <FormControlLabel
                            control={
                              <Checkbox
                              //  checked={false}
                              />
                            }
                            label={item.label}
                            sx={{ whiteSpace: "nowrap" }}
                          />
                        </td>
                        <td>
                          <TextField
                            size="small"
                            variant="outlined"
                            placeholder="Area"
                            slotProps={{
                              input: {
                                endAdornment: (
                                  <InputAdornment position="start">
                                    m²
                                  </InputAdornment>
                                ),
                              },
                            }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Grid2>
              <Grid2>
                <BaseTextField
                  disabled={!isSelectedRowEmpty}
                  label="Percent of Adjustment"
                  name={FIELD_NAMES.MARKET_ADJUSTMENT_PERCENT}
                  value={
                    selectedRow[FIELD_NAMES.MARKET_ADJUSTMENT_PERCENT] || ""
                  }
                  onChange={handleFieldsChange}
                  readOnly={true}
                  adornment={{
                    endAdornment: (
                      <InputAdornment position="start">%</InputAdornment>
                    ),
                  }}
                />
              </Grid2>
            </Grid2>
          </Fieldset>
        )}

        <Stack direction="row" gap={1}>
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
          <NumericFormatTextField
            disabled={!isSelectedRowEmpty}
            label="Unit Value"
            name={FIELD_NAMES.LAND_UNIT_VALUE}
            value={selectedRow[FIELD_NAMES.LAND_UNIT_VALUE]}
            adornment={{
              startAdornment: (
                <InputAdornment position="start">&#8369;</InputAdornment>
              ),
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
