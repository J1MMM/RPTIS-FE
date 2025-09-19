import React, { useEffect } from 'react'
import { Row, SelectField, NumberInput, TextInput } from "@components/ui"
import { ADDITION_CEILING_OPTIONS, ADDITION_FLOORING_OPTIONS, ADDITION_HEIGHT_OPTIONS, ADDITION_SPCIAL_OPTIONS, ADDITION_WALL_OPTIONS, ADDITIONAL_FOUNDATION_OPTIONS } from '../../../../constants/building/dropdown'
import { Stack } from '@mui/material'
import { useFormContext } from 'react-hook-form';

function DynamicItemInputs({ control, itemType }) {
    const { control: bldgControl } = useFormContext()

    const renderInputs = {
        foundation: (
            <Stack>
                <SelectField
                    control={control}
                    label="Structural Type"
                    name="type"
                    options={ADDITIONAL_FOUNDATION_OPTIONS}
                />
                <Row>
                    <NumberInput maxLength={3} control={control} label="Number of Floors" name="noFloors" />
                    <NumberInput maxLength={7} control={control} label="Area" name="area" />
                </Row>
            </Stack>
        ),
        flooring: (
            <Stack>
                <SelectField
                    control={control}
                    label="Materials"
                    name="material"
                    options={ADDITION_FLOORING_OPTIONS}
                />
                <Row>
                    <NumberInput maxLength={7} control={control} label="Cost" name="cost" />
                    <NumberInput maxLength={7} control={control} label="Affected Area" name="affectedArea" />
                </Row>
            </Stack>
        ),
        wallingAndPartitioning: (
            <Stack>
                <SelectField
                    control={control}
                    label="Materials"
                    name="material"
                    options={ADDITION_WALL_OPTIONS}
                />
                <Row>
                    <NumberInput control={control} label="Affected Area" name="affectedArea" />
                    <NumberInput control={control} label="Cost" name="cost" />
                </Row>
            </Stack>
        ),
        ceiling: (
            <Row>
                <SelectField
                    control={control}
                    label="Materials"
                    name="material"
                    options={ADDITION_CEILING_OPTIONS}
                />
                <NumberInput control={control} label="Affected Area" name="affectedArea" />
            </Row>
        ),
        specialAluminumGlassPanel: (
            <Stack>
                <SelectField
                    control={control}
                    label="Materials"
                    name="material"
                    options={ADDITION_SPCIAL_OPTIONS}
                />
                <Row>
                    <NumberInput control={control} label="Cost" name="cost" />
                    <NumberInput control={control} label="Affected Area" name="affectedArea" />
                </Row>
            </Stack>
        ),
        height: (
            <Stack>
                <Row>
                    <SelectField
                        control={control}
                        label="Storey"
                        name="storey"
                        options={ADDITION_HEIGHT_OPTIONS}
                    />
                    <TextInput isNumeric readOnly={true} control={control} label="Structural Type" name="structuralType" />
                </Row>
                <Row>
                    <NumberInput control={control} label="Height" name="height" />
                    <NumberInput control={control} label="Area" name="area" />
                </Row>
            </Stack>
        ),

    };

    return renderInputs[itemType] || null;

}

export default DynamicItemInputs