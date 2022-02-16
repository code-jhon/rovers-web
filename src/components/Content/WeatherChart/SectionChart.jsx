import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

export function SectionChart({weather, name}) {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Air Temperature - ${name}`,
      },
    },
    scales: {
      yAxes: [{
      ticks: { min: -100, max: 100 },
      }], 
    },
  };

  const labels = weather?.data?.map(data => data.sol);
  const airTempMax = weather?.data?.map(data => data.airTemperature.max);
  const airTempMin = weather?.data?.map(data => data.airTemperature.min);

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: airTempMax,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: airTempMin,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };


  return weather?.data.length > 0 && (
    <>
    <Line options={options} data={data} />
    </>
  )
}
