import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function WaitingLists() {
  const navigate = useNavigate()
  const data = useSelector(state => state.waitingList)
  
  return (
    <div className='container mt-5 pt-5'>
        <div className='d-flex justify-content-end mb-3'>
            <button className='btn btn-primary text-white fw-bold mt-4 px-3 me-3' onClick={() => navigate('/')}>Add New List</button>
        </div>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell align="right">Selection</StyledTableCell>
                <StyledTableCell align="right">Investments Opportunities</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {data.waitingList.map((row) => (
                <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                    {row.email}
                </StyledTableCell>
                <StyledTableCell align="right">{row.selection.income}, {row.selection.goal}, {row.selection.experience}</StyledTableCell>
                <StyledTableCell align="right">
                    <ul className="list-group list-group-flush">
                        {row.selectedInvestments.map(item => (
                            <li className="list-group-item bg-transparent" key={item.id}>{item.name}</li>
                        ))} 
                    </ul>
                </StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
}