import React from "react";
import { Paper, Box } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function NodalChart() {
  const data = [
    { state: "Andhra Pradesh", active: 15, Inactive: 5 },
    { state: "Assam", active: 10, Inactive: 5 },
    { state: "Bihar", active: 20, Inactive: 5 },
    { state: "Chhattisgarh", active: 25, Inactive: 5 },
    { state: "Gujarat", active: 15, Inactive: 3 },
    { state: "Jharkand", active: 8, Inactive: 2 },
    { state: "Karnataka", active: 22, Inactive: 6 },
    { state: "Kerala", active: 18, Inactive: 4 },
    { state: "Madhya Pradesh", active: 10, Inactive: 2 },
    { state: "Maharashtra", active: 10, Inactive: 2 },
    { state: "Punjab", active: 10, Inactive: 2 },
    { state: "Puducherry", active: 10, Inactive: 2 },
    { state: "Rajasthan", active: 10, Inactive: 2 },
    { state: "Tamil Nadu ", active: 10, Inactive: 2 },
    { state: "Telangana", active: 10, Inactive: 2 },
  ];

  return (
    <Box display="flex" justifyContent="center" mt={2}>
      <Paper>
        <BarChart
          width={800}
          height={350}
          data={data}
          margin={{ top: 30, right: 30, left: 20, bottom: 70 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="state"
            angle={-45}
            textAnchor="end"
            interval={0}
            height={70}
          />
          <YAxis />
          <Tooltip />
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
            wrapperStyle={{ bottom: "30px" }}
          />
          <Bar dataKey="active" stackId="a" fill="#82ca9d" barSize={20} />
          <Bar dataKey="Inactive" stackId="a" fill="#f44336" barSize={20} />
        </BarChart>
      </Paper>
    </Box>
  );
}
