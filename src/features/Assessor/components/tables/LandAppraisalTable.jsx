import { DataGrid } from "@mui/x-data-grid";
import { APPRAISAL_COLUMN } from "../../constants/tableColumns";
import { DATA_GRID_INITIAL_STATE } from "../../constants/defaultValues";
import { LAND_INNER_TABLE_WIDTH } from "../../constants/styles";
import { DATA_GRID_STYLE } from "../../../../utils/constant";

export const LandAppraisalTable = (props) => {
  const { formData } = props;

  return (
    <DataGrid
      rows={formData.landAppraisal}
      columns={APPRAISAL_COLUMN}
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
