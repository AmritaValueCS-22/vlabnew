import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js library
import "./Chart.jsx";

function AreaChart() {
  const chartRef = useRef(null); 

  useEffect(() => {
    // Chart.js code
    Chart.defaults.font.family = 'Nunito, -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.font.color = '#858796';

    const ctx = document.getElementById("myAreaChart");

   
    if (chartRef.current) {
      chartRef.current.destroy();
    }

   
    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "performance",
          lineTension: 0.3,
          backgroundColor: "rgba(78, 115, 223, 0.05)",
          borderColor: "rgba(78, 115, 223, 1)",
          pointRadius: 3,
          pointBackgroundColor: "rgba(78, 115, 223, 1)",
          pointBorderColor: "rgba(78, 115, 223, 1)",
          pointHoverRadius: 3,
          pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
          pointHoverBorderColor: "rgba(78, 115, 223, 1)",
          pointHitRadius: 10,
          pointBorderWidth: 2,
          data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
        }],
      },
      options: {
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 10,
            right: 25,
            top: 25,
            bottom: 0
          }
        },
        scales: {
          x: {
            time: {
              unit: 'date'
            },
            grid: {
              display: false,
              drawBorder: false
            },
            ticks: {
              maxTicksLimit: 7
            }
          },
          y: {
            ticks: {
              maxTicksLimit: 8, // Adjusted to display only 5 ticks
              padding: 10,
              callback: function(value, index, values) {
                return '$' + value.toFixed(2); // Updated toFixed to format to 2 decimal places
              }
            },
            grid: {
              color: "rgb(234, 236, 244)",
              zeroLineColor: "rgb(234, 236, 244)",
              drawBorder: false,
              borderDash: [2],
              zeroLineBorderDash: [2]
            }
          }
        },
        legend: {
          display: false
        },
        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          titleMarginBottom: 10,
          titleFontColor: '#6e707e',
          titleFontSize: 14,
          borderColor: '#dddfeb',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          intersect: false,
          mode: 'index',
          caretPadding: 10,
          callbacks: {
            label: function(tooltipItem, chart) {
              var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
              return datasetLabel + ': $' + tooltipItem.yLabel.toFixed(2); // Updated toFixed to format to 2 decimal places
            }
          }
        }
      }
    });
  }, []); 

  return (
    <div className="">
      <div className="card shadow mb-4" >
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">Overall Performance</h6>
          <div className="dropdown no-arrow">
            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
            </a>
            
          </div>
        </div>
        <div className="card-body">
        <div className="chart-area" style={{height: "300px"}}>
            <canvas id="myAreaChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AreaChart;
