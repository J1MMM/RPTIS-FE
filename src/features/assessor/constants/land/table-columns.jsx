import { Chip } from "@mui/material";
import { FIELDS } from "../shared/fieldNames";
import { capitalizeFirstLetter, formatCamelCase, formatPercent, formatPeso, toUpperCase } from "@utils/formatters";
import { roundToNearestTen } from "@utils/math";
import { classificationMap } from "../shared/lookup";

export const LAND_TABLE_COLUMN = [

    {
        field: FIELDS.PIN,
        headerName: "PROPERTY INDEX NO.",
        flex: 1,
        headerClassName: "data-grid-header",
        headerAlign: 'center',
        align: "center"
    },
    {
        field: FIELDS.ARP_NO,
        headerName: "ARP NO.",
        flex: 1,
        headerClassName: "data-grid-header",
        headerAlign: 'center',
        align: "center"
    },
    {
        field: "owner",
        headerName: "PROPERTY OWNER",
        editable: false,
        headerClassName: "data-grid-header",
        flex: 1,
        renderCell: (params) => {
            const owners = params.row?.land_ownership?.filter((o) => o.role === "owner") || [];

            if (owners.length === 0) return null;

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
        field: "class",
        headerName: "CLASSIFICATION",
        editable: false,
        flex: 1,
        headerClassName: "data-grid-header",
        renderCell: (params) => {
            const { landappraisals } = params.row;
            if (!Array.isArray(landappraisals)) return null;

            return (
                <>
                    {landappraisals.map((item, idx) => {
                        const chipProps = classificationMap[item.classification];
                        return chipProps ? (
                            <Chip
                                key={idx}
                                size="small"
                                label={chipProps.label}
                                sx={{ mr: 0.5, fontSize: 9, bgcolor: chipProps.color, color: "#FFF", }}

                            />
                        ) : null;
                    })}
                </>
            );
        },
    },
    {
        field: "location",
        headerName: "LOCATION OF PROPERTY",
        flex: 1,
        editable: false,
        headerClassName: "data-grid-header",
        renderCell: (params) => {
            const { street, brgy, city } = params.row;
            return `Brgy. ${brgy} ${city}`
        },
    },
    {
        field: FIELDS.TOTAL_ASSESSED_VALUE,
        headerName: "ASSESSED VALUE",
        flex: 1,
        editable: false,
        headerClassName: "data-grid-header",
        valueFormatter: (params) => formatPeso(params)
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

export const APPRAISAL_COLUMN = [
    {
        field: FIELDS.LAND_CLASSIFICATION,
        headerName: "Classification",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        valueFormatter: (params) => capitalizeFirstLetter(params)
    },
    {
        field: FIELDS.SUBCLASS,
        headerName: "Sub-Classification",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        valueFormatter: (params) => capitalizeFirstLetter(params)
    },
    {
        field: FIELDS.LAND_AREA,
        headerName: "Area",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        valueFormatter: (params) => {
            const value = Number(params);
            return isNaN(value) ? "" : `${value?.toLocaleString()} m²`;
        },
    },
    {
        field: FIELDS.LAND_UNIT_VALUE,
        headerName: "Unit Value",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        valueFormatter: (params) => {
            const value = Number(params);
            return isNaN(value) ? "" : formatPeso(value);
        },
    },
    {
        field: FIELDS.LAND_BASE_MARKET_VALUE,
        headerName: "Base Market Value",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        valueFormatter: (params) => {
            const value = Number(params);
            return isNaN(value) ? "" : formatPeso(value);
        },
    },
];

export const MARKET_VALUE_TABLE_COLUMN = [
    {
        field: FIELDS.LAND_BASE_MARKET_VALUE,
        headerName: "Base Market Value",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        valueFormatter: (params) => {
            const value = Number(params);
            return isNaN(value) ? "" : formatPeso(value);
        },
    },
    {
        field: FIELDS.MARKET_ADJUSTMENT_FACTORS,
        headerName: "Adjustment Factors",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        valueFormatter: (params) => formatCamelCase(params)

    },

    // {
    //   field: FIELDS.MARKET_ADJUSTMENT_PERCENT,
    //   headerName: "% Adjustment ",
    //   flex: 1,
    //   headerClassName: "data-grid-header",
    //   sortable: false,
    //   filterable: false,
    //   disableColumnMenu: true,
    //   valueFormatter: (params) => {
    //     const value = Number(params);
    //     return isNaN(value) ? "" : formatPercent(value);
    //   },
    // },
    {
        field: FIELDS.ADJUSTED_MARKETVALUE,
        headerName: "Value Adjustment",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        valueFormatter: (params) => {
            const value = Number(params);
            return isNaN(value) ? "" : formatPeso(value);
        },
    },
];




export const PROPERTY_ASS_TABLE_COLUMN = [
    {
        field: FIELDS.LAND_MARKET_VALUE,
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
        field: FIELDS.LAND_ASSESSMENT_LEVEL,
        headerName: "Assessment Level",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        valueFormatter: (params) => {
            const value = Number(params);
            return isNaN(value) ? "-" : formatPercent(value / 100);
        },
    },
    {
        field: FIELDS.LAND_ASSESSED_VALUE,
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
