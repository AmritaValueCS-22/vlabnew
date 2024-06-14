import React from "react";
import { Breadcrumb, Button, Typography } from "antd";
import { HomeOutlined } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBroadState } from "../../redux/reselect/reselector";
import { updateExperimentId } from "../../redux/slices/ExperimentReducer";

const ExperimentPage = () => {
  const { sub } = useParams();
  const dispatch = useDispatch();
  const BroadDetails = useSelector(getBroadState);

  const selectedBroadArea = BroadDetails.find(
    (area) => area.broadAreaId === sub
  );
  console.log(selectedBroadArea);
  const onHandleClick = (data) => {
    const datas = {
      ...data,
      broadId: sub,
    };
    dispatch(updateExperimentId(datas));
  };
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
            title: selectedBroadArea
              ? selectedBroadArea.broadAreaName
              : "Broad Areas",
          },
        ]}
      />

      <Typography
        style={{
          fontSize: 30,
          fontFamily: 'Georgia, "Times New Roman", Times, serif',
          paddingBlock: 20,
          textTransform: "capitalize",
        }}
      >
        {selectedBroadArea ? selectedBroadArea.broadAreaName : ""}
      </Typography>

      <div>
        {selectedBroadArea &&
          selectedBroadArea.labs.map((lab) => (
            <div key={lab.labId}>
              <div style={{ paddingBlock: 8 }}>
                <h6
                  style={{
                    color: "#3F5C10",
                    fontSize: 22,
                  }}
                >
                  {lab.labName}
                </h6>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    color: "#000000",
                    paddingBlock: 8,
                  }}
                >
                  {lab.description}
                </p>
              </div>
              <div>
                {lab.experiments.map((experiment) => (
                  <Button
                    style={{
                      width: "auto",
                      margin: 5,
                      borderRadius: 20,
                      background: "white",
                    }}
                    key={experiment.experimentId}
                    onClick={() =>
                      onHandleClick({
                        labId: lab.labId,
                        expId: experiment.experimentId,
                      })
                    }
                  >
                    <Link
                      to={`/experiment-page/${sub}/${experiment.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      {experiment.experimentName}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ExperimentPage;
