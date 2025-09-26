import { X } from "lucide-react";
import { IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { BrandNCapacity_COLUMNS } from "../../../constants/machinery/table-columns";
import { LAND_INNER_TABLE_WIDTH, DATA_GRID_STYLE, DATA_GRID_INITIAL_STATE } from "@constants/tableStyles";

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

export const BrandNCapacityTable = ({ rows, handleDelete, readOnly }) => {

  return (
    <DataGrid
      rows={rows}
      columns={[
        {
          ...columnProps,
          renderCell: (params) => {
            const index = rows.findIndex((f) => f.id === params.row.id);

            return (
              <IconButton disabled={readOnly} color="mono.main" onClick={() => handleDelete(index)}>
                <X />
              </IconButton>
            )
          },
        },
        ...BrandNCapacity_COLUMNS,
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
    />
  );
};
