import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableFooter } from '@mui/material';

export default function PrintableFaasTable(props) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        border: '1px solid black',
        maxWidth: '100%',
        overflow: 'auto',
      }}
    >
      <Table size="small" sx={{ minWidth: 650, borderCollapse: 'collapse' }}>
        <TableHead>
          {props.TableHead}
        </TableHead>
        <TableBody>
          {props.TableBody}
        </TableBody>
        <TableFooter>
          {props.TableFooter}
          </TableFooter>
      </Table>
    </TableContainer>
  );
}

