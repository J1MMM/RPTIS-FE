import { useMemo } from 'react';
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material';
import { DATA_GRID_INITIAL_STATE, DATA_GRID_STYLE, PAGE_SIZE_OPTION } from "@constants/tableStyles";
import { BLDG_TABLE_COLUMN } from '../../../constants/building/table-columns';
import { TableToolbar } from '../../../../../components/shared';


function BuildingFaasTable({ rows, toolbarButtons, handleShowDetails }) {
    const columns = useMemo(() => [...BLDG_TABLE_COLUMN,
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
    }], [])
    return (
        <DataGrid
            className="land-faas-table"
            // checkboxSelection
            rows={rows}
            columns={columns}
            initialState={DATA_GRID_INITIAL_STATE}
            pageSizeOptions={PAGE_SIZE_OPTION}
            disableRowSelectionOnClick
            disableColumnResize
            showCellVerticalBorder
            sx={{ ...DATA_GRID_STYLE }}
            slots={{
                toolbar: () => (
                    <TableToolbar
                        titleText="Building FAAS Records"
                        totalRows={rows?.length}
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

export default BuildingFaasTable