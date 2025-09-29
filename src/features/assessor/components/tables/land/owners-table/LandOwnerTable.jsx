import { DataGrid } from "@mui/x-data-grid";
import { OWNER_INFO_TABLE_COLUMN } from "../../../../constants/shared/table-columns";
import { DATA_GRID_STYLE, DATA_GRID_INITIAL_STATE, LAND_INNER_TABLE_WIDTH } from "@constants/tableStyles";
import { IconButton, Stack } from "@mui/material";
import { Edit, Trash2, X } from "lucide-react";

export const LandOwnerTable = ({ rows, handleDelete, readOnly, handleEdit }) => {
  const COLUMNS = [
    ...OWNER_INFO_TABLE_COLUMN,
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
        const index = rows.findIndex((f) => f.id === params.row.id);

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
      rows={rows}
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
    />
  );
};
