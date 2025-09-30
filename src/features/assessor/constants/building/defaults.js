import { FIELDS } from "../shared/fieldNames";

export const BLDG_FORM_DEFAULT = {
    "transaction_code": "",
    "arp_no": "",
    "pin_no": "",
    "land_reference": {
        "street": "",
        "brgy": "",
        "city": "SAN PABLO CITY",
        "province": "LAGUNA",
        "td": "",
        "area": 0,
        "owner": "",
        "oct_tct_cloa_no": "",
        "survey_no": "",
        "lot_no": "",
        "blk_no": ""
    },
    "kindBldg": "",
    "buildingAge": "",
    "structural_type": {
        "type": "",
        "category": ""
    },
    "bldg_permit": "",
    "bldg_permit_date_issued_on": "",
    "cct": "",
    "coc_issued_on": "",
    "dateConstructed": "",
    "dateOccupied": "",
    "noOfStorey": 0,
    "floors": [

    ],
    "total_floor_areas": 0,
    "propertyAppraisals": {
        "ucc": 0,
        "bcst": 0,
        "totalCostAddItems": 0,
        "totalConstructionCost": 0,
        "depreciationRate": 0,
        "yearsToDepreciate": 0,
        "total_percent_depreciation": 0,
        "depreciationCost": 0,
        "marketValue": 0,
        "additionalItems": []
    },
    "taxable": "",
    "quarter": "",
    "effectivity_assessment": "",
    "appraisedBy": "",
    "dateAppraised": "",
    "approvedBy": "EVA F. PUNTO",
    "dateApproved": Date.now(),
    "memoranda": "MEMO",
    "previousRecords": {
        "owner_name": "",
        "pin_no": "",
        "arp_no": "",
        "td_no": "",
        "total_assessed_value": 0,
        "effectivity_assessment": ""
    },
    "bldg_ownership": [],
    "propertyAssessments": {
        "marketValue": 1,
        "actualUse": "",
        "assessmentLevel": 0,
        "assessedValue": 0
    }
}

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