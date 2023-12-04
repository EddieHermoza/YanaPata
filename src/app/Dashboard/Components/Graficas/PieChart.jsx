"use client"
import { Pie } from 'react-chartjs-2';

// Datos de ejemplo para el gráfico de tipo pie
const data = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
  datasets: [
    {
      label: 'Ventas por mes',
      data: [300, 50, 100, 60, 200],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#FF8A80',
        '#8BC34A'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#FF8A80',
        '#8BC34A'
      ]
    }
  ]
};

function PieChart() {
  return (
    <div className="w-[800px] h-[600px]">
      <Pie data={data} />
    </div>
  );
}

export default PieChart;