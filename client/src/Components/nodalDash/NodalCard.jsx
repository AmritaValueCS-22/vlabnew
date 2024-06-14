import React, { useState } from 'react';
import { Paper, Tabs, Tab } from '@mui/material';
import NodalTables from './NodalTable';
import RevenueSources from '../Dashboard/Pie-chart';
import NodalChart from './NodalChart';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
}

export default function MyTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="chart analysis" id="tab-0" />
        <Tab label="Table" id="tab-1" />
       
      </Tabs>
      <TabPanel value={value} index={0}>
      <NodalChart/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <NodalTables/>
      </TabPanel>
      
    </Paper>
  );
}
