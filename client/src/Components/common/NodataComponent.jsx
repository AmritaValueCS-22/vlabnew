import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/lottie/empty.json";

const NodataComponent = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
        flexDirection: "column",
      }}
    >
      <Lottie options={defaultOptions} height={200} width={200} />
      <h5
        style={{
          fontWeight: 600,
          marginLeft: 35,
          fontSize: 15,
          marginTop: 15,
          color: "grey",
        }}
      >
        No Data
      </h5>
    </div>
  );
};

export default NodataComponent;
