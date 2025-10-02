import {forwardRef} from 'react'
import { Box, Paper, Stack, Typography } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useFormContext, useWatch } from 'react-hook-form';
import dayjs from 'dayjs';

const MachineryFaasRearPage = forwardRef((props, ref) => {
    const {control} = useFormContext()
    const selectedRow = useWatch({control})
    const rowSpanCount = selectedRow?.reference_posting_summary.length || 0;
  return (
    <Paper elevation={10} ref={ref} sx={{px: 2, py: 10}}>
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            border: '1px solid black'
        }}>
            <Typography variant="body1" 
            sx={{
             display: 'flex',
             flex: 1,
             fontWeight: 600,
             gridColumn: 'span 2',
             border: '.5px solid black'
            }}>
                PROPERTY ASSESSMENT
            </Typography>
            <Box sx={{
                gridColumn: 'span 2'
            }}>
                <PropertyAssessmentTable
                    tableRow={
                        <>
                            <TableRow>
                                <TableCell align="center" sx={[cellStyles, py]}>{selectedRow?.property_assessment_machine.kind}</TableCell>
                                <TableCell align="center" sx={[cellStyles, py]}>{selectedRow?.property_assessment_machine.actual_use}</TableCell>
                                <TableCell align="center" sx={[cellStyles, py]}>{selectedRow?.property_assessment_machine.market_value}</TableCell>
                                <TableCell align="center" sx={[cellStyles, py]}>{selectedRow?.property_assessment_machine.assessment_level}</TableCell>
                                <TableCell align="center" sx={[cellStyles, py]}>{selectedRow?.property_assessment_machine.assessed_value}</TableCell>
                            </TableRow>
                        </>
                    }
                />
            </Box>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                border: '.5px solid black',
                gridColumn: 'span 2'
            }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>PREVIOUS OWNER</Typography>
                    <input type="text" disabled value={selectedRow?.previous_data.owner} style={{...inputValStyle, gridColumn: 'span 2'}}/>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>TAXABILITY</Typography>
                    <input type="text" disabled value={selectedRow?.taxable ? 'TAXABLE' : 'EXEMPTED'} style={inputValStyle}/>
            </Box>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                border: '.5px solid black',
                gridColumn: 'span 2'
            }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>PREVIOUS VALUE</Typography>
                    <input type="text" disabled value={selectedRow?.previous_data.value} style={{...inputValStyle, gridColumn: 'span 2'}}/>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>EFFECTIVITY</Typography>
                    <input 
                        type="text"
                        disabled 
                        value={
                            dayjs(selectedRow?.effectivity_year).isValid()
                            ?dayjs(selectedRow?.effectivity_year).format("MM/DD/YYYY")
                            : ""
                        } 
                        style={inputValStyle}
                    />
            </Box>
        </Box>
        <br />
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
        }}>
            <Stack direction={'column'} gap={1}>
                <Typography variant='caption'>APPRAISED BY:</Typography>
                <Stack direction={'row'}>
                    <Stack
                    sx={{
                        display: 'flex',
                        flex: 2, 
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <input type="text" disabled value={selectedRow?.appraised_by.name || ""} style={{width: '90%', placeItems: 'center', border: 0, borderBottom: '1px solid black', backgroundColor: 'white'}}/>
                    <Typography variant='caption'>Name</Typography>
                    </Stack>
                    <Stack
                    sx={{
                        display: 'flex',
                        flex: 1, 
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <input 
                        type="text" 
                        disabled 
                        value={
                            dayjs(selectedRow?.appraised_by?.date).isValid()
                            ? dayjs(selectedRow.appraised_by.date).format("MM/DD/YYYY")
                            : ""
                        }
                        style={{width: '90%', placeItems: 'center', border: 0, borderBottom: '1px solid black', backgroundColor: 'white'}}
                    />
                    <Typography variant='caption'>Date</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction={'column'} gap={1}>
                <Typography variant='caption'>ASSESSED BY:</Typography>
                <Stack direction={'row'}>
                    <Stack
                    sx={{
                        display: 'flex',
                        flex: 2, 
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <input type="text" disabled value={selectedRow?.assessed_by.name || ""} style={{width: '90%', placeItems: 'center', border: 0, borderBottom: '1px solid black', backgroundColor: 'white'}}/>
                    <Typography variant='caption'>Name</Typography>
                    </Stack>
                    <Stack
                    sx={{
                        display: 'flex',
                        flex: 1, 
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <input 
                        type="text" 
                        disabled 
                        value={
                            dayjs(selectedRow?.assessed_by?.date).isValid()
                            ? dayjs(selectedRow.assessed_by.date).format("MM/DD/YYYY")
                            : ""
                        }
                        style={{width: '90%', placeItems: 'center', border: 0, borderBottom: '1px solid black', backgroundColor: 'white'}}
                    />
                    <Typography variant='caption'>Date</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
        <br />
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
        }}>
            <Stack direction={'column'} gap={1}>
                <Typography variant='caption'>RECOMMENDING APPROVAL:</Typography>
                <Stack direction={'row'}>
                    <Stack
                    sx={{
                        display: 'flex',
                        flex: 2, 
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <input type="text" disabled value={selectedRow?.recommending_approval.municipality || ""} style={{width: '90%', placeItems: 'center', border: 0, borderBottom: '1px solid black', backgroundColor: 'white'}}/>
                    <Typography variant='caption'>MUNICIPALITY</Typography>
                    </Stack>
                    <Stack
                    sx={{
                        display: 'flex',
                        flex: 1, 
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <input 
                        type="text" 
                        disabled 
                        value={
                            dayjs(selectedRow?.approval?.date).isValid()
                            ? dayjs(selectedRow.approval.date).format("YYYY")
                            : ""
                        }
                        style={{width: '90%', placeItems: 'center', border: 0, borderBottom: '1px solid black', backgroundColor: 'white'}}
                    />
                    <Typography variant='caption'>Date</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction={'column'} gap={1}>
                <Typography variant='caption'>APPROVAL:</Typography>
                <Stack direction={'row'}>
                    <Stack
                    sx={{
                        display: 'flex',
                        flex: 2, 
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <input type="text" disabled value={selectedRow?.approval.name || ""} style={{width: '90%', placeItems: 'center', border: 0, borderBottom: '1px solid black', backgroundColor: 'white'}}/>
                    <Typography variant='caption'>EVA F. PUNTO - City Assessor</Typography>
                    </Stack>
                    <Stack
                    sx={{
                        display: 'flex',
                        flex: 1, 
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <input 
                    type="text" 
                    disabled 
                    value={
                        dayjs(selectedRow?.approval?.date).isValid()
                        ? dayjs(selectedRow.approval.date).format("MM/DD/YYYY")
                        : ""
                    }
                    style={{width: '90%', placeItems: 'center', border: 0, borderBottom: '1px solid black', backgroundColor: 'white'}}/>
                    <Typography variant='caption'>Date</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
        <br />
        <Typography variant="body2" sx={{fontWeight: 500, width: '100%', boxSizing: 'border-box', px: 4}}>
            MEMORANDA:
        </Typography>
        <Box sx={{
            display: 'flex',
            pl: 5,
            flex: 1,
            border: 0,
        }}>
          <textarea
            disabled
            value={selectedRow?.memoranda || ""}
            style={inputMemoStyle}
            rows={4} // or auto-calculate rows dynamically
          />
        </Box>
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            border: '1px solid black'
        }}>
            <Typography variant="body1" 
            sx={{
             display: 'flex',
             flex: 1,
             fontWeight: 600,
             gridColumn: 'span 2',
             border: '.5px solid black'
            }}>
                F. REFERENCE & POSTING SUMMARY
            </Typography>
            <Box sx={{
                gridColumn: 'span 2'
            }}>
                <RefPostSummaryTable
                 tableRow={
                    <>
                    {selectedRow?.reference_posting_summary.map((obj) => (
                        <TableRow>
                            <TableCell align="center" rowSpan={rowSpanCount} sx={{ ...cellStyles, py: 1, width: '10%' }}>
                                Pin PRE/ARP No.
                            </TableCell>
                            <TableCell align="center" sx={{...cellStyles, py, width: '20%'}}>{obj.pin || ""}</TableCell>
                            {/* <TableCell align="center" sx={[cellStyles, py]}>{obj.pin || ""}</TableCell> */}
                            <TableCell align="center" sx={[cellStyles, py]}>{obj.present_posting || ""}</TableCell>
                            <TableCell align="center" sx={[cellStyles, py]}>{obj.previous_posting || ""}</TableCell>
                            <TableCell align="center" sx={[cellStyles, py]}>{obj.posting.initial || ""}</TableCell>
                            <TableCell align="center" sx={[cellStyles, py]}>{
                            dayjs(obj.posting.date).isValid()
                            ?dayjs(obj.posting.date).format("MM/DD/YYYY")
                            : ""
                            }</TableCell>
                        </TableRow>
                    ))}
                    </>
                 }
                />
            </Box>
        </Box>
    </Paper>
  );
});

const cellStyles = {
  fontSize: 12,
  padding: 0,
  border: '1px solid black',
};

const py = {
    py: .5
};

function PropertyAssessmentTable({tableRow}) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
            <TableRow>
                <TableCell align="center" sx={cellStyles}>
                KIND
                </TableCell>
                <TableCell align="center" sx={cellStyles}>
                ACTUAL USE
                </TableCell>
                <TableCell align="center" sx={cellStyles}>
                MARKET VALUE
                </TableCell>
                <TableCell align="center" sx={cellStyles}>
                ASSESSMENT LEVEL
                </TableCell>
                <TableCell align="center" sx={cellStyles}>
                ASSESSED VALUE
                </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {tableRow}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function RefPostSummaryTable({tableRow}) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
            <TableRow>
                <TableCell align="center" rowSpan={2} colSpan={2} sx={cellStyles}>
                Pre & Post Inspection
                </TableCell>
                <TableCell align="center" rowSpan={2} sx={cellStyles}>
                Previous
                </TableCell>
                <TableCell align="center" rowSpan={2} sx={cellStyles}>
                Present
                </TableCell>
                <TableCell align="center" colSpan={2} sx={cellStyles}>
                POSTING
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="center" sx={cellStyles}>
                Initial
                </TableCell>
                <TableCell align="center" sx={cellStyles}>
                Date
                </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {tableRow}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const inputValStyle = {
    flex: 1, 
    border: 0, 
    backgroundColor: 'white'
}

const inputMemoStyle = {
  width: '100%',
  border: 'none',
  backgroundColor: 'white',
  textDecoration: 'underline',
  fontFamily: 'inherit',
  fontSize: '12', // caption size
  lineHeight: 1.3,
  color: 'inherit',
  padding: 0,
  resize: 'none',
  overflow: 'hidden', // hides scrollbar for printing
  whiteSpace: 'pre-wrap',
  pointerEvents: 'none' // keeps it read-only visually
};

export default MachineryFaasRearPage