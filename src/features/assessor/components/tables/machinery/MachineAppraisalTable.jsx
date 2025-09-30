import { Edit, Trash2 } from "lucide-react";
import { IconButton, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { MachineAppraisal_COLUMNS } from "../../../constants/machinery/table-columns";
import { LAND_INNER_TABLE_WIDTH, DATA_GRID_STYLE, DATA_GRID_INITIAL_STATE } from "@constants/tableStyles";
import { formatPeso } from "../../../../../utils/formatters";

export const MachineAppraisalTable = ({ rows, handleDelete, readOnly, handleEdit }) => {

  const totalMarketVal = rows.reduce((total, row) => {
    const dep = Number(row?.["depreciation_value"]);
    const mv = Number(row?.["market_value"]);

    let value;
    if (!isNaN(dep) && dep !== 0) {
      value = dep;
    } else {
      value = mv;
    }

    return isNaN(value) ? total : total + value;
  }, 0);


  const COLUMNS = [
    ...MachineAppraisal_COLUMNS,
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
      }}
      hideFooterPagination
      disableColumnResize
      showCellVerticalBorder
      slots={{
        footer: () => (
          <Stack direction="row" borderTop="1px solid #E0E0E0" p={1}>
            <Typography sx={{ ...styledText, minWidth: 200 }} />
            <Typography sx={{ ...styledText, flex: .5 }} />
            <Typography sx={styledText} />
            <Typography sx={styledText} />
            <Typography sx={styledText} />
            <Typography sx={{ ...styledText, fontWeight: "600" }} variant="body2">
              Total:
            </Typography>
            <Typography
              sx={{ ...styledText, fontWeight: "600" }}
              variant="body2"
            >
              {formatPeso(totalMarketVal)}
            </Typography>
          </Stack >
        ),
      }}

    />
  );
};

const styledText = {
  flex: 1,
  padding: "8px",
};
