"use client"
import {AiOutlineLoading} from "react-icons/ai"
import { useEffect,useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { getDataPieChart } from '../../action';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);


const options = {
  plugins: {
    legend: {
      display: true,
      position: 'right',
      labels: {
        font: {
          size: 12 
        }
      }
    },
    tooltip: {
    }
  },
  maintainAspectRatio: false,
};

function PieChart() {
  const [chartData, setChartData] = useState(null);
  
  useEffect(() => {
    async function fetchChartData() {
      const data = await getDataPieChart();
      setChartData(data || []); 
    }
    fetchChartData();
  }, []);

  const chartLabels = chartData ? chartData.map((data) => data.servicio) : [];
  const chartTotals = chartData ? chartData.map((data) => data.cantidad) : [];

  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Solicitado',
        data: chartTotals,
        backgroundColor: [
          '#FF6E40',
          '#FFD740',
          '#FF4081',
          '#536DFE',
          '#18FFFF',
          '#64FFDA',
          '#FFD54F',
          '#69F0AE',
          '#FF80AB',
          '#B388FF'
        ],
        hoverOffset: 5,
      }
    ]
  };

  return (
    <div className="flex items-center justify-center w-full max-sm:h-96 sm:h-[500px] relative">
        {chartData ? (
          <Pie data={data} options={options} className="w-full h-full"></Pie>
        ) : (
          <p><AiOutlineLoading size={60} className="animate-spin animate-ease-in-out text-verde"/></p>
        )}
    </div>
  );
}

export default PieChart;