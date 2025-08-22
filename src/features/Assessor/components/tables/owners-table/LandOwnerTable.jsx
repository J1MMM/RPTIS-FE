import { DataGrid } from "@mui/x-data-grid";
import { APPRAISAL_COLUMN, OWNER_INFO_TABLE_COLUMN } from "../../../constants/tableColumns";
import { DATA_GRID_INITIAL_STATE } from "../../../constants/defaultValues";
import { LAND_INNER_TABLE_WIDTH } from "../../../constants/styles";
import { DATA_GRID_STYLE } from "@constants/tableStyles";
import { IconButton } from "@mui/material";
import { FIELDS } from "../../../constants/fieldNames";
import { sumByField } from "../../../../../utils/math";
import LandOwnerTableFooter from "./LandOwnerTableFooter";
import { X } from "lucide-react";

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

export const LandOwnerTable = ({ currentAppraisals, handleDelete }) => {
  const totalBaseMarketVal = sumByField(currentAppraisals, FIELDS.LAND_BASE_MARKET_VALUE);

  return (
    <DataGrid
      rows={currentAppraisals}
      columns={[
        {
          ...columnProps,
          renderCell: (params) => (
            <IconButton color="mono.main" onClick={() => handleDelete(params.row.id)}>
              <X />
            </IconButton>
          ),
        },
        ...OWNER_INFO_TABLE_COLUMN,
      ]}
      initialState={DATA_GRID_INITIAL_STATE}
      disableRowSelectionOnClick
      sx={{
        ...DATA_GRID_STYLE,
        width: LAND_INNER_TABLE_WIDTH,
        // minHeight: 215,
        // maxHeight: 215,
      }}
      hideFooterPagination
      disableColumnResize
      showCellVerticalBorder

    />
  );
};
