import { DataGrid } from "@mui/x-data-grid";
import { MARKET_VALUE_TABLE_COLUMN } from "../../../../constants/land/table-columns";
import { DATA_GRID_STYLE, DATA_GRID_INITIAL_STATE } from "@constants/tableStyles";
import { IconButton } from "@mui/material";
import MarketAdjustmentTableFooter from "./MarketAdjustmentTableFooter";
import { Trash2, X } from "lucide-react";
import { sumByField } from "@utils/math";
import { FIELDS } from "../../../../constants/shared/fieldNames";
import { LAND_INNER_TABLE_WIDTH } from "@constants/tableStyles";

export const LandMarketValueTable = (props) => {
  const { handleDelete, rows, readOnly } = props;
  const totalMarketVal = sumByField(rows, FIELDS.ADJUSTED_MARKETVALUE);

  return (
    <DataGrid
      rows={rows}
      columns={[
        ...MARKET_VALUE_TABLE_COLUMN,
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
          renderCell: (params) => {
            return (
              <IconButton
                disabled={readOnly}
                color="error"
                size="small"
                onClick={() => handleDelete(params.row.land_appraisal_id)}
              >
                <Trash2 size={18} />
              </IconButton>
            )
          },
        },
      ]}
      initialState={DATA_GRID_INITIAL_STATE}
      sx={{
        ...DATA_GRID_STYLE,
        border: "1px solid neutral.main",
        width: LAND_INNER_TABLE_WIDTH,
        maxHeight: 280,
      }}
      hideFooterPagination
      disableColumnResize
      disableRowSelectionOnClick
      showCellVerticalBorder
      slots={{
        footer: () => <MarketAdjustmentTableFooter total={totalMarketVal} />,
      }}
    />
  );
};
