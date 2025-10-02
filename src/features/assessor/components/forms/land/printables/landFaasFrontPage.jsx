import {forwardRef} from 'react'
import { Box, Paper, Stack, TableCell, TableRow, TextField, Typography } from "@mui/material";
import { PrintableFaasTable } from '../../../../../../components/shared';
import { useFormContext, useWatch } from 'react-hook-form';
import dayjs from 'dayjs';

const LandFaasFrontPage = forwardRef((props, ref) => {
        const {control} = useFormContext()
        const selectedRow = useWatch({control})
        const formattedDate = dayjs(selectedRow.DATE).format('MM DD YYYY');
        //role call
        const owner = selectedRow.land_ownership.find(entry => entry.role?.toLowerCase() === "owner");
        const admin = selectedRow.land_ownership.find(entry => entry.role?.toLowerCase() === "administrator");

        const totalBaseMarketValue = selectedRow?.landappraisals
            ?.reduce((total, item) => total + Number(item.base_market_value || 0), 0) || 0;

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
            <Stack direction='row' sx={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <Typography sx={{fontSize: '10px'}}>RPTA FORM NO. 12001</Typography>
                <Typography sx={{fontSize: '10px'}}>ATTACHMENT 1</Typography>
            </Stack>
            <Typography variant="body1" sx={{display: 'flex', justifyContent: 'center', width: '100%', fontWeight: 600, py: 2}}>
                REAL PROPERTY FIELD APPRAISAL & ASSESSMENT SHEET - LAND
            </Typography>
            <Stack direction='row' sx={{display: 'flex', justifyContent: 'end', width: '100%', pb: 1.5}}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'end'}}>
                    TRANSACTION CODE:
                </Typography>
                <input type="text" disabled value={selectedRow.transaction_code || ""} style={{display: 'grid', placeItems: 'center', width: '20%', border: 0, borderBottom: '1px solid black', backgroundColor: 'white'}}/>
            </Stack>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '.5fr .5fr 3fr 2fr .5fr .5fr .5fr',
                width: '100%',
                border: '.5px solid black',
            }}>
                <Stack direction='row' gap={1} sx={{
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1
                }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>ARP No.</Typography>
                    <input type="text" disabled value={selectedRow.arp_no || ""} style={inputValStyle}/>
                </Stack>
                <Stack gap={1} direction='row' sx={{
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1
                }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>PIN:</Typography>
                    <input type="text" disabled value={selectedRow.pin_no || ""} style={inputValStyle}/>
                </Stack>
                <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1
                }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>OCT/TCT/No.</Typography>
                    <input type="text" disabled value={selectedRow.oct_tct || ""} style={{ ...inputValStyle, width: '25%'}}/>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Date:</Typography>
                    <input 
                    type="text" 
                    disabled 
                    value={
                        dayjs(selectedRow.DATE).isValid()
                        ?dayjs(selectedRow.DATE).format('MM DD YYYY')
                        : ""
                    } 
                    style={{ ...inputValStyle, width: '25%'}}/>
                </Stack>
                <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-e',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1
                }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center',}}>Survey No.</Typography>
                    <input type="text" disabled value={selectedRow.survey_no || ""} style={{...inputValStyle, width: '25%'}}/>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Lot No.</Typography>
                    <input type="text" disabled value={selectedRow.lot_no || ""} style={{...inputValStyle, width: '25%'}}/>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Blk No.</Typography>
                    <input type="text" disabled value={selectedRow.blk_no || ""} style={{...inputValStyle, width: '25%'}}/>
                </Stack>
                <Stack direction='row' gap={1} sx={{
                width: '100%',
                border: '.5px solid black',
                borderBottom: 0,
                boxSizing: 'border-box',
                px: 1
                }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'start'}}>Owner:</Typography>
                    <input 
                        type="text" 
                        disabled 
                        value={
                            `${owner?.firstname || ""} ${owner?.middlename || ""} ${owner?.lastname || ""} ${owner?.name || ""}`
                              }
                        style={{...inputValStyle, borderBottom: 0}}/>
                </Stack>
                <Stack direction='row' gap={1} sx={{
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                gridRow: 'span 2'
                }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'start'}}>TIN:</Typography>
                    <input type="text" disabled value={owner?.tin || ""} style={inputValStyle}/>
                </Stack>
                <Stack direction='row' gap={1} sx={{
                width: '100%',
                border: '.5px solid black',
                borderTop: 0,
                boxSizing: 'border-box',
                px: 1
                }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'start'}}>Address:</Typography>
                    <input type="text" disabled value={`${owner?.street || ""}, ${owner?.barangay || ""}`} style={inputValStyle}/>
                </Stack>
                <Stack direction='row' gap={1} sx={{
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1
                }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Administrator:</Typography>
                    <input 
                        type="text" 
                        disabled 
                        value={
                            `${admin?.firstname || ""} ${admin?.middlename || ""} ${admin?.lastname || ""} ${admin?.name || ""}`
                            }
                        style={inputValStyle}/>
                </Stack>
                <Stack direction='row' gap={1} sx={{
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                gridRow: 'span 3'
                }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'start'}}>TIN:</Typography>
                    <input type="text" disabled value={admin?.tin || ""} style={inputValStyle}/>
                </Stack>
                <Stack direction='row' gap={1} sx={{
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Address:</Typography>
                    <input type="text" disabled value={`${admin?.street || ""}, ${admin?.barangay || ""}`} style={inputValStyle}/>
                </Stack>
                <Stack direction='row' gap={1} sx={{
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>tel. No.:</Typography>
                    <input type="text" disabled value={admin?.contact_no || ""}  style={inputValStyle}/>
                </Stack>
            </Box>
            <Typography variant="body2" sx={{fontWeight: 500, width: '100%', boxSizing: 'border-box', px: 4}}>
                PROPERTY LOCATION
            </Typography>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                width: '100%',
                border: '.5px solid black',
                mb: 1.5
            }}>
                <Stack direction='row' gap={1} sx={{
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1
                }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>No./Street:</Typography>
                    <input type="text" disabled value={selectedRow.street || ""} style={inputValStyle}/>
                </Stack>
                <Stack direction='row' gap={1} sx={{
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1
                }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Brgy./District:</Typography>
                    <input type="text" disabled value={selectedRow.brgy || ""} style={inputValStyle}/>
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
                    <input type="text" disabled value={selectedRow.city || ""} style={inputValStyle}/>
                </Stack>
                <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1
                }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Provincial/City</Typography>
                    <input type="text" disabled value={selectedRow.province || ""} style={inputValStyle}/>
                </Stack>
            </Box>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '1fr 1fr 1fr 1fr',
                width: '100%',
                border: '.5px solid black',
            }}>
                <Stack direction='row' gap={1} sx={{
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1
                }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>NORTH: NE: ALN</Typography>
                    <input type="text" disabled value={`${selectedRow.north || ""} ${selectedRow.northeast || ""}`} style={inputValStyle}/>
                </Stack>
                <Stack direction='column' sx={{
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                gridRow: 'span 4',
                alignItems: 'center'
                }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'start'}}>Land Sketch:</Typography>
                </Stack>
                <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1
                }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>EAST: SE: ALN</Typography>
                    <input type="text" disabled value={`${selectedRow.east || ""} ${selectedRow.southeast || ""}`} style={inputValStyle}/>
                </Stack>
                <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1
                }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>SOUTH: SW: ALN</Typography>
                    <input type="text" disabled value={`${selectedRow.south || ""} ${selectedRow.southwest || ""}`} style={inputValStyle}/>
                </Stack>
                <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1
                }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>WEST: NW: ALN</Typography>
                    <input type="text" disabled value={`${selectedRow.west || ""} ${selectedRow.northwest || ""}`} style={inputValStyle}/>
                </Stack>
            </Box>
            <Typography variant="body2" sx={{fontWeight: 500, width: '100%', boxSizing: 'border-box', px: 4}}>
                LAND APPRAISAL
            </Typography>
                <PrintableFaasTable
                    TableHead={<LandAppraisalFaasTableHead />}
                    TableBody={
                        <>
                        {selectedRow.landappraisals.map((obj) => (
                        <TableRow >
                            <TableCell align="center" sx={cellStyles}>{obj.classification || ""}</TableCell>
                            <TableCell align="center" sx={cellStyles}>{obj.subclassification || ""}</TableCell>
                            <TableCell align="center" sx={cellStyles}>{obj.area || ""} m²</TableCell>
                            <TableCell align="center" sx={cellStyles}>₱ {obj.unitValue || ""}</TableCell>
                            <TableCell align="center" sx={cellStyles}>₱ {obj.base_market_value || ""}</TableCell>
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
                            <TableCell align="center" sx={cellStyles}>Total</TableCell>
                            <TableCell align="center" sx={cellStyles}>₱ {totalBaseMarketValue || ""}</TableCell>
                        </TableRow>
                        </>
                    }
                />
            <Typography variant="body2" sx={{fontWeight: 500, width: '100%', boxSizing: 'border-box', px: 4}}>
                OTHER IMPROVEMENTS
            </Typography>
                <PrintableFaasTable
                    TableHead={<OtherImprovmentsFaasTableHead />}
                    TableBody={
                        <>
                        {Array.from({ length: 9 }).map((_, index) => (
                        <TableRow key={index}>
                            <TableCell align="center" sx={cellStyles}></TableCell>
                            <TableCell align="center" sx={cellStyles}></TableCell>
                            <TableCell align="center" sx={cellStyles}>
                                <span style={{ visibility: 'hidden' }}>₱</span>
                            </TableCell>
                            <TableCell align="center" sx={cellStyles}>
                                <span style={{ visibility: 'hidden' }}>₱</span>
                            </TableCell>
                        </TableRow>
                        ))}
                        </>
                    }
                />
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

export function LandAppraisalFaasTableHead() {
  const headers = [
    'Classification',
    'Sub-Classification',
    'Area (m²)',
    'Unit Value',
    'Base Market Value',
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

export function OtherImprovmentsFaasTableHead() {
  const headers = [
    'LAND',
    'Total Number',
    'Unit Value',
    'Base Market Value',
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

export default LandFaasFrontPage