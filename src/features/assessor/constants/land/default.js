import { FIELDS } from "../shared/fieldNames";

export const APPRAISAL_FORM_DEFAULT = {
    id: "",
    adjusted: false,
    [FIELDS.LAND_CLASSIFICATION]: "",
    [FIELDS.SUBCLASS]: "",
    [FIELDS.LAND_AREA]: "",
    [FIELDS.LAND_UNIT_VALUE]: "",
    [FIELDS.LAND_BASE_MARKET_VALUE]: "",
    [FIELDS.LAND_MARKET_VALUE]: "",
    [FIELDS.LAND_ACTUAL_USE]: "",
    [FIELDS.LAND_ASSESSMENT_LEVEL]: "",
    [FIELDS.LAND_ASSESSED_VALUE]: "",
};

export const LAND_DEFAULT_FIELD = {
    // property info
    [FIELDS.TRANSACTION_CODE]: "",
    [FIELDS.ARP_NO]: "",
    [FIELDS.PIN]: "",
    [FIELDS.NO_AND_STREET]: "",
    [FIELDS.BARANGAY]: "",
    [FIELDS.CITY]: "SAN PABLO CITY", // example fixed value
    [FIELDS.PROVINCE]: "LAGUNA", // example fixed value
    [FIELDS.OCT_TCT_NO]: "",
    [FIELDS.DATE]: null,
    [FIELDS.LOT_NO]: "",
    [FIELDS.BLOCK_NO]: "",
    [FIELDS.SURVEY_NO]: "",
    //owner info
    land_ownership: [],
    landappraisals: [],
    // boundaries
    [FIELDS.NORTH_BOUNDARY]: "",
    [FIELDS.SOUTH_BOUNDARY]: "",
    [FIELDS.EAST_BOUNDARY]: "",
    [FIELDS.WEST_BOUNDARY]: "",
    [FIELDS.NE_BOUNDARY]: "",
    [FIELDS.SW_BOUNDARY]: "",
    [FIELDS.SE_BOUNDARY]: "",
    [FIELDS.NW_BOUNDARY]: "",
    // taxability
    [FIELDS.TAXABILITY]: "",

    // effectivity of assessment/reassessment
    [FIELDS.EFFECTIVITY_QTR]: "",
    [FIELDS.EFFECTIVITY_YEAR]: null,

    [FIELDS.TOTAL_MARKET_VALUE]: 0,
    [FIELDS.TOTAL_ASSESSED_VALUE]: 0,
    propertyAssessments: [],
    [FIELDS.PREV_RECORDS_FIELDS]: undefined
};

export const STRIPPING_FIELDS_DEFAULT = [
    {
        id: "",
        name: "stripping1st",
        label: "1st Stripping",
        unitVal: 0,
        percentOfAdj: 0,
        area: 0,
        valueAdjustment: 0,
    },
];

export const FACTOR_TYPES = {
    STRIPPING: "Stripping",
    CORNER_INFLUENCE: "cornerInfluence",
    RIGHT_OF_WAY: "rightOfWay",
    OPEN_SPACES: "openSpaces",
};


export const DEFAULT_OWNER_FORM = {
    regions: "",
    province: "",
    city: "",
    barangay: "",
    street: "",
    postal: "",
    type: "",
    role: "",
    contact_no: "",
    email: "",
    name: ""
}