import { DataGrid } from "@mui/x-data-grid";
import { MARKET_VALUE_TABLE_COLUMN } from "../../../constants/tableColumns";
import { DATA_GRID_INITIAL_STATE } from "../../../constants/defaultValues";
import { DATA_GRID_STYLE } from "@constants/tableStyles";
import { LAND_INNER_TABLE_WIDTH } from "../../../constants/styles";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { sumByField } from "../../../../../utils/math";
import MarketAdjustmentTableFooter from "./MarketAdjustmentTableFooter";
import { X } from "lucide-react";

export const LandMarketValueTable = (props) => {
  const { handleDelete, marketAdjustment } = props;
  const totalMarketVal = sumByField(marketAdjustment, "adjustedMarketValue");

  return (
    <DataGrid
      rows={marketAdjustment}
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
              onClick={() => handleDelete(params.row.appraisalID)}
            >
              <X />
            </IconButton>
          ),
        },
        ...MARKET_VALUE_TABLE_COLUMN,
      ]}
      initialState={DATA_GRID_INITIAL_STATE}
      sx={{
        ...DATA_GRID_STYLE,
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
