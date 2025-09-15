import React, { forwardRef } from 'react'
import { Box, Paper, Stack, TableCell, TableRow, TextField, Typography } from "@mui/material";
import { PrintableFaasTable } from '../../../../../../components/shared';
import { useFormContext, useWatch } from 'react-hook-form';

const LandFaasRearPage = forwardRef((props, ref) => {
  const {control} = useFormContext()
  const selectedRow = useWatch({control})

  return (
    <Paper ref={ref} 
        sx={{
          px: 2, 
          py: 10,
          '@media print': {
              boxShadow: 'none',
              backgroundColor: 'transparent',
              border: 'none',
              },
        }}>
        <Typography variant="body2" sx={{fontWeight: 500, width: '100%', boxSizing: 'border-box', px: 1}}>
            RPTA FORM NO. 12001
        </Typography>
        <Typography variant="body2" sx={{fontWeight: 500, width: '100%', boxSizing: 'border-box', px: 1}}>
            MARKET VALUE
        </Typography>
              <PrintableFaasTable
                TableHead={<MarketValueFaasTableHead />}
                TableBody={
                    <>
                    {selectedRow.landappraisals.map((obj) => (
                      
                    <TableRow>
                        <TableCell align="center" sx={cellStyles}>₱ {obj.base_market_value}</TableCell>
                        <TableCell align="center" sx={cellStyles}>{obj.adjustments.map((adj) => (adj.adjustment_factor))}</TableCell>
                        <TableCell align="center" sx={cellStyles}>{obj.adjustments.map((adj) => (adj.marketAdjustmentPercent))}</TableCell>
                        <TableCell align="center" sx={cellStyles}>₱ {obj.adjustments.map((adj) => (adj.adjustment_value))}</TableCell>
                        <TableCell align="center" sx={cellStyles}>₱ {obj.market_value}</TableCell>
                      </TableRow>
                      
                    ))}
                    </>
                }
                TableFooter={
                    <>
                    <TableRow>
                      <TableCell align="center" sx={cellStyles}></TableCell>
                      <TableCell align="center" sx={cellStyles}>Total</TableCell>
                      <TableCell align="center" sx={cellStyles}></TableCell>
                      <TableCell align="center" sx={cellStyles}>₱</TableCell>
                      <TableCell align="center" sx={cellStyles}>₱</TableCell>
                    </TableRow>
                    </>
                }
            />
        <Typography variant="body2" sx={{fontWeight: 500, width: '100%', boxSizing: 'border-box', px: 1}}>
            PROPERTY ASSESSMENT
        </Typography>
            <PrintableFaasTable
              TableHead={<PropertyAssessmentFaasTableHead />}
              TableBody={
                  <>
                  {selectedRow.propertyAssessments.map((obj) => (
                  <TableRow>
                    <TableCell align="center" sx={cellStyles}>{obj.actual_use}</TableCell>
                    <TableCell align="center" sx={cellStyles}>₱ {obj.market_value}</TableCell>
                    <TableCell align="center" sx={cellStyles}>{obj.assessment_level} %</TableCell>
                    <TableCell align="center" sx={cellStyles}>₱ {obj.assessed_value}</TableCell>
                  </TableRow>
                  ))}
                  </>
              }
              TableFooter={
                  <>
                  <TableRow>
                    <TableCell align="center" sx={cellStyles}></TableCell>
                    <TableCell align="center" sx={cellStyles}></TableCell>
                    <TableCell align="center" sx={cellStyles}>Total</TableCell>
                    <TableCell align="center" sx={cellStyles}>₱</TableCell>
                  </TableRow>
                  </>
                }
            />
            <Box sx={{
              display: 'flex', 
              width: '100%', 
              height: '10vh',
              border: '1px solid black',
              borderTop: 0
            }}>
              <Box sx={{
                display: 'flex',
                flex: 2.66,
                border: '1px solid black'
              }}>
                <Stack direction='row' sx={{display: 'flex', justifyContent: 'space-between', flex: 1, px: 1}}>
                  <Stack direction='row' gap={4}>
                    <Stack direction='row' sx={{display: 'flex', placeItems: 'center'}}>
                    <Typography variant='body1'>Taxable</Typography>
                    <input readOnly checked={selectedRow.taxable === true} type="checkbox"/>
                    </Stack>
                    <Stack direction='row' sx={{display: 'flex', placeItems: 'center'}}>
                    <Typography variant='body1'>Exempt</Typography>
                    <input readOnly checked={selectedRow.taxable === false} type="checkbox"/>
                    </Stack>
                  </Stack>
                  <Typography variant='caption' sx={{
                    display: 'grid',
                    placeItems: 'center'
                  }}>
                    Effectivity of Assessment/Reassessment :
                  </Typography>
                </Stack>
              </Box>
              <Box sx={{
                display: 'flex',
                flex: 1,
                border: '1px solid black'
              }}>
                <Stack direction='row' style={{flex: 1}}>
                  <Stack direction='column' style={{
                    display: 'flex',
                    flex: 1, 
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <input type="text" disabled value={selectedRow.effectivity_quarter} style={{width: '90%', placeItems: 'center', border: 0, borderBottom: '1px solid black', backgroundColor: 'white'}}/>
                    <Typography variant='caption'>Qtr.</Typography>
                  </Stack>
                  <Stack direction='column' 
                  sx={{
                    display: 'flex',
                    flex: 1, 
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <input type="text" disabled value={selectedRow.effectivity_year} style={{width: '90%', placeItems: 'center', border: 0, borderBottom: '1px solid black', backgroundColor: 'white'}}/>
                    <Typography variant='caption'>Yr.</Typography>
                  </Stack>
                </Stack>
              </Box>
            </Box>
        <Typography variant="body2" sx={{fontWeight: 500, width: '100%', boxSizing: 'border-box', px: 4}}>
            APPRAISED/ASSESSED BY:
        </Typography>
        <Box sx={{display: 'flex', alignItems: 'center', flex: 1, height: '10vh', gap: 2}}>
          <Stack direction={'row'} gap={1} sx={{flex: 1}}>
            <Stack
              sx={{
                display: 'flex',
                flex: 2, 
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <input type="text" disabled style={{...inputValStyle, width: '100%', placeItems: 'center', borderBottom: '1px solid black'}}/>
              <Typography variant='caption'>Name</Typography>
            </Stack>
            <Stack
              sx={{
                display: 'flex',
                flex: 1, 
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <input type="text" disabled style={{width: '100%', placeItems: 'center', border: 0, borderBottom: '1px solid black', backgroundColor: 'white'}}/>
              <Typography variant='caption'>Date</Typography>
            </Stack>
          </Stack>
          <Stack direction={'row'} gap={1} sx={{flex: 1}}>
            <Stack
              sx={{
                display: 'flex',
                flex: 2, 
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <input type="text" disabled style={{...inputValStyle, width: '100%', placeItems: 'center', borderBottom: '1px solid black'}}/>
              <Typography variant='caption'>Name</Typography>
            </Stack>
            <Stack
              sx={{
                display: 'flex',
                flex: 1, 
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <input type="text" disabled style={{width: '100%', placeItems: 'center', border: 0, borderBottom: '1px solid black', backgroundColor: 'white'}}/>
              <Typography variant='caption'>Date</Typography>
            </Stack>
          </Stack>
        </Box>
        <Typography variant="body2" sx={{fontWeight: 500, width: '100%', boxSizing: 'border-box', px: 4, py: 1}}>
            APPROVED BY:
        </Typography>
        <Stack direction={'row'} gap={2} sx={{ width: '70%'}}>
          <Stack
            sx={{
              display: 'flex',
              flex: 2, 
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <input type="text" disabled style={{...inputValStyle, width: '100%', placeItems: 'center', borderBottom: '1px solid black'}}/>
            <Typography variant='caption'>Name</Typography>
          </Stack>
          <Stack
            sx={{
              display: 'flex',
              flex: 1, 
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <input type="text" disabled style={{...inputValStyle, width: '100%', placeItems: 'center', borderBottom: '1px solid black'}}/>
            <Typography variant='caption'>Date</Typography>
          </Stack>
        </Stack>
        <Typography variant="body2" sx={{fontWeight: 500, width: '100%', boxSizing: 'border-box', px: 4}}>
            MEMORANDA:
        </Typography>
        <Box sx={{
          display: 'flex', 
          flex: 1,
          height: '10vh',
          border: '1px solid black'
        }}>

        </Box>
        <Stack direction='row' sx={{flex: 1}}>
          <Typography variant='caption'>Date of Entry in the Record of Assessment</Typography>
          <input type="text" disabled style={{...inputValStyle, placeItems: 'center', borderBottom: '1px solid black'}}/>
          <Typography variant='caption'>By:</Typography>
          <input type="text" disabled style={{...inputValStyle, placeItems: 'center', borderBottom: '1px solid black'}}/>
        </Stack>
        <Typography variant="body2" sx={{fontWeight: 500, width: '100%', boxSizing: 'border-box', px: 4}}>
            RECORD OF SUPERSEDED ASSESSMENT
        </Typography>
        <Stack direction='column' sx={{flex: 1, border: '1px solid black'}}>
            <Stack direction='row' gap={2} sx={{px: 1, border: '1px solid black'}}>
              <Typography variant='caption'>PIN:</Typography>
              <input type="text" disabled style={inputValStyle}/>
            </Stack>
            <Stack direction='row' gap={2} sx={{px: 1, border: '1px solid black'}}>
              <Typography variant='caption'>ARP NO.</Typography>
              <input type="text" disabled style={inputValStyle}/>
            </Stack>
            <Stack direction='row' gap={2} sx={{px: 1, border: '1px solid black'}}>
              <Typography variant='caption'>Total Assessed Value:</Typography>
              <input type="text" disabled style={inputValStyle}/>
            </Stack>
            <Stack direction='row' gap={2} sx={{px: 1, border: '1px solid black'}}>
              <Typography variant='caption'>Previous Owner:</Typography>
              <input type="text" disabled style={inputValStyle}/>
            </Stack>
            <Stack direction='row' gap={2} sx={{px: 1, border: '1px solid black'}}>
              <Typography variant='caption'>Effectivity of Assessment:</Typography>
              <input type="text" disabled style={inputValStyle}/>
            </Stack>
            <Stack direction='row' gap={2} sx={{px: 1, border: '1px solid black'}}>
              <Typography variant='caption'>AR Page No.:</Typography>
              <input type="text" disabled style={inputValStyle}/>
            </Stack>
            <Stack direction='row' gap={2} sx={{px: 1, border: '1px solid black'}}>
              <Typography variant='caption'>Recording Personnel:</Typography>
              <input type="text" disabled style={inputValStyle}/>
            </Stack>
        </Stack>
        <br />
        <Stack direction='row' sx={{display: 'flex', justifyContent: 'start', width: '100%', pb: 1.5}}>
            <Typography variant="caption" sx={{display: 'grid', placeItems: 'end'}}>
                Encoded By:
            </Typography>
            <input type="text" disabled value={'John Doe'} style={{display: 'grid', placeItems: 'center', flex: 1, border: 0, borderBottom: '1px solid black', backgroundColor: 'white'}}/>
            <Typography variant="caption" sx={{display: 'grid', placeItems: 'end'}}>
                Printed By:
            </Typography>
            <input type="text" disabled value={'John Doe'} style={{display: 'grid', placeItems: 'center', flex: 1, border: 0, borderBottom: '1px solid black', backgroundColor: 'white'}}/>
        </Stack>
    </Paper>
  );
});

const inputValStyle = {
    flex: 1, 
    border: 0, 
    backgroundColor: 'white'
}

const cellStyles = {
  fontSize: 12,
  padding: 0,
  border: '1px solid black',
};

export function MarketValueFaasTableHead() {
  const headers = [
    'Base Market Value',
    'Adjustment Factors',
    '% Adjustment',
    'Value Adjustment',
    'Market Value',
  ];

  return (
      <TableRow>
        {headers.map((header) => (
          <TableCell key={header} align="center" sx={cellStyles}>
            {header}
          </TableCell>
        ))}
      </TableRow>
  );
}

export function PropertyAssessmentFaasTableHead() {
  const headers = [
    'Actual Use',
    'Market Value',
    'Assessment Level',
    'Assessed Value',
  ];

  return (
      <TableRow>
        {headers.map((header) => (
          <TableCell key={header} align="center" sx={cellStyles}>
            {header}
          </TableCell>
        ))}
      </TableRow>
  );
}

export default LandFaasRearPage