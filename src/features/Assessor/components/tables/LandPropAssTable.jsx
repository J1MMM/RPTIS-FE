import { DataGrid } from "@mui/x-data-grid";
import {
  APPRAISAL_COLUMN,
  PROPERTY_ASS_TABLE_COLUMN,
} from "../../constants/tableColumns";
import { DATA_GRID_INITIAL_STATE } from "../../constants/defaultValues";
import { LAND_INNER_TABLE_WIDTH } from "../../constants/styles";
import { DATA_GRID_STYLE } from "../../../../utils/constant";
import LandAppraisalTableFooter from "../ui/LandAppraisalTableFooter";
import { IconButton, MenuItem, Select } from "@mui/material";
import { Close, Delete } from "@mui/icons-material";
import { FIELD_NAMES } from "../../constants/fieldNames";
import PropAssessmentTableFooter from "../ui/PropAssessmentTableFooter";
import { CLASSIFICATION_OPTIONS } from "../../constants/dropdownOptions";

export const LandPropAssTable = (props) => {
  const { formData, handleDelete } = props;

  const totalAssessedValue = formData[FIELD_NAMES.TOTAL_ASSESSED_VALUE] || 0;

  return (
    <DataGrid
      rows={formData[FIELD_NAMES.LAND_APPRAISAL]}
      columns={[
        // {
        //   field: "actions",
        //   headerName: "Actions",
        //   width: 80,
        //   headerClassName: "data-grid-header",
        //   sortable: false,
        //   filterable: false,
        //   disableColumnMenu: true,
        //   headerAlign: "center",
        //   align: "center",
        //   renderCell: (params) => (
        //     <IconButton
        //       color="mono.main"
        //       onClick={() => handleDelete(params.row.id)}
        //     >
        //       <Close />
        //     </IconButton>
        //   ),
        // },
        {
          field: FIELD_NAMES.PROPERTY_ASSESSMENT_ACTUAL_USE,
          headerName: "Actual Use",
          flex: 1,
          headerClassName: "data-grid-header",
          sortable: false,
          filterable: false,
          disableColumnMenu: true,
          renderCell: (params) => {
            return (
              <Select
                value={params.row.adjustment}
                onChange={(e) => handleChange(params.row.id, e.target.value)}
                fullWidth
                variant="standard"
              >
                <MenuItem value="" disabled>
                  Select adjustment...
                </MenuItem>
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
      sx={{ ...DATA_GRID_STYLE, width: LAND_INNER_TABLE_WIDTH }}
      hideFooterPagination
      disableColumnResize
      showCellVerticalBorder
      slots={{
        footer: () => <PropAssessmentTableFooter total={totalAssessedValue} />,
      }}
    />
  );
};
