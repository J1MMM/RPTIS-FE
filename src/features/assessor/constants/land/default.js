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
    "transaction_code": "",
    "arp_no": "",
    "pin_no": "",
    "street": "",
    "brgy": "",
    "city": "SAN PABLO CITY",
    "province": "LAGUNA",
    "oct_tct": "",
    "date": "",
    "lot_no": "",
    "blk_no": "",
    "survey_no": "",
    "land_ownership": [],
    "landappraisals": [],
    "north": "",
    "south": "",
    "east": "",
    "west": "",
    "northeast": "",
    "southWest": "",
    "southEast": "",
    "northWest": "",
    "taxable": "",
    "quarter": "",
    "yearAssessment": null,
    "totalMarketValue": "",
    "totalAssessedValue": "",
    "propertyAssessments": [],
    "effectivity_quarter": "",
    "effectivity_year": "",
    "memoranda": "",
    "previous_records": {
        "owner_name": "",
        "pin_no": "",
        "arp_no": "",
        "total_assessed_value": "",
        "effectivity_assessment": ""
    },
    appraisedBy: "",
    dateAppraised: "",
    approvedBy: "EVA F. PUNTO",
    dateApproved: Date.now(),
}


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