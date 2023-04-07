import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["0", "Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Guest",
      data: [200, 400, 200, 300, 200],
      fill: false,
      borderColor: "#E9A0A0",
      tension: 0.4
    },
    {
      label: "User",
      data: [100, 400, 200, 400, 300],
      fill: false,
      borderColor: "#9BDD7C",
      tension: 0.4
    }
  ]
};

const options = {
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          stepSize: 20
        }
        
      }
    ]
  }
};

const LineGraph = () => {
  return (
    <div style={{ height: "250px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraph;
