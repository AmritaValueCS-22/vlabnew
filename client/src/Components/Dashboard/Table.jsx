import React from 'react';

function ProjectCard() {
  return (
    <div className="">
      {/* Project Card Example */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Lab Progress</h6>
        </div>
        <div className="card-body">
          <h4 className="small font-weight-bold">	Biotechnology and Biomedical Engineering <span className="float-right">20%</span></h4>
          <div className="progress mb-4">
            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '20%' }}
              aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h4 className="small font-weight-bold">	Chemical Sciences <span className="float-right">40%</span></h4>
          <div className="progress mb-4">
            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '40%' }}
              aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h4 className="small font-weight-bold">	Physical Sciences <span className="float-right">60%</span></h4>
          <div className="progress mb-4">
            <div className="progress-bar" role="progressbar" style={{ width: '60%' }}
              aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h4 className="small font-weight-bold">	Computer Science <span className="float-right">80%</span></h4>
          <div className="progress mb-4">
            <div className="progress-bar bg-info" role="progressbar" style={{ width: '80%' }}
              aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h4 className="small font-weight-bold">Mechanical Engineering <span className="float-right">50%</span></h4>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" style={{ width: '50%' }}
              aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
