import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import {
  DATA_GRID_INITIAL_STATE,
  DATA_GRID_STYLE,
  PAGE_SIZE_OPTION,
} from "../../../utils/constant";
import ClassificationCustomFooter from "../custom/ClassificationCustomFooter";
import {
  CLASSIFICATION_COLUMN,
  LAND_INNER_TABLE_WIDTH,
  MARKET_VALUE_TABLE_COLUMN,
} from "../../../pages/Assessor/assessorConstant";

export const LandMarketValueTable = ({
  props,
  classification,
  setFormData,
}) => {
  return (
    <DataGrid
      rows={[
        {
          id: 1,
          baseMarketValue: classification?.baseMarketValue || 0,
          adjustmentFactors: classification?.adjustmentFactors || "",
          adjustmentPercentage: classification?.adjustmentPercentage || 0,
          valueAdjustment: classification?.valueAdjustment || 0,
          marketValue: classification?.marketValue || 0,
        },
      ]}
      columns={MARKET_VALUE_TABLE_COLUMN}
      initialState={DATA_GRID_INITIAL_STATE}
      disableRowSelectionOnClick
      sx={{ ...DATA_GRID_STYLE, width: LAND_INNER_TABLE_WIDTH }}
      hideFooterPagination
      disableColumnResize
      // slots={{
      //   footer: () => (
      //     <ClassificationCustomFooter
      //       marketValueTotal={marketValueTotal}
      //       assessedValueTotal={assessedValueTotal}
      //       areaValueTotal={areaValueTotal}
      //     />
      //   ),
      // }}
    />
  );
};
