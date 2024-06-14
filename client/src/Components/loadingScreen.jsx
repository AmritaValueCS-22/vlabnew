import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/lottie/loading.json";

const LoadingScreen = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const loading = setTimeout(() => {
      setLoad(false);
    }, 3000);

    return () => {
      clearTimeout(loading);
    };
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    load && (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          flexDirection: "column",
        }}
      >
        <Lottie options={defaultOptions} height={250} width={250} />
        <h5
          style={{
            fontWeight: 600,
            marginLeft: 35,
            fontSize: 15,
            marginTop: 15,
            color: "#091c99",
          }}
        >
          Please wait...
        </h5>
      </div>
    )
  );
};

export default LoadingScreen;
