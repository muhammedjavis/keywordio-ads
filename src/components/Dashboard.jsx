import { useState } from 'react';
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  FormControlLabel,
} from '@mui/material';

import { red, blue, green, yellow } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import DashboardTable from './Dashboard/DashboardTable';
import Dropdown from './Dashboard/Dropdown';
import DoughnutChartSection from './Dashboard/DoughnutChartSection';

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
  const [showDoughnutChart, setShowDoughnutChart] = useState(true);
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
        <DashboardTable
          sortedData={sortedData}
          handleSorting={handleSorting}
          sorting={sorting}
        />
      </div>
      <div style={{ flex: '1' }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={5}>
                  <Dropdown
                    showDoughnutChart={showDoughnutChart}
                    selectedMetric={selectedMetric}
                    handleMetricSelect={handleMetricSelect}
                  />
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>

        <DoughnutChartSection
          showDoughnutChart={showDoughnutChart}
          sortedData={sortedData}
          campaignColors={campaignColors}
          selectedMetric={selectedMetric}
        />

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
