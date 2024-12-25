"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
} from "chart.js";
import moment from "moment";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title);

const HorizontalBarChart = () => {
  var a = moment(moment().local());
  const data = {
    labels: ["JavaScript", "Java", "Python", "C"], // ADD sql once its been a couple months
    datasets: [
      {
        label: "Years",
        data: [
          a.diff(moment([2023, 2, 20]), "years", true),
          a.diff(moment([2023, 7, 13]), "years", true),
          a.diff(moment([2023, 11, 18]), "years", true),
          a.diff(moment([2024, 6, 1]), "years", true),
          a.diff(moment([2024, 12, 12]), "years", true),
        ],
        backgroundColor: [
          "#F0DB4F",
          "#5382a1",
          "#646464",
          "#265828",
          "#00008B",
        ],
        barPercentage: 0.5,
        datalabels: {
          color: "white",
        },
        borderColor: "transparent",
      },
    ],
  };

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 3,
        borderRadius: 50,
        borderSkipped: false,
        hoverBorderColor: "white",
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Horizontal Bar Chart",
      },
      hoverValue: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: false,
        },
        ticks: {
          display: false,
          color: "white",
        },
        grid: {
          drawBorder: false,
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: "white",
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default HorizontalBarChart;
