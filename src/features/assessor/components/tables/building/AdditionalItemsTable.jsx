import { DataGrid } from "@mui/x-data-grid";
import { DATA_GRID_STYLE } from "@constants/tableStyles";
import { IconButton, Stack, Typography } from "@mui/material";
import { X } from "lucide-react";
import { FIELDS } from "../../../constants/fieldNames";
import { DATA_GRID_INITIAL_STATE } from "../../../constants/defaultValues";
import { LAND_INNER_TABLE_WIDTH } from "../../../constants/styles";
import { sumByField } from "../../../../../utils/math";
import { ADDITIONAL_ITEMS_TABLE_COLUMN } from "../../../constants/tableColumns";
import { formatPeso } from "../../../../../utils/formatters";

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

export const AdditionalItemsTable = ({ fields, handleDelete, readOnly }) => {
  const total = sumByField(fields, "sub_total");

  return (
    <DataGrid
      rows={fields}
      columns={[
        {
          ...columnProps,
          renderCell: (params) => {
            const index = fields.findIndex((f) => f.id === params.row.id);
            return (
              <IconButton
                disabled={readOnly}
                color="mono.main"
                onClick={() => handleDelete(index)}
              >
                <X />
              </IconButton>
            );
          },
        },
        ...ADDITIONAL_ITEMS_TABLE_COLUMN
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
          <Stack direction="row" borderTop="1px solid #E0E0E0" p={1}>
            <Typography sx={{ ...styledText, maxWidth: 70 }} />
            <Typography sx={styledText} />
            <Typography sx={styledText} />

            <Typography sx={styledText} variant="body2"></Typography>
            <Typography sx={{ ...styledText, fontWeight: "600" }} variant="body2">
              Total:
            </Typography>
            <Typography
              sx={{ ...styledText, borderRight: "none", fontWeight: "600" }}
              variant="body2"
            >
              {formatPeso(total)}
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

