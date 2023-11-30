/* eslint-disable react/prop-types */

import { Paper, Typography } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

export default function DoughnutChartSection({
  showDoughnutChart,
  sortedData,
  campaignColors,
  selectedMetric,
}) {
  return (
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
  );
}
