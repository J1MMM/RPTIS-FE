import { DataGrid } from "@mui/x-data-grid";
import {
  APPRAISAL_COLUMN,
  PROPERTY_ASS_TABLE_COLUMN,
} from "../../constants/tableColumns";
import { DATA_GRID_INITIAL_STATE } from "../../constants/defaultValues";
import { LAND_INNER_TABLE_WIDTH } from "../../constants/styles";
import { DATA_GRID_STYLE } from "../../../../utils/constant";
import LandAppraisalTableFooter from "../ui/LandAppraisalTableFooter";
import { IconButton } from "@mui/material";
import { Close, Delete } from "@mui/icons-material";
import { FIELD_NAMES } from "../../constants/fieldNames";

export const LandPropAssTable = (props) => {
  const { formData, handleDelete } = props;

  const propertyAssData = formData[FIELD_NAMES.PROPERTY_ASSESSMENT];
  const totalAssessedValue = formData[FIELD_NAMES.TOTAL_ASSESSED_VALUE] || 0;

  return (
    <DataGrid
      rows={propertyAssData}
      columns={[
        {
          field: "actions",
          headerName: "Actions",
          width: 80,
          headerClassName: "data-grid-header",
          sortable: false,
          filterable: false,
          disableColumnMenu: true,
          headerAlign: "center",
          align: "center",
          renderCell: (params) => (
            <IconButton
              color="mono.main"
              onClick={() => handleDelete(params.row.id)}
            >
              <Close />
            </IconButton>
          ),
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
        footer: () => (
          <LandAppraisalTableFooter totalMarketValue={totalAssessedValue} />
        ),
      }}
    />
  );
};
