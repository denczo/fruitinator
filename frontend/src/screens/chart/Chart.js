import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const BarChart = (nutritionData) => {
    const data = {
        labels: Object.keys(nutritionData.data),
        datasets: [
            {
                data: Object.values(nutritionData.data),
                backgroundColor: [
                    "#ef476f",
                    "#ffd166",
                    "#06d6a0",
                    "#118ab2",
                    "#073b4c",
                    "#2a71d0"
                ],
                borderColor: "white",
                borderWidth: 5,
                borderRadius: 10,
                strokeColor: "white",
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false, // Disable legend
            },
            datalabels: {
                display: true, // Enable labels
                anchor: 'end',
                align: 'end',
                color: 'black', // Label color
                formatter: (value) => value + 'g',
                padding: {
                    top: -5, // Add padding to the top of the labels
                },
            },
        },
        hover: {
            mode: null, // Disable hover interactions
        },
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false, // Remove gridlines on x-axis
                },
            },
            y: {
                ticks: {
                    display: false, // Disable y-axis labels
                },
                grid: {
                    // display: false, // Remove gridlines on y-axis
                },
                min: 0,
                max: 30,
            },
        },
    };

    return (<div style={{ height: '250px' }}>
        <Bar data={data} options={options} plugins={[ChartDataLabels]} />
    </div>);
};

export default BarChart;