import { formatPercent, formatPeso, formatShortDate } from "../../../../utils/formatters";
import { roundToNearestTen } from "../../../../utils/math";

export const BrandNCapacity_COLUMNS = [
    {
        field: "description",
        headerName: "Description",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
    },
    {
        field: "model",
        headerName: "Model",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
    },
    {
        field: "date_acquired",
        headerName: "Date Acquired",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        valueFormatter: (value) => formatShortDate(value)
    },
    {
        field: "date_installed",
        headerName: "Date Installed",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        valueFormatter: (value) => formatShortDate(value)

    },
    {
        field: "remarks",
        headerName: "Remarks",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
    },
];


export const MachineAppraisal_COLUMNS = [
    {
        field: "machinery_description",
        headerName: "Description",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
    },
    {
        field: "no_of_units",
        headerName: "Units",
        flex: 0.5,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        type: "number",
        headerAlign: 'center',
        align: 'center'
    },
    {
        field: "acquisition_cost",
        headerName: "Acquisition Cost",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        type: "number",
    },
    {
        field: "market_value",
        headerName: "Market Value",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        type: "number",

    },
    {
        field: "depreciation",
        headerName: "Depreciation",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        type: "number",

    },
    {
        field: "depreciation_value",
        headerName: "Depreciation Value",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        type: "number",
        headerAlign: 'center',
        align: 'left',
    },
];

export const M_ASSESSMENT_COLUMNS = [
    {
        field: "market_value",
        headerName: "Market Value",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        valueFormatter: (params) => {
            const value = Number(params);
            return isNaN(value) ? "-" : formatPeso(value);
        },
    },

    {
        field: "assessment_level",
        headerName: "Assessment Level",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        valueFormatter: (params) => {
            const value = Number(params);
            return isNaN(value) ? "-" : formatPercent(value);
        },
    },
    {
        field: "assessed_value",
        headerName: "Assessed Value",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        valueFormatter: (params) => {
            const value = Number(params);
            return isNaN(value) ? "-" : formatPeso(roundToNearestTen(value));
        },
    },
];