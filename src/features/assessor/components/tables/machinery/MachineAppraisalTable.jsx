import { X } from "lucide-react";
import { IconButton, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { BrandNCapacity_COLUMNS, MachineAppraisal_COLUMNS } from "../../../constants/machinery/table-columns";
import { LAND_INNER_TABLE_WIDTH, DATA_GRID_STYLE, DATA_GRID_INITIAL_STATE } from "@constants/tableStyles";
import { formatPeso } from "../../../../../utils/formatters";
import { sumByField } from "../../../../../utils/math";

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

export const MachineAppraisalTable = ({ rows, handleDelete, readOnly }) => {

  const totalMarketVal = sumByField(rows, "depreciation_value")

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
        ...MachineAppraisal_COLUMNS,
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
        footer: () => (
          <Stack direction="row" borderTop="1px solid #E0E0E0" p={1}>
            <Typography sx={{ ...styledText, maxWidth: 70 }} />
            <Typography sx={styledText} />
            <Typography sx={{ ...styledText, flex: .5 }} />
            <Typography sx={styledText} />
            <Typography sx={styledText} />
            <Typography sx={{ ...styledText, fontWeight: "600" }} variant="body2">
              Total:
            </Typography>
            <Typography
              sx={{ ...styledText, borderRight: "none", fontWeight: "600" }}
              variant="body2"
            >
              {formatPeso(totalMarketVal)}
            </Typography>
          </Stack>
        ),
      }}

    />
  );
};

const styledText = {
  flex: 1,
  borderRight: "1px solid #E0E0E0",
  padding: "8px",
};
