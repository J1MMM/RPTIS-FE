import {forwardRef} from 'react'
import './building-faas.css'
import { Box, Paper, Stack, Typography } from '@mui/material'
import { useFormContext, useWatch } from 'react-hook-form';
import dayjs from 'dayjs';

const BuildingFaasFrontPage = forwardRef((props, ref) => {
    const {control} = useFormContext()
    const selectedRow =  useWatch({control})
    //role call
    const owner = selectedRow.bldg_ownership.find(entry => entry.role?.toLowerCase() === "owner");
    const admin = selectedRow.bldg_ownership.find(entry => entry.role?.toLowerCase() === "administrator");
  return (
    <Paper elevation={10} ref={ref} sx={{px: 2, py: 10}}>
        <Typography variant="body1" sx={{display: 'flex', justifyContent: 'center', width: '100%', fontWeight: 600, py: 2}}>
            REAL PROPERTY FIELD APPRAISAL & ASSESSMENT SHEET - BUILDING & OTHER STRUCTURE
        </Typography>
        <Stack direction='row' sx={{display: 'flex', justifyContent: 'end', width: '100%', pb: 1.5}}>
            <Typography variant="caption" sx={{display: 'grid', placeItems: 'end'}}>
                TRANSACTION CODE:
            </Typography>
            <input type="text" disabled value={selectedRow?.transaction_code || ""} style={{display: 'grid', placeItems: 'center', width: '20%', border: 0, borderBottom: '1px solid black', backgroundColor: 'white'}}/>
        </Stack>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr',
                gridTemplateRows: '1fr 2fr 2fr',
                width: '100%',
                border: '.5px solid black',
            }}>
                <Stack direction='row' gap={1} sx={{
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1
                }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>ARP No.:</Typography>
                    <input type="text" disabled value={selectedRow?.arp_no || ""} style={inputValStyle}/>
                </Stack>
                <Stack gap={1} direction='row' sx={{
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1
                }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>PIN:</Typography>
                    <input type="text" disabled value={selectedRow?.pin_no || ""} style={inputValStyle}/>
                </Stack>
                <Stack direction='column' sx={{
                    border: '.5px solid black',
                }}>
                    <Stack direction='row' gap={1} sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flex: 1,  
                    px: 1
                    }}>
                        <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>OWNER:</Typography>
                        <input type="text" disabled value={`${owner?.firstname || ""} ${owner?.middlename || ""} ${owner?.lastname || ""}`} style={inputValStyle}/>
                    </Stack>
                    <Stack direction='row' gap={1} sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    width: '100%',
                    px: 1
                    }}>
                        <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Address:</Typography>
                        <input type="text" disabled value={`${owner?.brgy || ""}, ${owner?.city || ""}, ${owner?.province || ""}, ${owner?.regions || ""}`} style={inputValStyle}/>
                    </Stack>
                    <Stack direction='row' gap={1} sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    width: '100%',
                    px: 1
                    }}>
                        <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Tel. No.:</Typography>
                        <input type="text" disabled value={owner?.contact_no || ""} style={inputValStyle}/>
                    </Stack>
                </Stack>
                <Stack direction='row' gap={1} sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    width: '100%',
                    border: '.5px solid black',
                    boxSizing: 'border-box',
                    px: 1
                    }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>TIN NO:</Typography>
                    <input type="text" disabled value={owner?.tin || ""} style={inputValStyle}/>
                </Stack>
                <Stack direction='column' sx={{
                    border: '.5px solid black',
                }}>
                    <Stack direction='row' gap={1} sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flex: 1,  
                    px: 1
                    }}>
                        <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Administrator/Beneficial User:</Typography>
                        <input type="text" disabled value={`${admin?.firstname || ""} ${admin?.middlename || ""} ${admin?.lasename || ""}`} style={inputValStyle}/>
                    </Stack>
                    <Stack direction='row' gap={1} sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    width: '100%',
                    px: 1
                    }}>
                        <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Address:</Typography>
                        <input type="text" disabled value={`${admin?.brgy || ""}, ${admin?.city || ""}, ${admin?.province || ""}, ${admin?.regions || ""}`} style={inputValStyle}/>
                    </Stack>
                    <Stack direction='row' gap={1} sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    width: '100%',
                    px: 1
                    }}>
                        <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Tel. No.:</Typography>
                        <input type="text" disabled value={admin?.contact_no || ""} style={inputValStyle}/>
                    </Stack>
                </Stack>
                <Stack direction='row' gap={1} sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    width: '100%',
                    border: '.5px solid black',
                    boxSizing: 'border-box',
                    px: 1
                    }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>TIN NO:</Typography>
                    <input type="text" disabled value={admin?.tin || ""} style={inputValStyle}/>
                </Stack>
            </Box>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: '1.5fr 1fr',
                width: '100%',
            }}>
                <Stack direction='row' gap={1} sx={{
                width: '100%',
                px: 1
                }}>
                    <Typography variant="body2" sx={{fontWeight: 500, width: '100%', boxSizing: 'border-box', }}>
                        BUILDING LOCATION
                    </Typography>
                </Stack>
                <Stack gap={1} direction='row' sx={{
                width: '100%',
                px: 1
                }}>
                    <Typography variant="body2" sx={{fontWeight: 500, width: '100%', boxSizing: 'border-box', }}>
                        LAND REFERENCE
                    </Typography>
                </Stack>
            </Box>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: '1.5fr 1fr',
                gridTemplateRows: '1fr 2fr 1fr',
                width: '100%',
                border: '.5px solid black',
            }}>
                <Stack direction='column' sx={{
                    border: '.5px solid black',
                }}>
                    <Stack direction='row' gap={1} sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flex: 1,  
                    px: 1
                    }}>
                        <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>No./Street:</Typography>
                        <input type="text" disabled value={selectedRow?.land_reference.street ?? ""} style={inputValStyle}/>
                    </Stack>
                </Stack>
                <Stack direction='row' gap={1} sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    width: '100%',
                    border: '.5px solid black',
                    boxSizing: 'border-box',
                    px: 1
                    }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Owner:</Typography>
                    <input type="text" disabled value={selectedRow?.land_reference.owner ?? ""} style={inputValStyle}/>
                </Stack>
                <Stack direction='row' gap={1} sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    width: '100%',
                    border: '.5px solid black',
                    boxSizing: 'border-box',
                    px: 1,
                    gridRow: 'span 2'
                    }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Barangay/District:</Typography>
                    <input type="text" disabled value={selectedRow?.land_reference.brgy ?? ""} style={inputValStyle}/>
                </Stack>
                <Stack direction='column' sx={{
                    border: '.5px solid black',
                }}>
                    <Stack direction='row' gap={1} sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flex: 1,  
                    px: 1
                    }}>
                        <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>OCT/TCT/CLOA No.:</Typography>
                        <input type="text" disabled value={selectedRow?.land_reference.oct_tct_cloa_no ?? ""} style={{...inputValStyle, width: '25%'}}/>
                        <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Survey No.:</Typography>
                        <input type="text" disabled value={selectedRow?.land_reference.survey_no ?? ""} style={{...inputValStyle, width: '25%', width: '25%'}}/>
                    </Stack>
                    <Stack direction='row' gap={1} sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    width: '100%',
                    px: 1
                    }}>
                        <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Lot No.:</Typography>
                        <input type="text" disabled value={selectedRow?.land_reference.lot_no ?? ""} style={{...inputValStyle, width: '25%', width: '25%'}}/>
                        <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Block No.:</Typography>
                        <input type="text" disabled value={selectedRow?.land_reference.blk_no ?? ""} style={{...inputValStyle, width: '25%', width: '25%'}}/>
                    </Stack>
                </Stack>
                <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                border: '.5px solid black',
                boxSizing: 'border-box',
                width: '100%',
                px: 1
                }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>TD/ARP No.</Typography>
                    <input type="text" disabled value={selectedRow?.land_reference.td ?? ""} style={inputValStyle}/>
                </Stack>
                <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                border: '.5px solid black',
                boxSizing: 'border-box',
                width: '100%',
                px: 1
                }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Province/City:</Typography>
                    <input type="text" disabled value={selectedRow?.land_reference.city ?? ""} style={inputValStyle}/>
                </Stack>
                <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                border: '.5px solid black',
                boxSizing: 'border-box',
                width: '100%',
                px: 1
                }}>
                    <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Area:</Typography>
                    <input type="text" disabled value={selectedRow?.land_reference.area ?? ""} style={inputValStyle}/>
                </Stack>
            </Box>
        <Typography variant="body2" sx={{fontWeight: 500, width: '100%', boxSizing: 'border-box', px: 1 }}>
            GENERAL DESCRIPTION
        </Typography>
        <Box sx={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
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
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Kind of Building:</Typography>
                <input type="text" disabled value={selectedRow?.kindBldg} style={inputValStyle}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Building Age:</Typography>
                <input type="text" disabled value={selectedRow?.buildingAge} style={inputValStyle}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Structural Type:</Typography>
                <input type="text" disabled value={selectedRow?.structural_type.type} style={inputValStyle}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Number of Storeys:</Typography>
                <input type="text" disabled value={selectedRow?.noOfStorey} style={{...inputValStyle, width: '25%'}}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Bldg. Permit No.:</Typography>
                <input type="text" disabled value={selectedRow?.bldg_permit} style={inputValStyle}/>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Date Issued:</Typography>
                <input type="text" disabled value={dayjs(selectedRow.bldg_permit_date_issued_on).format('MM DD YYYY')} style={inputValStyle}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Area of 1st Floor:</Typography>
                <input type="text" disabled value={selectedRow?.floors?.[0]?.area ?? ''} style={{...inputValStyle, width: '25%'}}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Condominium Certificate of Title (CCT):</Typography>
                <input type="text" disabled value={selectedRow?.cct} style={inputValStyle}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Area of 2nd Floor:</Typography>
                <input type="text" disabled value={selectedRow?.floors?.[1]?.area ?? ''} style={{...inputValStyle, width: '25%'}}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Certificate of Completion Issued On:</Typography>
                <input type="text" disabled value={dayjs(selectedRow.coc_issued_on).format('MM DD YYYY')} style={{...inputValStyle, width: '25%'}}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Area of 3rd Floor:</Typography>
                <input type="text" disabled value={selectedRow?.floors?.[2]?.area ?? ''} style={{...inputValStyle, width: '25%'}}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Certificate of Occupancy Issued On:</Typography>
                <input type="text" disabled value={selectedRow?.arp_no} style={{...inputValStyle, width: '25%'}}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Area of 4th Floor:</Typography>
                <input type="text" disabled value={selectedRow?.floors?.[3]?.area ?? ''} style={{...inputValStyle, width: '25%'}}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Date Constructed/Completed:</Typography>
                <input type="text" disabled value={dayjs(selectedRow.dateConstructed).format('MM DD YYYY')} style={{...inputValStyle, width: '25%'}}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                gridRow: 'span 2'
                }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Total Floor Area:</Typography>
                <input type="text" disabled value={selectedRow?.total_floor_areas} style={{...inputValStyle, width: '25%'}}/>
            </Stack>
            <Stack direction='row' gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                border: '.5px solid black',
                boxSizing: 'border-box',
                px: 1,
                }}>
                <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Date Occupied:</Typography>
                <input type="text" disabled value={dayjs(selectedRow.dateOccupied).format('MM DD YYYY')} style={{...inputValStyle, width: '25%'}}/>
            </Stack>
        </Box>
        <Typography variant="body2" sx={{fontWeight: 500, width: '100%', boxSizing: 'border-box', px: 1 }}>
            FLOOR PLAN
        </Typography>
        <Box sx={{
            display: 'flex',
            border: '3px solid black',
            py: 2
        }}>
        <Typography variant="caption" sx={{fontWeight: 600, width: '100%', boxSizing: 'border-box', px: 1, textAlign: 'center'}}>
            Attach the building plan or sketch of the floor plan. A photograph may also be attached if necessary
        </Typography>
        </Box>
        <Typography variant="body2" sx={{fontWeight: 500, width: '100%', boxSizing: 'border-box', px: 1 }}>
            STRUCTURAL MATERIALS (checklist)
        </Typography>
    <div className='tableContainer'>
        <div className='tableTitle colSpan'>ROOF</div>
        <div className='tableTitle'>FLOORING</div>
        <div className='tableTitle'>1st flr.</div>
        <div className='tableTitle'>2nd flr.</div>
        <div className='tableTitle'>3rd flr.</div>
        <div className='tableTitle'>4th flr.</div>
        <div className='tableTitle'>WALLS % PARTITION</div>
        <div className='tableTitle'>1st flr.</div>
        <div className='tableTitle'>2nd flr.</div>
        <div className='tableTitle'>3rd flr.</div>
        <div className='tableTitle'>4th flr.</div>

        <div className='tableBody'>Reinforced Concrete</div>
        <div className='tableBody'></div>
        <div className='tableBody '>Reinforced Concrete (for Upper floors)</div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'>Reinforced Concrete</div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>

        <div className='tableBody'>Tiles</div>
        <div className='tableBody'></div>
        <div className='tableBody '>Plain Cement</div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'>Plain Cement</div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>

        <div className='tableBody'>G.I. Sheet</div>
        <div className='tableBody'></div>
        <div className='tableBody '>Marble</div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'>Wood</div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>

        <div className='tableBody'>Aluminum</div>
        <div className='tableBody'></div>
        <div className='tableBody '>Wood</div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'>CHB</div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>

        <div className='tableBody'>Asbestos</div>
        <div className='tableBody'></div>
        <div className='tableBody '>Tiles</div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'>G.I. Sheet</div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>

        <div className='tableBody'>Long Span</div>
        <div className='tableBody'></div>
        <div className='tableBody '>Other (Specify)</div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'>Build-a-wall</div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>

        <div className='tableBody'>Concrete Desk</div>
        <div className='tableBody'></div>
        <div className='tableBody '></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'>Sawali</div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>

        <div className='tableBody'>Nipa/Anahaw/Cogon</div>
        <div className='tableBody'></div>
        <div className='tableBody '></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'>Bamboo</div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>

        <div className='tableBody'>Others (Specify)</div>
        <div className='tableBody'></div>
        <div className='tableBody '></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'>Others (Specify)</div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
        <div className='tableBody'></div>
    </div>
    </Paper>
);
});

const inputValStyle = {
    flex: 1, 
    border: 0, 
    backgroundColor: 'white'
}

export default BuildingFaasFrontPage