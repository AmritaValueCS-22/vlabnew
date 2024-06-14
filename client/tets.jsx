import React from "react";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getBroadState } from '../../redux/reselect/reselector';

const ExperimentPage = () => {
  const { sub } = useParams(); 

  const BroadDetails = useSelector(getBroadState); 


  const selectedBroadArea = BroadDetails.find(area => area.broadAreaId === sub);

  return (
    <div
      style={{
        height: "auto",
        minHeight: 700,
        marginTop: "90px",
        width: "69%",
        marginInline: "auto",
      }}
    >
      <Breadcrumb
        items={[
          {
            title: <HomeOutlined style={{ fontSize: 18, color: "#3F5C10" }} />,
            href: "/",
          },
          {
            title: selectedBroadArea ? selectedBroadArea.broadAreaName : "Broad Areas",
          },
        ]}
      />
     
      {selectedBroadArea && (
        <div>
          <h2>{selectedBroadArea.broadAreaName}</h2>
          <h3>Labs:</h3>
          <ul>
            {selectedBroadArea.labs.map((lab) => (
              <li key={lab.labId}>
                <strong>{lab.labName}</strong>
                <p>Description: {lab.description}</p>
               
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExperimentPage;
