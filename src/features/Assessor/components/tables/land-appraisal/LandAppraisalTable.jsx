import { DataGrid } from "@mui/x-data-grid";
import { APPRAISAL_COLUMN } from "../../../constants/tableColumns";
import { DATA_GRID_INITIAL_STATE } from "../../../constants/defaultValues";
import { LAND_INNER_TABLE_WIDTH } from "../../../constants/styles";
import { DATA_GRID_STYLE } from "@constants/tableStyles";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { FIELDS } from "../../../constants/fieldNames";
import { sumByField } from "../../../../../utils/math";
import LandAppraisalTableFooter from "./LandAppraisalTableFooter";

export const LandAppraisalTable = (props) => {
  const { formData, handleDelete } = props;

  const landAppraisalData = formData?.[FIELDS.LAND_APPRAISAL];
  const totalBaseMarketVal = sumByField(landAppraisalData, "baseMarketValue");

  return (
    <DataGrid
      rows={landAppraisalData}
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
        ...APPRAISAL_COLUMN,
      ]}
      initialState={DATA_GRID_INITIAL_STATE}
      disableRowSelectionOnClick
      sx={{
        ...DATA_GRID_STYLE,
        width: LAND_INNER_TABLE_WIDTH,
        // minHeight: 215,
        // maxHeight: 215,
      }}
      hideFooterPagination
      disableColumnResize
      showCellVerticalBorder
      slots={{
        footer: () => (
          <LandAppraisalTableFooter totalBaseMarketVal={totalBaseMarketVal} />
        ),
      }}
    />
  );
};
