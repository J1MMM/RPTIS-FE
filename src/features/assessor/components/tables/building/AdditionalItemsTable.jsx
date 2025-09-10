import { DataGrid } from "@mui/x-data-grid";
import { DATA_GRID_STYLE } from "@constants/tableStyles";
import { IconButton } from "@mui/material";
import { X } from "lucide-react";
import { FIELDS } from "../../../constants/fieldNames";
import { DATA_GRID_INITIAL_STATE } from "../../../constants/defaultValues";
import { LAND_INNER_TABLE_WIDTH } from "../../../constants/styles";
import { sumByField } from "../../../../../utils/math";
import { ADDITIONAL_ITEMS_TABLE_COLUMN } from "../../../constants/tableColumns";

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

export const AdditionalItemsTable = ({ currentAppraisals, handleDelete, readOnly }) => {
  const totalBaseMarketVal = sumByField(currentAppraisals, FIELDS.LAND_BASE_MARKET_VALUE);

  return (
    <DataGrid
      rows={currentAppraisals}
      columns={[
        {
          ...columnProps,
          renderCell: (params) => (
            <IconButton disabled={readOnly} color="mono.main" onClick={() => handleDelete(params.row.id)}>
              <X />
            </IconButton>
          ),
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
    // slots={{
    //   footer: () => (
    //     <LandAppraisalTableFooter totalBaseMarketVal={totalBaseMarketVal} />
    //   ),
    // }}
    />
  );
};
