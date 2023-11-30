/* eslint-disable react/prop-types */

import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
  IconButton,
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function DashboardTable({ sortedData, handleSorting, sorting }) {
  const totalClicks = sortedData.reduce((acc, curr) => acc + curr.Clicks, 0);
  const totalCost = sortedData.reduce((acc, curr) => acc + curr.Cost, 0);
  const totalConversions = sortedData.reduce(
    (acc, curr) => acc + curr.Conversions,
    0
  );
  const totalRevenue = sortedData.reduce((acc, curr) => acc + curr.Revenue, 0);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={5}>
              <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                Ads Insights
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>
            <TableCell align='center'>
              <Typography variant='p' style={{ fontWeight: 'bold' }}>
                Campaigns
              </Typography>
            </TableCell>
            <TableCell align='center'>
              <Typography variant='p' style={{ fontWeight: 'bold' }}>
                Clicks
              </Typography>
              <IconButton onClick={() => handleSorting('Clicks')}>
                {sorting.column === 'Clicks' && sorting.order === 'asc' ? (
                  <ArrowUpwardIcon />
                ) : (
                  <ArrowDownwardIcon />
                )}
              </IconButton>
            </TableCell>
            <TableCell align='center'>
              <Typography variant='p' style={{ fontWeight: 'bold' }}>
                Cost
              </Typography>
              <IconButton onClick={() => handleSorting('Cost')}>
                {sorting.column === 'Cost' && sorting.order === 'asc' ? (
                  <ArrowUpwardIcon />
                ) : (
                  <ArrowDownwardIcon />
                )}
              </IconButton>
            </TableCell>
            <TableCell align='center'>
              <Typography variant='p' style={{ fontWeight: 'bold' }}>
                Conversions
              </Typography>
              <IconButton onClick={() => handleSorting('Conversions')}>
                {sorting.column === 'Conversions' && sorting.order === 'asc' ? (
                  <ArrowUpwardIcon />
                ) : (
                  <ArrowDownwardIcon />
                )}
              </IconButton>
            </TableCell>
            <TableCell align='center'>
              <Typography variant='p' style={{ fontWeight: 'bold' }}>
                Revenue
              </Typography>
              <IconButton onClick={() => handleSorting('Revenue')}>
                {sorting.column === 'Revenue' && sorting.order === 'asc' ? (
                  <ArrowUpwardIcon />
                ) : (
                  <ArrowDownwardIcon />
                )}
              </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((row, index) => (
            <TableRow key={index}>
              <TableCell align='center'>{row.Campaign}</TableCell>
              <TableCell align='center'>{row.Clicks}</TableCell>
              <TableCell align='center'>${row.Cost}</TableCell>
              <TableCell align='center'>{row.Conversions}</TableCell>
              <TableCell align='center'>${row.Revenue}</TableCell>
            </TableRow>
          ))}
          <TableRow style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>
            <TableCell align='center'>Total</TableCell>
            <TableCell align='center'>{totalClicks}</TableCell>
            <TableCell align='center'>${totalCost}</TableCell>
            <TableCell align='center'>{totalConversions}</TableCell>
            <TableCell align='center'>${totalRevenue}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
