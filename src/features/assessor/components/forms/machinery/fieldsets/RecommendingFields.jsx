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
                    label="Municipality"
                    name={"recommending_approval.municipality"}
                />
                <DateInput
                    required={false}
                    readOnly={readOnly}
                    control={control}
                    label="Date"
                    name={"recommending_approval.date"}
                />
            </Row>
            <Row>
                <TextInput
                    readOnly={readOnly}
                    control={control}
                    label="Approved by"
                    name={"approval.name"}
                />
                <DateInput
                    readOnly={readOnly}
                    control={control}
                    label="Date"
                    name={"approval.date"}
                />
            </Row>
        </StyledFieldset>
    )
}

export default RecommendingFields