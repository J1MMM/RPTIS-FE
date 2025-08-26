import { Chip, Stack, Typography } from "@mui/material";
import {
  capitalizeFirstLetter,
  formatCamelCase,
  formatPercent,
  formatPeso,
  toUpperCase,
} from "../../../utils/formatters";
import { roundToNearestTen } from "../../../utils/math";
import { FIELDS } from "./fieldNames";

export const LAND_TABLE_COLUMN = [
  {
    field: FIELDS.ARP_NO,
    headerName: "ARP NO.",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: FIELDS.PIN,
    headerName: "PROPERTY INDEX NO.",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
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
      const { landAppraisal } = params.row;

      if (!Array.isArray(landAppraisal)) return null;

      const classificationMap = {
        residential: { label: "RESIDENTIAL", color: "primary.main" },
        commercial: { label: "COMMERCIAL", color: "bg.blue" },
        industrial: { label: "INDUSTRIAL", color: "secondary.main" },
        agricultural: { label: "AGRICULTURAL", color: "bg.green" },
      };

      return (
        <>
          {landAppraisal.map((item, idx) => {
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
    valueFormatter: (params) => toUpperCase(params)
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
    field: "baseMarketValue",
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

  {
    field: FIELDS.MARKET_ADJUSTMENT_PERCENT,
    headerName: "% Adjustment ",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    valueFormatter: (params) => {
      const value = Number(params);
      return isNaN(value) ? "" : formatPercent(value);
    },
  },
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
      return isNaN(value) ? "" : formatPeso(value);
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
      return isNaN(value) ? "" : formatPercent(value);
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
      return isNaN(value) ? "" : formatPeso(roundToNearestTen(value));
    },
  },
];

export const OWNER_INFO_TABLE_COLUMN = [
  {
    field: "type",
    headerName: "Type",
    width: 100,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    valueFormatter: (params) => capitalizeFirstLetter(params)
  },
  {
    field: "role",
    headerName: "Role",
    width: 100,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    valueFormatter: (params) => capitalizeFirstLetter(params),
  },
  {
    field: "name",
    headerName: "Name",
    width: 225,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: (params) => {
      if (params.row?.name) {
        return params.row.name;
      }
      return `${params.row?.lastname} ${params.row?.firstname} ${params.row?.middlename} ${params.row?.suffix}`;
    },
  },
  {
    field: "address",
    headerName: "Complete Address",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: (params) => {
      return `${params.row?.barangay} ${params.row?.city} ${params.row?.province} ${params.row?.regions}`;
    },
  },
  {
    field: "tin",
    headerName: "TIN",
    width: 125,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
  },
];
