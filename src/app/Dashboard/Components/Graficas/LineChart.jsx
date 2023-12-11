"use client";
import {AiOutlineLoading} from "react-icons/ai"
import { Line } from "react-chartjs-2";
import { useEffect,useState } from "react";
import {getDataLineChart} from "../../action";
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



function LineChart() {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
      async function fetchChartData() {
        const data = await getDataLineChart();
        setChartData(data || []); 
      }
      fetchChartData();
    }, []);

    const chartLabels = chartData ? chartData.map((data) => data.month) : [];
    const chartTotals = chartData ? chartData.map((data) => data.total) : [];
  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: "Total",
        data: chartTotals,
        borderColor: "rgb(255, 100, 0)", 
        borderWidth: 3,
        pointBorderColor: "rgb(255, 100, 0)", 
        pointBorderWidth: 3,
        fill: true,
        backgroundColor: "rgba(255, 100, 0,0.3)",
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false, 
      },
      x: {
        ticks: {
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
  };

  return (
    <div className="flex items-center justify-center w-full max-sm:h-96 sm:h-[500px] relative">
        {chartData ? (
          <Line data={data} options={options} className="w-full h-full"></Line>
        ) : (
            <p><AiOutlineLoading size={60} className="animate-spin animate-ease-in-out text-verde"/></p>
        )}
    </div>
  );
}

export default LineChart;