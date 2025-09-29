import {forwardRef} from 'react'
import { Box, Paper, Stack, Typography } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const MachineryFaasFrontPage = forwardRef((props, ref) => {
  return (
    <Paper elevation={10} ref={ref} sx={{px: 2, py: 10}}>
        <Stack direction='row' sx={{display: 'flex', justifyContent: 'end', width: '100%', pb: 1.5}}>
            <Typography variant="caption" sx={{display: 'grid', placeItems: 'end'}}>
                TRANSACTION CODE:
            </Typography>
            <input type="text" disabled style={{width: '20%', border: 0, borderBottom: '1px solid black'}}/>
        </Stack>
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
                REAL PROPERTY FIELD APPRAISAL & ASSESSMENT SHEET - MACHINERY
            </Typography>
            <Stack direction='row' gap={1} sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            border: '.5px solid black',
            boxSizing: 'border-box',
            px: 1
            }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>ARP NO.:</Typography>
                <input type="text" disabled style={{flex: 1, border: 0, backgroundColor: 'white'}}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            border: '.5px solid black',
            boxSizing: 'border-box',
            px: 1
            }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>PIN:</Typography>
                <input type="text" disabled style={{flex: 1, border: 0, backgroundColor: 'white'}}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            border: '.5px solid black',
            boxSizing: 'border-box',
            px: 1
            }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Owner:</Typography>
                <input type="text" disabled style={{flex: 1, border: 0, backgroundColor: 'white'}}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            border: '.5px solid black',
            boxSizing: 'border-box',
            px: 1
            }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Address & Tel. No.</Typography>
                <input type="text" disabled style={{flex: 1, border: 0, backgroundColor: 'white'}}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            border: '.5px solid black',
            boxSizing: 'border-box',
            px: 1
            }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>User/Administrator:</Typography>
                <input type="text" disabled style={{flex: 1, border: 0, backgroundColor: 'white'}}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            border: '.5px solid black',
            boxSizing: 'border-box',
            px: 1
            }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Address & Tel. No.</Typography>
                <input type="text" disabled style={{flex: 1, border: 0, backgroundColor: 'white'}}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            border: '.5px solid black',
            boxSizing: 'border-box',
            px: 1
            }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Bldg. Owner (where mach.is located)</Typography>
                <input type="text" disabled style={{width: '9rem', border: 0, backgroundColor: 'white'}}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            border: '.5px solid black',
            boxSizing: 'border-box',
            px: 1
            }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Bldg. PIN:</Typography>
                <input type="text" disabled style={{flex: 1, border: 0, backgroundColor: 'white'}}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            border: '.5px solid black',
            boxSizing: 'border-box',
            px: 1
            }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Bldg. Owner (where mach.is located)</Typography>
                <input type="text" disabled style={{width: '9rem', border: 0, backgroundColor: 'white'}}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            border: '.5px solid black',
            boxSizing: 'border-box',
            px: 1
            }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Land PIN:</Typography>
                <input type="text" disabled style={{flex: 1, border: 0, backgroundColor: 'white'}}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            border: '.5px solid black',
            boxSizing: 'border-box',
            px: 1
            }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>No./Street:</Typography>
                <input type="text" disabled style={{flex: 1, border: 0, backgroundColor: 'white'}}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            border: '.5px solid black',
            boxSizing: 'border-box',
            px: 1
            }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Brgy./District:</Typography>
                <input type="text" disabled style={{flex: 1, border: 0, backgroundColor: 'white'}}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            border: '.5px solid black',
            boxSizing: 'border-box',
            px: 1
            }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Municipality:</Typography>
                <input type="text" disabled style={{flex: 1, border: 0, backgroundColor: 'white'}}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            border: '.5px solid black',
            boxSizing: 'border-box',
            px: 1
            }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Province/City:</Typography>
                <input type="text" disabled style={{flex: 1, border: 0, backgroundColor: 'white'}}/>
            </Stack>
            <Box sx={{
                gridColumn: 'span 2'
            }}>
                <MachineryTable/>
                <Typography variant="body1" 
                sx={{
                    display: 'flex',
                    flex: 1,
                    fontWeight: 600,
                    gridColumn: 'span 2',
                    border: '.5px solid black'
                }}>
                    PROPERTY APPRAISAL
                </Typography>
                <PropertyAppraisalTable/>
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

function MachineryTable() {
  return (
    <TableContainer>
      <Table>
        <TableHead>
            <TableRow>
                <TableCell align="center" colSpan={3} sx={cellStyles}>
                Machinery Brand & Capacity
                </TableCell>
                <TableCell align="center" rowSpan={2} sx={cellStyles}>
                Date Acquired
                </TableCell>
                <TableCell align="center" rowSpan={2} sx={cellStyles}>
                Condition when Acquired
                </TableCell>
                <TableCell align="center" colSpan={2} sx={cellStyles}>
                Economic Life
                </TableCell>
                <TableCell align="center" rowSpan={2} sx={cellStyles}>
                Date Installed
                </TableCell>
                <TableCell align="center" rowSpan={2} sx={cellStyles}>
                Date of Operation
                </TableCell>
                <TableCell align="center" rowSpan={2} sx={cellStyles}>
                Remarks
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="center" sx={cellStyles}>Description</TableCell>
                <TableCell align="center" sx={cellStyles}>Model</TableCell>
                <TableCell align="center" sx={cellStyles}>H.P.</TableCell>
                <TableCell align="center" sx={cellStyles}>ESTIMATED</TableCell>
                <TableCell align="center" sx={cellStyles}>REMAINING</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center" sx={[cellStyles, py]}>John</TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
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
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
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
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
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
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
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
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
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
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
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
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
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
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
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
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
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


function PropertyAppraisalTable() {
  return (
    <TableContainer>
      <Table>
        <TableHead>
            <TableRow>
                <TableCell align="center" rowSpan={2} sx={cellStyles}>
                Machinery Description
                </TableCell>
                <TableCell align="center" rowSpan={2} sx={cellStyles}>
                Number of Units
                </TableCell>
                <TableCell align="center" rowSpan={2} sx={cellStyles}>
                Aquisition Cost
                </TableCell>
                <TableCell align="center" colSpan={4} sx={cellStyles}>
                Additional Cost
                </TableCell>
                <TableCell align="center" rowSpan={2} sx={cellStyles}>
                Market Value
                </TableCell>
                <TableCell align="center" rowSpan={2} sx={cellStyles}>
                Depreciation
                </TableCell>
                <TableCell align="center" rowSpan={2} sx={cellStyles}>
                Depreciated Market Value
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="center" sx={cellStyles}>Freight</TableCell>
                <TableCell align="center" sx={cellStyles}>Insurance</TableCell>
                <TableCell align="center" sx={cellStyles}>Installation</TableCell>
                <TableCell align="center" sx={cellStyles}>Others</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center" sx={[cellStyles, py]}>John</TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
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
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
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
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
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
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
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
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
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
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
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
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
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
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
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
            <TableCell align="center" sx={[cellStyles, py]}></TableCell>
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


export default MachineryFaasFrontPage