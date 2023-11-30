import { useState } from 'react';
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
  FormControl,
  Select,
  MenuItem,
  IconButton,
  FormControlLabel,
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { PieChart } from '@mui/x-charts/PieChart';
import { red, blue, green, yellow } from '@mui/material/colors';
import Switch from '@mui/material/Switch';

export default function Dashboard() {
  const MATRICES = [
    {
      Campaign: 'Cosmetics',
      Clicks: 712,
      Cost: 4272,
      Conversions: 8,
      Revenue: 16568,
    },
    {
      Campaign: 'Serums',
      Clicks: 3961,
      Cost: 27331,
      Conversions: 115,
      Revenue: 362526,
    },
    {
      Campaign: 'Facewash',
      Clicks: 9462,
      Cost: 76831,
      Conversions: 123,
      Revenue: 266800,
    },
    {
      Campaign: 'Shampoos',
      Clicks: 439,
      Cost: 2151,
      Conversions: 5,
      Revenue: 11029,
    },
  ];
  const campaignColors = {
    Cosmetics: red[500],
    Serums: blue[500],
    Facewash: green[500],
    Shampoos: yellow[500],
  };
  const [showDoughnutChart, setShowDoughnutChart] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState('Clicks');

  const handleMetricSelect = (event) => {
    setSelectedMetric(event.target.value);
  };

  const [sorting, setSorting] = useState({
    column: null,
    order: 'asc',
  });

  const handleSorting = (column) => {
    setSorting((prev) => ({
      column,
      order: prev.column === column && prev.order === 'asc' ? 'desc' : 'asc',
    }));
  };

  const sortedData = sorting.column
    ? [...MATRICES].sort((a, b) => {
        if (sorting.order === 'asc') {
          return a[sorting.column] - b[sorting.column];
        } else {
          return b[sorting.column] - a[sorting.column];
        }
      })
    : MATRICES;

  return (
    <div style={{ display: 'flex', flex: '1' }}>
      <div style={{ flex: 1, marginRight: '20px' }}>
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
              <TableRow>
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
                    {sorting.column === 'Conversions' &&
                    sorting.order === 'asc' ? (
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
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div style={{ flex: '1' }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={5}>
                  <div
                    style={{
                      display: 'flex',
                      flex: '1',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                      Ads Insights
                    </Typography>
                    {showDoughnutChart && (
                      <div>
                        {/* Render the DoughnutChart */}
                        <FormControl>
                          <Select
                            value={selectedMetric}
                            onChange={handleMetricSelect}
                          >
                            <MenuItem value={'Clicks'}>Clicks</MenuItem>
                            <MenuItem value={'Cost'}>Cost</MenuItem>
                            <MenuItem value={'Conversions'}>
                              Conversions
                            </MenuItem>
                            <MenuItem value={'Revenue'}>Revenue</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
        <Paper style={{ padding: '20px', display: 'flex' }}>
          <div style={{ display: 'flex', flex: '1' }}>
            {showDoughnutChart && (
              <div style={{ flex: 1, marginLeft: '20px' }}>
                <div style={{ position: 'relative', height: '300px' }}>
                  <PieChart
                    series={[
                      {
                        data: sortedData.map((row) => ({
                          argument: row.Clicks,
                          value: row[selectedMetric],
                          color: campaignColors[row.Campaign],
                        })),
                        innerRadius: 30,
                        outerRadius: 100,
                        paddingAngle: 5,
                        cornerRadius: 5,
                        startAngle: -90,
                        endAngle: 180,
                        cx: 150,
                        cy: 150,
                      },
                    ]}
                  />
                </div>
              </div>
            )}
            <div style={{ flex: '1', alignItems: 'center', margin: 'auto' }}>
              {showDoughnutChart &&
                sortedData.map((row, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '5px',
                    }}
                  >
                    <div
                      style={{
                        width: '12px',
                        height: '12px',
                        backgroundColor: campaignColors[row.Campaign],
                      }}
                    ></div>
                    <Typography variant='body2' style={{ marginLeft: '5px' }}>
                      {row.Campaign}
                    </Typography>
                  </div>
                ))}
            </div>
          </div>
        </Paper>
        <div style={{ marginLeft: '20px' }}>
          <FormControlLabel
            control={
              <Switch
                checked={showDoughnutChart}
                onChange={() => setShowDoughnutChart(!showDoughnutChart)}
                color='primary'
                inputProps={{ 'aria-label': 'toggle pie chart' }}
              />
            }
            label='Toggle Chart'
          />
        </div>
      </div>
    </div>
  );
}
