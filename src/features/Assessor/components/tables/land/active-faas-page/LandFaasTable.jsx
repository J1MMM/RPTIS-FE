import { DataGrid } from '@mui/x-data-grid'
import { LAND_TABLE_COLUMN } from '../../../../constants/tableColumns';
import { Button } from '@mui/material';
import { DATA_GRID_INITIAL_STATE, DATA_GRID_STYLE, PAGE_SIZE_OPTION } from "@constants/tableStyles";
import { TableToolbar } from '../../../../../../components/shared';


function LandFaasTable({ rows, toolbarButtons, handleShowDetails }) {
    return (
        <DataGrid
            className="land-faas-table"
            checkboxSelection
            // loading={true}
            rows={rows}
            columns={[...LAND_TABLE_COLUMN,
            {
                field: "actions",
                headerName: "ACTIONS",
                flex: 1,
                sortable: false,
                filterable: false,
                align: "center",
                headerAlign: "center",
                headerClassName: "data-grid-header",
                renderCell: (params) => (
                    <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handleShowDetails(params)}
                    >
                        View
                    </Button>
                ),
            }]}
            initialState={DATA_GRID_INITIAL_STATE}
            pageSizeOptions={PAGE_SIZE_OPTION}
            disableRowSelectionOnClick
            disableColumnResize
            showCellVerticalBorder
            sx={{ ...DATA_GRID_STYLE }}
            slots={{
                toolbar: () => (
                    <TableToolbar
                        titleText="Land FAAS Records"
                        // subText="Appraisal and Assessment Data"
                        actionBtn={toolbarButtons}
                    />
                ),
            }}
            slotProps={{
                panel: {
                    placement: "bottom-end",

                },
            }}
        />
    )
}

export default LandFaasTable