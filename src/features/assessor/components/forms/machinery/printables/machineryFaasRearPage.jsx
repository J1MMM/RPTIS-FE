import {forwardRef} from 'react'
import { Box, Paper, Stack, Typography } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const MachineryFaasRearPage = forwardRef((props, ref) => {
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
                <PropertyAssessmentTable/>
            </Box>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                border: '.5px solid black',
                gridColumn: 'span 2'
            }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>PREVIOUS OWNER</Typography>
                    <input type="text" disabled style={{flex: 1, border: 0, backgroundColor: 'White', gridColumn: 'span 2'}}/>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>TAXABILITY</Typography>
                    <input type="text" disabled style={{flex: 1, border: 0, backgroundColor: 'White'}}/>
            </Box>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                border: '.5px solid black',
                gridColumn: 'span 2'
            }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>PREVIOUS VALUE</Typography>
                    <input type="text" disabled style={{flex: 1, border: 0, backgroundColor: 'White', gridColumn: 'span 2'}}/>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>EFFECTIVITY</Typography>
                    <input type="text" disabled style={{flex: 1, border: 0, backgroundColor: 'White'}}/>
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
                    <input type="text" disabled style={{width: '90%', placeItems: 'center', border: 0, borderBottom: '1px solid black'}}/>
                    <Typography variant='caption'>Name</Typography>
                    </Stack>
                    <Stack
                    sx={{
                        display: 'flex',
                        flex: 1, 
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <input type="text" disabled style={{width: '90%', placeItems: 'center', border: 0, borderBottom: '1px solid black'}}/>
                    <Typography variant='caption'>Date</Typography>
                    </Stack>
                </Stack>
            </Stack>
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
                    <input type="text" disabled style={{width: '90%', placeItems: 'center', border: 0, borderBottom: '1px solid black'}}/>
                    <Typography variant='caption'>Name</Typography>
                    </Stack>
                    <Stack
                    sx={{
                        display: 'flex',
                        flex: 1, 
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <input type="text" disabled style={{width: '90%', placeItems: 'center', border: 0, borderBottom: '1px solid black'}}/>
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
                    <input type="text" disabled style={{width: '90%', placeItems: 'center', border: 0, borderBottom: '1px solid black'}}/>
                    <Typography variant='caption'>MUNICIPALITY</Typography>
                    </Stack>
                    <Stack
                    sx={{
                        display: 'flex',
                        flex: 1, 
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <input type="text" disabled style={{width: '90%', placeItems: 'center', border: 0, borderBottom: '1px solid black'}}/>
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
                    <input type="text" disabled style={{width: '90%', placeItems: 'center', border: 0, borderBottom: '1px solid black'}}/>
                    <Typography variant='caption'>EVA F. PUNTO - City Assessor</Typography>
                    </Stack>
                    <Stack
                    sx={{
                        display: 'flex',
                        flex: 1, 
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <input type="text" disabled style={{width: '90%', placeItems: 'center', border: 0, borderBottom: '1px solid black'}}/>
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
            flex: 1,
            height: '10vh',
            border: '1px solid black'
        }}>

        </Box>
        <br />
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
                <RefPostSummaryTable/>
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

function PropertyAssessmentTable() {
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
          <TableRow>
            <TableCell align="center" sx={[cellStyles, py]}>John</TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" sx={[cellStyles, py]}>John</TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" sx={[cellStyles, py]}>John</TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" sx={[cellStyles, py]}>John</TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function RefPostSummaryTable() {
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
          <TableRow>
            <TableCell align="center" rowSpan={3} sx={{ ...cellStyles, py: 1, width: '10%' }}>
                Pin PRE/ARP No.
            </TableCell>
            <TableCell align="center" sx={{...cellStyles, py, width: '20%'}}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MachineryFaasRearPage