import { DataGrid } from "@mui/x-data-grid";
import { APPRAISAL_COLUMN } from "../../constants/tableColumns";
import { DATA_GRID_INITIAL_STATE } from "../../constants/defaultValues";
import { LAND_INNER_TABLE_WIDTH } from "../../constants/styles";
import { DATA_GRID_STYLE } from "../../../../utils/constant";
import LandAppraisalTableFooter from "../ui/LandAppraisalTableFooter";
import { Button, IconButton } from "@mui/material";
import { Add, Close, Delete } from "@mui/icons-material";
import { FIELD_NAMES } from "../../constants/fieldNames";

export const LandAppraisalTable = (props) => {
  const { formData, handleDelete } = props;

  const landAppraisalData = formData?.landAppraisal;
  const totalMarketValue = formData?.totalMarketValue;

  return (
    <DataGrid
      rows={landAppraisalData}
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
              onClick={() => handleDelete(params.row.id)}
            >
              <Close />
            </IconButton>
          ),
        },
        ...APPRAISAL_COLUMN,
        // {
        //   field: "adjustment",
        //   headerName: "Adjustment",
        //   flex: 1,
        //   headerClassName: "data-grid-header",
        //   align: "center",
        //   sortable: false,
        //   filterable: false,
        //   disableColumnMenu: true,
        //   renderCell: (params) => (
        //     <Button
        //       // startIcon={<Add />}
        //       size="small"
        //       variant="contained"
        //       color="primary"
        //     >
        //       Adjustment
        //     </Button>
        //   ),
        // },
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
      slots={{
        footer: () => (
          <LandAppraisalTableFooter totalMarketValue={totalMarketValue} />
        ),
      }}
    />
  );
};
