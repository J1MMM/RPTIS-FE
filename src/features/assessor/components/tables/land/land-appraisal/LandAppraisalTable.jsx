import { DataGrid } from "@mui/x-data-grid";
import { LAND_INNER_TABLE_WIDTH, DATA_GRID_STYLE, DATA_GRID_INITIAL_STATE } from "@constants/tableStyles";
import { IconButton, Stack } from "@mui/material";
import LandAppraisalTableFooter from "./LandAppraisalTableFooter";
import { Edit, Trash2 } from "lucide-react";
import { APPRAISAL_COLUMN } from "../../../../constants/land/table-columns";
import { sumByField } from "@utils/math";
import { FIELDS } from "../../../../constants/shared/fieldNames";

export const LandAppraisalTable = ({ currentAppraisals, handleDelete, readOnly, handleEdit }) => {
  const totalBaseMarketVal = sumByField(currentAppraisals, FIELDS.LAND_BASE_MARKET_VALUE);

  const COLUMNS = [
    ...APPRAISAL_COLUMN,
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      headerClassName: "data-grid-header",
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        const index = currentAppraisals.findIndex((f) => f.id === params.row.id);

        return (
          <Stack direction={"row"} gap={1} display={"flex"} justifyContent={"center"} height={"100%"} alignItems={"center"}>
            <IconButton size="small" color="error" disabled={readOnly} onClick={() => handleDelete(index)}>
              <Trash2 size={18} />
            </IconButton>

            <IconButton size="small" color="primary" disabled={readOnly} onClick={() => handleEdit(index)}>
              <Edit size={18} />
            </IconButton>
          </Stack>
        )
      },
    }
  ]

  return (
    <DataGrid
      rows={currentAppraisals}
      columns={COLUMNS}
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
