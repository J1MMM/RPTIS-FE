import { DataGrid } from "@mui/x-data-grid";
import { LAND_INNER_TABLE_WIDTH, DATA_GRID_STYLE, DATA_GRID_INITIAL_STATE } from "@constants/tableStyles";
import { IconButton } from "@mui/material";
import LandAppraisalTableFooter from "./LandAppraisalTableFooter";
import { X } from "lucide-react";
import { APPRAISAL_COLUMN } from "../../../../constants/land/table-columns";
import { sumByField } from "@utils/math";
import { FIELDS } from "../../../../constants/shared/fieldNames";

const columnProps = {
  field: "actions",
  headerName: "Actions",
  width: 80,
  headerClassName: "data-grid-header",
  sortable: false,
  filterable: false,
  disableColumnMenu: true,
  headerAlign: "center",
  align: "center",
}

export const LandAppraisalTable = ({ currentAppraisals, handleDelete, readOnly }) => {
  const totalBaseMarketVal = sumByField(currentAppraisals, FIELDS.LAND_BASE_MARKET_VALUE);

  return (
    <DataGrid
      rows={currentAppraisals}
      columns={[
        {
          ...columnProps,
          renderCell: (params) => {
            const index = currentAppraisals.findIndex((f) => f.id === params.row.id);

            return (
              <IconButton disabled={readOnly} color="mono.main" onClick={() => handleDelete(index)}>
                <X />
              </IconButton>
            )
          },
        },
        ...APPRAISAL_COLUMN,
      ]}
      initialState={DATA_GRID_INITIAL_STATE}
      disableRowSelectionOnClick
      sx={{
        ...DATA_GRID_STYLE,
        width: LAND_INNER_TABLE_WIDTH,
        border: "1px solid neutral.main",
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
