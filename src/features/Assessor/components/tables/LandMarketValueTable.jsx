import { DataGrid } from "@mui/x-data-grid";
import { MARKET_VALUE_TABLE_COLUMN } from "../../constants/tableColumns";
import { DATA_GRID_INITIAL_STATE } from "../../constants/defaultValues";
import { DATA_GRID_STYLE } from "../../../../utils/constant";
import { LAND_INNER_TABLE_WIDTH } from "../../constants/styles";
import LandAppraisalTableFooter from "../ui/LandAppraisalTableFooter";
import MarketAdjustmentTableFooter from "../ui/MarketAdjustmentTableFooter";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { sumByField } from "../../../../utils/math";

export const LandMarketValueTable = (props) => {
  const { formData, handleDelete } = props;
  const marketValArr = formData?.marketAdjustment;
  const totalMarketVal = sumByField(marketValArr, "adjustedMarketValue");

  return (
    <DataGrid
      rows={marketValArr}
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
              <Close />
            </IconButton>
          ),
        },
        ...MARKET_VALUE_TABLE_COLUMN,
      ]}
      initialState={DATA_GRID_INITIAL_STATE}
      sx={{
        ...DATA_GRID_STYLE,
        width: LAND_INNER_TABLE_WIDTH,
        maxHeight: 260,
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
