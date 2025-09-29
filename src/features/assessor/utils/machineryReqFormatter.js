import { FIELDS } from "../constants/shared/fieldNames"

export const machineryReqFormatter = (data) => {
    return {
        ...data,
        [FIELDS.M_PROPERTY_APPRAISAL]: data[FIELDS.M_PROPERTY_APPRAISAL].map(item => ({
            ...item,
            market_value: item.market_value || 0,
            depreciation: item.depreciation || 0,
            depreciation_value: item.depreciation_value || 0,
            acquisition_cost: item.acquisition_cost || 0,
            additional_cost: {
                ...item.additional_cost,
                freight: item.additional_cost.freight || 0,
                installation: item.additional_cost.installation || 0,
                insurance: item.additional_cost.insurance || 0,
                others: item.additional_cost.others || 0
            }
        }))
    }
}