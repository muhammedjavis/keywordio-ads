/* eslint-disable react/prop-types */
import { Typography, FormControl, Select, MenuItem } from '@mui/material';

export default function Dropdown({
  showDoughnutChart,
  selectedMetric,
  handleMetricSelect,
}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant='h5' style={{ fontWeight: 'bold' }}>
        Ads Insights
      </Typography>
      {showDoughnutChart && (
        <div>
          <FormControl>
            <Select value={selectedMetric} onChange={handleMetricSelect}>
              <MenuItem value={'Clicks'}>Clicks</MenuItem>
              <MenuItem value={'Cost'}>Cost</MenuItem>
              <MenuItem value={'Conversions'}>Conversions</MenuItem>
              <MenuItem value={'Revenue'}>Revenue</MenuItem>
            </Select>
          </FormControl>
        </div>
      )}
    </div>
  );
}
