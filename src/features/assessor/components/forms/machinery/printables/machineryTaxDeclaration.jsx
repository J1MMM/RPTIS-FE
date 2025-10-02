import React, { forwardRef } from "react";
// import "./style.scss";
import logo1 from "../../../../../../assets/images/seal.png";
import logo2 from "../../../../../../assets/images/trylogo.png";
import {
  Box,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { BorderBottom } from "@mui/icons-material";
import { PrintableFaasTable } from "../../../../../../components/shared";
import { useFormContext, useWatch } from "react-hook-form";
import dayjs from "dayjs";
// import { Height } from "@mui/icons-material";

// NUMBER TO WORDS
function numberToWords(num) {
  const a = [
    "",
    "ONE",
    "TWO",
    "THREE",
    "FOUR",
    "FIVE",
    "SIX",
    "SEVEN",
    "EIGHT",
    "NINE",
    "TEM",
    "ELEVEN",
    "TWELVE",
    "THIRTEEN",
    "FOURTEEN",
    "FIFTEEN",
    "SIXTEEN",
    "SEVENTEEN",
    "EIGHTEEN",
    "NINETEEN",
  ];
  const b = [
    "",
    "",
    "TWENTY",
    "THIRTY",
    "FORTY",
    "FIFTY",
    "SIXTY",
    "SEVENTY",
    "EIGHTY",
    "NINETY",
  ];
  const g = ["", "THOUSAND", "MILLION", "BILLION", "TRILLION"];

  if (typeof num !== "number" || isNaN(num)) return "Not a number";
  if (num === 0) return "ZERO";

  const [integerPart, decimalPart] = num.toString().split(".");

  function convertIntegerToWords(n) {
    if (n === 0) return "";
    let result = "";
    let i = 0;
    while (n > 0) {
      let chunk = n % 1000;
      if (chunk) {
        let chunkInWords = "";
        if (chunk > 99) {
          chunkInWords += a[Math.floor(chunk / 100)] + " HUNDRED ";
          chunk %= 100;
        }
        if (chunk > 19) {
          chunkInWords += b[Math.floor(chunk / 10)] + " " + a[chunk % 10] + " ";
        } else {
          chunkInWords += a[chunk] + " ";
        }
        result = chunkInWords + g[i] + " " + result;
      }
      n = Math.floor(n / 1000);
      i++;
    }
    return result.trim();
  }

  let words = convertIntegerToWords(parseInt(integerPart));

  if (decimalPart) {
    words += " point";
    for (const digit of decimalPart) {
      words += " " + a[parseInt(digit)];
    }
  }

  return words.trim();
}

export const MachineryTaxDeclaration = forwardRef((props, ref) => {
    const {control} = useFormContext()
    const selectedRow = useWatch({control})
    //role call
    const owner = selectedRow.machine_ownership.find(entry => entry.role?.toLowerCase() === "owner");
    const admin = selectedRow.machine_ownership.find(entry => entry.role?.toLowerCase() === "administrator");

  return (
    <Paper 
      ref={ref} className="paper"
      sx={{
        px: 5, 
        pt: 5,
        pb: 1,
        '@media print': {
          boxShadow: 'none',
          backgroundColor: 'transparent',
          border: 'none',
        },
      }}>
      <Box 
        sx={{
          width: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          px: 3, 
          pb: 3
        }}>
        <img className="logo logo-1" src={logo1} alt="logo1" />
        <Typography fontWeight={800}>TAX DECLARATION OF REAL PROPERTY</Typography>
        <img className="logo logo-2" src={logo2} alt="logo1" />
      </Box>

      <Stack direction={'row'} gap={1} sx={{width: '100%', pb: 1}}>
        <Stack direction={'row'} gap={1} sx={{flex: 1}}>
          <Typography variant="caption">T.D. No. :</Typography>
          <input type="text" disabled value={selectedRow?.arp_no || ""} style={inputValStyle}/>
        </Stack>
        <Stack direction={'row'} gap={1} sx={{flex: 1}}>
          <Typography variant="caption">Property Identification No. :</Typography>
          <input type="text" disabled value={selectedRow?.pin_no || ""} style={inputValStyle}/>
        </Stack>
      </Stack>

      <Stack direction={'row'} gap={1} sx={{width: '100%'}}>
        <Stack direction={'row'} gap={1} sx={{flex: 1.5}}>
          <Typography variant="caption">Owner/s:</Typography>
          <input 
            type="text" 
            disabled 
            value={`${owner?.firstname || ""} ${owner?.middlename || ""} ${owner?.lastname || ""} ${owner?.name || ""}`}
            style={inputValStyle}
          />
        </Stack>
        <Stack direction={'row'} gap={1} sx={{flex: 1}}>
          <Typography variant="caption">TIN No. :</Typography>
          <input type="text" disabled value={owner?.tin || ""} style={inputValStyle}/>
        </Stack>
      </Stack>
      <Stack direction={'row'} gap={1} sx={{width: '100%', pb: 1}}>
        <Stack direction={'row'} gap={1} sx={{flex: 1.5}}>
          <Typography variant="caption">Address:</Typography>
          <input 
           type="text"
           disabled 
           value={`${owner?.brgy || ""} ${owner?.city || ""}, ${owner?.province || ""}`}
           style={inputValStyle}/>
        </Stack>
        <Stack direction={'row'} gap={1} sx={{flex: 1}}>
          <Typography variant="caption">Telephone No. :</Typography>
          <input type="text" disabled value={owner?.contact_no || ""} style={inputValStyle}/>
        </Stack>
      </Stack>

      <Stack direction={'row'} gap={1} sx={{width: '100%'}}>
        <Stack direction={'row'} gap={1} sx={{flex: 1.5}}>
          <Typography variant="caption">Administrator/Beneficial User:</Typography>
          <input 
            type="text" 
            disabled 
            value={`${admin?.firstname || ""} ${admin?.middlename || ""} ${admin?.lastname || ""} ${admin?.name || ""}`} 
            style={inputValStyle}
          />
        </Stack>
        <Stack direction={'row'} gap={1} sx={{flex: 1}}>
          <Typography variant="caption">TIN No. :</Typography>
          <input type="text" disabled value={admin?.tin || ""} style={inputValStyle}/>
        </Stack>
      </Stack>
      
      <Stack direction={'row'} gap={1} sx={{width: '100%', pb: 1}}>
        <Stack direction={'row'} gap={1} sx={{flex: 1.5}}>
          <Typography variant="caption">Address:</Typography>
          <input type="text" disabled 
          value={`${admin?.brgy || ""} ${admin?.city || ""}, ${admin?.province || ""}`} 
          style={inputValStyle}/>
        </Stack>
        <Stack direction={'row'} gap={1} sx={{flex: 1}}>
          <Typography variant="caption">Telephone No. :</Typography>
          <input type="text" disabled value={admin?.contact_no || ""} style={inputValStyle}/>
        </Stack>
      </Stack>
      
      <Box 
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1.2fr 2fr 2fr 2fr',
          pb: 1
        }}
      >
        <Typography variant="caption">Location of Property:</Typography>
          <input type="text" disabled value={selectedRow?.street || ""} style={inputValStyle}/>
          <input type="text" disabled value={selectedRow?.brgy || ""} style={inputValStyle}/>
          <input type="text" disabled value={`${selectedRow?.city || ""}, ${selectedRow?.province || ""}`} style={inputValStyle}/>
        <Box/>
        <Typography variant="caption" sx={{textAlign: 'center'}}>Number and Street</Typography>
        <Typography variant="caption" sx={{textAlign: 'center'}}>Barangay/District</Typography>
        <Typography variant="caption" sx={{textAlign: 'center'}}>Municipal & Province/City</Typography>
      </Box>

      <Stack direction={'row'} gap={1} sx={{width: '100%'}}>
        <Stack direction={'row'} gap={1} sx={{flex: 1.5}}>
          <Typography variant="caption">OCT/TCT/CLOA No. :</Typography>
          <input type="text" disabled value={''} style={inputValStyle}/>
        </Stack>
        <Stack direction={'row'} gap={1} sx={{flex: 1}}>
          <Typography variant="caption">Survey No. :</Typography>
          <input type="text" disabled value={''} style={inputValStyle}/>
        </Stack>
      </Stack>
      <Stack direction={'row'} gap={1} sx={{width: '100%'}}>
        <Stack direction={'row'} gap={1} sx={{flex: 1.5}}>
          <Typography variant="caption">CCT:</Typography>
          <input type="text" disabled value={''} style={inputValStyle}/>
        </Stack>
        <Stack direction={'row'} gap={1} sx={{flex: 1}}>
          <Typography variant="caption">Lot No.:</Typography>
          <input type="text" disabled value={''} style={inputValStyle}/>
        </Stack>
      </Stack>
      <Stack direction={'row'} gap={1} sx={{width: '100%', pb: 1}}>
        <Stack direction={'row'} gap={1} sx={{flex: 1.5}}>
          <Typography variant="caption">Date:</Typography>
          <input type="text" disabled value={""} style={inputValStyle}/>
        </Stack>
        <Stack direction={'row'} gap={1} sx={{flex: 1}}>
          <Typography variant="caption">Block No.:</Typography>
          <input type="text" disabled value={""} style={inputValStyle}/>
        </Stack>
      </Stack>

      <Typography variant="caption">Boundaries:</Typography>
        <Stack direction={'row'} gap={1} sx={{width: '100%', pb: 1}}>
          <Stack direction={'row'} gap={1} sx={{flex: 1}}>
            <Typography variant="caption">North: Ne:</Typography>
            <input type="text" disabled value={''} style={inputValStyle}/>
          </Stack>
          <Stack direction={'row'} gap={1} sx={{flex: 1}}>
            <Typography variant="caption">South: Sw:</Typography>
            <input type="text" disabled value={''} style={inputValStyle}/>
          </Stack>
        </Stack>
        <Stack direction={'row'} gap={1} sx={{width: '100%', pb: 1}}>
          <Stack direction={'row'} gap={1} sx={{flex: 1}}>
            <Typography variant="caption">East: Se:</Typography>
            <input type="text" disabled value={''} style={inputValStyle}/>
          </Stack>
          <Stack direction={'row'} gap={1} sx={{flex: 1}}>
            <Typography variant="caption">West: Nw:</Typography>
            <input type="text" disabled value={''} style={inputValStyle}/>
          </Stack>
        </Stack>

      <Typography variant="caption" fontWeight={'bold'}>KIND OF PROPERTY ASSESSED:</Typography>
      <Stack direction={'row'} sx={{display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%'}}>
        <Stack direction={'row'} gap={2}>
          <input readOnly disabled type="checkbox"/>
          <Typography variant="caption" fontWeight={'bold'}>LAND</Typography>
        </Stack>
        <Stack direction={'row'} gap={2}>
          <input readOnly checked type="checkbox"/>
          <Typography variant="caption" fontWeight={'bold'}>MACHINERY</Typography>
        </Stack>
      </Stack>

      <Stack direction={'row'} sx={{display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%'}}>
        <Box/>
        <Stack direction={'row'} gap={2} sx={{pl: 5}}>
          <Typography variant="caption">Brief Description</Typography>
          <input type="text" disabled value={''} style={inputValStyle}/>
        </Stack>
      </Stack>

      <Stack direction={'row'} sx={{display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%'}}>
        <Stack direction={'row'} gap={2}>
          <input readOnly disabled type="checkbox"/>
          <Typography variant="caption" fontWeight={'bold'}>BUILDING</Typography>
        </Stack>
        <Stack direction={'row'} gap={2}>
          <input readOnly disabled type="checkbox"/>
          <Typography variant="caption" fontWeight={'bold'}>OTHER:</Typography>
        </Stack>
      </Stack>

      <Stack direction={'row'} sx={{display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%'}}>
        <Stack direction={'row'} gap={2} sx={{pl: 5}}>
          <Typography variant="caption">No. of Storeys:</Typography>
          <input type="text" disabled value={''} style={inputValStyle}/>
        </Stack>
        <Stack direction={'row'} gap={2} sx={{pl: 5}}>
          <Typography variant="caption">Specify:</Typography>
          <input type="text" disabled value={''} style={inputValStyle}/>
        </Stack>
      </Stack>

      <Stack direction={'row'} sx={{display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%', pb: 1}}>
        <Stack direction={'row'} gap={2} sx={{pl: 5}}>
          <Typography variant="caption">Brief Description:</Typography>
          <input type="text" disabled value={''} style={inputValStyle}/>
        </Stack>
        <Box/>
      </Stack>

      <PrintableFaasTable
        TableHead={<PropertyAssessmentTaxdecTableHead />}
        TableBody={
            <>
            <TableRow>
              <TableCell align="center" sx={cellStyles}>{selectedRow?.property_assessment_machine.kind || ""}</TableCell>
              <TableCell align="center" sx={cellStyles}>{selectedRow?.property_assessment_machine.area || ""}</TableCell>
              <TableCell align="center" sx={cellStyles}>₱ {selectedRow?.property_assessment_machine.market_value || ""}</TableCell>
              <TableCell align="center" sx={cellStyles}>{selectedRow?.property_assessment_machine.actual_use || ""}</TableCell>
              <TableCell align="center" sx={cellStyles}>{selectedRow?.property_assessment_machine.assessment_level || ""} %</TableCell>
              <TableCell align="center" sx={cellStyles}>₱ {selectedRow?.property_assessment_machine.assessed_value || ""}</TableCell>
            </TableRow>
            </>
        }
        TableFooter={
            <>
            <TableRow>
              <TableCell align="center" sx={{...cellStyles, border: 0}}>Total</TableCell>
              <TableCell align="center" sx={cellStyles}></TableCell>
              <TableCell align="center" sx={cellStyles}>₱ {selectedRow?.property_assessment_machine.market_value || ""}</TableCell>
              <TableCell align="center" sx={cellStyles}></TableCell>
              <TableCell align="center" sx={cellStyles}></TableCell>
              <TableCell align="center" sx={cellStyles}>₱ {selectedRow?.property_assessment_machine.assessed_value || ""}</TableCell>
            </TableRow>
            </>
          }
      />

      <Box sx={{
        display: 'grid', 
        gridTemplateColumns: '1.2fr 5fr',
        py: 1
      }}>
        <Typography variant="caption">Total Assessed Value:</Typography>
        <input 
          type="text" 
          disabled 
          value={
            selectedRow?.property_assessment_machine?.assessed_value 
            ? `${numberToWords(Number(selectedRow.property_assessment_machine.assessed_value)) } only`
            : ""
          } 
          style={inputValStyle}
        />
        <Box/>
        <Typography variant="caption" sx={{textAlign: 'center'}}>(Amount in Words)</Typography>
      </Box>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 3fr 2fr',
        pb: 2
      }}>
        <Stack direction={'row'} gap={1} sx={{alignItems: 'center'}}>
          <Typography variant="caption" fontWeight={'bold'}>Taxable</Typography>
          <input readOnly checked={selectedRow.taxable === true} type="checkbox"/>
        </Stack>
        <Stack direction={'row'} gap={1} sx={{alignItems: 'center'}}>
          <Typography variant="caption" fontWeight={'bold'}>Exempt</Typography>
          <input readOnly checked={selectedRow.taxable === false} type="checkbox"/>
        </Stack>
        <Typography variant="caption" sx={{display: 'grid', placeItems: 'center'}}>Effectively of Assessment/Reassessment:</Typography>
        <Stack direction={'row'} gap={1} sx={{width: '20%'}}>
          <Stack direction={'column'}>
            <input type="text" disabled value={selectedRow.quarter} style={{border: 0, borderBottom: '1px solid black', backgroundColor: 'white', textAlign: 'center', width: 100}}/>
            <Typography variant="caption" fontWeight={'bold'} sx={{textAlign: 'center'}}>QTR.</Typography>
          </Stack>
          <Stack direction={'column'}>
            <input type="text" disabled value={dayjs(selectedRow?.effectivity_assessment).format('YYYY')} style={{border: 0, borderBottom: '1px solid black', backgroundColor: 'white', textAlign: 'center', width: 100}}/>
            <Typography variant="caption" fontWeight={'bold'} sx={{textAlign: 'center'}}>Yr.</Typography>
          </Stack>
        </Stack>
      </Box>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 2fr 1fr',
        pb: 1
      }}>
        <Typography variant="caption" fontWeight={'bold'} sx={{textAlign: 'center'}}>APPROVED BY:</Typography>
        <Stack direction={'column'}>
        <Typography variant="caption" fontWeight={'bold'} sx={{textAlign: 'center'}}>EVA F. PUNTO</Typography>
        <Typography variant="caption" sx={{textAlign: 'center'}}>City Assessor</Typography>
        </Stack>
        <Stack direction={'column'}>
        <Typography variant="caption" fontWeight={'bold'} sx={{textAlign: 'center'}}>BLESILDA B. ALINEA</Typography>
        <Typography variant="caption" sx={{textAlign: 'center'}}>Tax Mapper IV</Typography>
        </Stack>
        <Stack direction={'row'} gap={1} sx={{display: 'flex', alignItems: 'center'}}>
        <Typography variant="caption">Date:</Typography>
        <input type="text" disabled value={'08/25/2005'} style={inputValStyle}/>
        </Stack>
      </Box>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: '3fr 2fr 2fr',
        width: '100%',
        pb: 1
      }}>
        <Stack direction={'row'} gap={1} sx={{display: 'flex', alignItems: 'center'}}>
          <Typography variant="caption">This declaration cancels T.D. No:</Typography>
          <input type="text" disabled value={selectedRow?.previous_data.prevTD || ""} style={{...inputValStyle, width: 10}}/>
        </Stack>
        <Stack direction={'row'} gap={1} sx={{display: 'flex', alignItems: 'center'}}>
          <Typography variant="caption">Owner:</Typography>
          <input type="text" disabled value={selectedRow?.previous_data.owner || ""} style={{...inputValStyle, width: 10}}/>
        </Stack>
        <Stack direction={'row'} gap={1} sx={{display: 'flex', alignItems: 'center'}}>
          <Typography variant="caption">Previous A.V. Php:</Typography>
          <input type="text" disabled value={selectedRow?.previous_data.value || ""} style={{...inputValStyle, width: 10}}/>
        </Stack>
        <Stack direction={'row'} gap={1} sx={{display: 'flex', alignItems: 'center'}}>
          <Typography variant="caption">Property Index Number:</Typography>
          <input type="text" disabled value={selectedRow?.previous_data.prevPin || ""} style={{...inputValStyle, width: 10}}/>
        </Stack>
        <Box/>
        <Box/>
      </Box>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: '3fr 1fr'
      }}>
        <Stack direction={'column'}>
          <Typography variant="caption">/mal</Typography>
          <Typography variant="caption" fontWeight={'bold'}>MEMORANDA:</Typography>
          <textarea
            disabled
            value={selectedRow?.memoranda || ""}
            style={inputMemoStyle}
            rows={4} // or auto-calculate rows dynamically
          />
        </Stack>

        <Stack direction={'column'} gap={2}>
          <Stack direction={'column'} sx={{display: 'flex', alignItems: 'center'}}>
            <Typography variant="caption" fontWeight={'bold'}>CERTIFIED TRUE COPY</Typography>
            <Typography variant="caption" fontWeight={'bold'}>FROM THE ORIGINAL PRF</Typography>
          </Stack>
          <Stack direction={'column'} sx={{display: 'flex', alignItems: 'center'}}>
            <Typography variant="caption" fontWeight={'bold'}>CERTIFIED TRUE COPY</Typography>
            <Typography variant="caption" fontWeight={'bold'}>FROM THE ORIGINAL PRF</Typography>
          </Stack>
        </Stack>
      </Box>

      <Stack>
        <Typography variant="caption" fontSize={10} sx={{lineHeight: 1, pb: 1}}>
          Notes: This declaration is for real property taxation purposes only and the
          valuation indicates herein are based on the schedule of unit market
          values prepared for the purpose and duly enacted into an Ordinance by
          the Sangguniang Panlungsod ng San Pablo under Ordinance No. 2013-60
          dated June 25, 2013. it does not and cannot by itself alone confer any
          ownership or legal to the property.
        </Typography>
      </Stack>

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
  display: 'grid', 
  placeItems: 'center', 
  flex: 1, 
  border: 0, 
  borderBottom: '1px solid black', 
  backgroundColor: 'white',
  fontWeight: 'bold'
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

const cellStyles = {
  fontSize: 12,
  padding: 0,
  border: '1px solid black',
};

export function PropertyAssessmentTaxdecTableHead() {
  const headers = [
    'Classification',
    'Area',
    'Market Value',
    'Actual Use',
    'Level',
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
