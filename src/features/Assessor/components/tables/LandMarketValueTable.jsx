import { DataGrid } from "@mui/x-data-grid";
import { MARKET_VALUE_TABLE_COLUMN } from "../../constants/tableColumns";
import { DATA_GRID_INITIAL_STATE } from "../../constants/defaultValues";
import { DATA_GRID_STYLE } from "../../../../utils/constant";

export const LandMarketValueTable = (props) => {
  const { formData } = props;
  const marketValArr = formData?.marketAdjustment;

  return (
    <DataGrid
      rows={marketValArr}
      columns={MARKET_VALUE_TABLE_COLUMN}
      initialState={DATA_GRID_INITIAL_STATE}
      sx={{
        ...DATA_GRID_STYLE,
        maxHeight: 260,
      }}
      hideFooterPagination
      disableColumnResize
      disableRowSelectionOnClick
      showCellVerticalBorder
    />
  );
};
