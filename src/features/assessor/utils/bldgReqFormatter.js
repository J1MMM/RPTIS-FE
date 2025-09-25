import { FIELDS } from "../constants/shared/fieldNames";

export const bldgReqFormatter = (data) => {
    // Format property appraisal coai array
    const formatCoai = (coai) => {
        return Array.isArray(coai) ? coai.map(item => ({
            category: item.category || "",
            structuralType: item.structuralType || "",
            type: item.type || "",
            area: parseFloat(item.area) || 0,
            noFloors: parseInt(item.noFloors) || 0,
            material: item.material || "",
            cost: parseFloat(item.cost) || 0,
            affectedArea: parseFloat(item.affectedArea) || 0,
            height: item.height || "",
            storey: item.storey || "",
            total: parseFloat(item.total) || 0,
            id: item.id || ""
        })) : [];
    };
    // Main transformation
    const formattedData = {
        // Basic fields
        transaction_code: data.transaction_code || "",
        arp_no: data.arp_no || "",
        pin_no: data.pin_no || "",

        // Building ownership
        bldg_ownership: data[FIELDS.BLDG_OWNERSHIP_FIELD] || [],
        // Land reference
        land_reference: data[FIELDS.BLDG_LAND_REF_FIELD] || {},
        // Building details
        kindBldg: data.kindBldg || "",
        structural_type: {
            category: data[FIELDS.STRUCTURAL_FIELDS]?.category || "",
            type: data[FIELDS.STRUCTURAL_FIELDS]?.type || ""
        },
        bldg_permit: data[FIELDS.BLDG_PERMIT] || "",
        bldg_permit_date_issued_on: data[FIELDS.BLDG_PERMIT_DATE_ISSUE] || "",
        cct: data.cct || "",
        coc_issued_on: data.coc_issued_on || "",
        dateConstructed: data.dateConstructed || "",
        dateOccupied: data.dateOccupied || "",
        buildingAge: data.buildingAge || "",
        noOfStorey: parseInt(data.noOfStorey) || 1,
        floors: data.floors || [],
        // Property appraisal
        property_appraisal: {
            ucc: data[FIELDS.PROPERTY_APPRAISAL_FIELD]?.ucc || "",
            bcst: data[FIELDS.PROPERTY_APPRAISAL_FIELD]?.bcst || "",
            coai: formatCoai(data[FIELDS.PROPERTY_APPRAISAL_FIELD]?.additionalItems || []),
            totalConstructionCost: data[FIELDS.PROPERTY_APPRAISAL_FIELD]?.totalConstructionCost || 0,
            depreciationRate: data[FIELDS.PROPERTY_APPRAISAL_FIELD]?.depreciationRate || 0,
            yearsToDepreciate: data[FIELDS.PROPERTY_APPRAISAL_FIELD]?.yearsToDepreciate || 0,
            depreciationCost: data[FIELDS.PROPERTY_APPRAISAL_FIELD]?.depreciationCost || 0,
            marketValue: data[FIELDS.PROPERTY_APPRAISAL_FIELD]?.marketValue || 0
        },
        // Property assessment
        property_assessment: {
            actualUse: data[FIELDS.BLDG_ASSESSMENT_FIELDS]?.actualUse || "",
            assessmentLevel: data[FIELDS.BLDG_ASSESSMENT_FIELDS]?.assessmentLevel || "",
            assessedValue: data[FIELDS.BLDG_ASSESSMENT_FIELDS]?.assessedValue || "",
            marketValue: data[FIELDS.BLDG_ASSESSMENT_FIELDS]?.marketValue || ""
        },
        // Tax and assessment info
        taxable: data.taxable || "",
        quarter: data.effectivity_quarter || data.quarter || "",
        effectivity_assessment: data.effectivity_assessment || "",
        // Approval and encoding
        appraisers: data.appraisers || {},
        approvedBy: data.approvedBy || "",
        dateApproved: data.dateApproved || null,
        memoranda: data.memoranda || "",
        dateEncoded: data.dateEncoded || null,
        encoderName: data.encoderName || "",
        // Previous records
        previous_records: data.previousRecords || {}
    };

    return formattedData;
};