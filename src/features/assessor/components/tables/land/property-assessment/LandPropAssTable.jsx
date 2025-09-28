import { DataGrid } from "@mui/x-data-grid";
import { DATA_GRID_STYLE, DATA_GRID_INITIAL_STATE, LAND_INNER_TABLE_WIDTH } from "@constants/tableStyles";
import { MenuItem, Select } from "@mui/material";
import { FIELDS } from "../../../../constants/shared/fieldNames";
import PropAssessmentTableFooter from "./PropAssessmentTableFooter";
import { CLASSIFICATION_OPTIONS } from "../../../../constants/shared/dropdown";
import { useWatch } from "react-hook-form";
import { sumByField } from "@utils/math";
import { PROPERTY_ASS_TABLE_COLUMN } from "../../../../constants/land/table-columns";

export const LandPropAssTable = (props) => {
  const { control, handleChange, readOnly } = props;
  const propertyAssessments = useWatch({ control, name: FIELDS.ASSESSMENT_FIELDS }) ?? [];
  const totalAssessedValue = sumByField(propertyAssessments, FIELDS.LAND_ASSESSED_VALUE)

  return (
    <DataGrid
      rows={propertyAssessments}
      columns={[
        {
          field: FIELDS.LAND_ACTUAL_USE,
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
                value={params.row[FIELDS.LAND_ACTUAL_USE] ?? ""}
                onChange={(e) => handleChange(params.row.id, e.target.value)}
                fullWidth
                variant="standard"
              >
                {CLASSIFICATION_OPTIONS.map((option, index) => (
                  <MenuItem key={option.value} value={option.value}>
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
      slots={{
        footer: () => <PropAssessmentTableFooter total={totalAssessedValue} />,
      }}
    />
  );
};
