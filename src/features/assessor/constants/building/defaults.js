import { FIELDS } from "../shared/fieldNames";

export const BLDG_FORM_DEFAULT = {
    [FIELDS.TRANSACTION_CODE]: "",
    [FIELDS.ARP_NO]: "",
    [FIELDS.PIN]: "",
    [FIELDS.BLDG_OWNERSHIP_FIELD]: [],
    [FIELDS.BLDG_LAND_REF_FIELD]: {
        area: 0,
        city: "SAN PABLO CITY",
        province: "LAGUNA",
        street: "",
        brgy: "",
        "arp-land": "",
        area: "",
        owner: "",
        "oct_tct-cloa_no": "",
        "oct_tct-survey_no": "",
        lot_no: "",
        blk_no: ""
    },
    [FIELDS.STRUCTURAL_FIELDS]: {},
    floors: [],
    [FIELDS.PROPERTY_APPRAISAL_FIELD]: {
        ucc: 0,
        bcst: 0,
        coai: [],
        totalConstructionCost: "",
        depreciationRate: 0,
        yearsToDepreciate: 0,
        total_percent_depreciation: 0,
        depreciationCost: 0,
        marketValue: 0,
        totalConstructionCost: 0,
        totalCostAddItems: 0,
    },
    [FIELDS.BLDG_ASSESSMENT_FIELDS]: {
        actualUse: "",
        assessmentLevel: "",
        assessedValue: "",
        marketValue: ""
    },
    [FIELDS.KIND_OF_BUILDING]: "",
    [FIELDS.BLDG_PERMIT]: "",
    [FIELDS.BLDG_PERMIT_DATE_ISSUE]: "",
    [FIELDS.CCT]: "",
    [FIELDS.CO_COMPLITION]: "",
    [FIELDS.DATE_CONSTRUCTED]: "",
    [FIELDS.DATE_OCCUPIED]: "",
    [FIELDS.BUILDING_MARKET_VALUE]: "",
    [FIELDS.NO_OF_STOREYS]: "",
    [FIELDS.TAXABILITY]: "",
    [FIELDS.EFFECTIVITY_YEAR]: null,
    [FIELDS.EFFECTIVITY_QTR]: "",
    [FIELDS.MEMORANDA]: "",
    [FIELDS.PREV_RECORDS_FIELDS]: {
        pin_no: "",
        arp_no: "",
        total_assessed_value: 0,
        owner_name: "",
        effectivity_assessment: "",
    },
    [FIELDS.APPROVED_BY]: "Eva F. Punto",
    [FIELDS.DATE_APPROVED]: Date.now()
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