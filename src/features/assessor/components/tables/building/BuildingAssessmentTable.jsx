import { DataGrid } from "@mui/x-data-grid";
import { PROPERTY_ASS_TABLE_COLUMN } from "../../../constants/tableColumns";
import { DATA_GRID_INITIAL_STATE } from "../../../constants/defaultValues";
import { LAND_INNER_TABLE_WIDTH } from "../../../constants/styles";
import { DATA_GRID_STYLE } from "@constants/tableStyles";
import { MenuItem, Select } from "@mui/material";
import { FIELDS } from "../../../constants/fieldNames";
import { CLASSIFICATION_OPTIONS } from "../../../constants/dropdownOptions";
import { useWatch } from "react-hook-form";
import { sumByField } from "@utils/math";

export const BuildingAssessmentTable = (props) => {
  const { handleChange, readOnly, rows } = props;
  const totalAssessedValue = sumByField(rows, FIELDS.LAND_ASSESSED_VALUE)

  return (
    <DataGrid
      rows={rows}
      columns={[
        {
          field: FIELDS.BLDG_ASSESSMENT_ACTUAL_USE,
          headerName: "Actual Use",
          flex: 1,
          headerClassName: "data-grid-header",
          sortable: false,
          filterable: false,
          disableColumnMenu: true,
          renderCell: (params) => {
            return (
              <Select
                required
                disabled={readOnly}
                value={params.row[FIELDS.LAND_ACTUAL_USE]}
                onChange={(e) => handleChange(params.row.id, e.target.value)}
                fullWidth
                variant="standard"
              >
                {CLASSIFICATION_OPTIONS.map((option, index) => (
                  <MenuItem key={index} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            );
          },
        },
        ...PROPERTY_ASS_TABLE_COLUMN,
      ]}
      initialState={DATA_GRID_INITIAL_STATE}
      disableRowSelectionOnClick
      sx={{
        ...DATA_GRID_STYLE,
        width: LAND_INNER_TABLE_WIDTH,
        border: "1px solid neutral.main",
      }}
      hideFooterPagination
      disableColumnResize
      showCellVerticalBorder

    />
  );
};
