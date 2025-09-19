import { DataGrid } from "@mui/x-data-grid";
import { BLDG_ASSESSMENT_COLUMNS } from "../../../constants/building/table-columns";
import { DATA_GRID_STYLE, DATA_GRID_INITIAL_STATE, LAND_INNER_TABLE_WIDTH } from "@constants/tableStyles";
import { MenuItem, Select } from "@mui/material";
import { FIELDS } from "../../../constants/shared/fieldNames";
import { CLASSIFICATION_OPTIONS } from "../../../constants/shared/dropdown";
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
          field: "actualUse",
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
                value={params.row?.actualUse}
                onChange={(e) => handleChange(e.target.value)}
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
        ...BLDG_ASSESSMENT_COLUMNS,
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
