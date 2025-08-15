import { Chip, Stack } from "@mui/material";
import { formatPercent, formatPeso } from "../../../utils/formatters";
import { roundToNearestTen } from "../../../utils/math";
import { FIELDS } from "./fieldNames";

export const LAND_TABLE_COLUMN = [
  {
    field: "ArpNo",
    headerName: "ARP NO.",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "PID",
    headerName: "PROPERTY INDEX NO.",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },

  {
    field: "fullname",
    headerName: "PROPERTY OWNER",
    editable: false,
    headerClassName: "data-grid-header",
    flex: 1,
    renderCell: (params, i) => {
      const fname = params.row?.fname;
      const mname = params.row?.mname;
      const lname = params.row?.lname;
      return (
        <span>
          {fname} {mname} {lname}
        </span>
      );
    },
  },
  {
    field: "Address",
    headerName: "ADDRESS",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "kind",
    headerName: "KIND",
    editable: false,
    flex: 1,
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      return (
        <Stack flexDirection="row" gap={1}>
          <span>
            {params?.row?.Boundaries?.land == true && (
              <Chip size="small" label="LAND" />
            )}
          </span>
          <span>
            {params?.row?.Boundaries?.building == true && (
              <Chip size="small" label="BUILDING" />
            )}
          </span>
          <span>
            {params?.row?.Boundaries?.machinery == true && (
              <Chip size="small" label="MACHINERY" />
            )}
          </span>
          <span>
            {params?.row?.Boundaries?.others == true && (
              <Chip size="small" label="OTHERS" />
            )}
          </span>
        </Stack>
      );
    },
  },
  {
    field: "LocationOfProperty",
    headerName: "LOCATION OF PROPERTY",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      const block = params.row?.BLOCK;
      const brgy = params.row?.Brgy;
      return (
        <span>
          {block} {brgy}
        </span>
      );
    },
  },
  {
    field: "AssessedValue",
    headerName: "ASSESSED VALUE",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      const classification = params.row?.classification || [];
      return <span>{classification[0]?.assessedValue}</span>;
    },
  },
  {
    field: "TAXABILITY",
    headerName: "TAXABILITY",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",

    renderCell: (params, i) => {
      const TAXABILITY = params.row?.TAXABILITY;
      return <span>{TAXABILITY?.toUpperCase()}</span>;
    },
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
  },
  {
    field: FIELDS.LAND_SUB_CLASS,
    headerName: "Sub-Classification",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
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
