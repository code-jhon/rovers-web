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

export function SectionPressure({weather, name}) {

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
        text: `Pressure - ${name}`,
      },
    },
  };

  const labels = weather?.data?.map(data => data.sol);
  const pressure = weather?.data?.map(data => data.pressure);

  const data = {
    labels,
    datasets: [
      {
        label: 'Pressure (Pa)',
        data: pressure,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return (
    <>
      <Line options={options} data={data} />
    </>
  )
}
