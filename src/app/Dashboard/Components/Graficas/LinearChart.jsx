"use client";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const salesData = [
  { month: "Enero", sales: 100 },
  { month: "Febrero", sales: 150 },
  { month: "Marzo", sales: 200 },
  { month: "Abril", sales: 120 },
  { month: "Mayo", sales: 180 },
  { month: "Junio", sales: 250 },
  { month: "Julio", sales: 140 },
  { month: "Agosto", sales: 170 },
  { month: "Setiembre", sales: 200 },
  { month: "Octubre", sales: 300 },
  { month: "Noviembre", sales: 220 },
  { month: "Diciembre", sales: 180 },
];

function LineChart() {
  const data = {
    labels: salesData.map((data) => data.month),
    datasets: [
      {
        label: "Revenue",
        data: salesData.map((data) => data.sales),
        borderColor: "rgb(0, 220, 220)", // Cambia el color del borde aquí
        borderWidth: 3,
        pointBorderColor: "rgb(0, 220, 220)", // Cambia el color del punto aquí
        pointBorderWidth: 3,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(0, 220, 220, 0.8)"); // Color inicial
          gradient.addColorStop(1, "rgba(0, 220, 220, 0)"); // Color final
          return gradient;
        },
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
    },
    responsive: true,
    scales: {
      y: {
        ticks: {
          font: {
            size: 14,
            weight: "bold",
          },
        },
        title: {
          display: true,
          text: "Ventas",
          padding: {
            bottom: 10,
          },
          font: {
            size: 30,
            style: "italic",
            family: "Arial",
          },
        },
        min: 50,
      },
      x: {
        ticks: {
          font: {
            size: 17,
            weight: "bold",
          },
        },
        title: {
          display: true,
          text: "Mes",
          padding: {
            top: 10,
          },
          font: {
            size: 30,
            style: "italic",
            family: "Arial",
          },
        },
      },
    },
  };

  return (
      <div className="w-[800px] h-[600px]">
        <Line data={data} options={options}></Line>
      </div>
  );
}

export default LineChart;