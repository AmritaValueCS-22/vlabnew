import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function RevenueSources() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy existing chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Student', 'Subject Matter Expert', 'Nodal Instructor'],
        datasets: [{
          label: 'User Role Distribution',
          data: [300, 200, 100],
          backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
        }],
      },
      options: {
        maintainAspectRatio: false, // Allow the chart to not maintain aspect ratio
        responsive: true, // Allow the chart to be responsive
      },
    });

    // Clean up function to destroy the chart instance when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="col-sm-4 col-lg-4 mr-2">
      <div className="card shadow mb-4 " style={{ width: '400px', height: '400px' }}>
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">User Role Distribution</h6>
          <div className="dropdown no-arrow">
            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
              aria-labelledby="dropdownMenuLink">
              <div className="dropdown-header">Dropdown Header:</div>
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="chart-pie" style={{ maxHeight: '200px', maxWidth: '100%', margin: '0 auto' }}>
            <canvas ref={chartRef}></canvas>
          </div>
          <div className="mt-2 text-center small">
            <span className="mr-2">
              <i className="fas fa-circle text-primary"></i>
            </span>
            <span className="mr-2">
              <i className="fas fa-circle text-success"></i> 
            </span>
            <span className="mr-2">
              <i className="fas fa-circle text-info"></i> 
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RevenueSources;
