import {forwardRef} from 'react'
import { Box, Paper, Stack, Typography } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useFormContext, useWatch } from 'react-hook-form';
import dayjs from 'dayjs';

const MachineryFaasFrontPage = forwardRef((props, ref) => {
  const {control} = useFormContext()
  const selectedRow = useWatch({control})
    //role call
  const owner = selectedRow.machine_ownership.find(entry => entry.role?.toLowerCase() === "owner");
  const admin = selectedRow.machine_ownership.find(entry => entry.role?.toLowerCase() === "administrator");
  return (
    <Paper elevation={10} ref={ref} sx={{px: 2, py: 10}}>
        <Stack direction='row' sx={{display: 'flex', justifyContent: 'end', width: '100%', pb: 1.5}}>
            <Typography variant="caption" sx={{display: 'grid', placeItems: 'end'}}>
                TRANSACTION CODE:
            </Typography>
            <input type="text" disabled value={selectedRow?.transaction_code || ""} style={{display: 'grid', placeItems: 'center', width: '20%', border: 0, borderBottom: '1px solid black', backgroundColor: 'white'}}/>
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
                <input type="text" disabled value={selectedRow?.arp_no || ""} style={inputValStyle}/>
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
                <input type="text" disabled value={selectedRow?.pin_no || ""} style={inputValStyle}/>
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
                <input 
                  type="text" 
                  disabled 
                  value={`${owner.firstname || ""} ${owner.middlename || ""} ${owner.lastname || ""} ${owner.name || ""}`} 
                  style={inputValStyle}
                />
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
                <input 
                  type="text" 
                  disabled 
                  value={`${owner.brgy || ""} ${owner.city || ""} ${owner.province || ""} ${owner.contact_no || ""}`}
                  style={inputValStyle}
                />
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
                <input 
                  type="text"
                  disabled 
                  value={`${admin?.firstname || ""} ${admin?.middlename || ""} ${admin?.lastname || ""} ${admin?.name || ""}`}
                  style={inputValStyle}
                />
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
                <input 
                  type="text" 
                  disabled 
                  value={`${admin?.brgy || ""} ${admin?.city || ""} ${admin?.province || ""} ${admin?.contact_no || ""}`}
                  style={inputValStyle}
                />
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
                <input type="text" disabled value={selectedRow?.bldg_reference.owner || ""} style={inputValStyle}/>
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
                <input type="text" disabled value={selectedRow?.bldg_reference.pin_no || ""} style={inputValStyle}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            border: '.5px solid black',
            boxSizing: 'border-box',
            px: 1
            }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Land Owner (where mach.is located)</Typography>
                <input type="text" disabled value={selectedRow?.land_reference.owner || ""} style={{width: '9rem', border: 0, backgroundColor: 'white'}}/>
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
                <input type="text" disabled value={selectedRow?.land_reference.pin_no || ""} style={inputValStyle}/>
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
                <input type="text" disabled value={selectedRow?.street || ""} style={inputValStyle}/>
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
                <input type="text" disabled value={selectedRow?.brgy || ""} style={inputValStyle}/>
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
                <input type="text" disabled value={selectedRow?.city || ""} style={inputValStyle}/>
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
                <input type="text" disabled value={selectedRow?.province || ""} style={inputValStyle}/>
            </Stack>
            <Box sx={{
                gridColumn: 'span 2'
            }}>
                <MachineryTable
                  tableRow={
                    <>
                    {selectedRow?.machine_brand_capacity.map((obj) => (
                      <TableRow>
                        <TableCell align="center" sx={[cellStyles, py]}>{obj?.description || ""}</TableCell>
                        <TableCell align="center" sx={[cellStyles, py]}>{obj?.model || ""}</TableCell>
                        <TableCell align="center" sx={[cellStyles, py]}>{obj?.hp || ""}</TableCell>
                        <TableCell align="center" sx={[cellStyles, py]}>{
                          dayjs(obj?.date_acquired).isValid()
                          ? dayjs(obj.date_acquired).format("MM/DD/YYYY")
                          : ""
                        }</TableCell>
                        <TableCell align="center" sx={[cellStyles, py]}>{obj?.condition_when_acquired || ""}</TableCell>
                        <TableCell align="center" sx={[cellStyles, py]}>{obj?.economic_life.estimated || ""}</TableCell>
                        <TableCell align="center" sx={[cellStyles, py]}>{obj?.economic_life.remaining || ""}</TableCell>
                        <TableCell align="center" sx={[cellStyles, py]}>{
                        dayjs(obj?.date_installed).isValid()
                        ?dayjs(obj?.date_installed).format("MM/DD/YYYY")
                        : ""
                        }</TableCell>
                        <TableCell align="center" sx={[cellStyles, py]}>{
                        dayjs(obj?.date_operation).isValid()
                        ? dayjs(obj?.date_operation).format("MM/DD/YYYY")
                        : ""
                        }</TableCell>
                        <TableCell align="center" sx={[cellStyles, py]}>{obj?.remarks || ""}</TableCell>
                      </TableRow>
                    ))}
                    </>
                  }
                />
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
                <PropertyAppraisalTable
                  tableRow={
                    <>
                    {selectedRow?.property_appraisal_machine.map((obj) => (
                      <TableRow>
                        <TableCell align="center" sx={[cellStyles, py]}>{obj.machinery_description || ""}</TableCell>
                        <TableCell align="center" sx={[cellStyles, py]}>{obj.no_of_units || ""}</TableCell>
                        <TableCell align="center" sx={[cellStyles, py]}>{obj.acquisition_cost || ""}</TableCell>
                        <TableCell align="center" sx={[cellStyles, py]}>{obj.additional_cost.freight || ""}</TableCell>
                        <TableCell align="center" sx={[cellStyles, py]}>{obj.additional_cost.insurance || ""}</TableCell>
                        <TableCell align="center" sx={[cellStyles, py]}>{obj.additional_cost.installation || ""}</TableCell>
                        <TableCell align="center" sx={[cellStyles, py]}>{obj.additional_cost.others || ""}</TableCell>
                        <TableCell align="center" sx={[cellStyles, py]}>{obj.market_value || ""}</TableCell>
                        <TableCell align="center" sx={[cellStyles, py]}>{obj.depreciation || ""}</TableCell>
                        <TableCell align="center" sx={[cellStyles, py]}>{obj.depreciation_value || ""}</TableCell>
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

function MachineryTable({tableRow}) {
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
          {tableRow}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


function PropertyAppraisalTable({tableRow}) {
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

export default MachineryFaasFrontPage