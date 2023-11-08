"use client"
import { useEffect } from 'react';

const GraficaPrueba = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js';
    script.async = true;

    script.onload = () => {
      const ctx = document.getElementById('myChart2').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1,
              backgroundColor: [
                'rgba(255, 0, 0, 0.7)', 
                'rgba(0, 0, 255, 0.7)', 
                'rgba(255, 255, 0, 0.7)', 
                'rgba(0, 128, 0, 0.7)', 
                'rgba(128, 0, 128, 0.7)', 
                'rgba(255, 165, 0, 0.7)',
              ],
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='w-full'>
      <canvas id="myChart2"></canvas>
    </div>
  );
};

export default GraficaPrueba;