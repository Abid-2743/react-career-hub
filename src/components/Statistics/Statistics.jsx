import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line
} from "recharts";

// Sample data for job statistics
const jobTypeStats = [
  { name: "Remote", value: 3 },
  { name: "Onsite", value: 3 }
];

const companyDistribution = [
  { company: "Google LLC", count: 2 },
  { company: "Netflix", count: 2 },
  { company: "Tesla", count: 2 }
];

const salaryData = [
  { month: "Jan", salary: 120000 },
  { month: "Feb", salary: 125000 },
  { month: "Mar", salary: 130000 },
  { month: "Apr", salary: 135000 },
  { month: "May", salary: 140000 },
  { month: "Jun", salary: 145000 }
];

const COLORS = ["#0088FE", "#FF8042"];

const Statistics = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold text-center mb-10">Job Statistics Dashboard</h2>
      
      {/* Pie Chart: Remote vs Onsite */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-5">Job Type Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={jobTypeStats}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {jobTypeStats.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart: Job Distribution by Company */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-5">Job Distribution by Company</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={companyDistribution}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="company" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart: Salary Range Over Time */}
      <div>
        <h3 className="text-xl font-semibold mb-5">Salary Range Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={salaryData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="salary" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
