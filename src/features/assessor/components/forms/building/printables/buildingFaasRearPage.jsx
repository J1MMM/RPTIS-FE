import {forwardRef} from 'react'
import { Box, Divider, Paper, Stack, TableCell, TableRow, Typography } from '@mui/material'
import { useFormContext, useWatch } from 'react-hook-form';
// import FaasTable from '../../../../tables/printable-faasTable/printable-faas-table';

const BuildingFaasRearPage = forwardRef((props, ref) => {
    const {control} = useFormContext()
    const selectedRow = useWatch({control})
  return (
    <Paper elevation={10} ref={ref} sx={{px: 2, py: 10}}>
        <Typography variant="body2" sx={{fontWeight: 500, width: '100%', boxSizing: 'border-box', px: 1 }}>
            ADDITIONAL ITEMS (Use additional sheet if necessary)
        </Typography>
        <Box sx={{
        display: 'grid',
        gridTemplateRows: '1fr 1fr 1fr',
        width: '100%',
        border: '.5px solid black',
        }}>
            <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                }}>
                <input type="text" disabled style={inputValStyle}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                }}>
                <input type="text" disabled style={inputValStyle}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                }}>
                <input type="text" disabled style={inputValStyle}/>
            </Stack>
        </Box>
        <Typography variant="body2" sx={{fontWeight: 500, width: '100%', boxSizing: 'border-box', px: 1 }}>
            PROPERTY APPRAISAL
        </Typography>
        <Box sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 3fr',
        width: '100%',
        border: '.5px solid black',
        }}>
            <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                border: '.5px solid black',
                borderBottom: 0,
                boxSizing: 'border-box',
                px: 1,
                }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Unit Construction Cost: Php</Typography>
                <input type="text" disabled value={selectedRow?.arp_no} style={{...inputValStyle, borderBottom: '1px solid black'}}/>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>/sq.m.</Typography>
            </Stack>
            <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                border: '.5px solid black',
                borderBottom: 0,
                boxSizing: 'border-box',
                px: 1,
                gridRow: 'span 2'
                }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'start'}}>Cost of Additional Items:</Typography>
                <input type="text" disabled value={selectedRow?.arp_no} style={inputValStyle}/>
            </Stack>
            <Stack direction='column' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                borderLeft: '.5px solid black',
                borderRight: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                gridRow: 'span 2'
                }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'start'}}>Building Core (Use additional sheets if necessary)</Typography>
                <input type="text" disabled  style={inputValStyle}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                borderLeft: '.5px solid black',
                borderRight: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Sub-Total: Php</Typography>
                <input type="text" disabled value={selectedRow?.arp_no} style={{...inputValStyle, borderBottom: '1px solid black'}}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                border: '.5px solid black',
                borderTop: 0,
                boxSizing: 'border-box',
                px: 1,
                }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Sub-Total: Php</Typography>
                <input type="text" disabled value={selectedRow?.arp_no} style={inputValStyle}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                border: '.5px solid black',
                borderTop: 0,
                boxSizing: 'border-box',
                px: 1,
                }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Total Construction Cost: Php</Typography>
                <input type="text" disabled value={selectedRow?.arp_no} style={inputValStyle}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Depreciation Rate:</Typography>
                <input type="text" disabled value={selectedRow?.arp_no} style={inputValStyle}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Total % Depreciation:</Typography>
                <input type="text" disabled value={selectedRow?.arp_no} style={inputValStyle}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Depreciation Cost:</Typography>
                <input type="text" disabled value={selectedRow?.arp_no} style={inputValStyle}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Market Value: Php</Typography>
                <input type="text" disabled value={selectedRow?.arp_no} style={inputValStyle}/>
            </Stack>
        </Box>
        <Typography variant="body2" sx={{fontWeight: 500, width: '100%', boxSizing: 'border-box', px: 1 }}>
            PROPERTY ASSESSMENT
        </Typography>
        {/* <FaasTable
            TableHead={<BuildingPropertyAssessmentFaasTableHead />}
            TableBody={
                <>
                <TableRow>
                    <TableCell align="center" sx={cellStyles}></TableCell>
                    <TableCell align="center" sx={cellStyles}>₱ 28,600</TableCell>
                    <TableCell align="center" sx={cellStyles}>15%</TableCell>
                    <TableCell align="center" sx={cellStyles}>₱ 85,800</TableCell>
                </TableRow>
                </>
            } 
        /> */}
        <br />
        <Stack direction='row' gap={3} sx={{display: 'flex',  px: 1}}>
            <Stack direction='row' gap={4}>
                <Stack direction='row' sx={{display: 'flex', placeItems: 'center'}}>
                <Typography variant='body1'>Taxable</Typography>
                <input disabled type="checkbox"/>
                </Stack>
                <Stack direction='row' sx={{display: 'flex', placeItems: 'center'}}>
                <Typography variant='body1'>Exempt</Typography>
                <input disabled type="checkbox"/>
                </Stack>
            </Stack>
            <Stack direction='row' gap={1} style={{flex: 1}}>
                <Typography variant='caption' sx={{
                display: 'grid',
                placeItems: 'center'
                }}>
                Effectivity of Assessment/Reassessment :
                </Typography>
                <Stack direction='column' sx={{
                display: 'flex',
                flex: 1, 
                justifyContent: 'center',
                alignItems: 'center'
                }}>
                <input type="text" disabled value={selectedRow?.arp_no} style={{...inputValStyle, placeItems: 'center', borderBottom: '1px solid black'}}/>
                <Typography variant='caption'>Qtr.</Typography>
                </Stack>
                <Stack direction='column' 
                sx={{
                display: 'flex',
                flex: 1, 
                justifyContent: 'center',
                alignItems: 'center'
                }}>
                <input type="text" disabled value={selectedRow?.arp_no} style={{...inputValStyle, placeItems: 'center', borderBottom: '1px solid black'}}/>
                <Typography variant='caption'>Yr.</Typography>
                </Stack>
            </Stack>
        </Stack>
        <Divider />
        <Box sx={{display: 'flex',}}>
            <Typography variant="body2" sx={{fontWeight: 500, width: '100%', boxSizing: 'border-box', px: 1 }}>
                APPRAISED / ASSESSED BY:
            </Typography>
            <Typography variant="body2" sx={{fontWeight: 500, width: '100%', boxSizing: 'border-box', px: 1 }}>
                RECOMMENDING APPROVAL:
            </Typography>
        </Box>
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 2fr 1fr',
            py: 3
        }}>
            <Stack direction='column' alignItems='center'>
                <input type="text" disabled value={selectedRow?.arp_no} style={{width: '90%', placeItems: 'center', border: 0, borderBottom: '1px solid black', backgroundColor: 'white'}}/>
                <Typography variant='caption'>Name </Typography>
            </Stack>
            <Stack direction='column' alignItems='center'>
                <input type="text" disabled value={selectedRow?.arp_no} style={{width: '90%', placeItems: 'center', border: 0, borderBottom: '1px solid black', backgroundColor: 'white'}}/>
                <Typography variant='caption'>Date</Typography>
            </Stack>
            <Stack direction='column' alignItems='center'>
                <input type="text" disabled value={selectedRow?.arp_no} style={{width: '90%', placeItems: 'center', border: 0, borderBottom: '1px solid black', backgroundColor: 'white'}}/>
                <Typography variant='caption'>Name </Typography>
            </Stack>
            <Stack direction='column' alignItems='center'>
                <input type="text" disabled value={selectedRow?.arp_no} style={{width: '90%', placeItems: 'center', border: 0, borderBottom: '1px solid black', backgroundColor: 'white'}}/>
                <Typography variant='caption'>Date</Typography>
            </Stack>
        </Box>
        <Typography variant="body2" sx={{fontWeight: 500, width: '100%', boxSizing: 'border-box', px: 1 }}>
            RECOMMENDING APPROVAL:
        </Typography>
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            py: 3,
            px: 10
        }}>
            <Stack direction='column' alignItems='center'>
                <input type="text" disabled value={selectedRow?.arp_no} style={{width: '90%', placeItems: 'center', border: 0, borderBottom: '1px solid black', backgroundColor: 'white'}}/>
                <Typography variant='caption'>City Assessor </Typography>
            </Stack>
            <Stack direction='column' alignItems='center'>
                <input type="text" disabled value={selectedRow?.arp_no} style={{width: '90%', placeItems: 'center', border: 0, borderBottom: '1px solid black', backgroundColor: 'white'}}/>
                <Typography variant='caption'>Date</Typography>
            </Stack>
        </Box>
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
            <input type="text" disabled value={selectedRow?.arp_no} style={{...inputValStyle, placeItems: 'center', borderBottom: '1px solid black'}}/>
            <Typography variant='caption'>By:</Typography>
            <input type="text" disabled value={selectedRow?.arp_no} style={{...inputValStyle, placeItems: 'center', borderBottom: '1px solid black'}}/>
        </Stack>
        <Typography variant="body2" sx={{fontWeight: 500, width: '100%', boxSizing: 'border-box', px: 1}}>
            RECORD OF SUPERSEDED ASSESSMENT
        </Typography>
        <Stack direction='column' sx={{flex: 1, border: '1px solid black'}}>
            <Stack direction='row' gap={2} sx={{px: 1, border: '1px solid black'}}>
                <Typography variant='caption'>PIN No.:</Typography>
                <input type="text" disabled value={selectedRow?.arp_no} style={inputValStyle}/>
            </Stack>
            <Stack direction='row' gap={2} sx={{px: 1, border: '1px solid black'}}>
                <Typography variant='caption'>ARP NO.</Typography>
                <input type="text" disabled value={selectedRow?.arp_no} style={inputValStyle}/>
                <Typography variant='caption'>T.D. NO.</Typography>
                <input type="text" disabled value={selectedRow?.arp_no} style={inputValStyle}/>
            </Stack>
            <Stack direction='row' gap={2} sx={{px: 1, border: '1px solid black'}}>
                <Typography variant='caption'>Total Assessed Value:</Typography>
                <input type="text" disabled value={selectedRow?.arp_no} style={inputValStyle}/>
            </Stack>
            <Stack direction='row' gap={2} sx={{px: 1, border: '1px solid black'}}>
                <Typography variant='caption'>Previous Owner:</Typography>
                <input type="text" disabled value={selectedRow?.arp_no} style={inputValStyle}/>
            </Stack>
            <Stack direction='row' gap={2} sx={{px: 1, border: '1px solid black'}}>
                <Typography variant='caption'>Effectivity of Assessment:</Typography>
                <input type="text" disabled value={selectedRow?.arp_no} style={inputValStyle}/>
            </Stack>
        </Stack>
        <Stack direction='row' gap={2} sx={{px: 2}}>
            <Typography variant='caption'>Recording Person:</Typography>
            <input type="text" disabled value={selectedRow?.arp_no} style={{...inputValStyle, borderBottom: '1px solid black'}}/>
            <Typography variant='caption'>Date:</Typography>
            <input type="text" disabled value={selectedRow?.arp_no} style={{...inputValStyle, borderBottom: '1px solid black'}}/>
        </Stack>
    </Paper>
);
});

const cellStyles = {
  fontSize: 12,
  padding: 0,
  border: '1px solid black',
};

export function BuildingPropertyAssessmentFaasTableHead() {
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

const inputValStyle = {
    flex: 1, 
    border: 0, 
    backgroundColor: 'white'
}

export default BuildingFaasRearPage