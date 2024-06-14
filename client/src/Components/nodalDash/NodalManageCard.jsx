import React from "react";
import "../../Components/Dashboard/card.css";

const NodalManageCard = ({ item = "" }) => {
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className={`card border-left-${item.color} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                {item.title}
              </div>
            </div>
            <div className="col-auto">
              <i className={`fa-solid ${item.icon} text-${item.color}`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NodalManageCard;
