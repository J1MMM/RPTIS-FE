import { Chip } from "@mui/material";
import { formatPercent, formatPeso, formatShortDate, toUpperCase } from "../../../../utils/formatters";
import { roundToNearestTen } from "../../../../utils/math";
import { FIELDS } from "../shared/fieldNames";
import { classificationMap } from "../shared/lookup";

export const BrandNCapacity_COLUMNS = [
    {
        field: "description",
        headerName: "Description",
        width: 200,
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
        field: "hp",
        headerName: "H.P.",
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
        width: 200,
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
        headerAlign: 'left',
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
        headerAlign: 'left',

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
        headerAlign: 'left',

    },
    {
        field: "depreciation_value",
        headerName: "Depreciated Market Value",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        type: "number",
        headerAlign: 'left',

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
export const REF_N_POSTING_COLUMNS = [
    {
        field: "pin",
        headerName: "PIN",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
    },
    {
        field: "previous_posting",
        headerName: "Previous Posting",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
    },
    {
        field: "present_posting",
        headerName: "Present Posting",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
    },
    {
        field: "posting_initial",
        headerName: "Initial",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        renderCell: (params) => params.row?.posting?.initial ?? "",
    },
    {
        field: "posting_date",
        headerName: "Date",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        renderCell: (params) => params.row?.posting?.date
            ? new Date(params.row.posting.date).toLocaleDateString("en-US")
            : "",
    },
];


export const M_TABLE_COLUMN = [
    {
        field: FIELDS.PIN,
        headerName: "PROPERTY INDEX NO.",
        flex: 1,
        editable: false,
        headerClassName: "data-grid-header",
        headerAlign: 'center',
        align: "center"
    },
    {

        field: FIELDS.ARP_NO,
        headerName: "ARP NO.",
        flex: 1,
        headerAlign: 'center',
        align: "center",
        headerClassName: "data-grid-header",
    },

    {
        field: "owner",
        headerName: "PROPERTY OWNER",
        headerClassName: "data-grid-header",
        flex: 1,
        renderCell: (params) => {
            const owners = params.row?.machine_ownership.filter((o) => o.role === "owner") || [];

            if (owners.length === 0) return "-";

            const ownerNames = owners.map((owner) => {
                if (owner.type === "company") {
                    return owner.name;
                }
                if (owner.type === "person") {
                    const { firstname, middlename, lastname, suffix } = owner;
                    return [
                        firstname,
                        middlename ? middlename[0] + "." : "",
                        lastname,
                        suffix || "",
                    ]
                        .filter(Boolean)
                        .join(" ");
                }
                return "";
            });

            return <span>{ownerNames.join(", ")}</span>;
        },
    },
    {
        field: "land_reference.owner",
        headerName: "LAND OWNER",
        flex: 1,
        editable: false,
        headerClassName: "data-grid-header",
        renderCell: (params) => {
            const { owner } = params.row?.land_reference
            if (!owner) return "-"
            return owner
        },
    },
    {
        field: "bldg_reference.owner",
        headerName: "BUILDING OWNER",
        editable: false,
        flex: 1,
        headerClassName: "data-grid-header",
        renderCell: (params) => {
            const { owner } = params.row?.bldg_reference
            if (!owner) return "-"
            return owner
        },
    },
    {
        field: "property_assessment_machine",
        headerName: "ASSESSED VALUE",
        flex: 1,
        editable: false,
        headerClassName: "data-grid-header",
        renderCell: (params) => {
            const { assessed_value } = params.row?.property_assessment_machine
            if (!assessed_value) return "-"
            return formatPeso(assessed_value)
        },
    },
    {
        field: FIELDS.TAXABILITY,
        headerName: "TAXABILITY",
        flex: 1,
        editable: false,
        headerClassName: "data-grid-header",
        valueFormatter: (params) => params ? "TAXABLE" : "EXEMPT"
    },
];