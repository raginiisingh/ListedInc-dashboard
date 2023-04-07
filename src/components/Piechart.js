import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "chartjs-plugin-datalabels";

const data = {
  labels: ["Category 1", "Category 2", "Category 3"],
  datasets: [
    {
      data: [300, 200, 100],
      backgroundColor: ["red", "green", "blue"],
      hoverBackgroundColor: ["red", "green", "blue"]
    }
  ]
};

const options = {
  maintainAspectRatio: false,
  responsive: false,
  width: 120,
  height: 120,
  plugins: {
    datalabels: {
        display: false,
    }
    
  },
  tooltips: {
    enabled: false
  },
  hover: { mode: null }
};

const Piechart = () => {
  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default Piechart;
