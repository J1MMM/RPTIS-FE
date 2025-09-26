
import { capitalizeFirstLetter } from "@utils/formatters";

export const OWNER_INFO_TABLE_COLUMN = [
    {
        field: "role",
        headerName: "Role",
        flex: 1,
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        headerAlign: "center",
        align: "center",
        valueFormatter: (params) => capitalizeFirstLetter(params),
    },
    {
        field: "name",
        headerName: "Name",
        width: 225,
        headerClassName: "data-grid-header",
        flex: 1,
        filterable: false,
        disableColumnMenu: true,
        headerAlign: "center",
        align: "center",
        renderCell: (params) => {
            if (params.row?.name) {
                return params.row.name;
            }
            return `${params.row?.lastname} ${params.row?.firstname} ${params.row?.middlename ?? ""} ${params.row?.suffix ?? ""}`;
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
        headerAlign: "center",
        renderCell: (params) => {
            return `${params.row?.brgy} ${params.row?.city} ${params.row?.province} ${params.row?.regions}`;
        },
    },
    {
        field: "tin",
        headerName: "TIN",
        flex: 1,
        headerAlign: "center",
        align: "center",
        headerClassName: "data-grid-header",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
    },
    {
        field: "remarks",
        headerName: "REMARKS",
        flex: 1,
        headerAlign: "center",
        headerClassName: "data-grid-header",
        align: "center",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
    },
];