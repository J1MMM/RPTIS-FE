import React from 'react'
import StyledFieldset from '../../../../../../components/ui/StyledFieldset'
import { TextInput, Row, DateInput } from "@components/ui"
import { FIELDS } from '../../../../constants/shared/fieldNames'

function RecommendingFields({ control, readOnly }) {
    return (
        <StyledFieldset title="Recommending Approval">
            <Row>
                <TextInput
                    required={false}
                    readOnly={readOnly}
                    control={control}
                    label="Appraised / Assessed by"
                    name={"appraisedBy"}
                />
                <DateInput
                    required={false}
                    readOnly={readOnly}
                    control={control}
                    label="Date"
                    name={"dateAppraised"}
                />
            </Row>
            <Row>
                <TextInput
                    readOnly={readOnly}
                    control={control}
                    label="Approved by"
                    name={FIELDS.APPROVED_BY}
                />
                <DateInput
                    readOnly={readOnly}
                    control={control}
                    label="Date"
                    name={FIELDS.DATE_APPROVED}
                />
            </Row>
        </StyledFieldset>
    )
}

export default RecommendingFields