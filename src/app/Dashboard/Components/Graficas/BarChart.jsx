"use client"
import {AiOutlineLoading} from "react-icons/ai"
import { Bar } from "react-chartjs-2";
import { getDataBarChart } from "../../action";
import { useEffect,useState } from "react";
import {
  Chart as ChartJS, 
  BarElement, 
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend} 
  from 'chart.js'

  ChartJS.register(BarElement,CategoryScale,LinearScale,Tooltip,Legend)

  function BarChart() {
    const [chartData, setChartData] = useState(null);
  
    useEffect(() => {
      async function fetchChartData() {
        const data = await getDataBarChart();
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
          backgroundColor: "rgba(0, 220, 220,0.5)",
          borderWidth: 2,
          borderColor: "rgba(0, 220, 220,1)",
        },
      ],
    };
  
    const options = {
      plugins: {
        legend: false,
      },
      maintainAspectRatio: false,
      scales: {
        x: {
          ticks: {
            font: {
              size: 14,
              weight: "bold",
            },
          },
        },
        y: {
          display: false,
        },
      },
      layout: {
        padding: {
          top: 10,
        },
      },
    };
  
    return (
      <div className="flex items-center justify-center w-full max-sm:h-96 sm:h-[500px] relative">
        {chartData ? (
          <Bar data={data} options={options} className="w-full h-full"></Bar>
        ) : (
          <p><AiOutlineLoading size={60} className="animate-spin animate-ease-in-out text-verde"/></p>
        )}
      </div>
    );
  }
  
  export default BarChart;