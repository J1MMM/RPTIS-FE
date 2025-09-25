import { Chip } from "@mui/material";
import { FIELDS } from "../shared/fieldNames";
import { formatCamelCase, formatPercent, formatPeso, toUpperCase } from "@utils/formatters";
import { roundToNearestTen } from "@utils/math";
import { classificationMap } from "../shared/lookup";

export const BLDG_TABLE_COLUMN = [
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
            const owners = params.row?.[FIELDS.BLDG_OWNERSHIP_FIELD]?.filter((o) => o.role === "owner") || [];

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
        field: "kindBldg",
        headerName: "KIND OF BUILDING",
        editable: false,
        flex: 1,
        headerClassName: "data-grid-header",
        renderCell: (params) => {
            const kind = params.row.kindBldg
            const chipProps = classificationMap[kind]
            return (
                <Chip
                    size="small"
                    label={chipProps.label}
                    sx={{ fontSize: 9, bgcolor: chipProps.color, color: "#FFF", }}
                />
            );
        },
    },
    {
        field: "land_reference",
        headerName: "LAND REFERENCE",
        flex: 1,
        editable: false,
        headerClassName: "data-grid-header",
        renderCell: (params) => {
            const { brgy, city } = params.row?.land_reference
            if (!brgy) return "-"
            return `BRGY. ${brgy || "-"} ${city}`
        },
    },
    {
        field: "propertyAssessments",
        headerName: "ASSESSED VALUE",
        flex: 1,
        editable: false,
        headerClassName: "data-grid-header",
        valueFormatter: (params) => formatPeso(params?.assessedValue)
    },
    {
        field: FIELDS.TAXABILITY,
        headerName: "TAXABILITY",
        flex: 1,
        editable: false,
        headerClassName: "data-grid-header",
        valueFormatter: (params) => toUpperCase(params)
    },
];

export const BLDG_ASSESSMENT_COLUMNS = [
    {
        field: "marketValue",
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
        field: "assessmentLevel",
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
        field: "assessedValue",
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

export const ADDITIONAL_ITEMS_TABLE_COLUMN = [
    {
        field: "category",
        headerName: "Types of Items",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        valueFormatter: (params) => formatCamelCase(params)
    },
    {
        field: "area",
        headerName: "Area",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        valueFormatter: (params) => params ? params : "-"
    },
    {
        field: "material",
        headerName: "Material",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        valueFormatter: (params) => params ? formatCamelCase(params) : "-"
    },
    {
        field: "cost",
        headerName: "Cost /m²",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        valueFormatter: (params) => params ? formatPeso(params) : "-"
    },
    {
        field: "total",
        headerName: "Sub-Total",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        valueFormatter: (params) => formatPeso(params)
    },
];