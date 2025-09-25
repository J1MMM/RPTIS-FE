import { FIELDS } from "../shared/fieldNames";

export const BLDG_FORM_DEFAULT = {
    [FIELDS.TRANSACTION_CODE]: "",
    [FIELDS.ARP_NO]: "",
    [FIELDS.PIN]: "",
    [FIELDS.BLDG_OWNERSHIP_FIELD]: [], // array of owners

    [FIELDS.BLDG_LAND_REF_FIELD]: {
        id: null,
        td: "",
        owner: "",
        street: "",
        brgy: "",
        city: "SAN PABLO CITY",
        province: "LAGUNA",
        oct_tct_cloa_no: "",
        lot_no: "",
        blk_no: "",
        survey_no: "",
        area: 0,
    },

    [FIELDS.STRUCTURAL_FIELDS]: {
        type: "",
        category: "",
    },

    floors: [],

    [FIELDS.PROPERTY_APPRAISAL_FIELD]: {
        id: null,
        ucc: 0,
        bcst: 0,
        totalConstructionCost: 0,
        depreciationRate: 0,
        yearsToDepreciate: 0,
        depreciationCost: 0,
        marketValue: 0,
        totalCostAddItems: 0,
        total_percent_depreciation: 0,
        additionalItems: [],
    },

    [FIELDS.BLDG_ASSESSMENT_FIELDS]: {
        id: null,
        actualUse: "",
        assessmentLevel: 0,
        assessedValue: 0,
        marketValue: 0,
    },

    [FIELDS.KIND_OF_BUILDING]: "",
    [FIELDS.KIND_BLDG_REMARKS]: "",

    [FIELDS.BLDG_PERMIT]: "",
    [FIELDS.BLDG_PERMIT_DATE_ISSUE]: null,

    [FIELDS.CCT]: "",
    [FIELDS.CO_COMPLITION]: null,

    [FIELDS.DATE_CONSTRUCTED]: null,
    [FIELDS.DATE_OCCUPIED]: null,

    [FIELDS.BUILDING_MARKET_VALUE]: 0,
    [FIELDS.NO_OF_STOREYS]: 0,

    [FIELDS.TAXABILITY]: true,

    [FIELDS.EFFECTIVITY_YEAR]: null,
    [FIELDS.EFFECTIVITY_QTR]: "",

    [FIELDS.MEMORANDA]: "",

    [FIELDS.PREV_RECORDS_FIELDS]: {
        id: null,
        pin_no: "",
        arp_no: "",
        total_assessed_value: 0,
        owner_name: "",
        effectivity_assessment: null,
    },

    [FIELDS.APPROVED_BY]: "EVA F. PUNTO",
    [FIELDS.DATE_APPROVED]: Date.now(),
};


export const ADDITIONAL_ITEMS_DEFAULT = {
    category: "",
    type: "",
    area: 0,
    noFloors: 0,
    material: "",
    cost: 0,
    affectedArea: 0,
    height: 0,
    storey: 0,
    total: 0,
    structuralType: 0
}